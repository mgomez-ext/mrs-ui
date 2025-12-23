/**
 * Switch component type definitions
 */

import type { SwitchProps as MuiSwitchProps } from '@mui/material/Switch';

/**
 * MRS Switch component props
 * Extends Material-UI SwitchProps while narrowing size and color to design spec
 *
 * @example
 * ```tsx
 * <Switch />
 * <Switch checked />
 * <Switch color="default" size="small" />
 * ```
 */
export interface SwitchProps extends Omit<MuiSwitchProps, 'size' | 'color'> {
  /**
   * If `true`, the component is checked.
   */
  checked?: boolean;

  /**
   * The size of the component.
   * @default 'medium'
   */
  size?: 'small' | 'medium';

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
   * Ref applied to the input element.
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
   * The value of the component.
   */
  value?: unknown;

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: MuiSwitchProps['sx'];
}
