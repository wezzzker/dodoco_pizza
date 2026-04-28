"use client"
import {
  CheckoutItem,
  Container,
  PaymentDetails,
  Title,
  WhiteBlock,
} from "@/shared/components/shared"
import { CheckoutItemSkeleton } from "@/shared/components/shared/CheckoutItemSkeleton"
import { CheckoutSidebar } from "@/shared/components/shared/CheckoutSidebar"
import { Button, Input, Skeleton, Textarea } from "@/shared/components/ui"
import { PizzaSize, PizzaType } from "@/shared/constants/pizza"
import { useCart } from "@/shared/hooks"
import { getCartItemDetails } from "@/shared/lib"
import { Box, Percent, Trash2Icon, Truck } from "lucide-react"

export default function CheckoutPage() {
  const {
    addCartItem,
    cartItems,
    loading,
    removeCartItem,
    totalAmount,
    updateItemQuantity,
  } = useCart()

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1
    updateItemQuantity(id, newQuantity)
  }

  return (
    <Container>
      <Title
        text="Оформление заказа"
        className="my-8 text-[36px] font-extrabold"
      />
      <div className="flex gap-5">
        <div className="flex flex-1 flex-col gap-5">
          <WhiteBlock title="1. Корзина">
            <div className="flex flex-col gap-6">
              {cartItems.map((item) => (
                <CheckoutItem
                  key={item.id}
                  id={item.id}
                  details={
                    item.pizzaSize
                      ? getCartItemDetails(
                          item.ingredients,
                          item.pizzaType as PizzaType,
                          item.pizzaSize as PizzaSize
                        )
                      : ""
                  }
                  imageUrl={item.imageUrl}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  onClickCountButton={(type) =>
                    onClickCountButton(item.id, item.quantity, type)
                  }
                  onClickRemove={() => removeCartItem(item.id)}
                  disabled={item.disabled}
                />
              ))}
            </div>
          </WhiteBlock>
          <WhiteBlock title="2. Персональная информация">
            <div className="grid grid-cols-2 gap-5">
              <Input name="firstName" placeholder="Имя" />
              <Input name="lastName" placeholder="Фамилия" />
              <Input name="email" placeholder="E-mail" />
              <Input name="phone" placeholder="Телефон" />
            </div>
          </WhiteBlock>
          <WhiteBlock title="3. Адрес доставки">
            <div className="flex flex-col gap-5">
              <Input name="adress" placeholder="Введите адрес доставки" />
              <Textarea
                rows={5}
                className="text-base"
                placeholder="Комментарий к заказу"
              />
            </div>
          </WhiteBlock>
        </div>
        {/* ---------- */}
        <CheckoutSidebar totalAmount={totalAmount} />
      </div>
    </Container>
  )
}
