import { SimpleGrid } from "@chakra-ui/react";
import ContentHubItem, { ContentHub } from "./ContentHubItem";

type Props = {
    hubs?: ContentHubs;
};

export interface ContentHubs {
    telegramGroups: ContentHub[];
}

export default function ContentHubsList({ hubs }: Props) {
    return hubs ? (
        <SimpleGrid columns={[2, null, 3]} spacing='40px'>
             {hubs.telegramGroups.map((hub, index) => {
                return (<ContentHubItem key={`hub${index}`} hub={hub}/>)
             })}
        </SimpleGrid>
    ) : <></>
}