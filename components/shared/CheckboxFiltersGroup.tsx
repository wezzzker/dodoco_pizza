"use client"
import React, { useState } from "react"
import { FilterChecboxProps, FilterCheckbox } from "./FilterCheckbox"
import { Input, Skeleton } from "../ui"

interface Props {
  className?: string
  title: string
  items: Item[]
  defaultItems: Item[]
  limit?: number
  seatchImnputPlaceholder?: string
  onClickCheckbox?: (id: string) => void
  defaultValue?: string
  loading?: boolean
  selectedIds?: Set<string>
  name?: string
}

type Item = FilterChecboxProps

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  seatchImnputPlaceholder = "Поиск...",
  className,
  loading,
  onClickCheckbox,
  defaultValue,
  selectedIds,
  name,
}) => {
  const [showAll, setShowAll] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  //

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
  // Skeleton во время загрузки
  if (loading) {
    return (
      <div className={className}>
        <p className="mb-3 font-bold">{title}</p>
        {...Array(limit)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} className="mb-4 h-6 rounded-[8px]" />
          ))}
        <Skeleton className="mb-4 h-6 w-28 rounded-[8px]" />
      </div>
    )
  }
  // Основная разметка
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
            checked={selectedIds?.has(item.value)}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
            name={name}
          />
        ))}
      </div>
      {/* раскрыть список */}
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
