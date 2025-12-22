/**
 * IconButton Component
 *
 * Icon button component for the MRS Design System.
 * Wraps Material-UI IconButton with custom theme tokens.
 *
 * @figma https://figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0?node-id=6557:38545
 * @see {@link https://mui.com/material-ui/react-button/#icon-button}
 */

import React from 'react';
import MuiIconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import { IconButtonProps } from './IconButton.types';

/**
 * IconButton component
 *
 * Icon buttons are commonly found in app bars and toolbars.
 * Icons are also appropriate for toggle buttons that allow a single choice to be selected or deselected.
 *
 * @param props - IconButton component props
 * @returns IconButton component
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, color = 'default', size = 'medium', sx, ...props }, ref) => {
    const theme = useTheme();

    return (
      <MuiIconButton
        ref={ref}
        color={color}
        size={size}
        {...props}
        sx={{
          // Use theme tokens for consistency
          fontFamily: theme.typography.fontFamily,
          ...sx,
        }}
      >
        {children}
      </MuiIconButton>
    );
  }
);

IconButton.displayName = 'IconButton';
