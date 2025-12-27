/**
 * Link component
 * Wraps Material-UI Link with design system theme
 */

import React from 'react';
import MuiLink from '@mui/material/Link';
import type { Theme } from '@mui/material/styles';
import type { LinkProps } from './Link.types';

/**
 * Link component - accessible hyperlink
 * Wraps MUI Link with design system theme integration
 *
 * @example
 * ```tsx
 * <Link href="https://example.com">Click here</Link>
 * <Link href="/about" color="primary" underline="hover">About</Link>
 * ```
 */
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ color = 'primary', underline = 'hover', variant = 'body1', children, sx, ...props }, ref) => {
    return (
      <MuiLink
        ref={ref}
        color={color}
        underline={underline}
        variant={variant}
        sx={{
          fontFamily: (theme: Theme) => theme.typography.fontFamily,
          cursor: 'pointer',
          '&:focus-visible': {
            outline: (theme: Theme) => `2px solid ${theme.palette.primary.main}`,
            outlineOffset: '2px',
            borderRadius: '2px',
          },
          ...sx,
        }}
        {...props}
      >
        {children}
      </MuiLink>
    );
  }
);

Link.displayName = 'Link';

export default Link;
