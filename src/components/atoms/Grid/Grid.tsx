/**
 * Grid component
 * Wraps Material-UI Grid2 with design system theme
 */

import React from 'react';
import MuiGrid from '@mui/material/Grid2';
import type { GridProps } from './Grid.types';

/**
 * Grid component - responsive grid layout using CSS Grid
 * Uses the new Grid2 component from MUI for improved performance and flexibility
 *
 * @example
 * ```tsx
 * <Grid container spacing={2}>
 *   <Grid xs={12} md={6}>
 *     <Item>1</Item>
 *   </Grid>
 *   <Grid xs={12} md={6}>
 *     <Item>2</Item>
 *   </Grid>
 * </Grid>
 * ```
 */
export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiGrid ref={ref} {...props}>
        {children}
      </MuiGrid>
    );
  }
);

Grid.displayName = 'Grid';

export default Grid;
