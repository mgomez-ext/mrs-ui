/**
 * ButtonGroup Component
 *
 * ButtonGroup component for the MRS Design System.
 * Wraps Material-UI ButtonGroup with custom theme tokens.
 *
 * @figma https://figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0?node-id=6543:39843
 * @see {@link https://mui.com/material-ui/react-button-group/}
 */

import React from 'react';
import MuiButtonGroup from '@mui/material/ButtonGroup';
import { ButtonGroupProps } from './ButtonGroup.types';

/**
 * ButtonGroup component
 *
 * The ButtonGroup component can be used to group related buttons.
 *
 * @param props - ButtonGroup component props
 * @returns ButtonGroup component
 */
export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    {
      children,
      variant = 'contained',
      color = 'primary',
      orientation = 'horizontal',
      size = 'medium',
      disabled = false,
      disableElevation = true,
      disableRipple = false,
      fullWidth = false,
      sx,
      ...restProps
    },
    ref
  ) => {
    return (
      <MuiButtonGroup
        ref={ref}
        variant={variant}
        color={color}
        orientation={orientation}
        size={size}
        disabled={disabled}
        disableElevation={disableElevation}
        disableRipple={disableRipple}
        fullWidth={fullWidth}
        sx={{
          ...sx,
        }}
        {...restProps}
      >
        {children}
      </MuiButtonGroup>
    );
  }
);

ButtonGroup.displayName = 'ButtonGroup';
