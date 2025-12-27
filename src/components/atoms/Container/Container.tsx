/**
 * Container component
 * Wraps Material-UI Container with design system theme
 */

import React from 'react';
import MuiContainer from '@mui/material/Container';
import type { ContainerProps } from './Container.types';

/**
 * Container component - centers content horizontally with max-width constraints
 * The most basic layout element that provides responsive horizontal padding
 *
 * @example
 * ```tsx
 * <Container maxWidth="lg">
 *   <Typography>Content</Typography>
 * </Container>
 * ```
 */
export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, maxWidth = 'lg', ...props }, ref) => {
    return (
      <MuiContainer ref={ref} maxWidth={maxWidth} {...props}>
        {children}
      </MuiContainer>
    );
  }
);

Container.displayName = 'Container';

export default Container;
