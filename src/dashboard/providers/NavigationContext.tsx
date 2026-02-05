/**
 * NavigationContext
 *
 * Context provider for managing dashboard navigation state.
 * Integrates with React Router via RouterAdapter.
 */

import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import type { NavigationItem, RouterAdapter } from '../types';

interface NavigationState {
  /** Current pathname */
  currentPath: string;
  /** Whether the sidebar is collapsed */
  sidebarCollapsed: boolean;
  /** Set of expanded navigation item segments */
  expandedItems: Set<string>;
}

interface NavigationContextValue extends NavigationState {
  /** Navigation items configuration */
  navigation: NavigationItem[];
  /** Navigate to a path */
  navigate: (path: string) => void;
  /** Toggle sidebar collapsed state */
  toggleSidebar: () => void;
  /** Set sidebar collapsed state */
  setSidebarCollapsed: (collapsed: boolean) => void;
  /** Check if a path is active */
  isActive: (segment: string) => boolean;
  /** Toggle a navigation item's expanded state */
  toggleExpanded: (segment: string) => void;
  /** Check if a navigation item is expanded */
  isExpanded: (segment: string) => boolean;
}

const NavigationContext = createContext<NavigationContextValue | null>(null);

export interface NavigationProviderProps {
  children: React.ReactNode;
  /** Navigation items configuration */
  navigation?: NavigationItem[];
  /** Router adapter for React Router integration */
  router?: RouterAdapter;
  /** Default collapsed state for sidebar */
  defaultCollapsed?: boolean;
}

/**
 * NavigationProvider
 *
 * Provides navigation state and methods to child components.
 */
export function NavigationProvider({
  children,
  navigation = [],
  router,
  defaultCollapsed = false,
}: NavigationProviderProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(defaultCollapsed);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  // Get current path from router or default to '/'
  const currentPath = router?.pathname ?? '/';

  const navigate = useCallback(
    (path: string) => {
      if (router?.navigate) {
        router.navigate(path);
      }
    },
    [router]
  );

  const toggleSidebar = useCallback(() => {
    setSidebarCollapsed((prev) => !prev);
  }, []);

  const isActive = useCallback(
    (segment: string) => {
      const path = segment.startsWith('/') ? segment : `/${segment}`;
      return currentPath === path || currentPath.startsWith(`${path}/`);
    },
    [currentPath]
  );

  const toggleExpanded = useCallback((segment: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(segment)) {
        next.delete(segment);
      } else {
        next.add(segment);
      }
      return next;
    });
  }, []);

  const isExpanded = useCallback(
    (segment: string) => {
      return expandedItems.has(segment);
    },
    [expandedItems]
  );

  const value = useMemo<NavigationContextValue>(
    () => ({
      currentPath,
      sidebarCollapsed,
      expandedItems,
      navigation,
      navigate,
      toggleSidebar,
      setSidebarCollapsed,
      isActive,
      toggleExpanded,
      isExpanded,
    }),
    [
      currentPath,
      sidebarCollapsed,
      expandedItems,
      navigation,
      navigate,
      toggleSidebar,
      isActive,
      toggleExpanded,
      isExpanded,
    ]
  );

  return <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>;
}

/**
 * useNavigation hook
 *
 * Access navigation state and methods from NavigationContext.
 */
export function useNavigation(): NavigationContextValue {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}

export { NavigationContext };
