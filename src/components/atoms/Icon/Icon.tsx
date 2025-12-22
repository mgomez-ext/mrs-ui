/**
 * Icon Component
 *
 * Icon display component for the MRS Design System.
 * Supports both SVG icons from @mui/icons-material and Font icons.
 *
 * @figma https://figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0?node-id=6594:47648
 * @see {@link https://mui.com/material-ui/icons/}
 */

import React from 'react';
import MuiIcon from '@mui/material/Icon';
import { IconProps, IconSvgProps, IconFontProps } from './Icon.types';

/**
 * Type guard to check if props are for SVG icon
 */
function isSvgIcon(props: IconProps): props is IconSvgProps {
  return !props.type || props.type === 'svg';
}

/**
 * Type guard to check if props are for Font icon
 */
function isFontIcon(props: IconProps): props is IconFontProps {
  return props.type === 'font';
}

/**
 * Icon component
 *
 * Displays icons with predefined sizes from the theme.
 * Supports both SVG icons from @mui/icons-material and Font icons from Material Icons.
 *
 * @param props - Icon component props
 * @returns Icon component
 */
export const Icon = React.forwardRef<HTMLElement, IconProps>((props, ref) => {
  const { size = 'medium' } = props;

  // Map size to MUI fontSize
  const fontSize = size === 'inherit' ? 'inherit' : size;

  // Render SVG Icon
  if (isSvgIcon(props)) {
    const { icon: IconComponent, sx, ...svgProps } = props;

    return (
      <IconComponent
        ref={ref as React.Ref<SVGSVGElement>}
        fontSize={fontSize}
        {...svgProps}
        sx={{
          // Use theme color tokens
          color: 'inherit',
          ...sx,
        }}
      />
    );
  }

  // Render Font Icon
  if (isFontIcon(props)) {
    const { iconName, sx, ...fontProps } = props;

    return (
      <MuiIcon
        ref={ref}
        fontSize={fontSize}
        {...fontProps}
        sx={{
          // Use theme color tokens
          color: 'inherit',
          ...sx,
        }}
      >
        {iconName}
      </MuiIcon>
    );
  }

  return null;
});

Icon.displayName = 'Icon';
