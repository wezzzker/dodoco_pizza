"use client"
import React, { useState } from "react"
import { FilterChecboxProps, FilterCheckbox } from "./FilterCheckbox"
import { Input } from "../ui"

interface Props {
  className?: string
  title: string
  items: Item[]
  defaultItems: Item[]
  limit?: number
  seatchImnputPlaceholder?: string
  onChange?: (values: string[]) => void
  defaultValue?: string
}

type Item = FilterChecboxProps

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  seatchImnputPlaceholder = "Поиск...",
  className,
  onChange,
  defaultValue,
}) => {
  const [showAll, setShowAll] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  //
  const onChangeSearchInput = (
    event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>
  ) => {
    setSearchValue(event.target.value)
  }

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase().trim())
      )
    : defaultItems.slice(0, limit)
  //
  return (
    <div className={className}>
      <p className="mb-3 font-bold">{title}</p>
      {/* Поиск */}
      {showAll && (
        <div className="mb-5">
          <Input
            onChange={onChangeSearchInput}
            placeholder={seatchImnputPlaceholder}
            className="border-none bg-gray-50"
          />
        </div>
      )}
      {/* Чекбоксы */}
      <div className="scrollbar flex max-h-96 flex-col gap-4 overflow-auto pr-2">
        {list.map((item, index) => (
          <FilterCheckbox
            key={String(index)}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={(i) => console.log(i)}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? "mt-4 border-t border-t-neutral-100" : ""}>
          <button
            className="mt-3 text-primary"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Скрыть" : "Показать все"}
          </button>
        </div>
      )}
    </div>
  )
}
