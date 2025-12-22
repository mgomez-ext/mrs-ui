/**
 * Chip Component
 *
 * Chip component for the MRS Design System.
 * Wraps Material-UI Chip with custom theme tokens.
 *
 * @figma https://figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0?node-id=6588:47683
 * @see {@link https://mui.com/material-ui/react-chip/}
 */

import React from 'react';
import MuiChip from '@mui/material/Chip';
import { ChipProps } from './Chip.types';

/**
 * Chip component
 *
 * Chips are compact elements that represent an input, attribute, or action.
 *
 * @param props - Chip component props
 * @returns Chip component
 */
export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      label,
      size = 'medium',
      color = 'default',
      variant = 'filled',
      disabled = false,
      clickable = false,
      avatar,
      icon,
      onDelete,
      deleteIcon,
      onClick,
      sx,
      ...props
    },
    ref
  ) => {
    return (
      <MuiChip
        ref={ref}
        label={label}
        size={size}
        color={color}
        variant={variant}
        disabled={disabled}
        clickable={clickable || !!onClick}
        avatar={avatar}
        icon={icon}
        onDelete={onDelete}
        deleteIcon={deleteIcon}
        onClick={onClick}
        sx={{
          // Medium size is default (32px height)
          // Small size is 24px height
          ...(size === 'small' && {
            height: 24,
            fontSize: '0.8125rem', // 13px
          }),
          ...(size === 'medium' && {
            height: 32,
            fontSize: '0.8125rem', // 13px
          }),
          ...sx,
        }}
        {...props}
      />
    );
  }
);

Chip.displayName = 'Chip';
