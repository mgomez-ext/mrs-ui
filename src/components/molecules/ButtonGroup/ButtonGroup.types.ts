/**
 * ButtonGroup component type definitions
 */

import { ButtonGroupProps as MuiButtonGroupProps } from '@mui/material/ButtonGroup';
import { ReactNode } from 'react';

/**
 * MRS ButtonGroup component props
 * Extends Material-UI ButtonGroupProps
 *
 * @example
 * ```tsx
 * <ButtonGroup variant="contained" color="primary">
 *   <Button>One</Button>
 *   <Button>Two</Button>
 *   <Button>Three</Button>
 * </ButtonGroup>
 * ```
 */
export interface ButtonGroupProps extends Omit<MuiButtonGroupProps, 'color'> {
  /**
   * The content of the component (buttons)
   */
  children: ReactNode;

  /**
   * The variant to use
   * @default 'contained'
   */
  variant?: 'contained' | 'outlined' | 'text';

  /**
   * The color of the component
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'error' | 'inherit';

  /**
   * The component orientation
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * The size of the component
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * If `true`, the buttons will be disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the button group will be disabled if its only button
   * @default false
   */
  disableElevation?: boolean;

  /**
   * If `true`, the button group will be disabled if its only button
   * @default false
   */
  disableRipple?: boolean;

  /**
   * If `true`, the button group will take up the full width of its container
   * @default false
   */
  fullWidth?: boolean;

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles
   */
  sx?: MuiButtonGroupProps['sx'];

  /**
   * The ref forwarding
   */
  ref?: React.Ref<HTMLDivElement>;
}
