/**
 * Box component type definitions
 */

import type { BoxProps as MuiBoxProps } from '@mui/material/Box';

/**
 * Props for the Box component
 */
export interface BoxProps extends MuiBoxProps {
  /**
   * The component used for the root node
   */
  component?: React.ElementType;

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles
   */
  sx?: MuiBoxProps['sx'];

  /**
   * The content of the component
   */
  children?: React.ReactNode;
}
