import React from 'react';
import { render } from '@testing-library/react';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { ColorModeProvider } from './components/ColorMode';

const AllProviders = ({ children }) => (
  <ChakraProvider value={defaultSystem}>
    <ColorModeProvider>{children}</ColorModeProvider>
  </ChakraProvider>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

export { customRender as render };
