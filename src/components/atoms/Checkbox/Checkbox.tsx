/**
 * Checkbox Component
 *
 * Checkbox component for the MRS Design System.
 * Wraps Material-UI Checkbox with custom theme tokens.
 *
 * @figma https://www.figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0?node-id=6543-43052&m=dev
 * @see {@link https://mui.com/material-ui/react-checkbox/}
 */

import React from 'react';
import MuiCheckbox from '@mui/material/Checkbox';
import type { CheckboxProps } from './Checkbox.types';

/**
 * Checkbox component
 *
 * Checkboxes allow the user to select one or more items from a set.
 *
 * @param props - Checkbox component props
 * @returns Checkbox component
 */
export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      checked,
      indeterminate = false,
      size = 'medium',
      color = 'primary',
      disabled = false,
      disableRipple = false,
      id,
      inputProps,
      inputRef,
      onChange,
      required = false,
      value,
      sx,
      ...restProps
    },
    ref
  ) => {
    return (
      <MuiCheckbox
        ref={ref}
        checked={checked}
        indeterminate={indeterminate}
        size={size}
        color={color}
        disabled={disabled}
        disableRipple={disableRipple}
        id={id}
        inputProps={inputProps}
        inputRef={inputRef}
        onChange={onChange}
        required={required}
        value={value}
        sx={sx}
        {...restProps}
      />
    );
  }
);

Checkbox.displayName = 'Checkbox';
