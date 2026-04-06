import { CartDTO } from "../services/dto/cart-dto"
import { calcCartItemTotalPrice } from "./calc-cart-item-total-price"

export type CartStateItem = {
  id: number
  quantity: number
  name: string
  imageUrl: string
  price: number
  disabled?: boolean
  pizzaSize?: number | null
  pizzaType?: number | null
  ingredients: Array<{ name: string; price: number }>
}

interface ReturnProps {
  items: CartStateItem[]
  totalAmount: number
}

export const getCartDetails = (data: CartDTO): ReturnProps => {
  const items = data.items.map((item) => {
    const productItem = item.productItem
    const product = productItem?.product
    const ingredients = item.ingredients || []
    return {
      id: item.id,
      quantity: item.quantity,
      name: product.name,
      imageUrl: product.imageUrl,
      price: calcCartItemTotalPrice(item),
      pizzaSize: productItem.size,
      pizzaType: productItem.pizzaType,
      disabled: false,
      ingredients: ingredients.map((ingredient) => ({
        name: ingredient.name,
        price: ingredient.price,
      })),
    }
  }) as CartStateItem[]

  return {
    items,
    totalAmount: data.totalAmount || 0,
  }
}
