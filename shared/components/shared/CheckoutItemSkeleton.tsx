import React from "react"
import { Skeleton } from "../ui"

interface Props {
  className?: string
}

export const CheckoutItemSkeleton: React.FC<Props> = ({ className }) => {
  return (
    <div className="flex items-center gap-5">
      <Skeleton className="h-[60px] w-[60px]" />
      <Skeleton className="h-[60px] w-full" />
    </div>
  )
}
