'use client';

import "@fontsource/inter";
import '@fontsource/inter/400.css'

import { CacheProvider } from '@chakra-ui/next-js'
import { Box, ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import { useState, useMemo } from "react";

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

    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    const gradient = useMemo(() => {
        return `radial-gradient(500px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
    }, [cursorPosition.x, cursorPosition.y]) 

    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>
                <ColorModeScript initialColorMode='dark' />
                { children }
            </ChakraProvider>
        </CacheProvider>
    )
}