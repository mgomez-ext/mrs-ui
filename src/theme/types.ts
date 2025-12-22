/**
 * Theme type augmentation for MRS Design System
 * Extends Material-UI theme with custom tokens
 */

import { Theme as MuiTheme } from '@mui/material/styles';

/**
 * Custom palette extensions for component-specific tokens
 */
declare module '@mui/material/styles' {
  interface Palette {
    _components: {
      alert: {
        error: {
          filled: { background: string; foreground: string };
          outlined: { background: string; foreground: string; border: string };
          standard: { background: string; foreground: string };
        };
        warning: {
          filled: { background: string; foreground: string };
          outlined: { background: string; foreground: string; border: string };
          standard: { background: string; foreground: string };
        };
        info: {
          filled: { background: string; foreground: string };
          outlined: { background: string; foreground: string; border: string };
          standard: { background: string; foreground: string };
        };
        success: {
          filled: { background: string; foreground: string };
          outlined: { background: string; foreground: string; border: string };
          standard: { background: string; foreground: string };
        };
      };
      rating: {
        activeFill: string;
        enabledBorder: string;
      };
      chip: {
        defaultCloseFill: string;
        defaultEnabledBorder: string;
      };
      input: {
        standard: { enabledBorder: string };
        filled: { enabledFill: string };
        outlined: { enabledBorder: string };
      };
      table: {
        border: string;
      };
      paper: {
        elevation0: string;
        elevation1: string;
        elevation2: string;
      };
    };
  }

  interface PaletteOptions {
    _components?: {
      alert?: {
        error?: {
          filled?: { background: string; foreground: string };
          outlined?: { background: string; foreground: string; border: string };
          standard?: { background: string; foreground: string };
        };
        warning?: {
          filled?: { background: string; foreground: string };
          outlined?: { background: string; foreground: string; border: string };
          standard?: { background: string; foreground: string };
        };
        info?: {
          filled?: { background: string; foreground: string };
          outlined?: { background: string; foreground: string; border: string };
          standard?: { background: string; foreground: string };
        };
        success?: {
          filled?: { background: string; foreground: string };
          outlined?: { background: string; foreground: string; border: string };
          standard?: { background: string; foreground: string };
        };
      };
      rating?: {
        activeFill: string;
        enabledBorder: string;
      };
      chip?: {
        defaultCloseFill: string;
        defaultEnabledBorder: string;
      };
      input?: {
        standard?: { enabledBorder: string };
        filled?: { enabledFill: string };
        outlined?: { enabledBorder: string };
      };
      table?: {
        border: string;
      };
      paper?: {
        elevation0: string;
        elevation1: string;
        elevation2: string;
      };
    };
  }

  interface PaletteColor {
    _states?: {
      hover?: string;
      selected?: string;
      focus?: string;
      focusVisible?: string;
    };
  }

  interface SimplePaletteColorOptions {
    _states?: {
      hover?: string;
      selected?: string;
      focus?: string;
      focusVisible?: string;
    };
  }

  interface Shape {
    borderRadius: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    rounded: number;
  }

  interface ShapeOptions {
    borderRadius?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    rounded?: number;
  }

  interface TypographyVariants {
    fontWeightSemiBold: number;
  }

  interface TypographyVariantsOptions {
    fontWeightSemiBold?: number;
  }
}

/**
 * MRS Theme type combining MUI theme with custom extensions
 */
export type MRSTheme = MuiTheme;
