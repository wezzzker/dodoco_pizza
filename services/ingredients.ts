import { axiosInstance } from "./instance"
import { ApiEndpoints } from "./endpoints"
import { Ingredient } from "@/app/generated/prisma-client"

export const getAll = async (): Promise<Ingredient[]> => {
  return (await axiosInstance.get<Ingredient[]>(ApiEndpoints.GET_INGREDIENTS))
    .data
}
