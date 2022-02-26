import { HStack, PinInput, PinInputField } from '@chakra-ui/react'
import { ArrowRightIcon } from '@primer/octicons-react'

export default function CodeInput(props) {
    return (
        <div name='route'>
            <HStack>
                <PinInput type='alphanumeric' name='start'>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                </PinInput>
                <ArrowRightIcon size={24} />
                <PinInput type='alphanumeric' name='end'>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                </PinInput>
            </HStack>
        </div>
    )
}