import { IoAirplane } from '@react-icons/all-files/io5/IoAirplane'
import { Flex, Spacer, HStack } from '@chakra-ui/react'
import { ColorModeSwitcher } from '../ColorModeSwitcher'

export default function NavHead() {
    return (
        <Flex>
            <HStack>
                <IoAirplane />
                <p>The Flight Mapper</p>
            </HStack>
            <Spacer />
            <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
    )
}