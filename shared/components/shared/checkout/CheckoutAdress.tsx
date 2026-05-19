"use client"
import React from "react"
import { WhiteBlock } from "../WhiteBlock"
import * as Form from "@/shared/components/shared/form"

export const CheckoutAdress: React.FC = () => {
  return (
    <WhiteBlock title="3. Адрес доставки">
      <div className="flex flex-col gap-5">
        <Form.Adress placeholder="Введите адрес доставки" />
        <Form.Textarea
          rows={5}
          name="comment"
          className="text-base"
          placeholder="Комментарий к заказу"
        />
      </div>
    </WhiteBlock>
  )
}
