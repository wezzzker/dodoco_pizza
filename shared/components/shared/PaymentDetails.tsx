import React from "react"

interface Props {
  className?: string
  children?: React.ReactNode
  title: string
  price: string
}

export const PaymentDetails: React.FC<Props> = ({
  className,
  children,
  title,
  price,
}) => {
  return (
    <p className="my-2 flex items-center gap-2">
      {children}
      <span>{title}:</span>
      <span className="flex-1 border-b border-dashed"></span>
      <span className="font-bold">{price} ₽</span>
    </p>
  )
}
