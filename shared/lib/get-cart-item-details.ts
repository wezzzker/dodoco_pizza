import { Ingredient } from "@/app/generated/prisma-client"
import { mapPizzaType, PizzaType } from "../constants/pizza"

export const getCartItemDetails = (
  pizzaType: PizzaType,
  pizzaSize: number,
  ingredients: Ingredient[] | { name: string }[]
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
