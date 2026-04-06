import { axiosInstance } from "./instance"
import { ApiEndpoints } from "./endpoints"
import { Cart } from "@/app/generated/prisma-client"
import { CartDTO } from "./dto/cart-dto"

export const fetchCart = async (): Promise<CartDTO> => {
  return (await axiosInstance.get<CartDTO>(ApiEndpoints.GET_CART)).data
}
