/**
 * Avatar component type definitions
 */

import type { AvatarProps as MuiAvatarProps } from '@mui/material/Avatar';
import type { ReactNode } from 'react';

/**
 * MRS Avatar component props
 * Extends Material-UI AvatarProps
 *
 * @example
 * ```tsx
 * // With initials
 * <Avatar>JD</Avatar>
 *
 * // With image
 * <Avatar src="/path/to/image.jpg" alt="John Doe" />
 *
 * // With icon
 * <Avatar>
 *   <Icon icon={PersonIcon} />
 * </Avatar>
 * ```
 */
export interface AvatarProps extends Omit<MuiAvatarProps, 'variant'> {
  /**
   * The content of the avatar (text initials, icon, or image)
   */
  children?: ReactNode;

  /**
   * The source of the avatar image
   */
  src?: string;

  /**
   * The alt text for the image
   */
  alt?: string;

  /**
   * The size of the avatar (in pixels)
   * @default 40
   */
  size?: 18 | 24 | 32 | 40;

  /**
   * The variant of the avatar
   * Note: Only 'circular' is supported in the design system
   * @default 'circular'
   */
  variant?: 'circular' | 'rounded' | 'square';
}
