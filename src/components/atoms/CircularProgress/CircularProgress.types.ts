/**
 * CircularProgress component type definitions
 */

import type { CircularProgressProps as MuiCircularProgressProps } from '@mui/material/CircularProgress';

/**
 * MRS CircularProgress component props
 * Extends Material-UI CircularProgressProps
 *
 * @example
 * ```tsx
 * <CircularProgress />
 * <CircularProgress value={50} />
 * <CircularProgress size={16} color="secondary" />
 * ```
 */
export interface CircularProgressProps extends Omit<MuiCircularProgressProps, 'size'> {
  /**
   * The size of the circle
   * @default 32
   */
  size?: 16 | 32;

  /**
   * The color of the component
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'inherit';

  /**
   * If true, shows the progress value as a label in the center
   * @default false
   */
  showLabel?: boolean;

  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   */
  value?: number;

  /**
   * The variant to use
   * @default 'indeterminate'
   */
  variant?: 'determinate' | 'indeterminate';
}
