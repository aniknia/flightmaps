import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

// Chakra v3's default theme looks different from v1's. These overrides
// restore the v1 look of the deployed site (fonts, grays, sizing).

const v1 = {
  text: { _light: '#1A202C', _dark: 'rgba(255, 255, 255, 0.92)' },
  bg: { _light: 'white', _dark: '#1A202C' },
  panel: { _light: 'white', _dark: '#2D3748' },
  border: { _light: '#E2E8F0', _dark: 'rgba(255, 255, 255, 0.16)' },
  hover: { _light: '#EDF2F7', _dark: 'rgba(255, 255, 255, 0.08)' },
};

const config = defineConfig({
  globalCss: {
    '*': { fontFeatureSettings: 'normal' },
  },
  theme: {
    textStyles: {
      button: { value: { fontSize: 'md', lineHeight: '1.2' } },
    },
    tokens: {
      fonts: {
        body: { value: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' },
        heading: { value: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' },
      },
    },
    semanticTokens: {
      colors: {
        fg: { DEFAULT: { value: v1.text } },
        bg: { DEFAULT: { value: v1.bg }, panel: { value: v1.panel } },
        border: { DEFAULT: { value: v1.border } },
        gray: {
          fg: { value: v1.text },
          subtle: { value: v1.hover },
          muted: { value: v1.border },
          border: { value: v1.border },
        },
      },
    },
    recipes: {
      button: {
        base: { borderRadius: 'md', fontWeight: 'semibold' },
        variants: {
          size: {
            md: { textStyle: 'button', _icon: { width: 'auto', height: 'auto' } },
          },
        },
      },
    },
    slotRecipes: {
      pinInput: {
        base: {
          root: { minW: '0' },
          control: { display: 'flex', minW: '0' },
          input: { minW: '0', borderRadius: 'md' },
        },
        variants: {
          size: {
            md: { input: { textStyle: 'md' } },
          },
        },
      },
      drawer: {
        base: {
          backdrop: { bg: 'blackAlpha.600' },
          content: { textStyle: 'md' },
          header: { display: 'block', pt: '4', textStyle: 'xl', fontWeight: 'semibold' },
          footer: { pt: '4' },
        },
      },
      dialog: {
        base: {
          backdrop: { bg: 'blackAlpha.600' },
          content: { textStyle: 'md' },
          header: { pt: '4' },
          title: { textStyle: 'xl', fontWeight: 'semibold' },
          body: { pb: '2' },
          footer: { pt: '4' },
          closeTrigger: { insetEnd: '3' },
        },
        variants: {
          size: {
            md: { content: { maxW: 'md' } },
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
