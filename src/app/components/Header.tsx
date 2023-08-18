import { Heading, Box, Image, Text, Link, List, ListItem, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { fadeInAnimation, logo } from "../animations";

export default function Header(){

    return (
        <Box as='header' display='flex' justifyContent={'space-between'} height='800px' position={'fixed'}>
				<Flex display={'flex'} direction='column' justify='space-between'>
					<Box>
						<Box display='flex' alignItems={'center'} gap='20px'>
							<Box position={'relative'}>
								<Box transition={'all 0.2s ease-in-out'} position='relative' zIndex={'20'} boxShadow={'0 0 10px #375c7457'} _hover={{boxShadow: '0 0 10px #375c74'}} borderRadius='5px'>
									<Image 
										src={'/logo-rounded.png'} 
										w='70px' 
										h='70px'
										position='relative'
									/> 
								</Box>
							</Box>

							<Box overflow={'hidden'} ml='-20px'>
								<Heading as='h1' ml='20px' fontSize={'3rem'} animation={logo}>Tryelson Marques</Heading>
							</Box>
						</Box>

						<Box overflow={'hidden'}>
							<Heading as='h4' animation={logo} color={'#94A3B8'} fontSize={'1.25rem'} fontWeight='light' mt='10px' mb='20px'>Building digital experiences for the web since 2021.</Heading>
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