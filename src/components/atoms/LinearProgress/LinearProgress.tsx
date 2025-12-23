/**
 * LinearProgress Component
 *
 * LinearProgress component for the MRS Design System.
 * Wraps Material-UI LinearProgress with custom theme tokens.
 *
 * @figma https://figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0?node-id=6586:46855
 * @see {@link https://mui.com/material-ui/react-progress/#linear}
 */

import React from 'react';
import MuiLinearProgress from '@mui/material/LinearProgress';
import { Box, Typography } from '@mui/material';
import type { LinearProgressProps } from './LinearProgress.types';

/**
 * LinearProgress component
 *
 * Progress indicators commonly known as spinners, express an unspecified wait time
 * or display the length of a process.
 *
 * @param props - LinearProgress component props
 * @returns LinearProgress component
 */
export const LinearProgress = React.forwardRef<HTMLSpanElement, LinearProgressProps>(
  (
    {
      color = 'primary',
      showLabel = false,
      value = 0,
      valueBuffer,
      variant = 'indeterminate',
      sx,
      ...props
    },
    ref
  ) => {
    if (showLabel && (variant === 'determinate' || variant === 'buffer')) {
      return (
        <Box
          ref={ref}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            minWidth: 200,
            ...sx,
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <MuiLinearProgress
              variant={variant}
              color={color}
              value={value}
              valueBuffer={valueBuffer}
              {...props}
            />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" sx={{ color: 'text.primary' }}>
              {`${Math.round(value)}%`}
            </Typography>
          </Box>
        </Box>
      );
    }

    return (
      <MuiLinearProgress
        ref={ref}
        variant={variant}
        color={color}
        value={value}
        valueBuffer={valueBuffer}
        sx={{
          minWidth: 200,
          ...sx,
        }}
        {...props}
      />
    );
  }
);

LinearProgress.displayName = 'LinearProgress';
