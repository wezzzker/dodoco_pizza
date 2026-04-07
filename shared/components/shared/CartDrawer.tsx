"use client"

import React from "react"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"
import Link from "next/link"
import { Button } from "../ui"
import { ArrowRight } from "lucide-react"
import { CartDrawerItem } from "./CartDrawerItem"
import { getCartItemDetails } from "@/shared/lib"
import { useCartStore } from "@/shared/store"
import { PizzaSize, PizzaType } from "@/shared/constants/pizza"

interface Props {
  className?: string
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  const { fetchCartItems, items, totalAmount, updateItemQuantity } =
    useCartStore()

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    console.log(id, quantity, type)
  }
  React.useEffect(() => {
    fetchCartItems()
  }, [])
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between bg-[#ffffff] pb-0">
        <SheetHeader>
          <SheetTitle>
            В корзине <span className="font-bold">{items.length} товара</span>
          </SheetTitle>
        </SheetHeader>
        {/* Items */}
        <div className="flex-1 overflow-auto">
          {items.map((item) => (
            <CartDrawerItem
              key={item.id}
              details={
                item.pizzaSize
                  ? getCartItemDetails(
                      item.ingredients,
                      item.pizzaType as PizzaType,
                      item.pizzaSize as PizzaSize
                    )
                  : ""
              }
              id={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              onClickCountButton={(type) =>
                updateItemQuantity(item.id, item.quantity)
              }
            />
          ))}
        </div>
        {/*  */}
        <SheetFooter className="bg-white">
          <div className="h-full w-full">
            <div className="mb-4 flex justify-between">
              <span className="text-lg text-neutral-500">Итого:</span>
              <div className="relative -top-1 mx-2 flex-1 border-b border-dashed border-b-neutral-200"></div>
              <span className="text-lg font-bold">{totalAmount} Р</span>
            </div>

            <Link href={"/cart"}>
              <Button
                type="submit"
                className="h-12 w-full text-base"
                onClick={() => console.log(items)}
              >
                Оформить заказ
                <ArrowRight className="ml-2 w-5" />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
