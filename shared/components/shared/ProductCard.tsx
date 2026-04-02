import Link from "next/link"
import React from "react"
import { Title } from "./Title"
import { Button } from "../ui"
import { Plus } from "lucide-react"
import { cn } from "@/shared/lib/utils"

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
      <Link href={`/product/${id}`} >
        <div className={cn(className,'max-h-[470px] h-[470px] flex flex-col')}>

        <div className="flex justify-center rounded-lg hover:scale-98 transition-all duration-200">
          <img className="h-[292px] w-[292px]" src={imageUrl} alt={name} />
        </div>

        <div className="flex flex-col justify-between h-full">
          <div>
          <Title text={name} size="sm" className="mt-3 mb-1 font-bold tracking-tight" />
          <p className="text-sm text-gray-400">Пряная говядина, соус сливочный хрен, сладкий перец, красный лук, моцарелла, фирменный томатный соус</p>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[20px]"></span>
            <Button variant={"secondary"} className="text-lg font-bold text-[#d15700]">
              от {price} ₽
            </Button>
          </div>
        </div>
        </div>
      </Link>
  )
}
