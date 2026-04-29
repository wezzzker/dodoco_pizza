"use client"
import React from "react"
import { WhiteBlock } from "../WhiteBlock"
import * as Form from "@/shared/components/shared/form"

import { ErrorText } from "../ErrorText"
import { Controller, useFormContext } from "react-hook-form"
interface Props {
  className?: string
}

export const CheckoutAdress: React.FC<Props> = ({ className }) => {
  const { control } = useFormContext()
  return (
    <WhiteBlock title="3. Адрес доставки">
      <div className="flex flex-col gap-5">
        <Controller
          name="adress"
          render={({ field, fieldState }) => (
            <>
              <Form.Adress onChange={field.onChange} />
              {fieldState.error?.message && (
                <ErrorText text={fieldState.error.message} />
              )}
            </>
          )}
          control={control}
        />
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
