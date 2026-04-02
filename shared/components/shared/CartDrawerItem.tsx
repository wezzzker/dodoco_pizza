import { cn } from "@/shared/lib/utils"
import React from "react"
import * as CartItem from "./cart-item-details"
import { CartItemProps } from "./cart-item-details/cart-item-details.types"
import { CountButton } from "./CountButton"
import { Trash2Icon } from "lucide-react"

interface Props extends CartItemProps {
  className?: string
}

export const CartDrawerItem: React.FC<Props> = ({
  className,
  imageUrl,
  details,
  id,
  name,
  price,
  quantity,
  disabled,
}) => {
  return (
    <div className={cn(className, "flex gap-6 bg-white p-5")}>
      <CartItem.Image src={imageUrl} />
      <div className="flex-1">
        <CartItem.Info name={name} details={details} />
        <hr />
        <div className="mt-3 flex items-center justify-between">
          <CountButton value={quantity} />
          <div className="flex items-center gap-3">
            <CartItem.Price value={price} />
            <Trash2Icon
              size={16}
              className="cursor-pointer text-gray-400 hover:text-gray-600"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
