/**
 * DrawerNavigation Component
 *
 * Navigation component for Drawer with support for expandable items.
 * Built for the MRS Design System with Figma design specifications.
 *
 * @example
 * ```tsx
 * import { Drawer, DrawerNavigation } from '@mgomez-ext/mrs-ui';
 * import HomeIcon from '@mui/icons-material/Home';
 * import InboxIcon from '@mui/icons-material/Inbox';
 * import SettingsIcon from '@mui/icons-material/Settings';
 *
 * function MyDrawer() {
 *   const [open, setOpen] = React.useState(false);
 *
 *   return (
 *     <Drawer open={open} onClose={() => setOpen(false)}>
 *       <DrawerNavigation
 *         items={[
 *           { label: 'Dashboard', icon: <HomeIcon />, path: '/' },
 *           {
 *             label: 'Products',
 *             icon: <InboxIcon />,
 *             expandable: true,
 *             children: [
 *               { label: 'All Products', path: '/products' },
 *               { label: 'Categories', path: '/categories' }
 *             ]
 *           },
 *           { label: 'Settings', icon: <SettingsIcon />, path: '/settings' }
 *         ]}
 *       />
 *     </Drawer>
 *   );
 * }
 * ```
 *
 * @see {@link https://mui.com/material-ui/react-drawer/}
 */

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import { ExpandableNavItem } from '../ExpandableNavItem';
import type {
  DrawerNavigationProps,
  DrawerNavItem,
  ExpandableNavItem as ExpandableNavItemType,
  SimpleNavItem,
} from './DrawerNavigation.types';

/**
 * Type guard to check if an item is expandable
 */
function isExpandableItem(item: DrawerNavItem): item is ExpandableNavItemType {
  return item.expandable === true;
}

/**
 * DrawerNavigation component
 *
 * Full-featured navigation component for use within Drawer.
 * Supports simple and expandable navigation items with icons.
 *
 * Features:
 * - Simple and expandable navigation items
 * - Icon support for all items
 * - Selected/active state highlighting
 * - Optional dividers between items
 * - Configurable width and padding (defaults from Figma)
 * - MRS design tokens (Nunito font, MRS colors)
 * - Full accessibility support
 *
 * @param props - DrawerNavigation component props
 * @returns DrawerNavigation component
 */
export const DrawerNavigation = React.forwardRef<HTMLDivElement, DrawerNavigationProps>(
  ({ items, width = 256, paddingTop = 32, paddingBottom = 32, sx, listSx, onItemClick }, ref) => {
    const theme = useTheme();

    // Track open state for expandable items
    const [openItems, setOpenItems] = useState<Record<string, boolean>>(() => {
      const initial: Record<string, boolean> = {};
      items.forEach((item, index) => {
        if (isExpandableItem(item)) {
          const key = item.id || `item-${index}`;
          initial[key] = item.defaultOpen || false;
        }
      });
      return initial;
    });

    const handleToggle = (itemId: string) => {
      setOpenItems((prev) => ({
        ...prev,
        [itemId]: !prev[itemId],
      }));
    };

    const handleItemClick = (item: DrawerNavItem) => {
      if (item.onClick) {
        item.onClick();
      }
      if (onItemClick) {
        onItemClick(item);
      }
    };

    return (
      <Box
        ref={ref}
        sx={{
          width,
          paddingTop: `${paddingTop}px`,
          paddingBottom: `${paddingBottom}px`,
          fontFamily: theme.typography.fontFamily,
          ...sx,
        }}
      >
        <List
          sx={{
            '& .MuiListItemButton-root': {
              fontFamily: theme.typography.fontFamily,
            },
            ...listSx,
          }}
        >
          {items.map((item, index) => {
            const itemId = item.id || `item-${index}`;
            const isLast = index === items.length - 1;

            if (isExpandableItem(item)) {
              return (
                <React.Fragment key={itemId}>
                  <ExpandableNavItem
                    label={item.label}
                    icon={item.icon}
                    isOpen={openItems[itemId]}
                    onToggle={() => handleToggle(itemId)}
                    selected={item.selected}
                    onClick={() => handleItemClick(item)}
                    children={item.children}
                  />
                  {(item.divider || (!isLast && items[index + 1]?.divider)) && (
                    <Divider sx={{ my: 1 }} />
                  )}
                </React.Fragment>
              );
            }

            // Simple nav item
            const simpleItem = item as SimpleNavItem;
            return (
              <React.Fragment key={itemId}>
                <ListItemButton
                  selected={simpleItem.selected}
                  onClick={() => handleItemClick(simpleItem)}
                  sx={{
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  {simpleItem.icon && (
                    <ListItemIcon sx={{ minWidth: 40 }}>{simpleItem.icon}</ListItemIcon>
                  )}
                  <ListItemText
                    primary={simpleItem.label}
                    primaryTypographyProps={{
                      fontFamily: theme.typography.fontFamily,
                      fontWeight: simpleItem.selected ? 600 : 400,
                    }}
                  />
                </ListItemButton>
                {(simpleItem.divider || (!isLast && items[index + 1]?.divider)) && (
                  <Divider sx={{ my: 1 }} />
                )}
              </React.Fragment>
            );
          })}
        </List>
      </Box>
    );
  }
);

DrawerNavigation.displayName = 'DrawerNavigation';

export type { DrawerNavigationProps, DrawerNavItem };
export default DrawerNavigation;
