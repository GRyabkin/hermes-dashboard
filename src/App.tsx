import { Box, Text, ChakraProvider, Flex, Spacer, useDisclosure, Center, Stack, Container, Heading } from "@chakra-ui/react";
import './App.css';

import AccountModal from "./components/AccountModal";
import ConnectButton from "./components/ConnectButton";
import Layout from "./components/Layouts";
import { ConnectionProvider } from "./connectionContext";

function App() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <ChakraProvider>
      <Box minH={'100vh'} minW= {'100vw'} bg='gray.800' textAlign={'center'}>
        <Flex alignItems={'flex-end'} justifyContent={'space-between'}>
          <Spacer/>
          <ConnectionProvider>
              <Flex mr={20} mt={10}>
              <ConnectButton handleOpenModal={onOpen} />
              <AccountModal isOpen={isOpen} onClose={onClose} />
              </Flex>
          </ConnectionProvider>
        </Flex>
        <Center w={'100vw'} h={'60vh'}><Container><Heading size='lg' fontWeight={'light'} color={'gray.500'}>Welcome, connect your Tezos wallet to see list of private groups you can join</Heading></Container></Center>
      </Box>

    </ChakraProvider>
  )
}

export default App;