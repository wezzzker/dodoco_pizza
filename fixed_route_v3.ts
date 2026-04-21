import { prisma } from "@/shared/lib/db"
import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"
import { findOrCreateCart } from "@/shared/lib/find-or-create-cart"
import { CreateCartItemValues } from "@/shared/services/dto/cart-dto"
import { updateCartTotalAmount } from "@/shared/lib/update-cart-total-amount"

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("cartToken")?.value

    if (!token) {
      return NextResponse.json({ totalAmount: 0, items: [] })
    }

    const userCart = await prisma.cart.findFirst({
      where: {
        OR: [
          {
            token,
          },
        ],
      },
      include: {
        cartItems: {
          orderBy: {
            createdAt: "desc",
          },
          include: {
            productItem: {
              include: {
                product: true,
              },
            },
            ingredients: true,
          },
        },
      },
    })

    return NextResponse.json(userCart)
  } catch (error) {
    console.log("[CART_GET] Server error", error)
    return NextResponse.json(
      { message: "Не удалось получить корзину" },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    let token = req.cookies.get("cartToken")?.value
    if (!token) {
      token = crypto.randomUUID()
    }
    const userCart = await findOrCreateCart(token)
    //Проверяем наличие товара в корзине
    const data = (await req.json()) as CreateCartItemValues
    console.log("DATA", data)
    const ing = data.ingredients || []

    // Найти все cartItem с данным productItemId
    const cartItems = await prisma.cartItem.findMany({
      where: {
        cartId: userCart.id,
        productItemId: data.productItemId,
      },
      include: {
        ingredients: true,
      },
    })

    // Найти cartItem с совпадающими ингредиентами
    let matchingCartItem = null
    for (const item of cartItems) {
      // Быстрая проверка по количеству ингредиентов
      if (item.ingredients.length !== ing.length) {
        continue
      }
      const itemIngredientIds = item.ingredients.map((ing) => ing.id).sort()
      const requestedIngredientIds = [...ing].sort()
      if (JSON.stringify(itemIngredientIds) === JSON.stringify(requestedIngredientIds)) {
        matchingCartItem = item
        break
      }
    }

    // Если товар был найден, делаем +1
    if (matchingCartItem) {
      await prisma.cartItem.update({
        where: {
          id: matchingCartItem.id,
        },
        data: {
          quantity: matchingCartItem.quantity + 1,
        },
      })
    } else {
      await prisma.cartItem.create({
        data: {
          cartId: userCart.id,
          productItemId: data.productItemId,
          quantity: 1,
          ingredients: { connect: ing.map((id) => ({ id })) },
        },
      })
      console.log("Товар создан")
    }
    const updatedUserCart = await updateCartTotalAmount(token)
    const response = NextResponse.json(updatedUserCart)
    response.cookies.set("cartToken", token)
    return response
  } catch (error) {
    console.log("[CART_POST] Server error", error)
    return NextResponse.json(
      { message: "Не удалось создать корзину" },
      { status: 500 }
    )
  }
}
