import { Drawer, Button, Stack, Center, Portal, useDisclosure } from '@chakra-ui/react'
import { PlusIcon } from '@primer/octicons-react'
import { useRef } from 'react'
import ControlPanelHead from './ControlPanelHead'
import CodeInput from './CodeInput'
import FlightList from './FlightList'
import Credit from './Credit'

// TODO: change button name so the header of the site doesnt have redundant words

export default function ControlPanel() {
    const { open, onOpen, onClose } = useDisclosure();
    const btnRef = useRef()
    return (
        <>
            <Button ref={btnRef} variant='outline' colorPalette='gray' onClick={onOpen}>
                <PlusIcon size={16} />
                Flight
            </Button>
            <Drawer.Root open={open} onOpenChange={e => e.open ? onOpen() : onClose()} finalFocusEl={() => btnRef.current} placement='start' size='sm'>
                <Portal>
                    <Drawer.Backdrop />
                    <Drawer.Positioner>
                        <Drawer.Content>
                            <Drawer.Header>
                                <ControlPanelHead close={onClose} />
                            </Drawer.Header>
                            <Drawer.Body>
                                <Stack gap='24px'>
                                    <CodeInput />
                                    <FlightList />
                                </Stack>
                            </Drawer.Body>
                            <Center>
                                    <Drawer.Footer borderTopWidth='2px'>
                                    <Credit />
                                    </Drawer.Footer>
                            </Center>
                        </Drawer.Content>
                    </Drawer.Positioner>
                </Portal>
            </Drawer.Root>
       </>
    )
}
