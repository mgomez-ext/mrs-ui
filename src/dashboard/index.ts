/**
 * Dashboard Template
 *
 * MUI Toolpad-inspired dashboard components for mrs-ui.
 *
 * @example
 * ```tsx
 * import { AppProvider, DashboardLayout, PageContainer } from '@mgomez-ext/mrs-ui/dashboard';
 * import { useNavigate, useLocation } from 'react-router-dom';
 *
 * const navigation = [
 *   { segment: 'home', title: 'Home', icon: 'home' },
 *   { segment: 'settings', title: 'Settings', icon: 'settings' },
 * ];
 *
 * function App() {
 *   const navigate = useNavigate();
 *   const location = useLocation();
 *
 *   return (
 *     <AppProvider
 *       navigation={navigation}
 *       branding={{ title: 'My Dashboard' }}
 *       router={{ pathname: location.pathname, navigate }}
 *     >
 *       <DashboardLayout>
 *         <Routes>
 *           <Route path="/" element={<HomePage />} />
 *           <Route path="/settings" element={<SettingsPage />} />
 *         </Routes>
 *       </DashboardLayout>
 *     </AppProvider>
 *   );
 * }
 * ```
 */

// Providers
export { AppProvider, useApp } from './providers';
export type { AppProviderProps, NavigationProviderProps, AuthProviderProps } from './providers';

// Layouts
export { DashboardLayout, DashboardHeader, DashboardSidebar } from './layouts';
export type {
  DashboardLayoutProps,
  DashboardHeaderProps,
  DashboardSidebarProps,
} from './layouts';

// Components
export { PageContainer } from './components';
export type { PageContainerProps } from './components';

// Hooks
export { useNavigation, useAuth, useThemeMode, useCopyToClipboard } from './hooks';

// Types
export type {
  NavigationItem,
  BrandingConfig,
  RouterAdapter,
  User,
  AuthConfig,
  ThemeMode,
  BreadcrumbItem,
} from './types';
