"use client"
import React from "react"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Api } from "@/services/api-client"
import { Product } from "@/app/generated/prisma-client"
import { useDebounce } from "react-use"
interface Props {
  className?: string
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [focused, setFocused] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")
  const [products, setProducts] = React.useState<Product[]>([])
  const inputRef = React.useRef<HTMLInputElement>(null)

  const onClickItem = () => {
    setFocused(false)
    setSearchQuery("")
    inputRef.current?.blur()
  }
  useDebounce(
    () => {
      Api.products.search(searchQuery).then((items) => {
        setProducts(items)
      })
    },
    180,
    [searchQuery]
  )
  return (
    <>
      {focused && (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 z-30 bg-black/50"
          onClick={() => setFocused(false)}
        />
      )}

      <div
        className={cn(
          "relative z-30 flex h-11 flex-1 justify-between rounded-xl",
          className
        )}
      >
        <Search className="absolute top-1/2 left-3 h-5 translate-y-[-50%] text-gray-400" />
        <input
          ref={inputRef}
          className="w-full rounded-md bg-gray-50 pl-11 outline-none"
          type="text"
          placeholder="Найти пиццу..."
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key == "Escape" && onClickItem()}
        />

        <div
          className={cn(
            "invisible absolute top-14 z-30 w-full rounded-md bg-white px-2 py-2 opacity-0 shadow-md transition-all duration-200",
            focused && "visible top-12 opacity-100"
          )}
        >
          {/* Dropdown */}
          {products.map((product) => (
            <Link
              onClick={onClickItem}
              href={`/product/${product.id}`}
              className="flex w-full cursor-pointer items-center gap-2 rounded-xs border-l-2 border-white px-1 py-2 transition-all duration-200 hover:border-primary hover:bg-primary/10"
              key={product.id}
            >
              <img className="h-8 w-8" src={product.imageUrl} alt="pizza" />

              <span>{product.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
