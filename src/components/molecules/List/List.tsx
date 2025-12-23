/**
 * List Component
 *
 * List component for the MRS Design System.
 * Wraps Material-UI List with custom theme tokens.
 *
 * @figma https://www.figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0?node-id=11566-157133&m=dev
 * @see {@link https://mui.com/material-ui/react-list/}
 */

import React from 'react';
import MuiList from '@mui/material/List';
import type { ListProps } from './List.types';

/**
 * List component
 *
 * Lists are continuous, vertical indexes of text or images.
 * They are composed of items containing primary and supplemental actions.
 *
 * @param props - List component props
 * @returns List component
 */
export const List = React.forwardRef<HTMLUListElement, ListProps>(
  (
    {
      children,
      dense = false,
      disablePadding = false,
      subheader,
      component = 'ul',
      sx,
      ...restProps
    },
    ref
  ) => {
    return (
      <MuiList
        ref={ref}
        dense={dense}
        disablePadding={disablePadding}
        subheader={subheader}
        component={component}
        sx={sx}
        {...restProps}
      >
        {children}
      </MuiList>
    );
  }
);

List.displayName = 'List';
