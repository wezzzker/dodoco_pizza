import { Ingredient } from "@/app/generated/prisma-client"
import { cn } from "@/shared/lib/utils"
import { CircleCheck } from "lucide-react"
import React from "react"

interface Props {
  className?: string
  ingredient: Ingredient
  active?: boolean
  onClick?: () => void
}

export const IngredientCard: React.FC<Props> = ({
  className,
  ingredient,
  onClick,
  active,
}) => {
  return (
    <button
      onClick={onClick}
      key={ingredient.id}
      className={cn(
        className,
        "relative z-10 flex h-[165px] w-[105px] flex-col rounded-md p-2 shadow-[0px_0px_10px_rgba(6,5,50,0.20)]",
        { "outline-1 outline-primary": active }
      )}
    >
      <img
        src={ingredient.imageUrl}
        alt=""
        className="h-[88px] w-[88px] flex-2"
      />
      <p className="flex-1 text-xs">{ingredient.name}</p>
      <span className="flex-1 text-[16px]">
        <b> {ingredient.price} ₽</b>
      </span>
      {active && (
        <CircleCheck className="absolute right-2 h-6 w-6 text-primary" />
      )}
    </button>
  )
}
