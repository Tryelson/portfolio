'use client';

import { ArrowUpIcon } from "@chakra-ui/icons";
import { Box, Text, Image, Flex, Heading, Link, Badge } from "@chakra-ui/react";
import { useState } from "react";
import { paragraphAnimation } from "../animations";
import { skillsPhoneBookApp, skillsTablePro, skillsTodoApp, skillsWeMovies } from "../utils/skills";
import BadgeSkillsList from "./BadgeSkillsList";
import Project from "./Project";

export default function Projects(){

    const [hoverCardAnimation, setHoverCardAnimation] = useState(false)

    return (
        <Box mt='100px' animation={paragraphAnimation} display='flex' flexDir={'column'} gap='20px'>
            <Heading as={'h4'} mb='30px' color={'#aaddff'} textTransform={'uppercase'} fontSize={'20px'}>Projects</Heading>

            <Project>
                <Link href="https://wemovies-tryelsonmarques.vercel.app/" target="_blank" _hover={{textDecoration: 'none'}} display='flex' flexDirection={{base: 'column', lg: 'row'}} gap={'20px'}>
                    <Box w='100%' maxW={{base: '100%', lg: '180px'}}>
                        <Image minW={{base: '100%', lg: '180px'}} maxH={'400px'} src='/wemovies.png' alt='We movies screenshot' />
                    </Box>

                    <Flex direction={'column'} gap='10px'>
                        <Heading display={'flex'} transition={'all 0.3s ease-in-out'} color={`${hoverCardAnimation ? '#AADDFF' : ''}`} alignItems='center' as='h4' fontSize='17px' fontWeight={'light'}>
                            We Movies

                            <Box transition={'transform 0.3s ease-in-out'} transform={`${hoverCardAnimation ? 'translate(2px, -2px)' : ''}`}>
                                <ArrowUpIcon  ml='8px' mt='-5px' transition={'transform 0.3s ease-in-out'} transform={'rotate(45deg)'} />
                            </Box>
                        </Heading>

                        <Text color={'#94A3B8'}>This is a small application I created for a test at WeFit. The purpose is simply to simulate a marketplace where the user can choose and buy movies.</Text>

                        <Flex gap={'10px'} flexWrap={'wrap'}>
                            <BadgeSkillsList skills={skillsWeMovies} />
                        </Flex>
                    </Flex>
                </Link>
            </Project>

            <Project>
                <Link href="https://phone-book-tryelson.vercel.app/" target="_blank" _hover={{textDecoration: 'none'}} display='flex' flexDirection={{base: 'column', lg: 'row'}} gap={'20px'}>
                    <Box w='100%' maxW={{base: '100%', lg: '180px'}}>
                        <Image minW={{base: '100%', lg: '180px'}} maxH={'400px'} src='/phone-book-app.png' alt='Phone book Screenshot' />
                    </Box>

                    <Flex direction={'column'} gap='10px'>
                        <Heading display={'flex'} transition={'all 0.3s ease-in-out'} color={`${hoverCardAnimation ? '#AADDFF' : ''}`} alignItems='center' as='h4' fontSize='17px' fontWeight={'light'}>
                            Phone Book app
                            <Box transition={'transform 0.3s ease-in-out'} transform={`${hoverCardAnimation ? 'translate(2px, -2px)' : ''}`}>
                                <ArrowUpIcon  ml='8px' mt='-5px' transition={'transform 0.3s ease-in-out'} transform={'rotate(45deg)'} />
                            </Box>
                        </Heading>

                        <Text color={'#94A3B8'}>This is a fullstack application, I've made both frontend and backend sides. In this mini app, you can use all the basics CRUD operations, such as, create a new contact, read contacts, edit an existing contact and delete.</Text>

                        <Flex gap={'10px'} flexWrap={'wrap'}>
                            <BadgeSkillsList skills={skillsPhoneBookApp} />
                        </Flex>
                    </Flex>
                </Link>
            </Project>

            {/* <Project>
                <Link href="https://todo-app-tryelson.vercel.app" target="_blank" _hover={{textDecoration: 'none'}} display='flex' flexDirection={{base: 'column', lg: 'row'}} gap={'20px'}>
                    <Box w='100%' maxW={{base: '100%', lg: '180px'}}>
                        <Image minW={{base: '100%', lg: '180px'}} maxH={'400px'} src='/todo-app.png' alt='Todo App Screenshot' />
                    </Box>

                    <Flex direction={'column'} gap='10px'>
                        <Heading display={'flex'} transition={'all 0.3s ease-in-out'} color={`${hoverCardAnimation ? '#AADDFF' : ''}`} alignItems='center' as='h4' fontSize='17px' fontWeight={'light'}>
                            Build a Todo App for project management 
                            <Box transition={'transform 0.3s ease-in-out'} transform={`${hoverCardAnimation ? 'translate(2px, -2px)' : ''}`}>
                                <ArrowUpIcon  ml='8px' mt='-5px' transition={'transform 0.3s ease-in-out'} transform={'rotate(45deg)'} />
                            </Box>
                        </Heading>

                        <Text color={'#94A3B8'}>A frontend application simulating a project management system. In this Todo App, you can easily drag and drop your tasks to change their status type. You can create, delete, and edit tasks. Try it now!</Text>

                        <Flex gap={'10px'} flexWrap={'wrap'}>
                            <BadgeSkillsList skills={skillsTodoApp} />
                        </Flex>
                    </Flex>
                </Link>
            </Project> */}

            <Project>
                <Link href="https://table-pro-tryelson.vercel.app" target="_blank" _hover={{textDecoration: 'none'}} display='flex' flexDirection={{base: 'column', lg: 'row'}} gap={'20px'}>
                    <Box w='100%' maxW={{base: '100%', lg: '180px'}}>
                        <Image minW={{base: '100%', lg: '180px'}} maxH={'400px'} src='/table-pro.png' alt='Todo Pro Screenshot' />
                    </Box>

                    <Flex direction={'column'} gap='10px'>
                        <Heading display={'flex'} transition={'all 0.3s ease-in-out'} color={`${hoverCardAnimation ? '#AADDFF' : ''}`} alignItems='center' as='h4' fontSize='17px' fontWeight={'light'}>
                            It's just a table for upload some files!
                            <Box transition={'transform 0.3s ease-in-out'} transform={`${hoverCardAnimation ? 'translate(2px, -2px)' : ''}`}>
                                <ArrowUpIcon  ml='8px' mt='-5px' transition={'transform 0.3s ease-in-out'} transform={'rotate(45deg)'} />
                            </Box>
                        </Heading>

                        <Text color={'#94A3B8'}>I Built a table just for upload files, using Firebase to the storage and Next.js with Typescript for the frontend. Limited up to 5, you can create or delete a file.</Text>

                        <Flex gap={'10px'} flexWrap={'wrap'}>
                            <BadgeSkillsList skills={skillsTablePro} />
                        </Flex>
                    </Flex>
                </Link>
            </Project>
        </Box>
    )
}