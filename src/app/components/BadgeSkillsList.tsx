'use client';

import { Badge } from "@chakra-ui/react";
import { useState } from "react";

interface BadgeSkillsProps {
    skills: Array<{name: string, color: string}>
}

export default function BadgeSkillsList({skills}: BadgeSkillsProps){

    const [hoveredIndex, setHoveredIndex] = useState<null | number>(null)

    return (
        <>
            {
                skills.map((skill, index) => {
                    return (
                        <Badge onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} key={index} opacity={`${hoveredIndex == index || hoveredIndex == null ? '1' : '0.5'}`} transition='transform, opacity 0.2s ease-in-out' _hover={{boxShadow:`0 0 3px ${skill.color}`}} backgroundColor={skill.color} color={'black'}>{skill.name}</Badge>
                    )
                })
            }
        </>
    )
}