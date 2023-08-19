'use client';

import NextLink from 'next/link'
import { ArrowForwardIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { Badge, Box, Flex, Heading, Link, List, ListItem, Text } from "@chakra-ui/react";
import { useState } from "react";
import { fadeInAnimation, paragraphAnimation } from "../animations";
import { skills } from "../utils/skills";
import BadgeSkillsList from "./BadgeSkillsList";

export default function Experiences(){

    const [hoverCardAnimation, setHoverCardAnimation] = useState(false)
    const [hoverResume, setHoverResume] = useState(false)

    return (
        <>
            <Box overflow='hidden' mb='100px'>
                <Text as='p' color={'#94A3B8'} animation={paragraphAnimation}>
                    I'm a front-end engineer specializing in building exceptional digital experience. Currently, I'm focused on building <Text as='span' color='white'>accessible, scalable, human-centered</Text> products at <Link href='https://www.hivegroup.com.br' target={'_blank'} color='#ADF' textDecoration={'underline'}>HiveGroup</Link>, focusing on <Text as='span' color='white'>user experience.</Text> Acting in the construction and maintenance of project management systems, Landing Pages and websites.<br/><br/>
                    My main focus these days is building products for our clients at <Link href='https://www.hivegroup.com.br' target={'_blank'} color='#ADF' textDecoration={'underline'}>HiveGroup</Link>. In my free time I like to play video games, hanging out with my wife and build personal projects.
                </Text>
            </Box>

            <Link animation={paragraphAnimation} display='flex' href="https://www.hivegroup.com.br" target={'_blank'} w='100%' onMouseOver={() => setHoverCardAnimation(true)} onMouseLeave={() => setHoverCardAnimation(false)} ml={{base: '0px', lg: '-20px'}} transition={'all 0.3s ease-in-out'} borderRadius={'8px'} padding='20px' backgroundColor={{base: 'rgb(100 116 139 / 14%)', lg: 'unset'}} _hover={{backgroundColor: 'rgb(100 116 139 / 14%)', textDecoration: 'none', boxShadow: '0 5px 16px 1px rgb(0 0 0 / 30%)'}}>
                <Flex gap='40px' direction={{base: 'column', lg: 'row'}}>
                    <Box w='fit-content'>
                        <Text color={'#64748b'} whiteSpace='nowrap' fontSize='0.875rem' textTransform={'uppercase'}>2021 - Present</Text>
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

            <Box mt='50px' onMouseEnter={() => setHoverResume(true)} onMouseLeave={() => setHoverResume(false)} w='fit-content'>
                <Link as={NextLink} href='/resume.pdf' target='_blank' position={'relative'} w='fit-content' display={'flex'} alignItems='center' gap='10px' color={`${hoverResume ? '#AADDFF' : ''}`} _hover={{textDecoration: 'none'}} _after={{content: `''`, transition: 'all 0.2s ease-in-out', position: 'absolute', bottom: '-2px', left: '0', width: `${hoverResume ? '85%' : '0%'}`, height: '2px', backgroundColor: '#AADDFF'}}>
                    View full Résumé 
                    <ArrowForwardIcon transition='transform 0.3s ease-in-out' transform={`${hoverResume ? 'translateX(5px)' : ''}`} />
                </Link>
            </Box>
        </>
    )
}