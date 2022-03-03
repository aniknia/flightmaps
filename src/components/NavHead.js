import { IoAirplane } from '@react-icons/all-files/io5/IoAirplane'
import { Flex, Spacer, HStack, DrawerCloseButton } from '@chakra-ui/react'
import { ColorModeSwitcher } from '../ColorModeSwitcher'

export default function NavHead(props) {
    return (
        <Flex>
            <HStack>
                <IoAirplane />
                <p>The Flight Mapper</p>
            </HStack>
            <Spacer />
            <HStack>
                <ColorModeSwitcher />
            </HStack>
        </Flex>
    )
}