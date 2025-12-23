/**
 * MRS Design System Theme Configuration
 * Material-UI v6.5.0 theme consuming design tokens from theme.json
 */

/// <reference path="../types/theme.d.ts" />

import type { Theme } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import themeTokens from '../../theme.json';

/**
 * Spacing function for MUI
 * Multiplies the base unit (8px) by the given factor
 */
const spacing = (factor: number): number => {
  const baseUnit = 8;
  return baseUnit * factor;
};

/**
 * Light theme configuration
 */
export const lightTheme: Theme = createTheme({
  palette: {
    mode: 'light',
    ...themeTokens.colorSchemes.light.palette,
  },
  typography: {
    ...themeTokens.typography,
  },
  shape: {
    ...themeTokens.shape,
  },
  spacing,
});

/**
 * Dark theme configuration
 */
export const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    ...themeTokens.colorSchemes.dark.palette,
  },
  typography: {
    ...themeTokens.typography,
  },
  shape: {
    ...themeTokens.shape,
  },
  spacing,
});

/**
 * Default theme export (light mode)
 */
export const theme = lightTheme;

/**
 * Export both themes for theme switching
 */
export default {
  light: lightTheme,
  dark: darkTheme,
};
