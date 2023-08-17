'use client';

import { Link } from "@chakra-ui/next-js";
import { Box, Container, Heading, Image, keyframes, Text } from "@chakra-ui/react";
import { logo, paragraphAnimation } from "./animations";
import Header from "./components/Header";

export default function Home() {

	return (
		<Container p='0' w='calc(100% - 40px)' maxW={'1200px'} mt='100px'>
			<Header />
			Building Content...
		</Container>
	)
}
