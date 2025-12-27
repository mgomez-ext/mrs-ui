/**
 * RadioGroup component type definitions
 */

import type { RadioGroupProps as MuiRadioGroupProps } from '@mui/material/RadioGroup';

/**
 * Props for the RadioGroup component
 */
export interface RadioGroupProps extends MuiRadioGroupProps {
  /**
   * The name used to reference the value of the control
   */
  name?: string;

  /**
   * The value of the selected radio button
   */
  value?: any;

  /**
   * Callback fired when a radio button is selected
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;

  /**
   * The default value. Use when the component is not controlled
   */
  defaultValue?: any;

  /**
   * Display group of elements in a compact row
   */
  row?: boolean;

  /**
   * The content of the component
   */
  children?: React.ReactNode;
}
