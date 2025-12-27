/**
 * Container component type definitions
 */

import type { ContainerProps as MuiContainerProps } from '@mui/material/Container';

/**
 * Container max width options
 */
export type ContainerMaxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;

/**
 * Props for the Container component
 */
export interface ContainerProps extends MuiContainerProps {
  /**
   * Determine the max-width of the container
   */
  maxWidth?: ContainerMaxWidth;

  /**
   * If true, the left and right padding is removed
   */
  disableGutters?: boolean;

  /**
   * Set the max-width to match the min-width of the current breakpoint
   */
  fixed?: boolean;

  /**
   * The component used for the root node
   */
  component?: React.ElementType;

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles
   */
  sx?: MuiContainerProps['sx'];

  /**
   * The content of the component
   */
  children?: React.ReactNode;
}
