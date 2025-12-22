/**
 * Paper component type definitions
 */

import { PaperProps as MuiPaperProps } from '@mui/material/Paper';
import { ReactNode } from 'react';

/**
 * MRS Paper component props
 * Extends Material-UI PaperProps
 *
 * @example
 * ```tsx
 * <Paper>Content</Paper>
 * <Paper variant="outlined">Outlined content</Paper>
 * <Paper elevation={4}>Elevated content</Paper>
 * ```
 */
export interface PaperProps extends Omit<MuiPaperProps, 'variant' | 'elevation'> {
  /**
   * The content of the component
   */
  children?: ReactNode;

  /**
   * The variant to use
   * @default 'elevation'
   */
  variant?: 'elevation' | 'outlined';

  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation?:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24;

  /**
   * If true, rounded corners are disabled
   * @default false
   */
  square?: boolean;
}
