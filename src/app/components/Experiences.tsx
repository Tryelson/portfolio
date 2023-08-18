'use client';

import { ArrowUpIcon } from "@chakra-ui/icons";
import { Badge, Box, Flex, Heading, Link, List, ListItem, Text } from "@chakra-ui/react";
import { useState } from "react";
import { fadeInAnimation, paragraphAnimation } from "../animations";
import { skills } from "../utils/skills";
import BadgeSkillsList from "./BadgeSkillsList";

export default function Experiences(){

    const [hoverCardAnimation, setHoverCardAnimation] = useState(false)

    return (
        <Box w='100%' maxW='600px' mt='20px' ml='auto'>
            <Box overflow='hidden' mb='100px'>
                <Text as='p' color={'#94A3B8'} animation={paragraphAnimation}>
                    I'm a front-end engineer specializing in building exceptional digital experience. Currently, I'm focused on building <Text as='span' color='white'>accessible, scalable, human-centered</Text> products at <Link href='https://www.hivegroup.com.br' target={'_blank'} color='#ADF' textDecoration={'underline'}>HiveGroup</Link>, focusing on <Text as='span' color='white'>user experience.</Text> Acting in the construction and maintenance of project management systems, Landing Pages and websites.<br/><br/>
                    My main focus these days is building products for our clients at <Link href='https://www.hivegroup.com.br' target={'_blank'} color='#ADF' textDecoration={'underline'}>HiveGroup</Link>. In my free time I like to play video games, hanging out with my wife and build personal projects.
                </Text>
            </Box>

            <Link animation={paragraphAnimation} display='flex' href="https://www.hivegroup.com.br" target={'_blank'} _hover={{textDecoration: 'none'}} w='100%'>
                <Box onMouseOver={() => setHoverCardAnimation(true)} onMouseLeave={() => setHoverCardAnimation(false)} ml='-20px' transition={'all 0.3s ease-in-out'} borderRadius={'8px'} padding='20px' _hover={{backgroundColor: 'rgb(100 116 139 / 14%)', boxShadow: '0 5px 16px 1px rgb(0 0 0 / 30%)'}}>
                    <Flex gap='40px'>
                        <Box w='fit-content'>
                            <Text color={'#64748b'} whiteSpace='nowrap' fontSize='0.875rem' textTransform={'uppercase'}>2021 - Present</Text>
                        </Box>

                        <Box w='100%' maxW='500px'>
                            <Heading display={'flex'} alignItems='center' as='h4' fontSize='17px' fontWeight={'light'}>
                                Software Engineer · HiveGroup 
                                <Box transition={'all 0.3s ease-in-out'} transform={`${hoverCardAnimation ? 'translate(2px, -2px)' : ''}`}>
                                    <ArrowUpIcon  ml='8px' mt='-5px' transition={'all 0.3s ease-in-out'} transform={'rotate(45deg)'} />
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
                </Box>
            </Link>

            <Box maxW='300px' mt='50px'>
                <Text color={'#64748b'} fontSize={'0.875rem'}>Coded in Visual Studio Code. Built with <Text as='span' color={'#fff'}>Next.js, Typescript</Text> and <Text as='span' color='#fff'>Chakra UI</Text>, deployed with <Text as='span' color='#fff'>Vercel.</Text></Text>
            </Box>
        </Box>
    )
}