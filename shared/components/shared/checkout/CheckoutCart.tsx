import React from "react"
import { WhiteBlock } from "../WhiteBlock"
import { CheckoutItem } from "../CheckoutItem"

import { PizzaSize, PizzaType } from "@/shared/constants/pizza"
import { CartStateItem } from "@/shared/lib/get-cart-details"
import { getCartItemDetails } from "@/shared/lib"

interface Props {
  cartItems: CartStateItem[]
  onClickCountButton: (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => void
  removeCartItem: (id: number) => void
  className?: string
}

export const CheckoutCart: React.FC<Props> = ({
  className,
  cartItems,
  onClickCountButton,
  removeCartItem,
}) => {
  return (
    <WhiteBlock title="1. Корзина">
      <div className="flex flex-col gap-6">
        {cartItems.map((item) => (
          <CheckoutItem
            key={item.id}
            id={item.id}
            details={
              item.pizzaSize
                ? getCartItemDetails(
                    item.ingredients,
                    item.pizzaType as PizzaType,
                    item.pizzaSize as PizzaSize
                  )
                : ""
            }
            imageUrl={item.imageUrl}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onClickCountButton={(type) =>
              onClickCountButton(item.id, item.quantity, type)
            }
            onClickRemove={() => removeCartItem(item.id)}
            disabled={item.disabled}
          />
        ))}
      </div>
    </WhiteBlock>
  )
}
