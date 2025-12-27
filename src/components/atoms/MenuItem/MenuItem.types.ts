/**
 * MenuItem component type definitions
 */

import type { MenuItemProps as MuiMenuItemProps } from '@mui/material/MenuItem';

/**
 * MRS MenuItem component props
 * Extends Material-UI MenuItemProps with custom properties
 *
 * @example
 * ```tsx
 * <MenuItem value="option1">Option 1</MenuItem>
 * <MenuItem value="option2" disabled>Option 2</MenuItem>
 * ```
 */
export interface MenuItemProps extends MuiMenuItemProps {
  /**
   * The value of the menu item
   */
  value?: any;

  /**
   * If true, the menu item will be disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * If true, the menu item will be selected
   * @default false
   */
  selected?: boolean;

  /**
   * If true, the menu item will be a divider
   * @default false
   */
  divider?: boolean;

  /**
   * If true, compact vertical padding designed for keyboard and mouse input
   * @default false
   */
  dense?: boolean;

  /**
   * If true, the left and right padding is removed
   * @default false
   */
  disableGutters?: boolean;
}
