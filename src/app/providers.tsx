'use client';

import "@fontsource/inter";
import '@fontsource/inter/400.css'

import { CacheProvider } from '@chakra-ui/next-js'
import { Box, ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import { LinkBaseStyle } from "./utils/baseStyle";

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {

    const theme = extendTheme({
        styles: {
            global: {
                body: {
                    background: "",
                }
            },
        },
        fonts: {
          heading: `'Inter'`,
          body: `'Inter'`,
        },
        components: {
            Link: LinkBaseStyle
        }
    })

    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>
                <ColorModeScript initialColorMode='dark' />
                <Box className='background-effect'>
                    { children }
                </Box>
            </ChakraProvider>
        </CacheProvider>
    )
}