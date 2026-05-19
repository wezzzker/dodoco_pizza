"use client"

import React from "react"
import dynamic from "next/dynamic"
import { useFormContext, useController } from "react-hook-form"
import { ErrorText } from "../ErrorText"
import "react-dadata/dist/react-dadata.css"
import { Input } from "../../ui"

const AddressSuggestions = dynamic(
  () => import("react-dadata").then((mod) => mod.AddressSuggestions),
  {
    ssr: false,
    loading: () => (
      <div className="h-10 w-full animate-pulse rounded-md bg-gray-200" />
    ),
  }
)

interface Props {
  name?: string
  placeholder?: string
}

export const FormAdress: React.FC<Props> = ({
  name = "adress",
  placeholder = "Введите адрес доставки",
}) => {
  const { control } = useFormContext()
  const { field, fieldState } = useController({ name, control })
  const lastValueRef = React.useRef<string | undefined>(undefined)

  const handleChange = React.useCallback(
    (data?: { value: string }) => {
      lastValueRef.current = data?.value
      field.onChange(data?.value ?? "")
    },
    [field.onChange]
  )

  const handleBlur = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (!e.target.value && lastValueRef.current) {
        field.onChange("")
      }
    },
    [field.onChange]
  )

  return (
    <div>
      <AddressSuggestions
        token={process.env.NEXT_PUBLIC_DADATA_TOKEN || ""}
        filterToBound="house"
        onChange={handleChange}
        inputProps={{
          placeholder,
          onBlur: handleBlur,
          className:
            "min-w-0 w-full h-12 rounded-md border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        }}
      />
      {fieldState.error?.message && (
        <ErrorText text={fieldState.error.message} className="mt-2" />
      )}
    </div>
  )
}
