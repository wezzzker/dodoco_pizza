import { ProductVariation } from "@/app/generated/prisma-client"
import { pizzaSizes, PizzaType } from "../constants/pizza"
import { Variant } from "../components/shared/GroupVariants"

export const getAvailablePizzaSizes = (
  type: PizzaType,
  items: ProductVariation[]
): Variant[] => {
  const filteredPizzasByType = items.filter((item) => item.pizzaType === type)

  return pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByType.some(
      (pizza) => Number(pizza.size) === Number(item.value)
    ),
  }))
}
