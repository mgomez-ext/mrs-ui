/**
 * DashboardSidebar Component
 *
 * Responsive sidebar navigation for the dashboard layout.
 * Uses Sidenav for desktop and Drawer for mobile.
 */

import React, { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Drawer } from '../../components/molecules/Drawer';
import { Sidenav } from '../../components/molecules/Sidenav';
import { Box } from '../../components/atoms/Box';
import { useNavigation } from '../providers/NavigationContext';
import type { DashboardSidebarProps } from './DashboardLayout.types';
import type { SidenavItem, SidenavNavigationItem } from '../../components/molecules/Sidenav';
import type { NavigationItem } from '../types';

/** Width of the sidebar in pixels */
const SIDEBAR_WIDTH = 256;
/** Width of the collapsed sidebar in pixels */
const SIDEBAR_WIDTH_COLLAPSED = 72;
/** Height of the header toolbar */
const HEADER_HEIGHT = 64;

/**
 * Convert dashboard NavigationItem to Sidenav format
 */
function toSidenavItems(
  items: NavigationItem[],
  isActive: (segment: string) => boolean
): SidenavNavigationItem[] {
  return items.map((item) => {
    if (item.children && item.children.length > 0) {
      // Group with children
      return {
        header: item.title,
        items: item.children.map((child) => ({
          id: child.segment,
          label: child.title,
          icon: child.icon,
          selected: isActive(child.segment),
        })),
      };
    }

    // Single item
    return {
      id: item.segment,
      label: item.title,
      icon: item.icon,
      selected: isActive(item.segment),
    } as SidenavItem;
  });
}

/**
 * DashboardSidebar
 *
 * Responsive sidebar that:
 * - Shows permanent Sidenav on desktop
 * - Shows temporary Drawer on mobile
 * - Supports collapsed (mini) mode
 */
export const DashboardSidebar = React.forwardRef<HTMLDivElement, DashboardSidebarProps>(
  ({ navigation: navProp, branding, open, onClose, variant, collapsed, sx }, ref) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { navigation: contextNav, navigate, isActive } = useNavigation();

    const navItems = navProp ?? contextNav;

    // Convert to Sidenav format with active states
    const sidenavItems = useMemo(
      () => toSidenavItems(navItems, isActive),
      [navItems, isActive]
    );

    const handleItemClick = (item: SidenavItem) => {
      if (item.id) {
        navigate(`/${item.id}`);
      }
      // Close drawer on mobile after navigation
      if (isMobile && onClose) {
        onClose();
      }
    };

    const effectiveVariant = variant ?? (isMobile ? 'temporary' : 'permanent');
    const sidenavVariant = collapsed ? 'slim' : 'default';
    const sidebarWidth = collapsed ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH;

    // Desktop: Permanent sidebar
    if (effectiveVariant === 'permanent') {
      return (
        <Box
          ref={ref}
          component="nav"
          sx={{
            width: sidebarWidth,
            flexShrink: 0,
            ...sx,
          }}
        >
          <Sidenav
            variant={sidenavVariant}
            items={sidenavItems}
            logo={true}
            logoElement={branding?.logo}
            showActionButton={false}
            onItemClick={handleItemClick}
            height={`calc(100vh - ${HEADER_HEIGHT}px)`}
            sx={{
              position: 'fixed',
              top: HEADER_HEIGHT,
              left: 0,
              width: sidebarWidth,
              borderRadius: 0,
            }}
          />
        </Box>
      );
    }

    // Mobile: Temporary drawer
    return (
      <Drawer
        ref={ref}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={onClose}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: SIDEBAR_WIDTH,
            boxSizing: 'border-box',
          },
          ...sx,
        }}
      >
        <Sidenav
          variant="default"
          items={sidenavItems}
          logo={true}
          logoElement={branding?.logo}
          showActionButton={false}
          onItemClick={handleItemClick}
          height="100%"
          sx={{
            borderRadius: 0,
          }}
        />
      </Drawer>
    );
  }
);

DashboardSidebar.displayName = 'DashboardSidebar';

export { SIDEBAR_WIDTH, SIDEBAR_WIDTH_COLLAPSED, HEADER_HEIGHT };
export default DashboardSidebar;
