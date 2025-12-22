/**
 * Autocomplete component type definitions
 */

import { AutocompleteProps as MuiAutocompleteProps } from '@mui/material/Autocomplete';

/**
 * MRS Autocomplete component props
 * Extends Material-UI AutocompleteProps
 *
 * @example
 * ```tsx
 * // Single select
 * <Autocomplete
 *   options={['Option 1', 'Option 2', 'Option 3']}
 *   label="Select option"
 *   onChange={(event, value) => console.log(value)}
 * />
 *
 * // Multiple select
 * <Autocomplete
 *   multiple
 *   options={['Option 1', 'Option 2', 'Option 3']}
 *   label="Select options"
 *   onChange={(event, value) => console.log(value)}
 * />
 * ```
 */
export interface AutocompleteProps<
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
> extends Omit<MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>, 'renderInput'> {
  /**
   * Array of options to display in the dropdown
   */
  options: T[];

  /**
   * Label for the input field
   */
  label?: string;

  /**
   * Placeholder text when no value is selected
   * @default "Select option"
   */
  placeholder?: string;

  /**
   * If `true`, the component is in an error state
   * @default false
   */
  error?: boolean;

  /**
   * Helper text to display below the input
   */
  helperText?: string;

  /**
   * If `true`, the component is required
   * @default false
   */
  required?: boolean;

  /**
   * If `true`, the autocomplete is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the component is read-only
   * @default false
   */
  readOnly?: boolean;

  /**
   * The size of the component
   * @default 'medium'
   */
  size?: 'small' | 'medium';

  /**
   * If `true`, the user can select multiple values
   * @default false
   */
  multiple?: Multiple;

  /**
   * If `true`, the clear button is hidden
   * @default false
   */
  disableClearable?: DisableClearable;

  /**
   * If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options
   * @default false
   */
  freeSolo?: FreeSolo;

  /**
   * If `true`, the input will take up the full width of its container
   * @default false
   */
  fullWidth?: boolean;
}
