/**
 * Radio component type definitions
 */

import { RadioProps as MuiRadioProps } from '@mui/material/Radio';

/**
 * MRS Radio component props
 * Extends Material-UI RadioProps
 *
 * @example
 * ```tsx
 * <Radio checked />
 * <Radio color="primary" />
 * <Radio size="small" />
 * <Radio disabled />
 * ```
 */
export interface RadioProps extends Omit<MuiRadioProps, 'size' | 'color'> {
  /**
   * If `true`, the component is checked.
   */
  checked?: boolean;

  /**
   * The size of the component.
   * @default "medium"
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * The color of the component.
   * It supports both default and custom theme colors.
   * @default "primary"
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
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the `input`.
   * @default false
   */
  required?: boolean;

  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;

  /**
   * The value of the component. The DOM API casts this to a string.
   */
  value?: unknown;

  /**
   * The id of the `input` element.
   */
  id?: string;

  /**
   * Attributes applied to the `input` element.
   */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: MuiRadioProps['sx'];
}
