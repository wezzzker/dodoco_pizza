import { cn } from "@/lib/utils"
import React from "react"
import { Container } from "./Container"
import Image from "next/image"
import { Button } from "../ui"
import { ArrowRight, ShoppingCart, User } from "lucide-react"

interface Props {
  className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="py- flex items-center justify-between py-8">
        {/* Левая часть */}
        <div className="flex items-center gap-4">
          <Image src="/dodocoLogo.png" alt="Logo" width={45} height={45} />
          <div>
            <h1 className="text-2xl font-black uppercase">DoDoCo Pizza</h1>
            <p className="text-sm leading-3 text-gray-400">
              вкусней уже некуда
            </p>
          </div>
        </div>
        {/* Левая часть */}
        {/* Правая часть */}
        <div className="flex items-center gap-3">
          <Button variant={"outline"} className="flex items-center gap-1">
            <User size={16} />
            Войти
          </Button>
          {/*  */}
          <div>
            <Button className="group relative">
              <b>520 р</b>
              <span className="mx-3 h-full w-[1px] bg-white/30" />
              <div className="group-hover: flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart size={16} className="relative" strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight
                size={20}
                className="absolute right-5 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              />
            </Button>
          </div>
        </div>
        {/* Правая часть */}
      </Container>
    </header>
  )
}
