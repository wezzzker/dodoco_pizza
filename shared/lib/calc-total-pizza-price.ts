import { Ingredient, ProductVariation } from "@/app/generated/prisma-client"
import { PizzaSize, PizzaType } from "../constants/pizza"

/**
 *Подсчет общей стоимости пиццы
 *
 * @param type - тип теста
 * @param size - размер пиццы
 * @param items - список вариаций
 * @param ingredients - список ингредиентов
 * @param selectedIngredients - выбранные ингредиенты
 * @returns  итоговая цена пиццы
 */
export const calcTotalPizzaPrice = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductVariation[],
  ingredients: Ingredient[],
  selectedIngredient: Set<number>
) => {
  const pizzaPrice =
    items.find((item) => item.size === size && item.pizzaType === type)
      ?.price || 0

  const totalIngredientsPrice = ingredients
    .filter((item) => selectedIngredient.has(item.id))
    .reduce((acc, item) => acc + item.price, 0)

  return pizzaPrice + totalIngredientsPrice
}
