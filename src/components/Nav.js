import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, Button, Stack, Center, useDisclosure, DrawerOverlay } from '@chakra-ui/react'
import { useRef } from 'react'
import NavHead from './NavHead'
import CodeInput from './CodeInput'
import FlightList from './FlightList'
import Credit from './Credit'

export default function Nav() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef()
    return (
        <>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                Open
            </Button>
            <Drawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef} placement='left' size='sm'>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader>
                        <NavHead close={onClose} />
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