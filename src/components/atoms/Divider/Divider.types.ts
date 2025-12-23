/**
 * Divider component type definitions
 */

import type { DividerProps as MuiDividerProps } from '@mui/material/Divider';

/**
 * MRS Divider component props
 * Extends Material-UI DividerProps
 *
 * @example
 * ```tsx
 * <Divider />
 * <Divider orientation="vertical" />
 * ```
 */
export interface DividerProps extends MuiDividerProps {
  /**
   * Orientation of the divider
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * If true, the divider will have a lighter color
   * @default false
   */
  light?: boolean;

  /**
   * Variant of the divider
   * @default 'fullWidth'
   */
  variant?: 'fullWidth' | 'inset' | 'middle';

  /**
   * If true, the divider will be absolutely positioned
   * @default false
   */
  absolute?: boolean;

  /**
   * If true, a vertical divider will have the correct height when used in flex container
   * @default false
   */
  flexItem?: boolean;
}
