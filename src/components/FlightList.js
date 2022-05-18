import { Box, Wrap, Text, HStack } from "@chakra-ui/layout"
import { TrashIcon } from "@primer/octicons-react"
import { Routes } from "./RoutesProvider"
import Flight from './Flight'
import { useContext, useState, useEffect } from "react"

export default function CodeList(props) {
    const value = useContext(Routes)
    const [flightItems, setFlightItems] = useState();

    useEffect(() => {
        setFlightItems(value.routes.map((route) => <Flight key={route.start + route.end} route={route} />))
    }, [value.routes])

    return (
        <Box>
            <HStack>
                <TrashIcon />
                <Text mb="2">Click or tap to remove flight.</Text>
            </HStack>
            <Wrap justify='space-around' pt={4}>
                {flightItems}
            </Wrap>
        </Box>
    )
}