'use client';

import { Container } from '@chakra-ui/react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header';
import { Providers } from './providers'

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
          <Container p='0' w='calc(100% - 40px)' maxW={'1200px'} mt='100px'>
            <Header />
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  )
}