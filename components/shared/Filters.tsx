"use client"
import React from "react"
import { Title } from "./Title"
import { FilterCheckbox } from "./FilterCheckbox"
import { Input } from "../ui"
import { RangeSlider } from "./RangeSlider"
import { CheckboxFiltersGroup } from "./CheckboxFiltersGroup"
import { useFilterIngredients } from "@/hooks/useFilterIngredients"
import { useSet } from "react-use"

interface Props {
  className?: string
}
interface PriceRangeProps {
  priceFrom: number
  priceTo: number
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, onAddId, selectedIngredients } =
    useFilterIngredients()
  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]))
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>([]))
  const [price, setPrice] = React.useState<PriceRangeProps>({
    priceFrom: 0,
    priceTo: 1000,
  })
  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }))

  const updatePrice = (name: keyof PriceRangeProps, value: number) => {
    setPrice({ ...price, [name]: value })
  }
  //
  React.useEffect(() => {
    console.log({ price, pizzaTypes, sizes, selectedIngredients })
  }, [price, pizzaTypes, sizes, selectedIngredients])
  //
  return (
    <div className={className}>
      {/* Фильтры */}
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      {/* Филтр размеров */}
      <CheckboxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mb-5"
        onClickCheckbox={toggleSizes}
        selected={sizes}
        items={[
          { text: "20см", value: "20" },
          { text: "30см", value: "30" },
          { text: "40см", value: "40" },
        ]}
      />
      {/* Филтр теста */}
      <CheckboxFiltersGroup
        title="Тип теста"
        name="pizzaTypes"
        className="mb-5"
        onClickCheckbox={togglePizzaTypes}
        selected={pizzaTypes}
        items={[
          { text: "Тонкое", value: "1" },
          { text: "Традиционное", value: "2" },
        ]}
      />
      {/* Цена */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="mb-3 font-bold">Цена от и до:</p>
        <div className="mb-5 flex gap-3">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(price.priceFrom)}
            onChange={(e) => updatePrice("priceFrom", Number(e.target.value))}
          />
          <Input
            value={String(price.priceTo)}
            type="number"
            min={100}
            max={1000}
            placeholder="1000"
            onChange={(e) => updatePrice("priceTo", Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[price.priceFrom, price.priceTo]}
          onValueChange={([priceFrom, priceTo]) =>
            setPrice({ priceFrom, priceTo })
          }
        />
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
        selected={selectedIngredients}
        name="ingredients"
      />
    </div>
  )
}
