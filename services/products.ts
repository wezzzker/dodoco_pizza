import { Product } from "@/app/generated/prisma-client"
import { axiosInstance } from "./instance"
import { ApiEndpoints } from "./endpoints"

export const search = async (query: string): Promise<Product[]> => {
  return (
    await axiosInstance.get<Product[]>(ApiEndpoints.SEARCH_PRODUCT, {
      params: { query },
    })
  ).data
}
