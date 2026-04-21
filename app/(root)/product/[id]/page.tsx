// "use client"
import {
  ChooseProductForm,
  Container,
  GroupVariants,
  ProductImage,
  Title,
} from "@/shared/components/shared"
import { ChooseProduct } from "@/shared/components/shared/ChooseProduct"
import { prisma } from "@/shared/lib/db"
import { useCartStore } from "@/shared/store"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import toast from "react-hot-toast"

interface ProductPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params
  const product = await prisma.product.findFirst({ where: { id: Number(id) } })
  return {
    title: product?.name,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      category: {
        include: { products: { include: { productVariations: true } } },
      },
      productVariations: true,
    },
  })

  if (!product) return notFound()

  return (
    <Container className="my-10 flex flex-col">
      <ChooseProduct product={product} />
    </Container>
  )
}
