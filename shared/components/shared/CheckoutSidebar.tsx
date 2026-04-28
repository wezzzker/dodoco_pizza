import React from "react"
import { WhiteBlock } from "./WhiteBlock"
import { PaymentDetails } from "./PaymentDetails"
import { Box, Percent, Truck } from "lucide-react"
import { Button } from "../ui"

interface Props {
  totalAmount: number
}
const VAT = 15
const DELIVERY_PRICE = 250

export const CheckoutSidebar: React.FC<Props> = ({ totalAmount }) => {
  const vatPrice = (totalAmount * VAT) / 100
  const totalPrice = totalAmount + DELIVERY_PRICE + vatPrice
  return (
    <div className="w-[450px]">
      <WhiteBlock className="sticky top-4">
        <div className="flex flex-col gap-1 p-6">
          <span className="text-xl">Итого:</span>
          <span className="text-3xl font-extrabold">{totalPrice} ₽</span>
        </div>
        {/*  */}
        <div className="border-y p-6 text-lg">
          <PaymentDetails title="Стоимость корзины" price={String(totalAmount)}>
            <Box width={18} className="text-neutral-400" />
          </PaymentDetails>
          <PaymentDetails title="Налог" price={String(vatPrice)}>
            <Percent width={18} className="text-neutral-400" />
          </PaymentDetails>
          <PaymentDetails
            title="Стоимость доставки"
            price={String(DELIVERY_PRICE)}
          >
            <Truck width={18} className="text-neutral-400" />
          </PaymentDetails>
        </div>
        {/*  */}
        <div className="p-6">
          <span className="text-neutral-400">У меня есть промокод</span>
          <Button
            type="submit"
            className="mt-6 h-14 w-full rounded-md text-base font-bold"
          >
            Перейти к оплате
          </Button>
        </div>
      </WhiteBlock>
    </div>
  )
}
