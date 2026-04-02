import { cn } from "@/shared/lib/utils"
import React from "react"

interface Props {
  className?: string
  imageUrl: string
  productType: number
  size: 20 | 30 | 40
}

export const ProductImage: React.FC<Props> = ({
  imageUrl,
  className,
  size = 30,
  productType,
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
        alt={""}
        className={cn("relative top-2 left-2 z-10", {
          "h-75 w-75": size === 20,
          "w-100] h-100": size === 30,
          "h-125 w-125": size === 40,
        })}
      />
      {productType == 1 && (
        <>
          <div className="absolute top-1/2 left-1/2 h-112.5 w-112.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-gray-200" />
          <div className="absolute top-1/2 left-1/2 h-92.5 w-92.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dotted border-gray-100" />
        </>
      )}
    </div>
  )
}
