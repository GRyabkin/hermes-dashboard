import { Center, Container, Heading } from "@chakra-ui/react";

type Props = {
    message: string;
};

export default function WelcomeMessage({ message }: Props) {
    return (
        <Center w={'100vw'} h={'60vh'}>
            <Container>
                <Heading size='lg' fontWeight={'light'} color={'gray.500'}>
                    {message}
                </Heading>
            </Container>
        </Center>
    )
}