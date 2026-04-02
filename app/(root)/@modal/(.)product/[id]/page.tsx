import {
  ChooseProductModal,
  Container,
  GroupVariants,
  ProductImage,
  Title,
} from "@/shared/components/shared"
import { prisma } from "@/shared/lib/db"
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


export default async function ProductModalPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = await prisma.product.findFirst({ 
    where:
    { id: Number(id) },
  include:{
    ingredients:true,
    productVariations:true
  } 
})

  if (!product) return notFound()

  return <ChooseProductModal product={product}/>
}
