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

export default function CodeInput(psrops) {
    const [start, setStart] = useState('');
    const [startFlag, setStartFlag] = useState(false);
    const [end, setEnd] = useState('');
    const [endFlag, setEndFlag] = useState(false);
    const value = useContext(Routes);

    // TODO: api should only be hit once per input

    function handleSubmit(event) {
        event.preventDefault();
        if (startFlag === true && endFlag === true) {
            let route = {
                start: start.toUpperCase(),
                end: end.toUpperCase()
            };
            setStart('');
            setEnd('');
            value.addRoute(route);
            console.log('your attack was successful!')
        }
        else{
            console.log('nothing happened...');
        }
    }

    return (
        <Box>
            <Text mb='2'>Enter your 3 or 4 letter airport codes below.</Text>

            <Stack maxW='sm' borderWidth='1px' borderRadius='lg' p={2} name='route'>
                <HStack>
                    <InputField value={start} set={setStart} flag={setStartFlag} />
                    <ArrowRightIcon size={24} />
                    <InputField value={end} set={setEnd} flag={setEndFlag} />              
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