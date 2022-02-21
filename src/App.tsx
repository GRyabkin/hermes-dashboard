import { Box, ChakraProvider, Flex, Spacer, useDisclosure } from "@chakra-ui/react";
import './App.css';

import AccountModal from "./components/AccountModal";
import ConnectButton from "./components/ConnectButton";
import ContentHubsListPlaceholder from "./components/ContentHubsListPlaceholder";
import Footer from "./components/Footer";
import { ConnectionProvider } from "./connectionContext";

function App() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <ChakraProvider>
      <Box minH={'100vh'} minW= {'100vw'} bg='gray.800' textAlign={'center'}>
        <ConnectionProvider>
          <Flex alignItems={'flex-end'} justifyContent={'space-between'} h={20}>
            <Spacer/>
                <Flex mr={20} mt={10}>
                  <ConnectButton handleOpenModal={onOpen} />
                  <AccountModal isOpen={isOpen} onClose={onClose} />
                </Flex>
          </Flex>
          <ContentHubsListPlaceholder/>
        </ConnectionProvider>
        <Footer/>
      </Box>
    </ChakraProvider>
  )
}

export default App;