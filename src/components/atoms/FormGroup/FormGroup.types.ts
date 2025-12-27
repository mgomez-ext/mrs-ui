/**
 * FormGroup component type definitions
 */

import type { FormGroupProps as MuiFormGroupProps } from '@mui/material/FormGroup';

/**
 * Props for the FormGroup component
 */
export interface FormGroupProps extends MuiFormGroupProps {
  /**
   * Display group of elements in a compact row
   */
  row?: boolean;

  /**
   * The content of the component
   */
  children?: React.ReactNode;

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles
   */
  sx?: MuiFormGroupProps['sx'];
}
