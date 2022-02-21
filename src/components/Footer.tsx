import { Box, useColorModeValue, Container, Text, HStack } from "@chakra-ui/react";
import { Logo } from "../theme/Logo";

export default function Footer() {
    return (
        <Box alignContent={'center'} minW={'100vw'} position={'absolute'} bottom={0}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={HStack}
                maxW={'6xl'}
                py={4}
                spacing={4}
                justify={'center'}
                align={'center'}>
                <Logo/>
                <Text>© 2022 Odin Team. All rights reserved</Text>
            </Container>
        </Box>
    );
}

