import { Ingredient, ProductVariation } from "@/app/generated/prisma-client"
import { mapPizzaType, PizzaSize, PizzaType } from "../constants/pizza"
import { calcTotalPizzaPrice } from "./calc-total-pizza-price"

export const getProductDetails = (
  size: PizzaSize,
  type: PizzaType,
  items: ProductVariation[],
  ingredients: Ingredient[],
  selectedIngredient: Set<number>
) => {
  const totalPrice = calcTotalPizzaPrice(
    type,
    size,
    items,
    ingredients,
    selectedIngredient
  )
  const textDetails = {
    main: `${size} см, ${mapPizzaType[type]} пицца`,
    added: ingredients
      .filter((item) => selectedIngredient.has(item.id))
      ?.map((item) => item.name)
      .join(", "),
  }

  return { totalPrice, textDetails }
}
