/**
 * LinearProgress component type definitions
 */

import type { LinearProgressProps as MuiLinearProgressProps } from '@mui/material/LinearProgress';

/**
 * MRS LinearProgress component props
 * Extends Material-UI LinearProgressProps
 *
 * @example
 * ```tsx
 * <LinearProgress />
 * <LinearProgress variant="determinate" value={50} />
 * <LinearProgress variant="buffer" value={50} valueBuffer={75} />
 * ```
 */
export interface LinearProgressProps extends MuiLinearProgressProps {
  /**
   * The color of the component
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'inherit';

  /**
   * If true, shows the progress value as a label next to the bar
   * @default false
   */
  showLabel?: boolean;

  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value?: number;

  /**
   * The value for the buffer variant.
   * Value between 0 and 100.
   */
  valueBuffer?: number;

  /**
   * The variant to use
   * @default 'indeterminate'
   */
  variant?: 'determinate' | 'indeterminate' | 'buffer';
}
