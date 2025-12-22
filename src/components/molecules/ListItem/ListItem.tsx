/**
 * ListItem Component
 *
 * ListItem component for the MRS Design System.
 * Wraps Material-UI ListItem and ListItemButton with custom theme tokens.
 *
 * @figma https://www.figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0?node-id=6591-48882&m=dev
 * @see {@link https://mui.com/material-ui/react-list/}
 */

import React from 'react';
import MuiListItem from '@mui/material/ListItem';
import MuiListItemButton from '@mui/material/ListItemButton';
import { ListItemProps } from './ListItem.types';

/**
 * ListItem component
 *
 * ListItem is a common list item component.
 * When `button` prop is true, it becomes interactive using ListItemButton.
 *
 * @param props - ListItem component props
 * @returns ListItem component
 */
export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  (
    {
      children,
      button = false,
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
    // If button is true, use ListItemButton wrapper
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
          >
            {children}
          </MuiListItemButton>
        </MuiListItem>
      );
    }

    // Otherwise, use standard ListItem
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

