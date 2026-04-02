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

interface Props {
  className?: string
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between bg-[#F4F1EE] pb-0">
        <SheetHeader>
          <SheetTitle>
            В корзине <span className="font-bold">3 товара</span>
          </SheetTitle>
        </SheetHeader>
        {/* Items */}
        <div className="flex-1 overflow-auto">
          <CartDrawerItem
            details={getCartItemDetails(2, 30, [
              { name: "Гриль" },
              { name: "Чеддер" },
            ])}
            id={1}
            imageUrl="https://media.dodostatic.net/image/r:292x292/0198bf439a007604880d0231be87cd3e.avif"
            name="Сырная"
            price={419}
            quantity={1}
          />
          <CartDrawerItem
            details={getCartItemDetails(2, 30, [
              { name: "Гриль" },
              { name: "Чеддер" },
            ])}
            id={1}
            imageUrl="https://media.dodostatic.net/image/r:292x292/0198bf439a007604880d0231be87cd3e.avif"
            name="Сырная"
            price={419}
            quantity={1}
          />
          <CartDrawerItem
            details={getCartItemDetails(2, 30, [
              { name: "Гриль" },
              { name: "Чеддер" },
            ])}
            id={1}
            imageUrl="https://media.dodostatic.net/image/r:292x292/0198bf439a007604880d0231be87cd3e.avif"
            name="Сырная"
            price={419}
            quantity={1}
          />
          <CartDrawerItem
            details={getCartItemDetails(2, 30, [
              { name: "Гриль" },
              { name: "Чеддер" },
            ])}
            id={1}
            imageUrl="https://media.dodostatic.net/image/r:292x292/0198bf439a007604880d0231be87cd3e.avif"
            name="Сырная"
            price={419}
            quantity={1}
          />
          <CartDrawerItem
            details={getCartItemDetails(2, 30, [
              { name: "Гриль" },
              { name: "Чеддер" },
            ])}
            id={1}
            imageUrl="https://media.dodostatic.net/image/r:292x292/0198bf439a007604880d0231be87cd3e.avif"
            name="Сырная"
            price={419}
            quantity={1}
          />
          <CartDrawerItem
            details={getCartItemDetails(2, 30, [
              { name: "Гриль" },
              { name: "Чеддер" },
            ])}
            id={1}
            imageUrl="https://media.dodostatic.net/image/r:292x292/0198bf439a007604880d0231be87cd3e.avif"
            name="Сырная"
            price={419}
            quantity={1}
          />
          <CartDrawerItem
            details={getCartItemDetails(2, 30, [
              { name: "Гриль" },
              { name: "Чеддер" },
            ])}
            id={1}
            imageUrl="https://media.dodostatic.net/image/r:292x292/0198bf439a007604880d0231be87cd3e.avif"
            name="Сырная"
            price={419}
            quantity={1}
          />
          <CartDrawerItem
            details={getCartItemDetails(2, 30, [
              { name: "Гриль" },
              { name: "Чеддер" },
            ])}
            id={1}
            imageUrl="https://media.dodostatic.net/image/r:292x292/0198bf439a007604880d0231be87cd3e.avif"
            name="Сырная"
            price={419}
            quantity={1}
          />
        </div>
        {/*  */}
        <SheetFooter className="bg-white p-8">
          <div className="w-full">
            <div className="mb-4 flex justify-between">
              <span className="text-lg text-neutral-500">Итого:</span>
              <div className="relative -top-1 mx-2 flex-1 border-b border-dashed border-b-neutral-200"></div>
              <span className="text-lg font-bold">{`500 Р`}</span>
            </div>

            <Link href={"/cart"}>
              <Button type="submit" className="h-12 w-full text-base">
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
