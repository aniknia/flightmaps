import { Box, Stack, HStack, Center, Button } from '@chakra-ui/react'
import { ArrowRightIcon , PlusIcon} from '@primer/octicons-react'
import InputField from './InputField';
import React from 'react'

// TODO: Decide how to take in information
// Either <PinIn /> <Arrow /> <Pinin />
// or
// <PinIn> <Arrow /> </Pinin>
// The former is easier to parse but the latter is better ux

// TODO: Make the input debounce, no submit should be necessary

export default function CodeInput() {
    const [ViableSubmit, SetViableSubmit] = React.setState(false);

    function handleSubmit(event) {
        event.preventDefault();
        console.log('Added Flight');
    }

    return (
        <Box>
            <p>Enter your airport codes below.</p>
            <Stack maxW='sm' borderWidth='1px' borderRadius='lg' p={2} name='route'>
                <HStack>
                    <InputField name='start' />
                    <ArrowRightIcon size={24} />
                    <InputField name='end'  />              
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