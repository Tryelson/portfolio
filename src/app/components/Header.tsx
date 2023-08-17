import { Heading, Box, Image, Text, Link } from "@chakra-ui/react";
import { logo, paragraphAnimation } from "../animations";

export default function Header(){
    return (
        <Box as='header' display='flex' justifyContent={'space-between'}>
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
						<Heading as='h4' animation={logo} color={'#94A3B8'} fontSize={'1.25rem'} fontWeight='light' mt='10px' mb='20px'>Building things for the web since 2021.</Heading>

						<Text as='p' maxW={'400px'} color={'#94A3B8'}></Text>
					</Box>
				</Box>

				<Box maxWidth={'600px'} overflow='hidden'>
					<Text as='p' color={'#94A3B8'} animation={paragraphAnimation}>
						I'm a front-end engineer specializing in building exceptional digital experience. Currently, I'm focused on building accessible, scalable, human-centered products at <Link href='https://www.hivegroup.com.br' target={'_blank'} color='#ADF' textDecoration={'underline'}>HiveGroup</Link>, focusing on user experience.<br /><br />
						Acting in the construction and maintenance of project management systems, Landing Pages and websites.
					</Text>
				</Box>
			</Box>
    )
}