import { axiosInstance } from "./instance"
import { ApiEndpoints } from "./endpoints"
import { CartDTO, CreateCartItemValues } from "./dto/cart-dto"

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

export const deleteCartItem = async (id: number): Promise<CartDTO> => {
  return (await axiosInstance.delete<CartDTO>(ApiEndpoints.CART + `/${id}`))
    .data
}

export const addToCart = async (
  values: CreateCartItemValues
): Promise<CartDTO> => {
  return (await axiosInstance.post<CartDTO>(ApiEndpoints.CART, values)).data
}
