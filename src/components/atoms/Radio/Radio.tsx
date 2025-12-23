/**
 * Radio Component
 *
 * Radio component for the MRS Design System.
 * Wraps Material-UI Radio with custom theme tokens.
 *
 * @figma https://www.figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0?node-id=6558-39273&m=dev
 * @see {@link https://mui.com/material-ui/react-radio/}
 */

import React from 'react';
import MuiRadio from '@mui/material/Radio';
import type { RadioProps } from './Radio.types';

/**
 * Radio component
 *
 * Radio buttons allow the user to select one option from a set.
 * Use radio buttons when the user needs to see all available options.
 * If available options can be collapsed, consider using a Select component because it uses less space.
 *
 * @param props - Radio component props
 * @returns Radio component
 */
export const Radio = React.forwardRef<HTMLButtonElement, RadioProps>(
  (
    {
      checked,
      size = 'medium',
      color = 'primary',
      disabled = false,
      disableRipple = false,
      required = false,
      onChange,
      value,
      id,
      inputProps,
      sx,
      ...restProps
    },
    ref
  ) => {
    return (
      <MuiRadio
        ref={ref}
        checked={checked}
        size={size as 'small' | 'medium'}
        color={color}
        disabled={disabled}
        disableRipple={disableRipple}
        required={required}
        onChange={onChange}
        value={value}
        id={id}
        inputProps={inputProps}
        sx={sx}
        {...restProps}
      />
    );
  }
);

Radio.displayName = 'Radio';
