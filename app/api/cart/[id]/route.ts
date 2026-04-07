import { prisma } from "@/shared/lib/db"
import { updateCartTotalAmount } from "@/shared/lib/update-cart-total-amount"
import { NextRequest, NextResponse } from "next/server"

interface ParamsProps {
  params: Promise<{
    id: string
  }>
}
export async function PATCH(req: NextRequest, { params }: ParamsProps) {
  try {
    const id = Number((await params).id)
    const body = (await req.json()) as { quantity: number }
    const token = req.cookies.get("cartToken")?.value

    if (!token) {
      return NextResponse.json({ message: "Token not found" })
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id: Number(id),
      },
    })
    if (!cartItem) {
      return NextResponse.json(
        { message: "Cart item not found" },
        { status: 404 }
      )
    }
    // Обновляем количество товара в корзине
    await prisma.cartItem.update({
      where: {
        id: Number(id),
      },
      data: {
        quantity: body.quantity,
      },
    })
    const updatedUserCart = await updateCartTotalAmount(token)
    return NextResponse.json(updatedUserCart)
  } catch (error) {
    console.log("CART_PATCH Server error", error)
    return NextResponse.json(
      { message: "Не удалось обновить корзину" },
      { status: 500 }
    )
  }
}
