/**
 * Divider Component
 *
 * Separator component for the MRS Design System.
 * Wraps Material-UI Divider with custom theme tokens.
 *
 * @figma Horizontal: https://figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0?node-id=6645:53005
 * @figma Vertical: https://figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0?node-id=6645:53007
 * @see {@link https://mui.com/material-ui/react-divider/}
 */

import React from 'react';
import MuiDivider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import { DividerProps } from './Divider.types';

/**
 * Divider component
 *
 * A thin line that groups content in lists and layouts.
 * Supports both horizontal and vertical orientations.
 *
 * @param props - Divider component props
 * @returns Divider component
 */
export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ orientation = 'horizontal', sx, ...props }, ref) => {
    const theme = useTheme();

    return (
      <MuiDivider
        ref={ref}
        orientation={orientation}
        {...props}
        sx={{
          // Use theme divider color token
          borderColor: theme.palette.divider,
          ...sx,
        }}
      />
    );
  }
);

Divider.displayName = 'Divider';
