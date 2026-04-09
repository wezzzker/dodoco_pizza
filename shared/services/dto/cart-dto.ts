import {
  Cart,
  CartItem,
  Ingredient,
  Product,
  ProductVariation,
} from "@/app/generated/prisma-client"

export type CartItemDTO = CartItem & {
  productItem: ProductVariation & {
    product: Product
  }
  ingredients: Ingredient[]
}

export interface CartDTO extends Omit<Cart, "cartItems"> {
  cartItems: CartItemDTO[]
}

export interface CreateCartItemValues {
  productItemId: number
  ingredients?: number[]
}

export interface CartResponse extends Pick<
  Cart,
  "id" | "totalAmount" | "token" | "userId" | "createdAt" | "updatedAt"
> {
  cartItems: CartItemDTO[]
}
