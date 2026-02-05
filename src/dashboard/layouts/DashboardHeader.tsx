/**
 * DashboardHeader Component
 *
 * Top navigation bar for the dashboard layout.
 * Includes hamburger menu, theme toggle, and user account display.
 */

import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { AppBar } from '../../components/molecules/AppBar';
import { Toolbar } from '../../components/atoms/Toolbar';
import { IconButton } from '../../components/atoms/IconButton';
import { Box } from '../../components/atoms/Box';
import { Switch } from '../../components/atoms/Switch';
import { Typography } from '../../components/atoms/Typography';
import { AccountStack } from '../../components/atoms/AccountStack';
import { MaterialSymbol } from '../../components/atoms/MaterialSymbol';
import { useApp } from '../providers/AppProvider';
import { useAuth } from '../providers/AuthContext';
import type { DashboardHeaderProps } from './DashboardLayout.types';

/**
 * DashboardHeader
 *
 * Fixed header with:
 * - Hamburger menu button (mobile)
 * - Branding/title
 * - Theme toggle switch
 * - User account info
 */
export const DashboardHeader = React.forwardRef<HTMLDivElement, DashboardHeaderProps>(
  ({ branding, onMenuClick, showMenuButton = true, sx }, ref) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { branding: appBranding, toggleTheme, isDarkMode } = useApp();
    const { user, isAuthenticated } = useAuth();

    const effectiveBranding = branding ?? appBranding;

    return (
      <AppBar
        ref={ref}
        position="fixed"
        color="default"
        elevation={1}
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          ...sx,
        }}
      >
        <Toolbar>
          {/* Menu Button (mobile) */}
          {showMenuButton && isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open navigation menu"
              onClick={onMenuClick}
              sx={{ mr: 2 }}
            >
              <MaterialSymbol icon="menu" />
            </IconButton>
          )}

          {/* Branding/Title */}
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            {effectiveBranding?.logo && !isMobile && (
              <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
                {effectiveBranding.logo}
              </Box>
            )}
            {effectiveBranding?.title && (
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                }}
              >
                {effectiveBranding.title}
              </Typography>
            )}
          </Box>

          {/* Theme Toggle */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mr: 2 }}>
            <MaterialSymbol
              icon="light_mode"
              size="small"
              sx={{ color: isDarkMode ? theme.palette.text.disabled : theme.palette.warning.main }}
            />
            <Switch
              checked={isDarkMode}
              onChange={toggleTheme}
              size="small"
              inputProps={{ 'aria-label': 'toggle dark mode' }}
            />
            <MaterialSymbol
              icon="dark_mode"
              size="small"
              sx={{ color: isDarkMode ? theme.palette.primary.main : theme.palette.text.disabled }}
            />
          </Box>

          {/* User Account */}
          {isAuthenticated && user && (
            <AccountStack
              userName={user.name}
              userEmail={user.email}
              avatarSrc={user.avatar}
              avatarPosition="right"
              notifications={false}
              userAccountInfo={!isMobile}
            />
          )}
        </Toolbar>
      </AppBar>
    );
  }
);

DashboardHeader.displayName = 'DashboardHeader';

export default DashboardHeader;
