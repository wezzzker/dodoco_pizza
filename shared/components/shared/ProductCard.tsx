import Link from "next/link"
import React from "react"
import { Title } from "./Title"
import { Button } from "../ui"
import { Plus } from "lucide-react"
import { cn } from "@/shared/lib/utils"
import { Ingredient } from "@/app/generated/prisma-client"

interface Props {
  id: number
  name: string
  price: number
  imageUrl: string
  ingredients: Ingredient[]
  className?: string
}

export const ProductCard: React.FC<Props> = ({
  className,
  id,
  ingredients,
  name,
  price,
  imageUrl,
}) => {
  return (
    <Link href={`/product/${id}`}>
      <div
        className={cn(
          {
            "!h-[420px]": !ingredients.length,
          },
          "flex h-[470px] max-h-[470px] flex-col"
        )}
      >
        <div className="flex justify-center rounded-lg transition-all duration-200 hover:scale-98">
          <img className="h-[292px] w-[292px]" src={imageUrl} alt={name} />
        </div>

        <div className="flex h-full flex-col justify-between">
          <div>
            <Title
              text={name}
              size="sm"
              className="mt-3 mb-1 font-bold tracking-tight"
            />
            <p className="text-sm text-gray-400">
              {ingredients.map((ingredient) => ingredient.name).join(", ")}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[20px]"></span>
            <Button
              variant={"secondary"}
              className="text-lg font-bold text-[#d15700]"
            >
              от {price} ₽
            </Button>
          </div>
        </div>
      </div>
    </Link>
  )
}
