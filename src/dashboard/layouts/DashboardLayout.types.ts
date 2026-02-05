/**
 * DashboardLayout Types
 */

import type { ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material/styles';
import type { NavigationItem, BrandingConfig } from '../types';

export interface DashboardHeaderProps {
  /** Branding configuration */
  branding?: BrandingConfig;
  /** Callback when menu button is clicked */
  onMenuClick?: () => void;
  /** Whether to show menu button (for mobile) */
  showMenuButton?: boolean;
  /** Custom sx props */
  sx?: SxProps<Theme>;
}

export interface DashboardSidebarProps {
  /** Navigation items */
  navigation?: NavigationItem[];
  /** Branding configuration */
  branding?: BrandingConfig;
  /** Whether sidebar is open (for mobile drawer) */
  open?: boolean;
  /** Callback when sidebar should close */
  onClose?: () => void;
  /** Sidebar variant */
  variant?: 'permanent' | 'temporary';
  /** Whether sidebar is collapsed (mini mode) */
  collapsed?: boolean;
  /** Custom sx props */
  sx?: SxProps<Theme>;
}

export interface DashboardLayoutProps {
  /** Child content */
  children: ReactNode;
  /** Navigation items (overrides AppProvider navigation) */
  navigation?: NavigationItem[];
  /** Branding configuration (overrides AppProvider branding) */
  branding?: BrandingConfig;
  /** Whether to hide the header */
  hideHeader?: boolean;
  /** Whether to hide the sidebar */
  hideSidebar?: boolean;
  /** Custom sx props for the layout container */
  sx?: SxProps<Theme>;
}
