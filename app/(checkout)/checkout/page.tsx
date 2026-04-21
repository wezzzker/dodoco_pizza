import {
  Container,
  PaymentDetails,
  Title,
  WhiteBlock,
} from "@/shared/components/shared"
import { Button, Input, Textarea } from "@/shared/components/ui"
import { Box, Percent, Trash2Icon, Truck } from "lucide-react"

export default function CheckoutPage() {
  return (
    <Container>
      <Title
        text="Оформление заказа"
        className="my-8 text-[36px] font-extrabold"
      />
      <div className="flex gap-5">
        <div className="flex flex-1 flex-col gap-5">
          <WhiteBlock title="1. Корзина">2312323</WhiteBlock>
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
        <div className="w-[450px]">
          <WhiteBlock className="sticky top-4">
            <div className="flex flex-col gap-1 p-6">
              <span className="text-xl">Итого:</span>
              <span className="text-3xl font-extrabold">{"3545  ₽"}</span>
            </div>
            {/*  */}
            <div className="border-y p-6 text-lg">
              <PaymentDetails title="Стоимость товаров" price={345}>
                <Box width={18} className="text-neutral-400" />
              </PaymentDetails>
              <PaymentDetails title="Налог" price={345}>
                <Percent width={18} className="text-neutral-400" />
              </PaymentDetails>
              <PaymentDetails title="Стоимость доставки" price={345}>
                <Truck width={18} className="text-neutral-400" />
              </PaymentDetails>
            </div>
            {/*  */}
            <div className="p-6">
              <span className="text-neutral-400">У меня есть промокод</span>
              <Button
                type="submit"
                className="mt-6 h-14 w-full rounded-md text-base font-bold"
              >
                Перейти к оплате
              </Button>
            </div>
          </WhiteBlock>
        </div>
      </div>
    </Container>
  )
}
