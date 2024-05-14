'use client';

import { ArrowUpIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Link, List, ListItem, Text } from "@chakra-ui/react";
import { useState } from "react";
import { paragraphAnimation } from "../animations";
import { skills, skillsSume } from "../utils/skills";
import BadgeSkillsList from "./BadgeSkillsList";

export default function Experiences(){

    const [hoverCardAnimation, setHoverCardAnimation] = useState(false)

    return (
        <Box animation={paragraphAnimation}>
            <Box overflow='hidden' mb='100px'>
                <Text as='p' color={'#94A3B8'}>
                    As a Frontend Tech Leader, I bring extensive experience in building and leading high-performance development
                    teams, guiding and inspiring the team to excel. I also foster a collaborative and trust-based environment where
                    each team member feels valued and empowered to reach their full potential. 
                    <br/><br/>
                    My leadership is defined by empathy,
                    respect, and a commitment to continuous growth, both personal and professional, for all team members.
                    Additionally, as a frontend specialist, I have extensive experience in developing web applications and enhancing
                    user experience.
                </Text>
            </Box>

            <Flex direction='column' gap='25px'>
                <Link display='flex' href="https://www.sumetecnologia.com.br/" target={'_blank'} w='100%' onMouseOver={() => setHoverCardAnimation(true)} onMouseLeave={() => setHoverCardAnimation(false)} ml={{base: '0px', lg: '-20px'}} transition={'all 0.3s ease-in-out'} borderRadius={'8px'} padding='20px' backgroundColor={{base: 'rgb(100 116 139 / 14%)', lg: 'unset'}} _hover={{backgroundColor: 'rgb(100 116 139 / 14%)', textDecoration: 'none', boxShadow: '0 5px 16px 1px rgb(0 0 0 / 30%)'}}>
                    <Flex gap='40px' direction={{base: 'column', lg: 'row'}}>
                        <Box w='fit-content'>
                            <Text color={'#64748b'} whiteSpace='nowrap' fontSize='0.875rem' textTransform={'uppercase'}>Abr 2024 - Present</Text>
                        </Box>

                        <Box w='100%' maxW={{base: '100%', lg: '500px'}}>
                            <Heading display={'flex'} color={`${hoverCardAnimation ? '#AADDFF' : ''}`} alignItems='center' as='h4' fontSize='17px' fontWeight={'light'}>
                                Tech Leader · Sumé Tecnologia 
                                <Box transition={'transform 0.3s ease-in-out'} transform={`${hoverCardAnimation ? 'translate(2px, -2px)' : ''}`}>
                                    <ArrowUpIcon  ml='8px' mt='-5px' transition={'transform 0.3s ease-in-out'} transform={'rotate(45deg)'} />
                                </Box>
                            </Heading>

                            <Text color={'#64748b'} mt='5px'>Frontend Engineer</Text>

                            <Box>
                                <Text color={'#94A3B8'} mt='20px'>
                                    As a Frontend Tech Leader in Sumé, my journey is to build strong and effective teams. Also, my
                                    goal is not only to guide but also to inspire my team to reach their full potential. I believe in the power of
                                    interpersonal relationships and work to cultivate an environment where each member feels valued and
                                    empowered.
                                </Text>

                                <Flex mt='20px' gap={'10px'} wrap='wrap'>
                                    <BadgeSkillsList skills={skillsSume} />
                                </Flex>
                            </Box>
                        </Box>
                    </Flex>
                </Link>

                <Link display='flex' href="https://www.hivegroup.com.br" target={'_blank'} w='100%' onMouseOver={() => setHoverCardAnimation(true)} onMouseLeave={() => setHoverCardAnimation(false)} ml={{base: '0px', lg: '-20px'}} transition={'all 0.3s ease-in-out'} borderRadius={'8px'} padding='20px' backgroundColor={{base: 'rgb(100 116 139 / 14%)', lg: 'unset'}} _hover={{backgroundColor: 'rgb(100 116 139 / 14%)', textDecoration: 'none', boxShadow: '0 5px 16px 1px rgb(0 0 0 / 30%)'}}>
                    <Flex gap='40px' direction={{base: 'column', lg: 'row'}}>
                        <Box w='fit-content'>
                            <Text color={'#64748b'} whiteSpace='nowrap' fontSize='0.875rem' textTransform={'uppercase'}>2021 - Abr 2024</Text>
                        </Box>

                        <Box w='100%' maxW={{base: '100%', lg: '500px'}}>
                            <Heading display={'flex'} color={`${hoverCardAnimation ? '#AADDFF' : ''}`} alignItems='center' as='h4' fontSize='17px' fontWeight={'light'}>
                                Software Engineer · HiveGroup 
                                <Box transition={'transform 0.3s ease-in-out'} transform={`${hoverCardAnimation ? 'translate(2px, -2px)' : ''}`}>
                                    <ArrowUpIcon  ml='8px' mt='-5px' transition={'transform 0.3s ease-in-out'} transform={'rotate(45deg)'} />
                                </Box>
                            </Heading>

                            <Text color={'#64748b'} mt='5px'>Front-end Engineer</Text>

                            <Box>
                                <Text color={'#94A3B8'} mt='20px'>
                                    Responsible for building scalable responsive web applications using HTML/CSS, SCSS, Javascript, Typescript, Tailwind, Bootstrap and Chakra UI;
                                </Text>

                                <List color={'#94A3B8'} mt='20px'>
                                    <ListItem><Text as='span' color={'#AADDFF'}>1.</Text> Working with some frameworks such as React.js, Vue.js</ListItem>
                                    <ListItem><Text as='span' color={'#AADDFF'}>2.</Text> Familiar with CMS integrations (wordpress); </ListItem>
                                    <ListItem><Text as='span' color={'#AADDFF'}>3.</Text> Working building and maintaining project management systems, Landing Pages and websites; </ListItem>
                                    <ListItem><Text as='span' color={'#AADDFF'}>4.</Text> Working with integrations using the REST API;</ListItem>
                                </List>

                                <Flex mt='20px' gap={'10px'} wrap='wrap'>
                                    <BadgeSkillsList skills={skills} />
                                </Flex>
                            </Box>
                        </Box>
                    </Flex>
                </Link>
            </Flex>
        </Box>
    )
}