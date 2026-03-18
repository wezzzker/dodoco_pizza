"use client"

import React from "react"
import { Title } from "./Title"
import { cn } from "@/lib/utils"
import { ProductCard } from "./ProductCard"
import { useIntersection } from "react-use"
import { useCategoryStore } from "@/store/category"

interface Props {
  className?: string
  title: string
  items: any[]
  listClassName?: string
  categoryId: number
}

export const ProductsGroupList: React.FC<Props> = ({
  className,
  categoryId,
  items,
  title,
  listClassName,
}) => {
  // ///////////////////////////
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
  const intersectionRef = React.useRef<any>(null)
  const intersection = useIntersection(intersectionRef, {
    root: null,
    threshold: 0.4,
  })

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId)
    }
  }, [categoryId, intersection?.isIntersecting, title])
  // ////////////
  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="mb-5 font-extrabold" />
      <div className={cn("grid grid-cols-3 gap-12.5", listClassName)}>
        {items.map((product) => (
          <ProductCard
            id={product.id}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.items[0].price}
            key={product.id}
          />
        ))}
      </div>
    </div>
  )
}
