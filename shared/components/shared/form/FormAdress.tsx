"use client"

import React from "react"
import { AddressSuggestions } from "react-dadata"
import "react-dadata/dist/react-dadata.css"

interface Props {
  onChange?: (value?: string) => void
}

export const FormAdress: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="34196fcc162a3b3688a93d962e3359dd0b4f2c0a"
      onChange={(data) => onChange?.(data?.value)}
    />
  )
}
