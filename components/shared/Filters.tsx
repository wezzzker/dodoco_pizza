"use client"
import React from "react"
import { Title } from "./Title"
import { FilterCheckbox } from "./FilterCheckbox"
import { Input } from "../ui"
import { RangeSlider } from "./RangeSlider"
import { CheckboxFiltersGroup } from "./CheckboxFiltersGroup"
import { useFilterIngredients } from "@/hooks/useFilterIngredients"

interface Props {
  className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, onAddId, selectedIds } = useFilterIngredients()
  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }))

  return (
    <div className={className}>
      {/* Фильтры */}
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" name="qwe" />
        <FilterCheckbox text="Новинки" value="2" name="qwe" />
      </div>
      {/* Цена */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="mb-3 font-bold">Цена от и до:</p>
        <div className="mb-5 flex gap-3">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" min={100} max={1000} placeholder="1000" />
        </div>
        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
      </div>
      {/* Ингридиенты */}
      <CheckboxFiltersGroup
        title="Ингридиенты"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
        selectedIds={selectedIds}
        name="ingredients"
      />
    </div>
  )
}
