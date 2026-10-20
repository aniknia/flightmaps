import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { useColorMode, useColorModeValue } from './ColorMode';
import { MoonIcon, SunIcon } from '@primer/octicons-react';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      {...props}
    >
      <SwitchIcon />
    </IconButton>
  );
};
