import { create } from "zustand"
import { Api } from "../services/api-client"
import { getCartDetails } from "../lib"
import { CartStateItem } from "../lib/get-cart-details"

export interface CartState {
  loading: boolean
  error: Error | null
  items: CartStateItem[]
  totalAmount: number
  fetchCartItems: () => Promise<void>
  updateItemQuantity: (id: number, quantity: number) => Promise<void>
  addCartItem: (values: any) => Promise<void>
  removeCartItem: (id: number) => Promise<void>
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  totalAmount: 0,
  loading: true,
  error: null,
  //
  fetchCartItems: async () => {
    try {
      set({ loading: true })
      const response = await Api.cart.fetchCart()
      set(getCartDetails(response))
    } catch (error) {
      console.error(error)
    } finally {
      set({ loading: false })
    }
  },
  //
  updateItemQuantity: async (id: number, quantity: number) => {
    try {
      set({ loading: true })
      const response = await Api.cart.updateCart(id, quantity)
      set(getCartDetails(response))
    } catch (error) {
      console.error(error)
    } finally {
      set({ loading: false })
    }
  },
  //
  addCartItem: async () => {},
  //
  removeCartItem: async () => {},
}))
