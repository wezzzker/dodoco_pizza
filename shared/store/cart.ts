import { create } from "zustand"
import { Api } from "../services/api-client"
import { getCartDetails } from "../lib"
import { CartStateItem } from "../lib/get-cart-details"
import { CreateCartItemValues } from "../services/dto/cart-dto"

export interface CartState {
  loading: boolean
  error: boolean
  totalAmount: number
  cartItems: CartStateItem[]

  /* Получение товаров из корзины */
  fetchCartItems: () => Promise<void>

  /* Запрос на обновление количества товара */
  updateItemQuantity: (id: number, quantity: number) => Promise<void>

  /* Запрос на добавление товара в корзину */
  addCartItem: (values: CreateCartItemValues) => Promise<void>

  /* Запрос на удаление товара из корзины */
  removeCartItem: (id: number) => Promise<void>
}

export const useCartStore = create<CartState>((set, get) => ({
  cartItems: [],
  totalAmount: 0,
  loading: true,
  error: false,
  //
  fetchCartItems: async () => {
    try {
      set({ loading: true })
      const response = await Api.cart.fetchCart()

      set(getCartDetails(response))
    } catch (error) {
      set({ error: true })
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
      set({ error: true })
    } finally {
      set({ loading: false })
    }
  },
  //
  removeCartItem: async (id: number) => {
    try {
      set({ loading: true })
      const response = await Api.cart.deleteCartItem(id)
      set(getCartDetails(response))
    } catch (error) {
      console.error(error)
      set({ error: true })
    } finally {
      set({ loading: false })
    }
  },
  //
  addCartItem: async (values: CreateCartItemValues) => {
    try {
      set({ loading: true })
      const response = await Api.cart.addToCart(values)
      set(getCartDetails(response))
    } catch (error) {
      console.error(error)
      set({ error: true })
    } finally {
      set({ loading: false })
    }
  },
}))
