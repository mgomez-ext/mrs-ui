/**
 * Select Component
 *
 * Select component for the MRS Design System.
 * Wraps Material-UI Select with custom theme tokens.
 *
 * @see {@link https://mui.com/material-ui/react-select/}
 */

import React from 'react';
import MuiSelect from '@mui/material/Select';
import type { Theme } from '@mui/material/styles';
import type { SelectProps } from './Select.types';

/**
 * Select component
 *
 * Select components are used for collecting user provided information from a list of options.
 * Supports single and multiple selection, different variants, sizes, and states.
 *
 * @param props - Select component props
 * @returns Select component
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Select value={age} onChange={handleChange}>
 *   <MenuItem value={10}>Ten</MenuItem>
 *   <MenuItem value={20}>Twenty</MenuItem>
 *   <MenuItem value={30}>Thirty</MenuItem>
 * </Select>
 *
 * // With label (use FormControl)
 * <FormControl>
 *   <InputLabel>Age</InputLabel>
 *   <Select value={age} onChange={handleChange}>
 *     <MenuItem value={10}>Ten</MenuItem>
 *     <MenuItem value={20}>Twenty</MenuItem>
 *   </Select>
 * </FormControl>
 *
 * // Multiple selection
 * <Select multiple value={values} onChange={handleChange}>
 *   <MenuItem value="option1">Option 1</MenuItem>
 *   <MenuItem value="option2">Option 2</MenuItem>
 * </Select>
 * ```
 */
export const Select = React.forwardRef<any, SelectProps>(
  (
    {
      variant = 'outlined',
      color = 'primary',
      size = 'medium',
      fullWidth = false,
      sx,
      ...props
    },
    ref
  ) => {
    return (
      <MuiSelect
        ref={ref}
        variant={variant}
        color={color}
        size={size}
        fullWidth={fullWidth}
        sx={{
          fontFamily: (theme: Theme) => theme.typography.fontFamily,
          // Outlined variant specific styles
          ...(variant === 'outlined' && {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: (theme: Theme) =>
                theme.palette._components?.input?.outlined?.enabledBorder || theme.palette.divider,
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: (theme: Theme) => theme.palette.text.primary,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderWidth: 2,
            },
          }),
          // Filled variant specific styles
          ...(variant === 'filled' && {
            backgroundColor: (theme: Theme) =>
              theme.palette._components?.input?.filled?.enabledFill || 'rgba(0, 0, 0, 0.06)',
            '&:hover': {
              backgroundColor: (theme: Theme) =>
                theme.palette._components?.input?.filled?.enabledFill || 'rgba(0, 0, 0, 0.09)',
            },
            '&.Mui-focused': {
              backgroundColor: (theme: Theme) =>
                theme.palette._components?.input?.filled?.enabledFill || 'rgba(0, 0, 0, 0.06)',
            },
          }),
          // Standard variant specific styles
          ...(variant === 'standard' && {
            '&:before': {
              borderBottomColor: (theme: Theme) =>
                theme.palette._components?.input?.standard?.enabledBorder || theme.palette.divider,
            },
            '&:hover:not(.Mui-disabled):before': {
              borderBottomColor: (theme: Theme) => theme.palette.text.primary,
            },
          }),
          ...sx,
        }}
        {...props}
      />
    );
  }
);

Select.displayName = 'Select';

export default Select;
