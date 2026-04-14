"use client"
import React from "react"
import { Button } from "../ui"
import { ArrowRight, ShoppingCart } from "lucide-react"
import { cn } from "@/shared/lib/utils"
import { CartDrawer } from "./CartDrawer"
import { useCartStore } from "@/shared/store"

interface Props {
  className?: string
}

export const CartButton: React.FC<Props> = ({ className }) => {
  const { loading, totalAmount, cartItems } = useCartStore()
  return (
    <CartDrawer>
      <Button
        loading={loading}
        className={cn("group relative", { "w-27": loading }, className)}
      >
        <b>{totalAmount} ₽</b>
        <span className="mx-3 h-full w-[1px] bg-white/30" />
        <div className="group-hover: flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <ShoppingCart size={16} className="relative" strokeWidth={2} />
          <b>{cartItems.length}</b>
        </div>
        <ArrowRight
          size={20}
          className="absolute right-5 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
        />
      </Button>
    </CartDrawer>
  )
}
