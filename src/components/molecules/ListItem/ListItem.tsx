/**
 * ListItem Component
 *
 * ListItem component for the MRS Design System.
 * Wraps Material-UI ListItem and ListItemButton with custom theme tokens.
 *
 * Based on Figma design specifications with all variants and states.
 *
 * @figma https://www.figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0?node-id=6591-48882&m=dev
 * @see {@link https://mui.com/material-ui/react-list/}
 */

import React from 'react';
import MuiListItem from '@mui/material/ListItem';
import MuiListItemButton from '@mui/material/ListItemButton';
import { useTheme } from '@mui/material/styles';
import { ListItemProps } from './ListItem.types';

/**
 * ListItem component
 *
 * ListItem is an interactive list item component by default.
 * When button prop is true (default), it wraps children with ListItemButton for interactivity.
 *
 * Key features:
 * - Interactive by default with hover, focus, and selected states
 * - Selected state uses SemiBold font and primary.dark color
 * - Dense mode for compact layouts
 * - Support for icons, secondary text, and actions
 *
 * @param props - ListItem component props
 * @returns ListItem component
 */
export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  (
    {
      children,
      button = true,
      dense = false,
      disableGutters = false,
      divider = false,
      disablePadding = false,
      secondaryAction,
      alignItems = 'center',
      selected = false,
      disabled = false,
      autoFocus = false,
      onClick,
      component,
      sx,
      ...restProps
    },
    ref
  ) => {
    const theme = useTheme();

    // If button is true, use ListItemButton wrapper for interactivity
    if (button) {
      return (
        <MuiListItem
          ref={ref}
          dense={dense}
          disableGutters={disableGutters}
          divider={divider}
          disablePadding={disablePadding}
          secondaryAction={secondaryAction}
          component={component}
          sx={sx}
          {...restProps}
        >
          <MuiListItemButton
            selected={selected}
            disabled={disabled}
            autoFocus={autoFocus}
            onClick={onClick}
            alignItems={alignItems}
            sx={{
              // Selected state: Apply SemiBold weight and primary.dark color to text
              ...(selected && {
                '& .MuiListItemText-primary': {
                  fontFamily: theme.typography.subtitle1.fontFamily,
                  fontWeight: theme.typography.subtitle1.fontWeight,
                  color: theme.palette.primary.dark,
                },
              }),
            }}
          >
            {children}
          </MuiListItemButton>
        </MuiListItem>
      );
    }

    // Otherwise, use standard ListItem (static, non-interactive)
    return (
      <MuiListItem
        ref={ref}
        dense={dense}
        disableGutters={disableGutters}
        divider={divider}
        disablePadding={disablePadding}
        secondaryAction={secondaryAction}
        alignItems={alignItems}
        component={component}
        sx={sx}
        {...restProps}
      >
        {children}
      </MuiListItem>
    );
  }
);

ListItem.displayName = 'ListItem';
