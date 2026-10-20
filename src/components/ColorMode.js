import { ThemeProvider, useTheme } from 'next-themes';

// Chakra v3 no longer ships color mode, so it is handled by next-themes.
// storageKey matches Chakra v1 so saved preferences carry over.

export function ColorModeProvider(props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      storageKey="chakra-ui-color-mode"
      disableTransitionOnChange
      {...props}
    />
  );
}

export function useColorMode() {
  const { resolvedTheme, setTheme } = useTheme();
  const colorMode = resolvedTheme === 'dark' ? 'dark' : 'light';
  const toggleColorMode = () => setTheme(colorMode === 'dark' ? 'light' : 'dark');
  return { colorMode, toggleColorMode };
}

export function useColorModeValue(light, dark) {
  const { colorMode } = useColorMode();
  return colorMode === 'dark' ? dark : light;
}
