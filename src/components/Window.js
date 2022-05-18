import { useEffect, useRef, useContext } from "react"
import useWindowDimensions from "./useWindowDimension"
import { Box } from "@chakra-ui/react"
import Map from "./Map"
import RoutesProvider from "./RoutesProvider"

export default function Window() {
    const routes = useContext(RoutesProvider)
    const { height, width } = useWindowDimensions()
    let map = <Map />

    useEffect(() => {
        map = <Map />
    }, [routes])

    return (
        <Box width={width} height={{height}['height'] - 65}>
            {map}
        </Box>
    )
}