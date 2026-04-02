import React from "react"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/shared/lib/utils"

import { Container, SearchInput, CartButton } from "./index"
import { Button } from "../ui"
import { User } from "lucide-react"

interface Props {
  className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="py- flex items-center justify-between py-8">
        {/* Левая часть */}
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/dodocoLogo.png" alt="Logo" width={45} height={45} />
            <div>
              <h1 className="text-2xl font-black uppercase">DoDoCo Pizza</h1>
              <p className="text-sm leading-3 text-gray-400">
                вкусней уже некуда
              </p>
            </div>
          </div>
        </Link>
        {/* Левая часть */}
        {/* Поиск */}
        <div className="mx-10 flex-1">
          <SearchInput />
        </div>
        {/* Правая часть */}
        <div className="flex items-center gap-3">
          <Button variant={"outline"} className="flex items-center gap-1">
            <User size={16} />
            Войти
          </Button>
          {/* Корзина */}
          <CartButton />
        </div>
      </Container>
    </header>
  )
}
