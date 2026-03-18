import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import { Header } from "../components/shared/Header"

const nunito = Nunito({
  subsets: ["cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "DoDoCo Pizza",
  description: "Пет проект на Next",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={nunito.variable}>
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
