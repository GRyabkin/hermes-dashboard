import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    Spacer,
} from '@chakra-ui/react';
import { ReactComponent as XTZIcon } from './svg/XTZ.svg';
import { ReactComponent as TGIcon } from './svg/telegram.svg';
import { serviceApi } from '../api/api_service';

export interface ContentHub {
    id: number;
    title: string;
    description: string;
    criteriaType: string;
    criteriaToken: string;
    criteriaCurrency: string;
    criteriaPrice: number;
}

type Props = {
    hub: ContentHub;
};

export default function ContentHubItem({ hub }: Props) {

    function handleGenerateInviteLink() {
        serviceApi.getInviteLink(hub.id).then((link) => 
            window.location.href = link
        )
    }
    
    return (
        <Center py={6}>
            <Box
                maxW={'270px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Flex justify={'center'} mt={5}>
                    <Avatar
                        size={'xl'}
                        src={
                            './no-image.png'
                        }
                        css={{
                            border: '2px solid white',
                        }}
                    />
                </Flex>
                <Stack direction={'row'} px={6}>
                    <Stack spacing={0} align={'center'}>
                        <Text fontWeight={600}>23k</Text>
                        <Text fontSize={'sm'} color={'gray.500'}>
                            Followers
                        </Text>
                    </Stack>
                    <Spacer/>
                    <TGIcon width={30} height={30} />
                </Stack>
                <Box p={6}>
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                            {hub.title}
                        </Heading>
                        <Text color={'gray.500'}>{hub.description}</Text>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={6}>
                        <Stack spacing={0} direction={'column'}>
                            <Text align={'start'} fontWeight={600}>Entry</Text>
                            <Text align={'start'} fontSize={'sm'} color={'gray.500'}>
                                Min balance
                            </Text>
                        </Stack>
                        <Stack direction={'row'} align={'center'} spacing={2}>
                            <Text noOfLines={2} fontWeight={800} fontSize={'xl'}>
                                {hub.criteriaPrice}
                            </Text>
                            <XTZIcon width={24} height={24} />
                        </Stack>
                    </Stack>

                    <Button
                        w={'full'}
                        mt={8}
                        boxShadow={
                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                        }
                        onClick={handleGenerateInviteLink}
                        bg={'blue.500'}
                        color={'white'}
                        rounded={'md'}
                        _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                        }}>
                        Get Invite Link
                    </Button>
                </Box>
            </Box>
        </Center>
    );
}