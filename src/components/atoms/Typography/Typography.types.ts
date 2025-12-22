/**
 * Typography component type definitions
 */

import { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';

/**
 * MRS Typography component props
 * Extends Material-UI TypographyProps
 *
 * @example
 * ```tsx
 * <Typography variant="h1" gutterBottom>
 *   Heading Text
 * </Typography>
 * ```
 */
export interface TypographyProps extends Omit<MuiTypographyProps, 'variant'> {
  /**
   * Typography variant
   * @default 'body1'
   */
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'overline'
    | 'inherit';

  /**
   * If true, adds margin bottom to the component
   * @default false
   */
  gutterBottom?: boolean;
}
