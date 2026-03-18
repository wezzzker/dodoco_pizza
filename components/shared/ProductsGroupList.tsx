import React from "react"
import { Title } from "./Title"
import { cn } from "@/lib/utils"
import { ProductCard } from "./ProductCard"
// https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif
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
  return (
    <div className={className}>
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
