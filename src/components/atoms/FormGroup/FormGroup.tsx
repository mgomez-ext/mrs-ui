/**
 * FormGroup component
 * Wraps Material-UI FormGroup with design system theme
 */

import React from 'react';
import MuiFormGroup from '@mui/material/FormGroup';
import type { FormGroupProps } from './FormGroup.types';

/**
 * FormGroup component - groups form controls
 * Provides a helpful wrapper used to group selection control components
 *
 * @example
 * ```tsx
 * <FormGroup>
 *   <FormControlLabel control={<Checkbox />} label="Option 1" />
 *   <FormControlLabel control={<Checkbox />} label="Option 2" />
 * </FormGroup>
 * ```
 */
export const FormGroup = React.forwardRef<HTMLDivElement, FormGroupProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiFormGroup ref={ref} {...props}>
        {children}
      </MuiFormGroup>
    );
  }
);

FormGroup.displayName = 'FormGroup';

export default FormGroup;
