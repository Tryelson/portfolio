'use client';

import { Box, Flex, Text } from "@chakra-ui/react";
import { paragraphAnimation } from "../animations";
import { experiences } from "../utils/experiences";
import Experience from "./Experience";

export default function Experiences(){

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
                {experiences.map((experience) => {
                    return (
                        <Experience key={experience.url} experience={experience} />
                    )
                })}
            </Flex>
        </Box>
    )
}