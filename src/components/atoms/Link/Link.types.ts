/**
 * Link component type definitions
 */

import type { LinkProps as MuiLinkProps } from '@mui/material/Link';

/**
 * Link color options
 */
export type LinkColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'inherit' | 'textPrimary' | 'textSecondary';

/**
 * Link underline options
 */
export type LinkUnderline = 'none' | 'hover' | 'always';

/**
 * Link variant options
 */
export type LinkVariant = 'body1' | 'body2' | 'button' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'inherit' | 'overline' | 'subtitle1' | 'subtitle2';

/**
 * Props for the Link component
 */
export interface LinkProps extends Omit<MuiLinkProps, 'color' | 'underline' | 'variant'> {
  /**
   * The color of the link
   */
  color?: LinkColor;

  /**
   * Controls when the link should have an underline
   */
  underline?: LinkUnderline;

  /**
   * Applies the theme typography styles
   */
  variant?: LinkVariant;

  /**
   * The URL to link to
   */
  href?: string;

  /**
   * The content of the link
   */
  children?: React.ReactNode;

  /**
   * The target attribute for the link
   */
  target?: string;

  /**
   * The rel attribute for the link
   */
  rel?: string;

  /**
   * Callback fired when the link is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}
