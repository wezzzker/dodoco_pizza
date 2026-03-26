import { cn } from "@/lib/utils"
import React from "react"

interface Props {
  className?: string
  imageUrl: string
  name: string
  size: number
}

export const ProductImage: React.FC<Props> = ({
  name,
  imageUrl,
  className,
  size,
}) => {
  return (
    <div
      className={cn(
        "relative flex w-full flex-1 items-center justify-center",
        className
      )}
    >
      <img
        src={imageUrl}
        alt={name}
        className={cn(
          "relative top-2 left-2 z-10 transition-all duration-300",
          {
            "h-75 w-75": size === 20,
            "w-100] h-100": size === 30,
            "h-125 w-125": size === 40,
          }
        )}
      />
      <div className="absolute top-1/2 left-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-gray-200" />
      <div className="absolute top-1/2 left-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dotted border-gray-100" />
    </div>
  )
}
