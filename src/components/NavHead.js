import { PaperAirplaneIcon } from '@primer/octicons-react'
import { Flex, Spacer, HStack } from '@chakra-ui/react'
import { ColorModeSwitcher } from '../ColorModeSwitcher'

export default function NavHead() {
    return (
        <Flex>
            <HStack>
                <PaperAirplaneIcon size={24} />
                <p>The Flight Mapper</p>
            </HStack>
            <Spacer />
            <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
    )
}