import './globals.css'
import type { Metadata } from 'next'
import { Bebas_Neue } from 'next/font/google'
import { Header } from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import WhatsappButton from '@/components/WhatsappButton/WhatsappButton'


const bebas = Bebas_Neue({ 
  subsets: ['latin'],
  weight:['400']
 })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={bebas.className}>
        <Header />
        <WhatsappButton />
        {children}
        <Footer />
        </body>
    </html>
  )
}
