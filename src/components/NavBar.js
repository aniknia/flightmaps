import { Stack, Flex, Box, Spacer, Divider } from "@chakra-ui/react"
import { QuestionIcon } from "@primer/octicons-react"
import { ColorModeSwitcher } from '../ColorModeSwitcher'
import ControlPanel from "./ControlPanel"
import Logo from "./Logo"
import NavModal from "./NavModal"

export default function NavBar() {
  return (
    <Stack>
      <Flex alignItems='center' gap='2' pt='2' pd='0' pl='2' pr='2' >
        <Box>
          <ControlPanel />
        </Box>
        <Spacer />
        <Box>
          <Logo />
        </Box>
        <Spacer />
        <Box>
          <NavModal button={<QuestionIcon size={24} />} title="Info" body= "This app allows you to map out flights between airports. The time and carbon foot print for each flight are estimated using a Boeing 747." />
          <ColorModeSwitcher />
        </Box>
      </Flex>
      <Divider p='0' />
    </Stack>
  )
}