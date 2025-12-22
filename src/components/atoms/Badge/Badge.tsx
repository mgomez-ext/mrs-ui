/**
 * Badge Component
 *
 * Badge component for the MRS Design System.
 * Wraps Material-UI Badge with custom theme tokens.
 *
 * @figma https://figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0?node-id=6587:47500
 * @see {@link https://mui.com/material-ui/react-badge/}
 */

import React from 'react';
import MuiBadge from '@mui/material/Badge';
import { useTheme } from '@mui/material/styles';
import { BadgeProps } from './Badge.types';

/**
 * Badge component
 *
 * Generates a small badge to the top-right of its child(ren).
 * Typically used to display notification counts or status indicators.
 *
 * @param props - Badge component props
 * @returns Badge component
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, color = 'default', variant = 'standard', sx, ...props }, ref) => {
    const theme = useTheme();

    return (
      <MuiBadge
        ref={ref}
        color={color}
        variant={variant}
        {...props}
        sx={{
          // Badge styling
          '& .MuiBadge-badge': {
            fontFamily: theme.typography.fontFamily,
            fontWeight: theme.typography.fontWeightMedium,
          },
          ...sx,
        }}
      >
        {children}
      </MuiBadge>
    );
  }
);

Badge.displayName = 'Badge';
