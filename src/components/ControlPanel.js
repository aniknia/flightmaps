import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, Button, Stack, Center, useDisclosure, DrawerOverlay } from '@chakra-ui/react'
import { PlusIcon } from '@primer/octicons-react'
import { useRef } from 'react'
import ControlPanelHead from './ControlPanelHead'
import CodeInput from './CodeInput'
import FlightList from './FlightList'
import Credit from './Credit'

export default function ControlPanel() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef()
    return (
        <>
            <Button leftIcon={<PlusIcon size={16} />} ref={btnRef} colorScheme='teal' onClick={onOpen}>
                Flight
            </Button>
            <Drawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef} placement='left' size='sm'>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader>
                        <ControlPanelHead close={onClose} />
                    </DrawerHeader>
                    <DrawerBody>
                        <Stack spacing='24px'>
                            <CodeInput />
                            <FlightList />
                        </Stack>
                    </DrawerBody>
                    <Center>
                            <DrawerFooter borderTopWidth='2px'>
                            <Credit />
                            </DrawerFooter>
                    </Center>
                </DrawerContent>
            </Drawer>
       </>
    )
}