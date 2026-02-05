/**
 * AppProvider Component
 *
 * Main application provider that composes theme, navigation, and authentication contexts.
 * Inspired by MUI Toolpad Core's AppProvider pattern.
 */

import { createContext, useContext, useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { NavigationProvider } from './NavigationContext';
import { AuthProvider } from './AuthContext';
import { useThemeMode } from '../hooks/useThemeMode';
import type { AppProviderProps } from './AppProvider.types';
import type { BrandingConfig } from '../types';

interface AppContextValue {
  /** Branding configuration */
  branding: BrandingConfig;
  /** Toggle theme between light and dark */
  toggleTheme: () => void;
  /** Whether dark mode is active */
  isDarkMode: boolean;
}

const AppContext = createContext<AppContextValue | null>(null);

/**
 * useApp hook
 *
 * Access app-level configuration and methods.
 */
export function useApp(): AppContextValue {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

/**
 * AppProvider
 *
 * Root provider for dashboard applications. Composes:
 * - ThemeProvider (MUI theming with light/dark mode)
 * - NavigationProvider (sidebar and routing state)
 * - AuthProvider (authentication state)
 *
 * @example
 * ```tsx
 * import { AppProvider } from '@mgomez-ext/mrs-ui/dashboard';
 * import { useNavigate, useLocation } from 'react-router-dom';
 *
 * function App() {
 *   const navigate = useNavigate();
 *   const location = useLocation();
 *
 *   return (
 *     <AppProvider
 *       branding={{ title: 'My Dashboard' }}
 *       navigation={[
 *         { segment: 'home', title: 'Home', icon: 'home' },
 *         { segment: 'settings', title: 'Settings', icon: 'settings' },
 *       ]}
 *       router={{ pathname: location.pathname, navigate }}
 *     >
 *       <DashboardLayout>
 *         <Routes>...</Routes>
 *       </DashboardLayout>
 *     </AppProvider>
 *   );
 * }
 * ```
 */
export function AppProvider({
  children,
  branding = {},
  navigation = [],
  theme: themeMode = 'light',
  authentication,
  router,
  defaultSidebarCollapsed = false,
}: AppProviderProps) {
  const { theme, toggle, isDark } = useThemeMode(themeMode);

  const appContextValue = useMemo<AppContextValue>(
    () => ({
      branding,
      toggleTheme: toggle,
      isDarkMode: isDark,
    }),
    [branding, toggle, isDark]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContext.Provider value={appContextValue}>
        <AuthProvider authentication={authentication}>
          <NavigationProvider
            navigation={navigation}
            router={router}
            defaultCollapsed={defaultSidebarCollapsed}
          >
            {children}
          </NavigationProvider>
        </AuthProvider>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export { AppContext };
