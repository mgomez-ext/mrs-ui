/**
 * Skeleton component type definitions
 */

import { SkeletonProps as MuiSkeletonProps } from '@mui/material/Skeleton';

/**
 * MRS Skeleton component props
 * Extends Material-UI SkeletonProps
 *
 * @example
 * ```tsx
 * <Skeleton variant="text" />
 * <Skeleton variant="circular" width={40} height={40} />
 * <Skeleton variant="rectangular" width={120} height={120} />
 * ```
 */
export interface SkeletonProps extends MuiSkeletonProps {
  /**
   * The type of content that will be rendered
   * @default 'text'
   */
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';

  /**
   * Width of the skeleton
   * Use number for pixel values or string for other CSS units
   */
  width?: number | string;

  /**
   * Height of the skeleton
   * Use number for pixel values or string for other CSS units
   */
  height?: number | string;

  /**
   * The animation type
   * @default 'pulse'
   */
  animation?: 'pulse' | 'wave' | false;
}
