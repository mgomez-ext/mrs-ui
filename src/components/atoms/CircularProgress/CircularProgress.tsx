/**
 * CircularProgress Component
 *
 * CircularProgress component for the MRS Design System.
 * Wraps Material-UI CircularProgress with custom theme tokens.
 *
 * @figma https://figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0?node-id=6586:47016
 * @see {@link https://mui.com/material-ui/react-progress/#circular}
 */

import React from 'react';
import MuiCircularProgress from '@mui/material/CircularProgress';
import { Box, Typography } from '@mui/material';
import { CircularProgressProps } from './CircularProgress.types';

/**
 * CircularProgress component
 *
 * Progress indicators commonly known as spinners, express an unspecified wait time
 * or display the length of a process.
 *
 * @param props - CircularProgress component props
 * @returns CircularProgress component
 */
export const CircularProgress = React.forwardRef<HTMLSpanElement, CircularProgressProps>(
  (
    {
      size = 32,
      color = 'primary',
      showLabel = false,
      value = 0,
      variant = 'indeterminate',
      ...props
    },
    ref
  ) => {
    if (showLabel && variant === 'determinate') {
      return (
        <Box
          ref={ref}
          sx={{
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MuiCircularProgress
            variant={variant}
            color={color}
            size={size}
            value={value}
            {...props}
          />
          <Box
            sx={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="caption"
              component="div"
              sx={{
                fontSize: size === 16 ? '0.625rem' : '0.75rem',
                lineHeight: 1,
              }}
            >
              {`${Math.round(value)}%`}
            </Typography>
          </Box>
        </Box>
      );
    }

    return (
      <MuiCircularProgress
        ref={ref}
        variant={variant}
        color={color}
        size={size}
        value={value}
        {...props}
      />
    );
  }
);

CircularProgress.displayName = 'CircularProgress';
