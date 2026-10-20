import React, { useEffect} from "react";
import {
  ChakraProvider,
  defaultSystem
} from '@chakra-ui/react';
import { ColorModeProvider } from './components/ColorMode'
import Main from './components/Main'



function App() {
  useEffect(() => {
     document.title = "Flight Maps";  
   }, []);
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider>
        <Main />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
