/**
 * Avatar Component
 *
 * Avatar component for the MRS Design System.
 * Wraps Material-UI Avatar with custom theme tokens and sizing.
 *
 * @figma https://figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0?node-id=6587:47403
 * @see {@link https://mui.com/material-ui/react-avatar/}
 */

import React from 'react';
import MuiAvatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';
import type { AvatarProps } from './Avatar.types';

/**
 * Avatar component
 *
 * Avatars are found throughout material design with uses in everything from tables to dialog menus.
 *
 * @param props - Avatar component props
 * @returns Avatar component
 */
export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ children, size = 40, variant = 'circular', sx, ...props }, ref) => {
    const theme = useTheme();

    // Map size to width/height
    const avatarSize = `${size}px`;

    // Calculate font size based on avatar size
    const getFontSize = () => {
      switch (size) {
        case 18:
          return '0.625rem'; // 10px
        case 24:
          return '0.75rem'; // 12px
        case 32:
          return '0.75rem'; // 12px
        case 40:
        default:
          return '1.25rem'; // 20px
      }
    };

    return (
      <MuiAvatar
        ref={ref}
        variant={variant}
        {...props}
        sx={{
          width: avatarSize,
          height: avatarSize,
          fontSize: getFontSize(),
          fontFamily: theme.typography.fontFamily,
          fontWeight: theme.typography.fontWeightRegular,
          ...sx,
        }}
      >
        {children}
      </MuiAvatar>
    );
  }
);

Avatar.displayName = 'Avatar';
