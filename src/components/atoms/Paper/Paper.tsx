/**
 * Paper Component
 *
 * Paper component for the MRS Design System.
 * Wraps Material-UI Paper with custom theme tokens.
 *
 * @figma https://figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0?node-id=6584:46711
 * @see {@link https://mui.com/material-ui/react-paper/}
 */

import React from 'react';
import MuiPaper from '@mui/material/Paper';
import type { PaperProps } from './Paper.types';

/**
 * Paper component
 *
 * The Paper component is a container that displays content with elevation and optional borders.
 * The elevation can be used to establish a hierarchy between other content.
 *
 * @param props - Paper component props
 * @returns Paper component
 */
export const Paper = React.forwardRef<HTMLDivElement, PaperProps>(
  ({ children, variant = 'elevation', elevation = 1, square = false, sx, ...props }, ref) => {
    return (
      <MuiPaper
        ref={ref}
        variant={variant}
        elevation={variant === 'elevation' ? elevation : 0}
        square={square}
        sx={{
          ...sx,
        }}
        {...props}
      >
        {children}
      </MuiPaper>
    );
  }
);

Paper.displayName = 'Paper';
