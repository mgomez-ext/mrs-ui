/**
 * DashboardLayout Component
 *
 * Main layout component for dashboard applications.
 * Provides header, sidebar, and main content area.
 *
 * Inspired by MUI Toolpad Core's DashboardLayout.
 */

import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '../../components/atoms/Box';
import { DashboardHeader } from './DashboardHeader';
import { DashboardSidebar, SIDEBAR_WIDTH, HEADER_HEIGHT } from './DashboardSidebar';
import { useApp } from '../providers/AppProvider';
import { useNavigation } from '../providers/NavigationContext';
import type { DashboardLayoutProps } from './DashboardLayout.types';

/**
 * DashboardLayout
 *
 * Full-screen layout with:
 * - Fixed header at top
 * - Responsive sidebar (permanent on desktop, drawer on mobile)
 * - Scrollable main content area
 *
 * @example
 * ```tsx
 * import { AppProvider, DashboardLayout, PageContainer } from '@mgomez-ext/mrs-ui/dashboard';
 *
 * function App() {
 *   return (
 *     <AppProvider navigation={[...]} branding={{ title: 'My App' }}>
 *       <DashboardLayout>
 *         <PageContainer title="Dashboard">
 *           <p>Content goes here</p>
 *         </PageContainer>
 *       </DashboardLayout>
 *     </AppProvider>
 *   );
 * }
 * ```
 */
export const DashboardLayout = React.forwardRef<HTMLDivElement, DashboardLayoutProps>(
  ({ children, navigation, branding, hideHeader = false, hideSidebar = false, sx }, ref) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { branding: appBranding } = useApp();
    const { navigation: contextNav, sidebarCollapsed } = useNavigation();

    const [mobileOpen, setMobileOpen] = useState(false);

    const effectiveBranding = branding ?? appBranding;
    const effectiveNavigation = navigation ?? contextNav;

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    const handleDrawerClose = () => {
      setMobileOpen(false);
    };

    return (
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          minHeight: '100vh',
          backgroundColor: theme.palette.background.default,
          ...sx,
        }}
      >
        {/* Header */}
        {!hideHeader && (
          <DashboardHeader
            branding={effectiveBranding}
            onMenuClick={handleDrawerToggle}
            showMenuButton={!hideSidebar}
          />
        )}

        {/* Sidebar */}
        {!hideSidebar && (
          <DashboardSidebar
            navigation={effectiveNavigation}
            branding={effectiveBranding}
            open={mobileOpen}
            onClose={handleDrawerClose}
            collapsed={sidebarCollapsed}
          />
        )}

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            // Offset for fixed header
            pt: hideHeader ? 0 : `${HEADER_HEIGHT}px`,
            // Offset for sidebar on desktop
            ml: hideSidebar || isMobile ? 0 : `${sidebarCollapsed ? 72 : SIDEBAR_WIDTH}px`,
            // Smooth transition for sidebar collapse
            transition: theme.transitions.create(['margin'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              p: 3,
              overflow: 'auto',
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    );
  }
);

DashboardLayout.displayName = 'DashboardLayout';

export default DashboardLayout;
