/**
 * Icon component type definitions
 */

import type { SvgIconProps } from '@mui/material/SvgIcon';
import type { IconProps as MuiIconProps } from '@mui/material/Icon';

/**
 * Icon size options
 */
export type IconSize = 'small' | 'medium' | 'large' | 'inherit';

/**
 * Icon type - either SVG icon or Font icon
 */
export type IconType = 'svg' | 'font';

/**
 * Base Icon component props for SVG icons
 */
export interface IconSvgProps extends Omit<SvgIconProps, 'fontSize'> {
  /**
   * Icon type
   * @default 'svg'
   */
  type?: 'svg';

  /**
   * Size of the icon
   * @default 'medium'
   */
  size?: IconSize;

  /**
   * Icon component from @mui/icons-material
   * @example
   * ```tsx
   * import AddIcon from '@mui/icons-material/Add';
   * <Icon icon={AddIcon} />
   * ```
   */
  icon: React.ComponentType<SvgIconProps>;
}

/**
 * Base Icon component props for Font icons
 */
export interface IconFontProps extends Omit<MuiIconProps, 'fontSize'> {
  /**
   * Icon type
   */
  type: 'font';

  /**
   * Size of the icon
   * @default 'medium'
   */
  size?: IconSize;

  /**
   * Icon name (Material Icons font name)
   * @example 'add', 'home', 'settings'
   */
  iconName: string;
}

/**
 * MRS Icon component props
 * Supports both SVG icons (@mui/icons-material) and Font icons (Material Icons)
 */
export type IconProps = IconSvgProps | IconFontProps;
