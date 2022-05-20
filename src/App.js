import React, { useEffect} from "react";
import {
  ChakraProvider,
  theme
} from '@chakra-ui/react';
import Main from './components/Main'



function App() {
  useEffect(() => {
     document.title = "Flight Maps";  
   }, []);
  return (
    <ChakraProvider theme={theme}>
      <Main />
    </ChakraProvider>
  );
}

export default App;
