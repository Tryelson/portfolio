'use client'

import { Box } from "@chakra-ui/react"
import { useState } from "react"

export default function Project({ children }: { children: React.ReactNode }){

    const [hoverCardAnimation, setHoverCardAnimation] = useState(false)

    return (
        <Box onMouseOver={() => setHoverCardAnimation(true)} onMouseLeave={() => setHoverCardAnimation(false)} p={'10px'} borderRadius={'8px'}  ml={{base: '0px', lg: '-20px'}} padding='20px' backgroundColor={{base: 'rgb(100 116 139 / 14%)', lg: 'unset'}} transition={'all 0.3s ease-in-out'} _hover={{backgroundColor: 'rgb(100 116 139 / 14%)', boxShadow: '0 5px 16px 1px rgb(0 0 0 / 30%)'}}>
            { children }
        </Box>
    )
}