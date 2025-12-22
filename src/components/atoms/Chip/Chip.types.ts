/**
 * Chip component type definitions
 */

import { ChipProps as MuiChipProps } from '@mui/material/Chip';
import { ReactElement } from 'react';

/**
 * MRS Chip component props
 * Extends Material-UI ChipProps
 *
 * @example
 * ```tsx
 * <Chip label="Chip" />
 * <Chip label="Primary" color="primary" />
 * <Chip label="Deletable" onDelete={() => {}} />
 * <Chip label="With Avatar" avatar={<Avatar>M</Avatar>} />
 * ```
 */
export interface ChipProps extends Omit<MuiChipProps, 'color'> {
  /**
   * The content of the component
   */
  label: string | ReactElement;

  /**
   * The size of the component
   * @default 'medium'
   */
  size?: 'small' | 'medium';

  /**
   * The color of the component
   * @default 'default'
   */
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';

  /**
   * The variant to use
   * @default 'filled'
   */
  variant?: 'filled' | 'outlined';

  /**
   * If true, the component is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Avatar element
   */
  avatar?: ReactElement;

  /**
   * Callback fired when the delete icon is clicked
   * If set, the delete icon will be shown
   */
  onDelete?: MuiChipProps['onDelete'];

  /**
   * Callback fired when the chip is clicked
   */
  onClick?: MuiChipProps['onClick'];

  /**
   * If true, the chip will appear clickable and will
   * raise when pressed, even if onClick is not set
   * @default false
   */
  clickable?: boolean;

  /**
   * Icon element
   */
  icon?: ReactElement;

  /**
   * Override the delete icon element
   */
  deleteIcon?: ReactElement;
}
