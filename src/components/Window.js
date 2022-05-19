import { useEffect, useRef, useContext } from "react"
import useWindowDimensions from "./useWindowDimension"
import { Box } from "@chakra-ui/react"
import Map from "./Map"
import { Routes } from "./RoutesProvider"

export default function Window() {
    const value = useContext(Routes)
    const { height, width } = useWindowDimensions()
    let map = <Map />

    useEffect(() => {
        map = <Map />
    })

    return (
        <Box width={width} height={{height}['height'] - 65}>
            {map}
        </Box>
    )
}