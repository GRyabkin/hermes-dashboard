import { Button, Box, Text } from "@chakra-ui/react";
import useConnectionContext from "../connectionContext";

type Props = {
    handleOpenModal: any;
};

export default function ConnectButton({ handleOpenModal }: Props) {
    
    const { connection, connectWallet } = useConnectionContext();

    return connection ? (
        <Box
            display="flex"
            alignItems="center"
            background="gray.700"
            borderRadius="xl"
            py="0">
            <Box px="3">
                <Text color="white" fontSize="md" fontWeight="bolder">
                    {connection.balance} ꜩ
                </Text>
            </Box>
            <Button
                onClick={handleOpenModal}
                bg="gray.800"
                border="1px solid transparent"
                _hover={{
                    border: "1px",
                    borderStyle: "solid",
                    borderColor: "blue.400",
                    backgroundColor: "gray.700",
                }}
                borderRadius="xl"
                m="1px"
                px={3}
                height="38px">
                <Text color="white" fontSize="md" fontWeight="medium" mr="2">
                    {connection.address &&
                        `${connection.address.slice(0, 5)}...${connection.address.slice(
                            connection.address.length - 5,
                            connection.address.length
                        )}`}
                </Text>
            </Button>
        </Box>
    ) : (
        <Button onClick={connectWallet}>Connect to a wallet</Button>
    )
}