import { skills, skillsSume } from "./skills";

export interface ExperiencesType {
    url: string,
    period: string,
    title: string,
    subtitle: string,
    description: string,
    listItems: Array<string>,
    skillsList: Array<{name: string, color: string, fontColor: string}>
}

export const experiences: ExperiencesType[] = [
    {
        url: 'https://www.sumetecnologia.com.br/',
        period: 'Abr 2024 - Present',
        title: 'Tech Leader · Sumé Tecnologia',
        subtitle: 'Frontend Engineer',
        description: 'As a Frontend Tech Leader in Sumé, my journey is to build strong and effective teams. Also, my goal is not only to guide but also to inspire my team to reach their full potential. I believe in the power of interpersonal relationships and work to cultivate an environment where each member feels valued and empowered.',
        listItems: [],
        skillsList: skillsSume
    },
    {
        url: 'https://www.hivegroup.com.br',
        period: '2021 - Abr 2024',
        title: 'Software Engineer · HiveGroup',
        subtitle: 'Frontend Engineer',
        description: 'Responsible for building scalable responsive web applications using HTML/CSS, SCSS, Javascript, Typescript, Tailwind, Bootstrap and Chakra UI.',
        listItems: [
            '1. Working with some frameworks such as React.js, Vue.js;',
            '2. Familiar with CMS integrations (wordpress);',
            '3. Working building and maintaining project management systems, Landing Pages and websites',
            '4. Working with integrations using REST API;'
        ],
        skillsList: skills
    },
]