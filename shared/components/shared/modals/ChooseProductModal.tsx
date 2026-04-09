"use client"
import { Dialog } from "@/shared/components/ui"
import {
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/shared/components/ui/dialog"
import React from "react"

import { useRouter } from "next/navigation"
import { ChooseProductForm } from "../ChooseProductForm"
import { ProductWithRelations } from "@/@types/prisma"
import { useCartStore } from "@/shared/store"
import { on } from "node:cluster"

interface Props {
  className?: string
  product: ProductWithRelations
}

export const ChooseProductModal: React.FC<Props> = ({ className, product }) => {
  const router = useRouter()
  const { addCartItem } = useCartStore()
  const firstItem = product.productVariations[0]

  const onAddProduct = () => {
    addCartItem({ productItemId: firstItem.id })
  }
  const onAddPizza = (productItemId: number, ingredients: number[]) => {
    addCartItem({ productItemId, ingredients })
  }
  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={
          "!min-h-[610px] !w-[932px] !max-w-[932px] overflow-hidden bg-white p-1"
        }
      >
        <DialogTitle className="hidden">{product.name}</DialogTitle>
        <ChooseProductForm
          onAddProduct={onAddProduct}
          onAddPizza={onAddPizza}
          imageUrl={product.imageUrl}
          ingredients={product.ingredients}
          items={product.productVariations}
          name={product.name}
          categoryId={product.categoryId}
        />
      </DialogContent>
    </Dialog>
  )
}
