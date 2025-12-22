/**
 * Design tokens exports
 * Raw token values from theme.json for direct consumption
 */

import themeTokens from '../../theme.json';

/**
 * Color tokens
 */
export const colors = {
  light: themeTokens.colorSchemes.light.palette,
  dark: themeTokens.colorSchemes.dark.palette,
};

/**
 * Typography tokens
 */
export const typography = themeTokens.typography;

/**
 * Shape tokens (border radius)
 */
export const shape = themeTokens.shape;

/**
 * Spacing scale
 */
export const spacing = themeTokens.spacing;

/**
 * Full theme tokens object
 */
export const tokens = themeTokens;

/**
 * Type definitions for tokens
 */
export type ColorScheme = typeof themeTokens.colorSchemes.light;
export type TypographyScale = typeof themeTokens.typography;
export type ShapeTokens = typeof themeTokens.shape;
export type SpacingScale = typeof themeTokens.spacing;
