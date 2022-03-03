import { Box, HStack } from "@chakra-ui/layout"
import { IoEarth } from '@react-icons/all-files/io5/IoEarth'
import { ArrowRightIcon, ArrowUpRightIcon, ClockIcon } from "@primer/octicons-react"
import { Routes } from './RoutesProvider'
import { useContext } from 'react'
import { CloseButton } from "@chakra-ui/react"

let size = 16;

// TODO: add animations to add and remove
// TODO: add a click to remove feature
// TODO: onClick event not firing

export default function Flight(props) {
    const value = useContext(Routes);
    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' p={2}>
            <HStack>
                <p>{props.route.start}</p>
                <ArrowRightIcon size={size} />
                <p>{props.route.end}</p>
                <CloseButton onClick={() => value.removeRoute(props.route)} />
            </HStack>
            <HStack>
                <ClockIcon size={size} />
                <p>Time</p>
            </HStack>
            <HStack>
                <ArrowUpRightIcon size={size} />
                <p>Distance</p>
            </HStack>
            <HStack>
                <IoEarth />
                <p>CO2 Produced</p>
            </HStack>
        </Box>
    )
}