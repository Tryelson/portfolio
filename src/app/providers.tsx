'use client';

import "@fontsource/inter";
import '@fontsource/inter/400.css'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {

    const theme = extendTheme({
        fonts: {
          heading: `'Inter'`,
          body: `'Inter'`,
        },
    })

    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>
                <ColorModeScript initialColorMode='dark' />
                { children }
            </ChakraProvider>
        </CacheProvider>
    )
}