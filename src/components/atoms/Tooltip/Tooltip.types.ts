/**
 * Tooltip component type definitions
 */

import { TooltipProps as MuiTooltipProps } from '@mui/material/Tooltip';

/**
 * MRS Tooltip component props
 * Extends Material-UI TooltipProps
 *
 * @example
 * ```tsx
 * <Tooltip title="Helpful text">
 *   <Button>Hover me</Button>
 * </Tooltip>
 * ```
 */
export interface TooltipProps extends MuiTooltipProps {
  /**
   * Tooltip title/content
   * Required when the component is not used as a simple wrapper
   */
  title: NonNullable<React.ReactNode>;

  /**
   * The placement of the tooltip
   * @default 'bottom'
   */
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';

  /**
   * If true, adds an arrow to the tooltip
   * @default true
   */
  arrow?: boolean;
}
