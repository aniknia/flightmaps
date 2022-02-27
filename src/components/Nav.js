import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, Stack, Center } from '@chakra-ui/react'
import NavHead from './NavHead'
import CodeInput from './CodeInput'
import FlightList from './FlightList'
import Credit from './Credit'

// TODO: Fix DrawerFooter not centering with out Center being the outside tag

export default function Nav() {
    return (
       <Drawer isOpen={true} placement='left' size='sm'>
           <DrawerContent>
               <DrawerHeader>
                   <NavHead />
               </DrawerHeader>
               <DrawerBody>
                   <Stack spacing='24px'>
                       <CodeInput />
                       <FlightList />
                   </Stack>
               </DrawerBody>
               <Center>
                    <DrawerFooter borderTopWidth='2px'>
                       <Credit />
                    </DrawerFooter>
               </Center>
           </DrawerContent>
       </Drawer> 
    )
}