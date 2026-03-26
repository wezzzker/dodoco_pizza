import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./global.css"


const nunito = Nunito({
  subsets: ["cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
})


export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
        <head>
            <link href="/favicon.ico" rel="icon" data-rh="true"/>
        </head>
      <body className={nunito.variable}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
