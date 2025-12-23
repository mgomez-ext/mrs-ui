/**
 * IconButton component type definitions
 */

import type { IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton';

/**
 * MRS IconButton component props
 * Extends Material-UI IconButtonProps
 *
 * @example
 * ```tsx
 * <IconButton color="primary" onClick={handleClick}>
 *   <Icon icon={DeleteIcon} />
 * </IconButton>
 * ```
 */
export interface IconButtonProps extends MuiIconButtonProps {
  /**
   * The color of the component
   * @default 'default'
   */
  color?:
    | 'inherit'
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';

  /**
   * The size of the button
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * If true, the button will be disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * If given, uses a negative margin to counteract the padding on one side
   * @default false
   */
  edge?: 'start' | 'end' | false;

  /**
   * If true, the ripple effect is disabled
   * @default false
   */
  disableRipple?: boolean;

  /**
   * If true, the focus ripple is disabled
   * @default false
   */
  disableFocusRipple?: boolean;
}
