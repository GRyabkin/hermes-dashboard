import { CircularProgress } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ApiService } from "../api/api_service";
import ContentHubsList, { ContentHubs } from "./ContentHubsList";
import WelcomeMessage from "./WelcomeMessage";

const serviceApi = new ApiService()

export default function ContentBody() {
    
    const [data, setData] = useState<ContentHubs>();
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        serviceApi.getGroups()
          .then((groups) => setData(groups))
          .catch((_error) => setError(_error))
          .finally(() => setIsLoaded(true));
      }, []);
    
    if (error) {
        return ( <WelcomeMessage message={`Sorry an unexpected error occurred (${error}). Please refresh the page to try again.`} /> )
    } else if (!isLoaded) {
        return ( <CircularProgress isIndeterminate color='gray.500'/> )
    } else {
        return ( <ContentHubsList hubs={data}/>)
    }
}