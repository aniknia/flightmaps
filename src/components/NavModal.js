import {
    Dialog,
    Button,
    CloseButton,
    Portal,
    useDisclosure
  } from '@chakra-ui/react'

  //TODO:remove one of the close buttons since they are redunant

export default function NavModal(props) {
    const { open, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button onClick={onOpen} variant='ghost' p='0'>{ props.button }</Button>

            <Dialog.Root open={open} onOpenChange={e => e.open ? onOpen() : onClose()}>
            <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
            <Dialog.Content>
                <Dialog.Header>
                <Dialog.Title>{ props.title }</Dialog.Title>
                </Dialog.Header>
                <Dialog.CloseTrigger asChild>
                <CloseButton size='xs' _icon={{ boxSize: '6' }} />
                </Dialog.CloseTrigger>
                <Dialog.Body>
                { props.body }
                </Dialog.Body>

                <Dialog.Footer>
                <Button variant='outline' colorPalette='gray' mr={3} onClick={onClose}>
                    Close
                </Button>
                </Dialog.Footer>
            </Dialog.Content>
            </Dialog.Positioner>
            </Portal>
            </Dialog.Root>
        </>
    )
}
