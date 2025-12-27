/**
 * MenuItem Component
 *
 * Menu item component for the MRS Design System.
 * Wraps Material-UI MenuItem with custom theme tokens.
 *
 * @see {@link https://mui.com/material-ui/react-menu/}
 */

import React from 'react';
import MuiMenuItem from '@mui/material/MenuItem';
import type { Theme } from '@mui/material/styles';
import type { MenuItemProps } from './MenuItem.types';

/**
 * MenuItem component
 *
 * Menu items are used in menus, selects, and other components
 * to display selectable options.
 *
 * @param props - MenuItem component props
 * @returns MenuItem component
 *
 * @example
 * ```tsx
 * // In a Select
 * <Select>
 *   <MenuItem value="option1">Option 1</MenuItem>
 *   <MenuItem value="option2">Option 2</MenuItem>
 * </Select>
 *
 * // Disabled
 * <MenuItem value="disabled" disabled>
 *   Disabled Option
 * </MenuItem>
 *
 * // Selected
 * <MenuItem value="selected" selected>
 *   Selected Option
 * </MenuItem>
 * ```
 */
export const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(
  ({ children, sx, ...props }, ref) => {
    return (
      <MuiMenuItem
        ref={ref}
        sx={{
          fontFamily: (theme: Theme) => theme.typography.fontFamily,
          fontSize: (theme: Theme) => theme.typography.body1.fontSize,
          fontWeight: (theme: Theme) => theme.typography.fontWeightRegular,
          lineHeight: (theme: Theme) => theme.typography.body1.lineHeight,
          // Hover state
          '&:hover': {
            backgroundColor: (theme: Theme) => theme.palette.action.hover,
          },
          // Selected state
          '&.Mui-selected': {
            backgroundColor: (theme: Theme) => theme.palette.action.selected,
            '&:hover': {
              backgroundColor: (theme: Theme) => theme.palette.action.selected,
            },
          },
          // Focus state
          '&.Mui-focusVisible': {
            backgroundColor: (theme: Theme) => theme.palette.action.hover,
          },
          ...sx,
        }}
        {...props}
      >
        {children}
      </MuiMenuItem>
    );
  }
);

MenuItem.displayName = 'MenuItem';

export default MenuItem;
