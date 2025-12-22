/**
 * Badge component type definitions
 */

import { BadgeProps as MuiBadgeProps } from '@mui/material/Badge';

/**
 * MRS Badge component props
 * Extends Material-UI BadgeProps
 *
 * @example
 * ```tsx
 * <Badge badgeContent={4} color="primary">
 *   <MailIcon />
 * </Badge>
 * ```
 */
export interface BadgeProps extends MuiBadgeProps {
  /**
   * The content rendered within the badge
   */
  badgeContent?: React.ReactNode;

  /**
   * The color of the component
   * @default 'default'
   */
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';

  /**
   * The variant to use
   * @default 'standard'
   */
  variant?: 'standard' | 'dot';

  /**
   * If true, the badge is invisible
   * @default false
   */
  invisible?: boolean;

  /**
   * Max count to show
   * @default 99
   */
  max?: number;

  /**
   * Controls whether the badge is hidden when badgeContent is zero
   * @default false
   */
  showZero?: boolean;

  /**
   * The anchor of the badge
   * @default { vertical: 'top', horizontal: 'right' }
   */
  anchorOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'right';
  };

  /**
   * Wrapped shape the badge should overlap
   * @default 'rectangular'
   */
  overlap?: 'rectangular' | 'circular';
}
