import { Box, HStack } from "@chakra-ui/layout";
import { IoEarth } from '@react-icons/all-files/io5/IoEarth'
import { ArrowRightIcon, ArrowUpRightIcon, ClockIcon } from "@primer/octicons-react";

let size = 16;

export default function Flight(props) {
    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' p={2}>
            <HStack>
                <p>{props.start}</p>
                <ArrowRightIcon size={size} />
                <p>{props.end}</p>
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