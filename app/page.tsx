import {
  Title,
  Container,
  TopBar,
  Filters,
  ProductCard,
} from "@/components/shared"
import { ProductsGroupList } from "@/components/shared/ProductsGroupList"

export default function Page() {
  const pizzas = [
    {
      id: 1,
      name: "Четыре сыра",
      price: 550,
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif",
      items: [{ price: 550 }],
    },
  ]
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-15">
          <div className="w-62.5">
            <Filters className="" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title="Пиццы" items={pizzas} categoryId={0} />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
