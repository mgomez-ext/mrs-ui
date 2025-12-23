/**
 * Skeleton Component
 *
 * Skeleton component for the MRS Design System.
 * Wraps Material-UI Skeleton with custom theme tokens.
 *
 * @figma https://figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0?node-id=6596:49017
 * @see {@link https://mui.com/material-ui/react-skeleton/}
 */

import React from 'react';
import MuiSkeleton from '@mui/material/Skeleton';
import type { SkeletonProps } from './Skeleton.types';

/**
 * Skeleton component
 *
 * Display a placeholder preview of your content before the data gets loaded
 * to reduce load-time frustration.
 *
 * @param props - Skeleton component props
 * @returns Skeleton component
 */
export const Skeleton = React.forwardRef<HTMLSpanElement, SkeletonProps>(
  ({ variant = 'text', width, height, animation = 'pulse', ...props }, ref) => {
    // Set default dimensions based on variant
    let defaultWidth = width;
    let defaultHeight = height;

    if (variant === 'text' && !width) {
      defaultWidth = 120;
    }
    if (variant === 'text' && !height) {
      defaultHeight = 12;
    }
    if (variant === 'circular' && !width && !height) {
      defaultWidth = 40;
      defaultHeight = 40;
    }
    if (variant === 'rectangular' && !width && !height) {
      defaultWidth = 120;
      defaultHeight = 120;
    }

    return (
      <MuiSkeleton
        ref={ref}
        variant={variant}
        width={defaultWidth}
        height={defaultHeight}
        animation={animation}
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';
