/**
 * Grid component type definitions
 */

import type { Grid2Props as MuiGridProps } from '@mui/material/Grid2';

/**
 * Grid size type (1-12 or auto or true)
 */
export type GridSize = boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/**
 * Props for the Grid component
 */
export interface GridProps extends MuiGridProps {
  /**
   * If true, the component will have the flex container behavior
   */
  container?: boolean;

  /**
   * Defines the number of grids the component is going to use
   */
  xs?: GridSize;

  /**
   * Defines the number of grids for sm breakpoint
   */
  sm?: GridSize;

  /**
   * Defines the number of grids for md breakpoint
   */
  md?: GridSize;

  /**
   * Defines the number of grids for lg breakpoint
   */
  lg?: GridSize;

  /**
   * Defines the number of grids for xl breakpoint
   */
  xl?: GridSize;

  /**
   * Defines the space between the type item components
   */
  spacing?: number | string | { xs?: number | string; sm?: number | string; md?: number | string; lg?: number | string; xl?: number | string };

  /**
   * Defines the column-gap
   */
  columnSpacing?: number | string | { xs?: number | string; sm?: number | string; md?: number | string; lg?: number | string; xl?: number | string };

  /**
   * Defines the row-gap
   */
  rowSpacing?: number | string | { xs?: number | string; sm?: number | string; md?: number | string; lg?: number | string; xl?: number | string };

  /**
   * The component used for the root node
   */
  component?: React.ElementType;

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles
   */
  sx?: MuiGridProps['sx'];

  /**
   * The content of the component
   */
  children?: React.ReactNode;
}
