import { Flex, Spacer, CloseButton } from '@chakra-ui/react'
import Logo from './Logo'

export default function ControlPanelHead(props) {
    return (
        <Flex>
            <Logo />
            <Spacer />
            <CloseButton size='xs' _icon={{ boxSize: '6' }} onClick={props.close} />
        </Flex>
    )
}