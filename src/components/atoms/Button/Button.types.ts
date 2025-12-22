/**
 * Button component type definitions
 */

import { ButtonProps as MuiButtonProps } from '@mui/material/Button';

/**
 * MRS Button component props
 * Extends Material-UI ButtonProps with custom properties
 *
 * @example
 * ```tsx
 * <Button variant="contained" color="primary">
 *   Click me
 * </Button>
 * ```
 */
export interface ButtonProps extends MuiButtonProps {
  // Add custom props here if needed in the future
}
