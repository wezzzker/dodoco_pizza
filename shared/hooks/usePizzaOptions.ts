import React from "react"
import { PizzaSize, PizzaType } from "../constants/pizza"
import { Variant } from "../components/shared/GroupVariants"
import { useSet } from "react-use"
import { getAvailablePizzaSizes } from "../lib"
import { ProductVariation } from "@/app/generated/prisma-client"

interface ReturnProps {
  size: PizzaSize
  type: PizzaType
  selectedIngredient: Set<number>
  setSize: (size: PizzaSize) => void
  setType: (type: PizzaType) => void
  addIngredient: (value: number) => void
  availableSizes: Variant[]
  currentItemId?: number
}
export const usePizzaOptions = (items: ProductVariation[]): ReturnProps => {
  const [size, setSize] = React.useState<PizzaSize>(20)
  const [type, setType] = React.useState<PizzaType>(1)
  const [selectedIngredient, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  )
  const availableSizes = getAvailablePizzaSizes(type, items)
  const currentItemId = items.find(
    (item) => item.pizzaType === type && item.size === size
  )?.id
  React.useEffect(() => {
    const isAvailable = availableSizes?.find(
      (item) => Number(item.value) === size && !item.disabled
    )
    const availableSize = availableSizes?.find((item) => !item.disabled)
    if (!isAvailable && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize)
    }
  }, [type])

  return {
    size,
    type,
    setSize,
    setType,
    selectedIngredient,
    addIngredient,
    availableSizes,
    currentItemId,
  }
}
