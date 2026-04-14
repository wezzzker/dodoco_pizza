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

import toast from "react-hot-toast"

interface Props {
  className?: string
  product: ProductWithRelations
}

export const ChooseProductModal: React.FC<Props> = ({ className, product }) => {
  const router = useRouter()
  const { addCartItem, loading } = useCartStore()
  const firstItem = product.productVariations[0]

  const onAddtoCart = async (
    productItemId?: number,
    ingredients?: number[]
  ) => {
    try {
      const itemId = productItemId ?? firstItem.id
      await addCartItem({ productItemId: itemId, ingredients })
      toast.success(`${product.name} теперь в корзине`)
      router.back()
    } catch (error) {
      console.error(error)
      toast.error("Не удалось добавить товар в корзину")
    }
  }
  return (
    <Dialog
      open={Boolean(product)}
      onOpenChange={() => {
        router.back()
      }}
    >
      <DialogContent
        className={
          "!min-h-[610px] !w-[932px] !max-w-[932px] overflow-hidden bg-white p-1"
        }
      >
        <DialogTitle className="hidden">{product.name}</DialogTitle>
        <ChooseProductForm
          onAddtoCart={onAddtoCart}
          imageUrl={product.imageUrl}
          ingredients={product.ingredients}
          items={product.productVariations}
          name={product.name}
          categoryId={product.categoryId}
          loading={loading}
        />
      </DialogContent>
    </Dialog>
  )
}
