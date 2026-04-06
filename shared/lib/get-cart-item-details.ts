import { Ingredient } from "@/app/generated/prisma-client"
import { mapPizzaType, PizzaSize, PizzaType } from "../constants/pizza"
import { CartStateItem } from "./get-cart-details"

export const getCartItemDetails = (
  ingredients: CartStateItem["ingredients"],
  pizzaType: PizzaType,
  pizzaSize: PizzaSize
): string => {
  const details = []
  if (pizzaSize && pizzaType) {
    const typeName = mapPizzaType[pizzaType]
    details.push(`${typeName} ${pizzaSize} см`)
  }
  if (ingredients) {
    details.push(
      ...ingredients
        .filter((ingredient) => ingredient.name)
        .map((ingredient) => ingredient.name)
    )
  }
  return details.join(", ")
}
