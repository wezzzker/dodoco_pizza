"use client"
import { Category } from "@/app/generated/prisma-client"
import { cn } from "@/lib/utils"
import { useCategoryStore } from "@/store/category"
import React from "react"

interface Props {
  className?: string
  items: Category[]
}

export const Categories: React.FC<Props> = ({ items, className }) => {
  //////////////
  const categoryActiveId = useCategoryStore((state) => state.activeId)
  //////////////
  return (
    <div
      className={cn("inline-flex gap-1 rounded-md bg-gray-50 p-1", className)}
    >
      {items.map((cat, index) => (
        <a
          className={cn(
            "flex h-11 items-center rounded-md px-5 font-bold",
            categoryActiveId === cat.id &&
              "bg-white text-primary shadow-md shadow-gray-200"
          )}
          key={index}
          href={`/#${cat.name}`}
        >
          <button>{cat.name}</button>
        </a>
      ))}
    </div>
  )
}
