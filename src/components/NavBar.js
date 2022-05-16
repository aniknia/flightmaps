import { Stack, Flex, Box, Spacer, Divider } from "@chakra-ui/react"
import { ColorModeSwitcher } from '../ColorModeSwitcher'
import ControlPanel from "./ControlPanel"
import Logo from "./Logo"

export default function NavBar() {
  return (
    <Stack>
      <Flex alignItems='center' gap='2' p='2'>
        <Box>
          <ControlPanel />
        </Box>
        <Spacer />
        <Box>
          <Logo />
        </Box>
        <Spacer />
        <Box>
          <ColorModeSwitcher />
        </Box>
      </Flex>
      <Divider />
    </Stack>
  )
}