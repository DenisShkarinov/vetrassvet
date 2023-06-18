import './globals.scss'
import { Roboto } from 'next/font/google'
import {Metadata} from "next";

const inter = Roboto({
  weight: "400",
  subsets: ['cyrillic'],
  display: "swap"
})

export const metadata: Metadata = {
  title: 'Vetrassvet',
  description: 'Ветеринарная клиника Vetrassvet'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
