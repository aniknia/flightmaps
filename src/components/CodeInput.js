import { Box, HStack, PinInput, PinInputField } from '@chakra-ui/react'
import { ArrowRightIcon } from '@primer/octicons-react'

// TODO: Decide how to take in information
// Either <PinIn /> <Arrow /> <Pinin />
// or
// <PinIn> <Arrow /> </Pinin>
// The former is easier to parse but the latter is better ux

export default function CodeInput(props) {
    return (
        <Box>
            <p>Enter your airport codes below.</p>
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' p={2} name='route'>
                <HStack>
                    <PinInput type='alphanumeric' name='start'>
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <ArrowRightIcon size={24} />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                    </PinInput>
                </HStack>
            </Box>
        </Box>
    )
}