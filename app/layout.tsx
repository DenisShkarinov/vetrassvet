import './globals.css'
import { Inter } from 'next/font/google'
import {Metadata} from "next";

const inter = Inter({ subsets: ['latin'] })

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
