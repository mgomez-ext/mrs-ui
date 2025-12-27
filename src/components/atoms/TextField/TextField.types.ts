/**
 * TextField component type definitions
 */

import type { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';

/**
 * TextField color options
 */
export type TextFieldColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';

/**
 * TextField variant options
 */
export type TextFieldVariant = 'filled' | 'outlined' | 'standard';

/**
 * TextField size options
 */
export type TextFieldSize = 'small' | 'medium';

/**
 * MRS TextField component props
 * Extends Material-UI TextFieldProps with custom properties
 *
 * @example
 * ```tsx
 * <TextField
 *   label="Email"
 *   variant="outlined"
 *   color="primary"
 *   helperText="Enter your email address"
 * />
 * ```
 */
export interface TextFieldProps extends Omit<MuiTextFieldProps, 'color' | 'variant' | 'size'> {
  /**
   * The color of the component
   * @default 'primary'
   */
  color?: TextFieldColor;

  /**
   * The variant to use
   * @default 'outlined'
   */
  variant?: TextFieldVariant;

  /**
   * The size of the component
   * @default 'medium'
   */
  size?: TextFieldSize;

  /**
   * If true, the input element is required
   * @default false
   */
  required?: boolean;

  /**
   * If true, the component is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * If true, the input will indicate an error
   * @default false
   */
  error?: boolean;

  /**
   * If true, the input element will be focused during the first mount
   * @default false
   */
  autoFocus?: boolean;

  /**
   * If true, a textarea element is rendered instead of an input
   * @default false
   */
  multiline?: boolean;

  /**
   * Number of rows to display when multiline option is set to true
   */
  rows?: number | string;

  /**
   * Maximum number of rows to display when multiline option is set to true
   */
  maxRows?: number | string;

  /**
   * Minimum number of rows to display when multiline option is set to true
   */
  minRows?: number | string;

  /**
   * If true, the input will take up the full width of its container
   * @default false
   */
  fullWidth?: boolean;

  /**
   * The label content
   */
  label?: string;

  /**
   * The short hint displayed in the input before the user enters a value
   */
  placeholder?: string;

  /**
   * The helper text content
   */
  helperText?: string;

  /**
   * The default value. Use when the component is not controlled
   */
  defaultValue?: unknown;

  /**
   * The value of the input element, required for a controlled component
   */
  value?: unknown;

  /**
   * Type of the input element
   * @default 'text'
   */
  type?: string;

  /**
   * Name attribute of the input element
   */
  name?: string;

  /**
   * Callback fired when the value is changed
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

  /**
   * Callback fired when the input is blurred
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

  /**
   * Callback fired when the input is focused
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
