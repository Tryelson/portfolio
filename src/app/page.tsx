'use client';

import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Experiences from "./components/Experiences";
import Header from "./components/Header";
import Projects from "./components/Projects";

export default function Home() {

	return (
		<Container p='0' w='calc(100% - 40px)' maxW={'1200px'}>
			<Flex justify={'space-between'} align={{base: 'center', lg: 'unset'}} direction={{base: 'column', lg: 'row'}} gap='10px'>
				<Box py={{base: '40px', lg: '100px'}}  position={{base: 'relative', lg: 'sticky'}} top='0' w='100%' maxW={{base: '100%', lg: '520px'}} maxH='100vh'>
					<Header />
				</Box>

				<Box w='100%' maxW={{base: '100%', lg: '600px'}} mb='100px' mt={{base: '0', lg: '100px'}}>
					<Experiences />
					<Projects />

					<Box maxW='300px' mt='50px'>
						<Text color={'#64748b'} fontSize={'0.875rem'}>Built with <Text as='span' color={'#fff'}>Next.js, Typescript</Text> and <Text as='span' color='#fff'>Chakra UI</Text>, deployed with <Text as='span' color='#fff'>Vercel.</Text></Text>
					</Box>
				</Box>
			</Flex>
		</Container>
	)
}
