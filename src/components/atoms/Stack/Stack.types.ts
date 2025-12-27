/**
 * Stack component type definitions
 */

import type { StackProps as MuiStackProps } from '@mui/material/Stack';

/**
 * Stack direction options
 */
export type StackDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

/**
 * Props for the Stack component
 */
export interface StackProps extends MuiStackProps {
  /**
   * Defines the flex-direction style property
   */
  direction?: StackDirection | { xs?: StackDirection; sm?: StackDirection; md?: StackDirection; lg?: StackDirection; xl?: StackDirection };

  /**
   * Defines the space between immediate children
   */
  spacing?: number | string | { xs?: number | string; sm?: number | string; md?: number | string; lg?: number | string; xl?: number | string };

  /**
   * Add an element between each child
   */
  divider?: React.ReactNode;

  /**
   * If true, the CSS flexbox gap is used instead of applying margin to children
   */
  useFlexGap?: boolean;

  /**
   * The component used for the root node
   */
  component?: React.ElementType;

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles
   */
  sx?: MuiStackProps['sx'];

  /**
   * The content of the component
   */
  children?: React.ReactNode;
}
