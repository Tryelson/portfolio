'use client'

import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function CursorFollower(){

    const [position, setPosition] = useState<{x: number, y: number} | null>(null)

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };
      
        window.addEventListener('mousemove', handleMouseMove);
    
        return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [])

    return (
        <>
            {position && (
                <Box pointerEvents={'none'}>
                    <Box 
                        opacity={'1'}
                        border='2px solid gray' 
                        borderRadius={'100%'} 
                        w='85px'
                        h='85px' 
                        position='absolute' 
                        top={position.y} 
                        left={position.x} 
                        transform='translate(-50%, -50%) scale(1)'
                        transition='top 0.1s ease, left 0.1s ease'
                    >
                    </Box>

                    <Box 
                        position='absolute' 
                        top={position.y} 
                        left={position.x} 
                        bg='gray.600' 
                        borderRadius='100%' 
                        w='8px' 
                        h='8px' 
                        boxShadow='inset 0 0 0px 0.5px var(--light-gray)' 
                        transform='translate(-50%, -50%) scale(1)'
                        transition='top 0.1s ease, left 0.1s ease'
                    >
                    </Box>
                </Box>
            )}
        </>
    )
}