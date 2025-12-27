/**
 * FormControlLabel component
 * Wraps Material-UI FormControlLabel with design system theme
 */

import React from 'react';
import MuiFormControlLabel from '@mui/material/FormControlLabel';
import type { Theme } from '@mui/material/styles';
import type { FormControlLabelProps } from './FormControlLabel.types';

/**
 * FormControlLabel component - label wrapper for form controls
 * Drop-in replacement for checkboxes, radio buttons, and switches
 *
 * @example
 * ```tsx
 * <FormControlLabel
 *   control={<Checkbox />}
 *   label="Remember me"
 * />
 * ```
 */
export const FormControlLabel = React.forwardRef<HTMLLabelElement, FormControlLabelProps>(
  ({ control, label, sx, ...props }, ref) => {
    return (
      <MuiFormControlLabel
        ref={ref}
        control={control}
        label={label}
        sx={{
          '& .MuiFormControlLabel-label': {
            fontFamily: (theme: Theme) => theme.typography.fontFamily,
            fontSize: (theme: Theme) => theme.typography.body1.fontSize,
            lineHeight: (theme: Theme) => theme.typography.body1.lineHeight,
          },
          ...sx,
        }}
        {...props}
      />
    );
  }
);

FormControlLabel.displayName = 'FormControlLabel';

export default FormControlLabel;
