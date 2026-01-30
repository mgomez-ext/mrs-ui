/**
 * Toolbar Component
 *
 * A container component that provides layout for AppBar content.
 * Wraps Material-UI Toolbar with MRS Design System theming.
 *
 * @example
 * ```tsx
 * import { AppBar, Toolbar, Typography, IconButton } from '@mgomez-ext/mrs-ui';
 * import MenuIcon from '@mui/icons-material/Menu';
 *
 * function MyToolbar() {
 *   return (
 *     <AppBar>
 *       <Toolbar>
 *         <IconButton edge="start" color="inherit">
 *           <MenuIcon />
 *         </IconButton>
 *         <Typography variant="h6">
 *           My App
 *         </Typography>
 *       </Toolbar>
 *     </AppBar>
 *   );
 * }
 * ```
 *
 * @see {@link https://mui.com/material-ui/api/toolbar/}
 */

import React from 'react';
import MuiToolbar from '@mui/material/Toolbar';
import type { ToolbarProps } from './Toolbar.types';

/**
 * Toolbar component
 *
 * Container for AppBar content with flex layout and vertical centering.
 * Provides regular (56px) and dense (48px) height variants.
 *
 * @param props - Toolbar component props
 * @returns Toolbar component
 */
export const Toolbar = React.forwardRef<HTMLDivElement, ToolbarProps>(
  ({ children, variant = 'regular', disableGutters = false, sx, ...props }, ref) => {
    return (
      <MuiToolbar ref={ref} variant={variant} disableGutters={disableGutters} sx={sx} {...props}>
        {children}
      </MuiToolbar>
    );
  }
);

Toolbar.displayName = 'Toolbar';

export default Toolbar;
