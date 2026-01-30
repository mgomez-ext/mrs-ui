/**
 * AppBar Component
 *
 * Top navigation bar component for the MRS Design System.
 * Wraps Material-UI AppBar with MRS theme tokens.
 *
 * @example
 * ```tsx
 * import { AppBar, Toolbar, IconButton, Typography, Button } from '@mgomez-ext/mrs-ui';
 * import MenuIcon from '@mui/icons-material/Menu';
 *
 * function MyAppBar() {
 *   return (
 *     <AppBar position="fixed" color="primary">
 *       <Toolbar>
 *         <IconButton edge="start" color="inherit" aria-label="menu">
 *           <MenuIcon />
 *         </IconButton>
 *         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
 *           MRS Design System
 *         </Typography>
 *         <Button color="inherit">Login</Button>
 *       </Toolbar>
 *     </AppBar>
 *   );
 * }
 * ```
 *
 * @see {@link https://mui.com/material-ui/api/app-bar/}
 * @see {@link https://mui.com/material-ui/react-app-bar/}
 */

import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import { useTheme } from '@mui/material/styles';
import type { AppBarProps } from './AppBar.types';

/**
 * AppBar component
 *
 * Primary navigation component that appears at the top of the application.
 * Supports multiple colors from the MRS palette, positioning options, and elevation levels.
 *
 * Features:
 * - MRS design tokens (Nunito font, MRS color palette)
 * - Multiple positioning options (fixed, static, sticky, absolute, relative)
 * - Elevation control (shadow depth 0-24)
 * - Light and dark mode support
 * - Responsive design ready
 *
 * @param props - AppBar component props
 * @returns AppBar component
 */
export const AppBar = React.forwardRef<HTMLDivElement, AppBarProps>(
  (
    {
      children,
      color = 'default',
      position = 'fixed',
      elevation = 4,
      enableColorOnDark = false,
      sx,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();

    return (
      <MuiAppBar
        ref={ref}
        color={color}
        position={position}
        elevation={elevation}
        enableColorOnDark={enableColorOnDark}
        sx={{
          // Ensure Nunito font is applied
          fontFamily: theme.typography.fontFamily,
          ...sx,
        }}
        {...props}
      >
        {children}
      </MuiAppBar>
    );
  }
);

AppBar.displayName = 'AppBar';

export default AppBar;
