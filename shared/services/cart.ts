import { axiosInstance } from "./instance"
import { ApiEndpoints } from "./endpoints"
import { CartDTO } from "./dto/cart-dto"

export const fetchCart = async (): Promise<CartDTO> => {
  return (await axiosInstance.get<CartDTO>(ApiEndpoints.CART)).data
}

export const updateCart = async (
  id: number,
  quantity: number
): Promise<CartDTO> => {
  return (
    await axiosInstance.patch<CartDTO>(ApiEndpoints.CART + `/${id}`, {
      quantity,
    })
  ).data
}
