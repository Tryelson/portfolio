'use client'

import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function CursorFollower(){

    const [position, setPosition] = useState<{x: number, y: number} | null>(null)

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPosition({ x: event.pageX, y: event.pageY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            {position && (
                <Box pointerEvents={'none'}>
                    <Box
                        opacity='1'
                        borderRadius='100%'
                        w='785px'
                        h='785px'
                        position='absolute'
                        top={position.y}
                        left={position.x}
                        transform='translate(-50%, -50%)'
                        background='radial-gradient(500px, rgb(36 77 187 / 15%), transparent 70%)'
                        zIndex='999'
                        pointerEvents='none'
                    />
                </Box>
            )}
        </>
    )
}