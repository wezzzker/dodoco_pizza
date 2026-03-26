"use client"
import { cn } from "@/lib/utils"
import React from "react"

type Variant = { name: string; value: string; disabled?: boolean }

interface Props {
  className?: string
  items: readonly Variant[]
  onClick: (value: Variant["value"]) => void
  selectedValue?: Variant["value"]
}

export const GroupVariants: React.FC<Props> = ({
  className,
  items,
  onClick,
  selectedValue,
}) => {
  return (
    <div
      className={cn(
        "flex justify-between rounded-3xl bg-[#F3F3F7] p-1 select-none",
        className
      )}
    >
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => onClick?.(item.value)}
          className={cn(
            {
              "bg-white shadow": item.value === selectedValue,
              "pointer-events-none text-gray-500 opacity-50": item.disabled,
            },
            "flex h-[30px] flex-1 items-center justify-center rounded-3xl px-5 text-sm transition-all duration-300"
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  )
}
