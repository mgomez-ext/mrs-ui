/**
 * FormControlLabel component type definitions
 */

import type { FormControlLabelProps as MuiFormControlLabelProps } from '@mui/material/FormControlLabel';

/**
 * Label placement options
 */
export type FormControlLabelPlacement = 'end' | 'start' | 'top' | 'bottom';

/**
 * Props for the FormControlLabel component
 */
export interface FormControlLabelProps extends Omit<MuiFormControlLabelProps, 'labelPlacement'> {
  /**
   * A control element. For instance, a Radio, Switch, or Checkbox
   */
  control: React.ReactElement;

  /**
   * The text to be used in an enclosing label element
   */
  label: React.ReactNode;

  /**
   * If true, the component is disabled
   */
  disabled?: boolean;

  /**
   * If true, the label is displayed in an error state
   */
  error?: boolean;

  /**
   * If true, the control is required
   */
  required?: boolean;

  /**
   * The position of the label
   */
  labelPlacement?: FormControlLabelPlacement;

  /**
   * The value of the component
   */
  value?: any;

  /**
   * Callback fired when the state is changed
   */
  onChange?: (event: React.SyntheticEvent, checked: boolean) => void;
}
