import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import CursorFollower from './components/CursorFollower'
import { Box } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tryelson Marques',
  description: 'Welcome to my Portfolio!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // ChakraUI is causing a hydration bug on the className prop in the body tag
    // The `supressHydrationWarning` is to prevent it showing on the console
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}