/**
 * Storybook Preview Configuration for MRS UI v6.5
 * Uses Material-UI v6.5 ThemeProvider (not CssVarsProvider)
 */

import React from 'react';
import type { Preview, Decorator } from '@storybook/react-vite';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from '../src/theme/theme';

/**
 * Theme decorator for MUI v6.5
 */
const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme === 'dark' ? darkTheme : lightTheme;
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
  decorators: [withTheme],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'MUI theme (v6.5)',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: ['light', 'dark'],
        showName: true,
      },
    },
  },
};

export default preview;