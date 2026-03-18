import React from "react"
import { Title } from "./Title"
import { FilterCheckbox } from "./FilterCheckbox"
import { Input } from "../ui"
import { RangeSlider } from "./RangeSlider"
import { CheckboxFiltersGroup } from "./CheckboxFiltersGroup"

interface Props {
  className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      {/* Фильтры */}
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
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
        defaultItems={[
          { text: "Сырный соус", value: "1" },
          { text: "Залупа", value: "2" },
          { text: "Моцарела", value: "3" },
          { text: "Бекон", value: "4" },
          { text: "Грибы", value: "5" },
          { text: "Чеснок", value: "6" },
        ]}
        items={[
          { text: "Сырный соус", value: "1" },
          { text: "Барбекю", value: "2" },
          { text: "Моцарела", value: "3" },
          { text: "Бекон", value: "4" },
          { text: "Грибы", value: "5" },
          { text: "Чеснок", value: "6" },
          { text: "Лук", value: "7" },
          { text: "Перец", value: "8" },
          { text: "Оливки", value: "9" },
          { text: "Томат", value: "10" },
        ]}
      />
    </div>
  )
}
