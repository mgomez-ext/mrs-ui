/**
 * PageContainer Types
 */

import type { ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material/styles';
import type { BreadcrumbItem } from '../types';

export interface PageContainerProps {
  /** Page title */
  title: string;
  /** Optional subtitle/description */
  subtitle?: string;
  /** Breadcrumb navigation items */
  breadcrumbs?: BreadcrumbItem[];
  /** Action buttons to show in the header */
  actions?: ReactNode;
  /** Page content */
  children: ReactNode;
  /** Maximum width of the content */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | false;
  /** Whether to show a loading skeleton */
  loading?: boolean;
  /** Custom sx props */
  sx?: SxProps<Theme>;
}
