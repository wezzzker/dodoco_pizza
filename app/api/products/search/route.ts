import { prisma } from "@/lib/db"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  console.log(req.nextUrl.searchParams.get("query"))

  const query = req.nextUrl.searchParams.get("query") || ""
  const products = await prisma.product.findMany({
    where: {
      name: {
        // Ищет вхождение строки
        contains: query,
        // отключает чувствительность к  регистру
        mode: "insensitive",
      },
    },
    take: 5,
  })
  return NextResponse.json(products)
}
