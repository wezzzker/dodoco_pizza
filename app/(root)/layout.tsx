import type { Metadata } from "next"
import { Header } from "@/components/shared"

export const metadata: Metadata = {
  title: "DoDoCo Pizza | Главная",
  description: "Пет проект на Next",
 
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
   
    <main className="min-h-screen">
      <Header />
      {children}
    </main>
   
  )
}
