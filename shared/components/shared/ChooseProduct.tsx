"use client"
import { ProductWithRelations } from "@/@types/prisma"

import { useCartStore } from "@/shared/store"
import React from "react"
import toast from "react-hot-toast"
import { ChooseProductForm } from "./ChooseProductForm"

interface Props {
  product: ProductWithRelations
  className?: string
}

export const ChooseProduct: React.FC<Props> = ({ product, className }) => {
  const firstItem = product.productVariations[0]
  const { addCartItem, loading } = useCartStore()

  const onAddtoCart = async (
    productItemId?: number,
    ingredients?: number[]
  ) => {
    try {
      const itemId = productItemId ?? firstItem.id
      await addCartItem({ productItemId: itemId, ingredients })
      toast.success(`${product.name} теперь в корзине`)
    } catch (error) {
      console.error(error)
      toast.error("Не удалось добавить товар в корзину")
    }
  }
  return (
    <ChooseProductForm
      categoryId={product.categoryId}
      imageUrl={product.imageUrl}
      ingredients={product.ingredients}
      items={product.productVariations}
      loading={loading}
      name={product.name}
      onAddtoCart={onAddtoCart}
    />
  )
}
