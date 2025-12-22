/**
 * Button Component
 *
 * Primary action component for the MRS Design System.
 * Wraps Material-UI Button with custom theme tokens.
 *
 * @figma https://figma.com/design/ESNP5KunFotGObfcuXZ9Op/MRS---Material-UI-v.7.2.0
 * @see {@link https://mui.com/material-ui/react-button/}
 */

import React from 'react';
import MuiButton from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { ButtonProps } from './Button.types';

/**
 * Button component
 *
 * @param props - Button component props
 * @returns Button component
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, sx, ...props }, ref) => {
    const theme = useTheme();

    return (
      <MuiButton
        ref={ref}
        {...props}
        sx={{
          // Use theme tokens for consistent styling
          textTransform: 'none', // Override MUI default uppercase
          borderRadius: theme.shape.rounded, // Use rounded shape token
          fontWeight: theme.typography.fontWeightSemiBold,
          // Allow custom sx to override defaults
          ...sx,
        }}
      >
        {children}
      </MuiButton>
    );
  }
);

Button.displayName = 'Button';
