import React from "react"
import { SheetFooter, SheetHeader, SheetTitle } from "../ui/sheet"
import { Title } from "./Title"
import { cn } from "@/shared/lib/utils"
import bg from "public/bg.jpg"
import Image from "next/image"
interface Props {
  className?: string
}

export const CartEmpty: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <SheetHeader>
        <SheetTitle />
      </SheetHeader>
      <Image
        alt="Додоко"
        src={"/bg.svg"}
        width={305}
        height={305}
        className="mb-22 ml-auto"
      />
      <SheetFooter className="flex flex-col items-center pb-28 text-center">
        <Title text="Пусто" className="font-black" size="md" />
        <p className="w-[270px] text-base font-semibold text-gray-600">
          Додоко все съел, но вы можете заказать еще
        </p>
      </SheetFooter>
    </div>
  )
}
