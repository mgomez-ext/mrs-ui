/**
 * Drawer Component
 *
 * Side navigation panel component for the MRS Design System.
 * Wraps Material-UI Drawer with MRS theme tokens.
 *
 * @example
 * ```tsx
 * import { Drawer, List, ListItem, IconButton } from '@mgomez-ext/mrs-ui';
 * import MenuIcon from '@mui/icons-material/Menu';
 *
 * function MyDrawer() {
 *   const [open, setOpen] = React.useState(false);
 *
 *   return (
 *     <>
 *       <IconButton onClick={() => setOpen(true)}>
 *         <MenuIcon />
 *       </IconButton>
 *       <Drawer
 *         open={open}
 *         onClose={() => setOpen(false)}
 *         anchor="left"
 *       >
 *         <List>
 *           <ListItem>Menu Item 1</ListItem>
 *           <ListItem>Menu Item 2</ListItem>
 *         </List>
 *       </Drawer>
 *     </>
 *   );
 * }
 * ```
 *
 * @see {@link https://mui.com/material-ui/api/drawer/}
 * @see {@link https://mui.com/material-ui/react-drawer/}
 */

import React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import { useTheme } from '@mui/material/styles';
import type { DrawerProps } from './Drawer.types';

/**
 * Drawer component
 *
 * Side navigation panel that can appear from any edge of the screen.
 * Supports three variants: temporary (mobile), persistent, and permanent (desktop).
 *
 * Features:
 * - MRS design tokens (Nunito font, MRS color palette)
 * - Three variant types (temporary, persistent, permanent)
 * - Four anchor positions (left, right, top, bottom)
 * - Configurable elevation (shadow depth)
 * - Responsive design ready
 * - Full accessibility support
 *
 * @param props - Drawer component props
 * @returns Drawer component
 */
export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      anchor = 'left',
      children,
      elevation = 16,
      hideBackdrop = false,
      ModalProps,
      onClose,
      open = false,
      slotProps,
      slots,
      sx,
      transitionDuration,
      variant = 'temporary',
      ...props
    },
    ref
  ) => {
    const theme = useTheme();

    return (
      <MuiDrawer
        ref={ref}
        anchor={anchor}
        elevation={elevation}
        hideBackdrop={hideBackdrop}
        ModalProps={ModalProps}
        onClose={onClose}
        open={open}
        slotProps={slotProps}
        slots={slots}
        transitionDuration={transitionDuration}
        variant={variant}
        sx={{
          // Ensure Nunito font is applied to drawer content
          '& .MuiDrawer-paper': {
            fontFamily: theme.typography.fontFamily,
          },
          ...sx,
        }}
        {...props}
      >
        {children}
      </MuiDrawer>
    );
  }
);

Drawer.displayName = 'Drawer';

export type { DrawerProps };
export default Drawer;
