/**
 * Select component type definitions
 */

import type { SelectProps as MuiSelectProps, SelectChangeEvent } from '@mui/material/Select';

/**
 * Select color options
 */
export type SelectColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';

/**
 * Select variant options
 */
export type SelectVariant = 'filled' | 'outlined' | 'standard';

/**
 * Select size options
 */
export type SelectSize = 'small' | 'medium';

/**
 * MRS Select component props
 * Extends Material-UI SelectProps with custom properties
 *
 * @example
 * ```tsx
 * <Select value={value} onChange={handleChange}>
 *   <MenuItem value="option1">Option 1</MenuItem>
 *   <MenuItem value="option2">Option 2</MenuItem>
 * </Select>
 * ```
 */
export interface SelectProps extends Omit<MuiSelectProps, 'color' | 'variant' | 'size'> {
  /**
   * The color of the component
   * @default 'primary'
   */
  color?: SelectColor;

  /**
   * The variant to use
   * @default 'outlined'
   */
  variant?: SelectVariant;

  /**
   * The size of the component
   * @default 'medium'
   */
  size?: SelectSize;

  /**
   * The input value
   */
  value?: any;

  /**
   * Callback fired when the value is changed
   */
  onChange?: (event: SelectChangeEvent<any>, child: React.ReactNode) => void;

  /**
   * If true, the component is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * If true, the select will indicate an error
   * @default false
   */
  error?: boolean;

  /**
   * If true, the select will take up the full width
   * @default false
   */
  fullWidth?: boolean;

  /**
   * The label content
   */
  label?: string;

  /**
   * If true, value must be an array and the menu will support multiple selections
   * @default false
   */
  multiple?: boolean;

  /**
   * If true, the component is required
   * @default false
   */
  required?: boolean;

  /**
   * If true, the select is in native mode (uses native HTML select)
   * @default false
   */
  native?: boolean;

  /**
   * Render the selected value
   */
  renderValue?: (value: any) => React.ReactNode;

  /**
   * If true, the Select opens automatically on mount
   * @default false
   */
  autoFocus?: boolean;

  /**
   * If true, the component is auto-width
   * @default false
   */
  autoWidth?: boolean;

  /**
   * The default value. Use when the component is not controlled
   */
  defaultValue?: any;

  /**
   * The id of the wrapper element
   */
  id?: string;

  /**
   * Name attribute of the select element
   */
  name?: string;

  /**
   * Callback fired when the component requests to be closed
   */
  onClose?: (event: React.SyntheticEvent) => void;

  /**
   * Callback fired when the component requests to be opened
   */
  onOpen?: (event: React.SyntheticEvent) => void;

  /**
   * If true, the menu is open
   */
  open?: boolean;
}

export type { SelectChangeEvent };
