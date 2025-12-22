/**
 * Switch Component
 *
 * Switch component for the MRS Design System.
 * Wraps Material-UI Switch with custom theme tokens.
 *
 * @figma https://www.figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0?node-id=6564-39128&m=dev
 * @see {@link https://mui.com/material-ui/react-switch/}
 */

import React from 'react';
import MuiSwitch from '@mui/material/Switch';
import { SwitchProps } from './Switch.types';

/**
 * Switch component
 *
 * Switches toggle the state of a single setting on or off.
 *
 * @param props - Switch component props
 * @returns Switch component
 */
// MUI Switch internally renders button element for accessibility
export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      checked,
      color = 'primary',
      size = 'medium',
      disabled = false,
      disableRipple = false,
      id,
      inputProps,
      inputRef,
      onChange,
      required = false,
      value,
      sx,
      edge,
      ...restProps
    },
    ref
  ) => {
    return (
      <MuiSwitch
        ref={ref}
        checked={checked}
        color={color}
        size={size}
        disabled={disabled}
        disableRipple={disableRipple}
        id={id}
        inputProps={inputProps}
        inputRef={inputRef}
        onChange={onChange}
        required={required}
        value={value}
        sx={sx}
        edge={edge}
        {...restProps}
      />
    );
  }
);

Switch.displayName = 'Switch';
