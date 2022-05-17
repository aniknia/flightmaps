import { Stack, Flex, Box, Spacer, Divider } from "@chakra-ui/react"
import { QuestionIcon } from "@primer/octicons-react"
import { ColorModeSwitcher } from '../ColorModeSwitcher'
import ControlPanel from "./ControlPanel"
import Logo from "./Logo"
import NavModal from "./NavModal"

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
          <NavModal button={<QuestionIcon size={24} />} title="Info" body= "This app allows you to map out flights between airports." />
          <ColorModeSwitcher />
        </Box>
      </Flex>
      <Divider />
    </Stack>
  )
}