"use client"
import { cn } from "@/shared/lib/utils"
import React from "react"
import { Input } from "../../ui"
import { ErrorText, ClearButton } from "../index"
import { useFormContext } from "react-hook-form"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  required?: boolean
  className?: string
}

export const FormInput: React.FC<Props> = ({
  name,
  label,
  required,
  className,

  ...props
}) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext()
  const value = watch(name)
  const errorText = errors[name]?.message
  return (
    <div className={cn("", className)}>
      {label && (
        <p className="mb-2 font-medium">
          {label} {required && <span className="text-red-500">*</span>}
        </p>
      )}
      <div className="relative">
        <Input className="text-md h-12" {...register(name)} {...props} />
        {value && (
          <ClearButton
            className="absolute top-1/2 right-4 -translate-y-1/2"
            onClick={() => setValue(name, "")}
          />
        )}
      </div>
      {errorText && <ErrorText text={String(errorText)} className="mt-2" />}
    </div>
  )
}
