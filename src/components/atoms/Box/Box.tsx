/**
 * Box component
 * Wraps Material-UI Box with design system theme
 */

import React from 'react';
import MuiBox from '@mui/material/Box';
import type { BoxProps } from './Box.types';

/**
 * Box component - the most fundamental layout component
 * A utility component that serves as a wrapper with access to theme and sx prop
 *
 * @example
 * ```tsx
 * <Box sx={{ padding: 2, backgroundColor: 'primary.main' }}>
 *   Content
 * </Box>
 * ```
 */
export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiBox ref={ref} {...props}>
        {children}
      </MuiBox>
    );
  }
);

Box.displayName = 'Box';

export default Box;
