/**
 * TextField Component
 *
 * Text input component for the MRS Design System.
 * Wraps Material-UI TextField with custom theme tokens.
 *
 * @figma https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=6570-48313&m=dev
 * @see {@link https://mui.com/material-ui/react-text-field/}
 */

import React from 'react';
import MuiTextField from '@mui/material/TextField';
import type { Theme } from '@mui/material/styles';
import type { TextFieldProps } from './TextField.types';

/**
 * TextField component
 *
 * Text fields let users enter and edit text.
 * Supports multiple variants (outlined, filled, standard),
 * sizes (small, medium), and states (error, disabled, etc.).
 *
 * @param props - TextField component props
 * @returns TextField component
 *
 * @example
 * ```tsx
 * // Basic usage
 * <TextField label="Email" placeholder="Enter your email" />
 *
 * // With helper text and error
 * <TextField
 *   label="Password"
 *   type="password"
 *   error
 *   helperText="Password is required"
 * />
 *
 * // Multiline
 * <TextField
 *   label="Description"
 *   multiline
 *   rows={4}
 *   placeholder="Enter description"
 * />
 * ```
 */
export const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>(
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
      <MuiTextField
        ref={ref}
        variant={variant}
        color={color}
        size={size}
        fullWidth={fullWidth}
        sx={{
          // Custom styling can be added here if needed
          // Font family is inherited from theme
          '& .MuiInputBase-root': {
            fontFamily: (theme: Theme) => theme.typography.fontFamily,
          },
          '& .MuiInputLabel-root': {
            fontFamily: (theme: Theme) => theme.typography.fontFamily,
            fontWeight: (theme: Theme) => theme.typography.fontWeightRegular,
          },
          '& .MuiFormHelperText-root': {
            fontFamily: (theme: Theme) => theme.typography.fontFamily,
            fontSize: (theme: Theme) => theme.typography.caption.fontSize,
          },
          // Outlined variant specific styles
          ...(variant === 'outlined' && {
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: (theme: Theme) =>
                  theme.palette._components?.input?.outlined?.enabledBorder || theme.palette.divider,
              },
              '&:hover fieldset': {
                borderColor: (theme: Theme) => theme.palette.text.primary,
              },
              '&.Mui-focused fieldset': {
                borderWidth: 2,
              },
            },
          }),
          // Filled variant specific styles
          ...(variant === 'filled' && {
            '& .MuiFilledInput-root': {
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
            },
          }),
          // Standard variant specific styles
          ...(variant === 'standard' && {
            '& .MuiInput-root': {
              '&:before': {
                borderBottomColor: (theme: Theme) =>
                  theme.palette._components?.input?.standard?.enabledBorder || theme.palette.divider,
              },
              '&:hover:not(.Mui-disabled):before': {
                borderBottomColor: (theme: Theme) => theme.palette.text.primary,
              },
            },
          }),
          ...sx,
        }}
        {...props}
      />
    );
  }
);

TextField.displayName = 'TextField';

export default TextField;
