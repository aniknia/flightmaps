import { VStack, HStack, LinkBox, LinkOverlay } from "@chakra-ui/react"
import { IoEarth } from '@react-icons/all-files/io5/IoEarth'
import { ArrowRightIcon, ArrowUpRightIcon, ClockIcon } from "@primer/octicons-react"
import { Routes } from './RoutesProvider'
import { useContext } from 'react'

let size = 16;

// TODO: add animations to add and remove

export default function Flight(props) {
    const value = useContext(Routes);
    return (
        <LinkBox maxW='sm' borderWidth='1px' borderRadius='lg' p={4}>
            <LinkOverlay href="#" onClick={() => value.removeRoute(props.route)}>
                <VStack align='left'>
                    <HStack>
                        <p>{props.route.start}</p>
                        <ArrowRightIcon size={size} />
                        <p>{props.route.end}</p>
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
                </VStack>
            </LinkOverlay>
        </LinkBox>
    )
}