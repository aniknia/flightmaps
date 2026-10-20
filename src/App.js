import React, { useEffect} from "react";
import { ChakraProvider } from '@chakra-ui/react';
import { system } from './theme'
import { ColorModeProvider } from './components/ColorMode'
import Main from './components/Main'



function App() {
  useEffect(() => {
     document.title = "Flight Maps";  
   }, []);
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider>
        <Main />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
