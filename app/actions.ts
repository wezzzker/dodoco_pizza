"use server"

import { CheckoutFormValues } from "@/shared/components/shared/checkout/checkout-form-schema"
import { prisma } from "@/shared/lib/db"
import { OrderStatus } from "./generated/prisma-client"
import { cookies } from "next/headers"
import { createPayment, sendEmail } from "@/shared/lib"
import * as Email from "@/shared/components/shared/email-templates"

export async function createOrder(data: CheckoutFormValues) {
  try {
    const cookieStore = cookies()
    const cartToken = (await cookieStore).get("cartToken")?.value

    if (!cartToken) throw new Error("Cart token not found")

    // Ищем корзину по токену
    const userCart = await prisma.cart.findFirst({
      include: {
        user: true,
        cartItems: {
          include: {
            ingredients: true,
            productItem: {
              include: { product: true },
            },
          },
        },
      },
      where: { token: cartToken },
    })
    // Обрабатываем ощибки
    if (!userCart) throw new Error("Cart not found")
    if (userCart.totalAmount === 0) throw new Error("Cart is empty")

    // Создаем заказ
    const order = await prisma.order.create({
      data: {
        token: cartToken,
        fullName: data.firstName + " " + data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.adress,
        comment: data.comment,
        totalAmout: userCart.totalAmount,
        status: OrderStatus.PENDING,
        items: JSON.stringify(userCart.cartItems),
      },
    })

    // Очищаем корзину
    await prisma.cart.update({
      where: { id: userCart.id },
      data: { totalAmount: 0 },
    })

    await prisma.cartItem.deleteMany({
      where: { cartId: userCart.id },
    })

    // Создаем платеж
    const paymentData = await createPayment({
      orderId: order.id,
      amount: order.totalAmout,
      description: "Оплата заказа №" + order.id,
    })

    if (!paymentData) throw new Error("Payment data not found")

    await prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        paymendId: paymentData.id,
      },
    })

    // Отправляем письмо с оплатой
    const paymentUrl = paymentData.confirmation.confirmation_url
    await sendEmail(
      data.email,
      "DoDoCo Pizza | Оплатите заказ №" + order.id,
      Email.Payment({
        orderId: order.id,
        totalAmount: order.totalAmout,
        paymentUrl,
      })
    )
    return paymentUrl
  } catch (error) {
    console.log(error)
  }
}
