/**
 * Stack component
 * Wraps Material-UI Stack with design system theme
 */

import React from 'react';
import MuiStack from '@mui/material/Stack';
import type { StackProps } from './Stack.types';

/**
 * Stack component - manages layout of immediate children along vertical or horizontal axis
 * Provides spacing between children with optional dividers
 *
 * @example
 * ```tsx
 * <Stack spacing={2} direction="row">
 *   <Item>Item 1</Item>
 *   <Item>Item 2</Item>
 * </Stack>
 * ```
 */
export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ children, direction = 'column', spacing = 0, ...props }, ref) => {
    return (
      <MuiStack ref={ref} direction={direction} spacing={spacing} {...props}>
        {children}
      </MuiStack>
    );
  }
);

Stack.displayName = 'Stack';

export default Stack;
