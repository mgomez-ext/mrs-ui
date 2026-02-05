/**
 * Dashboard Types
 *
 * Type definitions for the mrs-ui dashboard template components.
 */

import type { ReactNode } from 'react';

/**
 * Navigation item configuration for sidebar menu
 */
export interface NavigationItem {
  /** URL segment (e.g., 'components', 'tokens') */
  segment: string;
  /** Display title for the navigation item */
  title: string;
  /** MaterialSymbol icon name */
  icon?: string;
  /** Nested navigation items */
  children?: NavigationItem[];
  /** Custom action element */
  action?: ReactNode;
}

/**
 * Branding configuration for the dashboard
 */
export interface BrandingConfig {
  /** Custom logo element (defaults to MRSLogo) */
  logo?: ReactNode;
  /** Application title */
  title?: string;
  /** URL to navigate when clicking the logo */
  homeUrl?: string;
}

/**
 * Router adapter for integrating with React Router or other routing libraries
 */
export interface RouterAdapter {
  /** Current pathname */
  pathname: string;
  /** Navigate to a new path */
  navigate: (path: string) => void;
}

/**
 * User information for authentication
 */
export interface User {
  /** User's display name */
  name: string;
  /** User's email address */
  email: string;
  /** URL to user's avatar image */
  avatar?: string;
}

/**
 * Authentication configuration
 */
export interface AuthConfig {
  /** Sign in handler */
  signIn?: () => Promise<void>;
  /** Sign out handler */
  signOut?: () => Promise<void>;
}

/**
 * Theme mode options
 */
export type ThemeMode = 'light' | 'dark' | 'auto';

/**
 * Breadcrumb item for PageContainer
 */
export interface BreadcrumbItem {
  /** Display label */
  label: string;
  /** Optional href for navigation */
  href?: string;
}
