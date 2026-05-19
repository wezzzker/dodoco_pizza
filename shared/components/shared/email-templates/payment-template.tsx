import React from "react"

export interface PaymentTemplateProps {
  orderId: number
  totalAmount: number
  paymentUrl: string
}

export function PaymentTemplate({
  orderId,
  totalAmount,
  paymentUrl,
}: PaymentTemplateProps) {
  return (
    <div>
      <h1>
        Заказ № <i> {orderId}</i>
      </h1>
      <p>
        Итоговая стоимость: {totalAmount}₽. Перейдите по{" "}
        <a href={paymentUrl}>ссылке</a> для оплаты заказа
      </p>
    </div>
  )
}
