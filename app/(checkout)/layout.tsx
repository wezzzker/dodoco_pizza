import { Header } from "@/shared/components/shared"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "DoDoCo Pizza | Корзина",
}

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="min-h-screen bg-[#F4F1EE]">
      <Header checkout={true} />
      {children}
    </main>
  )
}
