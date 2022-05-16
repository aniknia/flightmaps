import { Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, Button } from "@chakra-ui/react"

export default function NavPopover(props) {
    return (
        <Popover>
            <PopoverTrigger>
                <Button>{ props.title }</Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>{ props.head }</PopoverHeader>
                <PopoverBody>{ props.body }</PopoverBody>
            </PopoverContent>
        </Popover>
    )
}