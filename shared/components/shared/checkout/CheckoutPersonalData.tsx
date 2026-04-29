import React from "react"
import { WhiteBlock } from "../WhiteBlock"
import * as Form from "@/shared/components/shared/form"

interface Props {
  className?: string
}

export const CheckoutPersonalData: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="2. Персональная информация">
      <div className="grid grid-cols-2 gap-5">
        <Form.Input name="firstName" placeholder="Имя" />
        <Form.Input name="lastName" placeholder="Фамилия" />
        <Form.Input name="email" placeholder="E-mail" />
        <Form.Input name="phone" placeholder="Телефон" />
      </div>
    </WhiteBlock>
  )
}
