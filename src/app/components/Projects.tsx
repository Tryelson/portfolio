'use client';

import { ArrowUpIcon } from "@chakra-ui/icons";
import { Box, Text, Image, Flex, Heading, Link } from "@chakra-ui/react";
import { useState } from "react";
import { paragraphAnimation } from "../animations";

export default function Projects(){

    const [hoverCardAnimation, setHoverCardAnimation] = useState(false)

    return (
        <Box mt='100px' animation={paragraphAnimation}>
            <Heading as={'h4'} mb='30px' color={'#aaddff'} textTransform={'uppercase'} fontSize={'20px'}>Projects</Heading>

            <Box onMouseOver={() => setHoverCardAnimation(true)} onMouseLeave={() => setHoverCardAnimation(false)} p={'10px'} borderRadius={'8px'}  ml={{base: '0px', lg: '-20px'}} padding='20px' backgroundColor={{base: 'rgb(100 116 139 / 14%)', lg: 'unset'}} transition={'all 0.3s ease-in-out'} _hover={{backgroundColor: 'rgb(100 116 139 / 14%)', boxShadow: '0 5px 16px 1px rgb(0 0 0 / 30%)'}}>
                <Link href="https://todo-app-tryelson.vercel.app" target="_blank" _hover={{textDecoration: 'none'}} display='flex' gap={'20px'}>
                    <Box maxW='180px'>
                        <Image w='100%' src='/todo-app.png' alt='Todo App Screenshot' />
                    </Box>

                    <Flex direction={'column'} gap='10px'>
                        <Heading display={'flex'} transition={'all 0.3s ease-in-out'} color={`${hoverCardAnimation ? '#AADDFF' : ''}`} alignItems='center' as='h4' fontSize='17px' fontWeight={'light'}>
                            Build a Todo App for project management 
                            <Box transition={'transform 0.3s ease-in-out'} transform={`${hoverCardAnimation ? 'translate(2px, -2px)' : ''}`}>
                                <ArrowUpIcon  ml='8px' mt='-5px' transition={'transform 0.3s ease-in-out'} transform={'rotate(45deg)'} />
                            </Box>
                        </Heading>

                        <Text color={'#94A3B8'}>A frontend application simulating a project management system. In this Todo App, you can easily drag and drop your tasks to change their status type. You can create, delete, and edit tasks. Try it now!</Text>
                    </Flex>
                </Link>
            </Box>
        </Box>
    )
}