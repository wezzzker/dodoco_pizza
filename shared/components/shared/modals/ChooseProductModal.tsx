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

interface Props {
  className?: string
  product: ProductWithRelations
}

export const ChooseProductModal: React.FC<Props> = ({ className, product }) => {
  const router = useRouter()
  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={
          "!min-h-[610px] !w-[932px] !max-w-[932px] overflow-hidden bg-white p-1"
        }
      >
        <DialogTitle className="hidden">{product.name}</DialogTitle>
        <ChooseProductForm
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
