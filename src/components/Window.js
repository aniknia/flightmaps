import { useEffect, useContext } from "react"
import useWindowDimensions from "./useWindowDimension"
import { Flex } from "@chakra-ui/react"
import Map from "./Map"
import { Routes } from "./RoutesProvider"

export default function Window() {
    const value = useContext(Routes)
    const { height, width } = useWindowDimensions()

    const final_height = height - 57
    const final_width = final_height * (1.73)

    return (
        <Flex width={width} height={final_height} justifyContent='center'>
            <Map value={value} width={final_width} height={final_height} />
        </Flex>
    )
}