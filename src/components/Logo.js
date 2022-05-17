import { HStack } from "@chakra-ui/react";
import { IoAirplane } from '@react-icons/all-files/io5/IoAirplane'

export default function Logo() {
    return (
        <HStack>
            <IoAirplane size={16} />
            <p>Flight Maps</p>
        </HStack>
    )
}