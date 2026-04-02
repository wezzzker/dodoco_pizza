import { Ingredient, Product, ProductVariation } from "@/app/generated/prisma-client";

export type ProductWithRelations = Product & {productVariations:ProductVariation[]; ingredients:Ingredient[]}