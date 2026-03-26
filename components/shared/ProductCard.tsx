import Link from "next/link"
import React from "react"
import { Title } from "./Title"
import { Button } from "../ui"
import { Plus } from "lucide-react"

interface Props {
  id: number
  name: string
  price: number
  imageUrl: string
  className?: string
}

export const ProductCard: React.FC<Props> = ({
  className,
  id,
  name,
  price,
  imageUrl,
}) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex h-65 justify-center rounded-lg bg-secondary p-6">
          <img className="h-[215px] w-[215px]" src={imageUrl} alt={name} />
        </div>

        <Title text={name} size="sm" className="mt-3 mb-1 font-bold" />
        <p className="text-sm text-gray-400">Какие то ингридиенты</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-[20px]">
            от <b>{price} ₽</b>
          </span>

          <Button variant={"secondary"} className="text-base font-bold">
            <Plus size={20} className="mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  )
}
