/**
 * Typography Component
 *
 * Text display component for the MRS Design System.
 * Wraps Material-UI Typography with custom theme tokens.
 *
 * @figma https://figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0?node-id=11609:174872
 * @see {@link https://mui.com/material-ui/react-typography/}
 */

import React from 'react';
import MuiTypography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import type { TypographyProps } from './Typography.types';

/**
 * Typography component
 *
 * Displays text content with predefined typography styles from the theme.
 * Supports all standard MUI typography variants (h1-h6, body1-body2, subtitle1-subtitle2, caption, overline).
 *
 * @param props - Typography component props
 * @returns Typography component
 */
export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ children, variant = 'body1', gutterBottom = false, sx, ...props }, ref) => {
    const theme = useTheme();

    return (
      <MuiTypography
        ref={ref}
        variant={variant}
        gutterBottom={gutterBottom}
        {...props}
        sx={{
          // Use theme typography tokens
          fontFamily: theme.typography.fontFamily,
          // Allow custom sx to override defaults
          ...sx,
        }}
      >
        {children}
      </MuiTypography>
    );
  }
);

Typography.displayName = 'Typography';
