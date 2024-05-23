import { Heading, Box, Image, Link, List, ListItem, Flex } from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { fadeInAnimation, logo } from "../animations";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { CgFileDocument } from "react-icons/cg";
import NextLink from 'next/link'

export default function Header(){

    const [hoverResume, setHoverResume] = useState(false)

    return (
		<Box as='header' py={{base: '40px', lg: '100px'}}  position={{base: 'relative', lg: 'sticky'}} top='0' w='100%' maxW={{base: '100%', lg: '520px'}} maxH='100vh'>
			<Flex w='100%' direction='column' justify='space-between' height={'100%'} gap='20px'>
				<Box>
					<Box display='flex' alignItems={'center'} gap='20px'>
						<Box position={'relative'}>
							<Box transition={'all 0.2s ease-in-out'} position='relative' zIndex={'20'} boxShadow={'0 0 10px #375c7457'} _hover={{boxShadow: '0 0 10px #375c74'}} borderRadius='100%' overflow={'hidden'}>
								<Image 
									src={'/profile.jpg'} 
									w='70px' 
									h='70px'
									position='relative'
								/> 
							</Box>
						</Box>

						<Box overflow={'hidden'} ml='-20px'>
							<Heading as='h1' ml='20px' fontSize={{base: '25px', xl: '48px', lg: '35px', sm: '35px'}} animation={logo}>Tryelson Marques</Heading>
						</Box>
					</Box>

					<Box overflow={'hidden'}>
						<Heading as='h4' animation={logo} color={'#94A3B8'} fontSize={'1.25rem'} fontWeight='light' mt='10px' mb='20px'>Building digital experiences.</Heading>
					</Box>

					<Box mt='10px' onMouseEnter={() => setHoverResume(true)} onMouseLeave={() => setHoverResume(false)} w='fit-content'>
						<Link as={NextLink} href='/Resume-EN.pdf' target='_blank' position='relative' color={`${hoverResume ? '#AADDFF' : ''}`} _hover={{textDecoration: 'none'}} _after={{content: `''`, transition: 'all 0.2s ease-in-out', position: 'absolute', bottom: '-2px', left: '0', width: `${hoverResume ? '85%' : '0%'}`, height: '2px', backgroundColor: '#AADDFF'}}>
							<Flex alignItems='center' gap='10px'>
								<CgFileDocument />
								View full Résumé 
								<ArrowForwardIcon className="slidingEffect" transition='transform 0.3s ease-in-out' transform={`${hoverResume ? 'translateX(5px)' : ''}`} />
							</Flex>
						</Link>
					</Box>
				</Box>

				<List display={'flex'} gap='20px' animation={fadeInAnimation}>
					<ListItem opacity={'0.5'} transition={'all 0.2s ease-in-out'} _hover={{color: '#AADDFF', transform: 'translateY(-5px)'}}>
						<Link href='https://www.github.com/tryelson' target={'_blank'}><BsGithub fontSize={'1.5625rem'} /></Link>
					</ListItem>

					<ListItem opacity={'0.5'} transition={'all 0.2s ease-in-out'} _hover={{color: '#AADDFF', transform: 'translateY(-5px)'}}>
						<Link href='https://www.linkedin.com/in/tryelson-marques' target={'_blank'}><BsLinkedin fontSize={'1.5625rem'} /></Link>
					</ListItem>

					<ListItem opacity={'0.5'} transition={'all 0.2s ease-in-out'} _hover={{color: '#AADDFF', transform: 'translateY(-5px)'}}>
						<Link href='https://www.instagram.com/tryelson.marques' target={'_blank'}><BsInstagram fontSize={'1.5625rem'} /></Link>
					</ListItem>
				</List>
			</Flex>
		</Box>
    )
}