import { ArrowUpIcon } from "@chakra-ui/icons"
import { Box, Flex, Heading, List, ListItem, Link, Text } from "@chakra-ui/react"
import BadgeSkillsList from "./BadgeSkillsList"
import { ExperiencesType } from "../utils/experiences"
import { useState } from "react"

interface ExperienceProps {
    experience: ExperiencesType
}

export default function Experience({ experience }: ExperienceProps){

    const [hoverCardAnimation, setHoverCardAnimation] = useState(false)

    return (
        <Link variant='primary' href={experience.url} target={'_blank'} onMouseOver={() => setHoverCardAnimation(true)} onMouseLeave={() => setHoverCardAnimation(false)} ml={{base: '0px', lg: '-20px'}} backgroundColor={{base: 'rgb(100 116 139 / 14%)', lg: 'unset'}}>
            <Flex gap='40px' direction={{base: 'column', lg: 'row'}}>
                <Box w='fit-content'>
                    <Text color={'#64748b'} whiteSpace='nowrap' fontSize='0.875rem' textTransform={'uppercase'}>{ experience.period }</Text>
                </Box>

                <Box w='100%' maxW={{base: '100%', lg: '500px'}}>
                    <Heading display={'flex'} color={`${hoverCardAnimation ? '#AADDFF' : ''}`} alignItems='center' as='h4' fontSize='17px' fontWeight={'light'}>
                        { experience.title }
                        <Box transition={'transform 0.3s ease-in-out'} transform={`${hoverCardAnimation ? 'translate(2px, -2px)' : ''}`}>
                            <ArrowUpIcon  ml='8px' mt='-5px' transition={'transform 0.3s ease-in-out'} transform={'rotate(45deg)'} />
                        </Box>
                    </Heading>

                    <Text color={'#64748b'} mt='5px'>{ experience.subtitle }</Text>

                    <Box>
                        <Text color={'#94A3B8'} mt='20px'>
                            { experience.description }
                        </Text>

                        <List color={'#94A3B8'} mt='20px'>
                            {experience.listItems.map((skill, index) => {
                                return (
                                    <ListItem key={index}>{ skill }</ListItem>
                                )
                            })}
                        </List>

                        <Flex mt='20px' gap={'10px'} wrap='wrap'>
                            <BadgeSkillsList skills={experience.skillsList} />
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </Link>
    )
}