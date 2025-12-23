/**
 * Checkbox component type definitions
 */

import type { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';

/**
 * MRS Checkbox component props
 * Extends Material-UI CheckboxProps
 *
 * @example
 * ```tsx
 * <Checkbox />
 * <Checkbox checked />
 * <Checkbox indeterminate />
 * <Checkbox color="primary" size="small" />
 * ```
 */
export interface CheckboxProps extends Omit<MuiCheckboxProps, 'size' | 'color'> {
  /**
   * If `true`, the component is checked.
   */
  checked?: boolean;

  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent browser support.
   * However, a data-indeterminate attribute is set on the element.
   * @default false
   */
  indeterminate?: boolean;

  /**
   * The size of the component.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * The color of the component.
   * @default 'primary'
   */
  color?: 'default' | 'primary';

  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple?: boolean;

  /**
   * The id of the input element.
   */
  id?: string;

  /**
   * Attributes applied to the input element.
   */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;

  /**
   * Props applied to the input element.
   */
  inputRef?: React.Ref<HTMLInputElement>;

  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;

  /**
   * If `true`, the input element is required.
   * @default false
   */
  required?: boolean;

  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value?: unknown;

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: MuiCheckboxProps['sx'];
}
