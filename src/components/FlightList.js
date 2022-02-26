import { Box, Wrap } from "@chakra-ui/layout"
import Flight from './Flight'

export default function CodeList(props) {
    return (
        <Box>
            <p>Click to remove flight.</p>
            <Wrap>
                <Flight />
            </Wrap>
        </Box>
    )
}