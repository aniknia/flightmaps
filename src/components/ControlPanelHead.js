import { Flex, Spacer, CloseButton } from '@chakra-ui/react'
import Logo from './Logo'

export default function ControlPanelHead(props) {
    return (
        <Flex>
            <Logo />
            <Spacer />
            <CloseButton size='md' onClick={props.close} />
        </Flex>
    )
}