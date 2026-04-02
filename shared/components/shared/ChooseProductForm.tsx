"use client"
import React from "react"
import { cn } from "@/shared/lib/utils"
import { Button } from "../ui"
import { IngredientCard, GroupVariants, Title, ProductImage } from "./index"
import {
  mapPizzaType,
  PizzaSize,
  PizzaType,
  pizzaTypes,
} from "@/shared/constants/pizza"
import { Ingredient, ProductVariation } from "@/app/generated/prisma-client"
import { getProductDetails } from "@/shared/lib"
import { usePizzaOptions } from "@/shared/hooks"

interface Props {
  imageUrl: string
  name: string
  ingredients: Ingredient[]
  items: ProductVariation[]
  onClickAddCart?: VoidFunction
  className?: string
  categoryId: number
}

export const ChooseProductForm: React.FC<Props> = ({
  className,
  imageUrl,
  ingredients,
  name,
  items,
  onClickAddCart,
  categoryId,
}) => {
  const {
    addIngredient,
    availableSizes,
    selectedIngredient,
    setSize,
    setType,
    size,
    type,
  } = usePizzaOptions(items)

  const { textDetails, totalPrice } = getProductDetails(
    size,
    type,
    items,
    ingredients,
    selectedIngredient
  )

  const handleClickAdd = () => {
    onClickAddCart?.()
    console.log({ size, type, ingredients: selectedIngredient })
  }

  return (
    <div className={cn(className, "flex h-[610px] flex-1 p-2")}>
      <ProductImage imageUrl={imageUrl} size={size} productType={categoryId} />
      {/*  */}
      <div className="flex flex-col justify-between gap-4 bg-[#FCFCFC] px-1.5 pt-6">
        <div className="scrollbar overflow-y-auto">
          <Title text={name} size="md" className="mb-1 font-extrabold" />
          <p className="max-w-[350px] font-semibold text-wrap text-gray-500">
            <span>{textDetails.main} </span>
            <span className="underline">{textDetails.added}</span>
          </p>
          {categoryId == 1 && (
            <div className="mt-2 flex flex-3 flex-col gap-2 p-2">
              <GroupVariants
                items={availableSizes}
                selectedValue={String(size)}
                onClick={(value) => setSize(Number(value) as PizzaSize)}
              />
              <GroupVariants
                items={pizzaTypes}
                selectedValue={String(type)}
                onClick={(value) => setType(Number(value) as PizzaType)}
              />
              <Title
                text=" Добавить по вкусу"
                size="sm"
                className="font-bold"
              />
              <section className="grid grid-cols-3 gap-3">
                {ingredients.map((ingredient) => (
                  <IngredientCard
                    ingredient={ingredient}
                    key={ingredient.id}
                    active={selectedIngredient.has(ingredient.id)}
                    onClick={() => addIngredient(ingredient.id)}
                  />
                ))}
              </section>
            </div>
          )}
        </div>
        <Button
          onClick={handleClickAdd}
          className="block h-[55px] w-full rounded-[18px] px-10 text-base"
        >
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  )
}
