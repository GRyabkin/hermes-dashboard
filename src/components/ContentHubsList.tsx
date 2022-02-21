import { SimpleGrid } from "@chakra-ui/react";
import ContentHubItem, { ContentHub } from "./ContentHubItem";

type Props = {
    hubs?: ContentHubs;
};

export interface ContentHubs {
    telegramGroups: ContentHub[];
}

export default function ContentHubsList({ hubs }: Props) {

    const disabledItem = {
        id: 0,
        title: 'Mock Disabled Group',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elua. Urud exercitation',
        criteriaType: 'balance',
        criteriaToken: undefined,
        criteriaCurrency: 'XTZ',
        criteriaPrice: 10000,
        disabled: true
    }
    
    return hubs ? (
        <SimpleGrid columns={4} spacing={10}>
             {hubs.telegramGroups.map((hub, index) => {
                return (<ContentHubItem key={`hub${index}`} hub={hub}/>)
             })}
             <ContentHubItem key={'disabled'} hub={disabledItem}/>
        </SimpleGrid>
    ) : <></>
}