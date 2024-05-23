'use client';

import { Box, Container, Flex, Link, Text } from "@chakra-ui/react";
import Experiences from "./components/Experiences";
import Header from "./components/Header";
import Projects from "./components/Projects";
import CursorFollower from "./components/CursorFollower";

export default function Home() {
	return (
		<>
	        <CursorFollower />

			<Container p='0' w='calc(100% - 40px)' maxW={'1300px'} position={'relative'}>
				<Flex justify={'space-between'} align={{base: 'center', lg: 'unset'}} direction={{base: 'column', lg: 'row'}} gap='10px'>
					<Header />

					<Box w='100%' maxW={{base: '100%', lg: '600px'}} mb='100px' mt={{base: '0', lg: '100px'}} textAlign={'justify'}>
						<Experiences />

						<Projects />

						<Box maxW='300px' mt='50px'>
							<Text color={'#64748b'} fontSize={'0.875rem'}>Built with <Text as='span' color={'#fff'}>Next.js, Typescript</Text> and <Text as='span' color='#fff'>Chakra UI</Text>, deployed with <Text as='span' color='#fff'>Vercel.</Text></Text>
						</Box>
					</Box>
				</Flex>
			</Container>
		</>
	)
}
