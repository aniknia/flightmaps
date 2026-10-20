import React from 'react';
import { render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from './theme';
import { ColorModeProvider } from './components/ColorMode';

const AllProviders = ({ children }) => (
  <ChakraProvider value={system}>
    <ColorModeProvider>{children}</ColorModeProvider>
  </ChakraProvider>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

export { customRender as render };
