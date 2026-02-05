/**
 * useThemeMode Hook
 *
 * Hook for managing theme mode (light/dark) with localStorage persistence.
 */

import { useState, useCallback, useEffect, useMemo } from 'react';
import { lightTheme, darkTheme } from '../../theme';
import type { Theme } from '@mui/material/styles';
import type { ThemeMode } from '../types';

const STORAGE_KEY = 'mrs-dashboard-theme-mode';

interface UseThemeModeReturn {
  /** Current theme mode */
  mode: ThemeMode;
  /** The MUI theme object for the current mode */
  theme: Theme;
  /** Toggle between light and dark modes */
  toggle: () => void;
  /** Set a specific theme mode */
  setMode: (mode: ThemeMode) => void;
  /** Whether dark mode is active */
  isDark: boolean;
}

/**
 * Get the effective theme mode, resolving 'auto' to the system preference
 */
function getEffectiveMode(mode: ThemeMode): 'light' | 'dark' {
  if (mode === 'auto') {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  }
  return mode;
}

/**
 * useThemeMode
 *
 * Manages theme mode state with localStorage persistence and system preference detection.
 *
 * @param defaultMode - Default theme mode (defaults to 'light')
 * @returns Theme mode state and control methods
 *
 * @example
 * ```tsx
 * const { theme, toggle, isDark } = useThemeMode();
 *
 * return (
 *   <ThemeProvider theme={theme}>
 *     <Switch checked={isDark} onChange={toggle} />
 *   </ThemeProvider>
 * );
 * ```
 */
export function useThemeMode(defaultMode: ThemeMode = 'light'): UseThemeModeReturn {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    // Try to restore from localStorage
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark' || stored === 'auto') {
        return stored;
      }
    }
    return defaultMode;
  });

  // Listen for system preference changes when in 'auto' mode
  useEffect(() => {
    if (mode !== 'auto' || typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      // Force re-render when system preference changes
      setModeState((prev) => prev);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [mode]);

  const setMode = useCallback((newMode: ThemeMode) => {
    setModeState(newMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, newMode);
    }
  }, []);

  const toggle = useCallback(() => {
    setModeState((prev) => {
      const effectivePrev = getEffectiveMode(prev);
      const next = effectivePrev === 'light' ? 'dark' : 'light';
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, next);
      }
      return next;
    });
  }, []);

  const effectiveMode = getEffectiveMode(mode);
  const theme = effectiveMode === 'dark' ? darkTheme : lightTheme;
  const isDark = effectiveMode === 'dark';

  return useMemo(
    () => ({
      mode,
      theme,
      toggle,
      setMode,
      isDark,
    }),
    [mode, theme, toggle, setMode, isDark]
  );
}
