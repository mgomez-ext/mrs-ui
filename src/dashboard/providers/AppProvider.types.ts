/**
 * AppProvider Types
 */

import type { ReactNode } from 'react';
import type { NavigationItem, BrandingConfig, RouterAdapter, AuthConfig, ThemeMode } from '../types';

export interface AppProviderProps {
  /** Child components */
  children: ReactNode;
  /** Branding configuration (logo, title) */
  branding?: BrandingConfig;
  /** Navigation items for the sidebar */
  navigation?: NavigationItem[];
  /** Theme mode ('light', 'dark', or 'auto') */
  theme?: ThemeMode;
  /** Authentication configuration */
  authentication?: AuthConfig;
  /** Router adapter for React Router integration */
  router?: RouterAdapter;
  /** Default collapsed state for sidebar */
  defaultSidebarCollapsed?: boolean;
}
