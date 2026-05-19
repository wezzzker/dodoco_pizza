"use client"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Container, Title } from "@/shared/components/shared"
import { useCart } from "@/shared/hooks"
import * as Checkout from "@/shared/components/shared/checkout"
import { CheckoutFormValues } from "@/shared/components/shared/checkout/checkout-form-schema"
import { createOrder } from "@/app/actions"
import toast from "react-hot-toast"
import React from "react"

export default function CheckoutPage() {
  const { cartItems, removeCartItem, totalAmount, updateItemQuantity } =
    useCart()
  const [submitting, setSubmitting] = React.useState(false)

  const form = useForm<Checkout.FormValues>({
    resolver: zodResolver(Checkout.Schema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      adress: "",
      comment: "",
    },
  })
  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1
    updateItemQuantity(id, newQuantity)
  }
  const onSubmit = async (data: Checkout.FormValues) => {
    try {
      setSubmitting(true)
      const url = await createOrder(data)
      toast.success("Заказ успешно оформлен! 📝 Переход на оплату... ", {
        icon: "✅",
      })
      if (url) {
        location.href = url
      }
    } catch (error) {
      toast.error("Не удалось создать заказ", {
        icon: "❌",
      })

      setSubmitting(false)

      console.log(error)
    }
  }
  return (
    <Container className="pb-8">
      <Title
        text="Оформление заказа"
        className="my-8 text-[36px] font-extrabold"
      />
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-5">
            <div className="flex flex-1 flex-col gap-5">
              <Checkout.Cart
                cartItems={cartItems}
                onClickCountButton={onClickCountButton}
                removeCartItem={removeCartItem}
              />
              <Checkout.PersonalData />
              <Checkout.Adress />
            </div>
            {/* ---------- */}
            <Checkout.Sidebar totalAmount={totalAmount} loading={submitting} />
          </div>
        </form>
      </FormProvider>
    </Container>
  )
}
