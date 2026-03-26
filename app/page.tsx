import { Title, Container, TopBar, Filters } from "@/components/shared"
import { ProductsGroupList } from "@/components/shared/ProductsGroupList"
import { prisma } from "@/lib/db"

export default async function Page() {
  const pizzas = [
    {
      id: 1,
      name: "Четыре сыра",
      price: 550,
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif",
      items: [{ price: 550 }],
    },
    {
      id: 2,
      name: "Четыре сыра",
      price: 550,
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif",
      items: [{ price: 550 }],
    },
    {
      id: 3,
      name: "Четыре сыра",
      price: 550,
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif",
      items: [{ price: 550 }],
    },
    {
      id: 4,
      name: "Четыре сыра",
      price: 550,
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif",
      items: [{ price: 550 }],
    },
    {
      id: 5,
      name: "Четыре сыра",
      price: 550,
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif",
      items: [{ price: 550 }],
    },
    {
      id: 6,
      name: "Четыре сыра",
      price: 550,
      imageUrl:
        "https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif",
      items: [{ price: 550 }],
    },
  ]

  const categories = await prisma.category.findMany({
    include: {
      products: { include: { productVariations: true, ingredients: true } },
    },
  })
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar
        categories={categories.filter(
          (category) => category.products.length > 0
        )}
      />
      <Container className="mt-10 pb-14">
        <div className="flex gap-15">
          <div className="w-62.5">
            <Filters className="" />
          </div>
          {/* Товары */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      items={category.products}
                      categoryId={category.id}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
