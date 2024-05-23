'use client';

import "@fontsource/inter";
import '@fontsource/inter/400.css'

import { CacheProvider } from '@chakra-ui/next-js'
import { Box, ChakraProvider, ColorModeScript, Flex, Spinner, extendTheme } from '@chakra-ui/react'
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
                {/* <Flex className='black-animation' alignItems={'center'} justifyContent={'center'} overflow='hidden'>
                    <Box animation={'fadeIn 0.3s ease-in-out'}>
                        <Spinner w={'100px'} h='100px' />
                    </Box>
                </Flex> */}

                <Box className='background-effect'>
                    { children }
                </Box>
            </ChakraProvider>
        </CacheProvider>
    )
}