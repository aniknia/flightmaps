import { Box, Stack, HStack, Center, Button, Text } from '@chakra-ui/react'
import { ArrowRightIcon , PlusIcon} from '@primer/octicons-react'
import { Routes } from './RoutesProvider'
import { useState, useContext } from 'react'
import InputField from './InputField'

// TODO: Decide how to take in information
// Either <PinIn /> <Arrow /> <Pinin />
// or
// <PinIn> <Arrow /> </Pinin>
// The former is easier to parse but the latter is better ux

// TODO: Make the input debounce, no submit should be necessary

export default function CodeInput(props) {
    const [start, setStart] = useState('');
    const [startFlag, setStartFlag] = useState(false);
    const [end, setEnd] = useState('');
    const [endFlag, setEndFlag] = useState(false);
    const value = useContext(Routes);

    function handleSubmit(event) {
        event.preventDefault();
        if (startFlag === true && endFlag === true) {
            let route = {
                start: start,
                end: end
            };
            value.addRoute(route);
        }
        else{
            console.log('nothing happened...');
        }
    }

    return (
        <Box>
            <Text mb='2'>Enter your airport codes below.</Text>

            <Stack maxW='sm' borderWidth='1px' borderRadius='lg' p={2} name='route'>
                <HStack>
                    <InputField routeValue={start} set={setStart} flag={setStartFlag} />
                    <ArrowRightIcon size={24} />
                    <InputField routeValue={end} set={setEnd} flag={setEndFlag} />              
                </HStack>
                <Center>
                    <Button leftIcon={<PlusIcon size={16} />} variant='outline' onClick={handleSubmit}>
                        Flight
                    </Button>
                </Center>
            </Stack>
        </Box>
    )
}