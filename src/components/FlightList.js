import { Box, Wrap, Text } from "@chakra-ui/layout"
import Flight from './Flight'

export default function CodeList(props) {
    return (
        <Box>
            <Text mb="2">Click to remove flight.</Text>
            <Wrap>
                <Flight start='LAX' end='NRT' />
            </Wrap>
        </Box>
    )
}