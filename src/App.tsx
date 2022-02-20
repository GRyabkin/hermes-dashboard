import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import './App.css';

import AccountModal from "./components/AccountModal";
import ConnectButton from "./components/ConnectButton";
import Layout from './components/Layouts';
import { ConnectionProvider } from "./connectionContext";

function App() {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <Layout>
        <ConnectionProvider>
          <ConnectButton handleOpenModal={onOpen} />
          <AccountModal isOpen={isOpen} onClose={onClose} />
        </ConnectionProvider>
      </Layout>
    </ChakraProvider>
  )
}

export default App;