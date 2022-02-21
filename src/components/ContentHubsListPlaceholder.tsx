import { Box } from "@chakra-ui/react";
import useConnectionContext from "../connectionContext";
import ContentBody from "./ContentBody";
import WelcomeMessage from "./WelcomeMessage";

export default function ContentHubsListPlaceholder() {
    
    const { connection } = useConnectionContext();
    
    return (
        <Box mt={20}>
            {   connection ?
                <ContentBody/> : 
                <WelcomeMessage message={"Welcome, connect to your Tezos wallet to see a list of private groups you can join"}/>
            }
        </Box>
    )
}