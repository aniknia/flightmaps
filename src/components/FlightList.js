import { Box, Wrap, Text } from "@chakra-ui/layout"
import { Routes } from "./RoutesProvider"
import Flight from './Flight'
import { useContext } from "react"

export default function CodeList(props) {
    const value = useContext(Routes)
    let flightItems = value.routes.map(([start, end]) => <Flight key={start + end} start={start} end={end} />);
    return (
        <Box>
            <Text mb="2">Click to remove flight.</Text>
            <Wrap justify='space-around'>
                {flightItems}
            </Wrap>
        </Box>
    )
}