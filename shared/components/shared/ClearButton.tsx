import { cn } from "@/shared/lib/utils"
import { X } from "lucide-react"
import React from "react"

interface Props {
  className?: string
  onClick?: VoidFunction
}

export const ClearButton: React.FC<Props> = ({ onClick, className }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn("cursor-pointer opacity-30 hover:opacity-100", className)}
    >
      <X className="h-5 w-5" />
    </button>
  )
}
