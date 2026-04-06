import { CartItemDTO } from "../services/dto/cart-dto"

export const calcCartItemTotalPrice = (item: CartItemDTO): number => {
  const ingredientsPrice = (item.ingredients || []).reduce(
    (acc, ingredient) => acc + (ingredient.price || 0),
    0
  )
  const productItemPrice = item.productItem?.price || 0
  return (ingredientsPrice + productItemPrice) * (item.quantity || 0)
}
