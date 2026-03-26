import {
  Container,
  GroupVariants,
  ProductImage,
  Title,
} from "@/components/shared"
import { prisma } from "@/lib/db"
import { Metadata } from "next"
import { notFound } from "next/navigation"


interface ProductPageProps {
  params: Promise<{
    id: string
  }>
}



export async function generateMetadata({ params}: ProductPageProps): Promise<Metadata> {
  const { id } = await params
  const product = await prisma.product.findFirst({ where: { id: Number(id) } })
  return {
    title: product?.name,
  }
}


export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = await prisma.product.findFirst({ where: { id: Number(id) } })
  // const variants = await prisma.productVariation.findMany({
  //   where: { product: { id: Number(id) } },
  // })
  if (!product) return notFound()

  return (
    <Container className="my-10 flex flex-col">
      <div className="flex flex-1">
        <ProductImage
          imageUrl={product.imageUrl}
          name={product.name}
          size={40}
        />

        <div className="w-[490px] bg-[#FCFCFC] p-7">
          <Title
            text={product.name}
            size="md"
            className="mb-1 font-extrabold"
          />
          <p className="text-gray-400">Тут будет информация</p>
          <GroupVariants
            items={[
              { name: "Маленька", value: "1" },
              { name: "Средняя", value: "2" },
              { name: "Большая", value: "3" },
            ]}
            selectedValue="2"
          />
        </div>
      </div>
    </Container>
  )
}
