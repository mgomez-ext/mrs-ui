/**
 * RadioGroup component
 * Wraps Material-UI RadioGroup with design system theme
 */

import React from 'react';
import MuiRadioGroup from '@mui/material/RadioGroup';
import type { RadioGroupProps } from './RadioGroup.types';

/**
 * RadioGroup component - groups Radio buttons together
 * Provides a wrapper around a set of Radio components
 *
 * @example
 * ```tsx
 * <RadioGroup value={value} onChange={handleChange}>
 *   <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
 *   <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
 * </RadioGroup>
 * ```
 */
export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiRadioGroup ref={ref} {...props}>
        {children}
      </MuiRadioGroup>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
