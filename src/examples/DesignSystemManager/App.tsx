/**
 * Design System Manager - Example Dashboard App
 *
 * Demonstrates the mrs-ui dashboard template with React Router integration.
 *
 * @example
 * To run this example:
 * 1. Install react-router-dom: npm install react-router-dom
 * 2. Import and render DesignSystemManagerApp in your entry point
 *
 * ```tsx
 * import { DesignSystemManagerApp } from '@mgomez-ext/mrs-ui/examples/DesignSystemManager';
 *
 * function App() {
 *   return <DesignSystemManagerApp />;
 * }
 * ```
 */

import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from 'react-router-dom';
import { AppProvider } from '../../dashboard/providers/AppProvider';
import { DashboardLayout } from '../../dashboard/layouts/DashboardLayout';
import { useAuth } from '../../dashboard/hooks';
import { navigation } from './config/navigation';
import { OverviewPage } from './pages/OverviewPage';
import { ComponentsPage } from './pages/ComponentsPage';
import { TokensPage } from './pages/TokensPage';
import { ThemePage } from './pages/ThemePage';

/**
 * Router-integrated App Provider
 */
const AppWithRouter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuth();

  // Auto-sign in demo user on mount
  useEffect(() => {
    signIn({
      name: 'Demo User',
      email: 'demo@mrs-ui.dev',
    });
  }, [signIn]);

  return (
    <AppProvider
      navigation={navigation}
      branding={{
        title: 'Design System Manager',
      }}
      router={{
        pathname: location.pathname,
        navigate: (path) => navigate(path),
      }}
    >
      {children}
    </AppProvider>
  );
};

/**
 * Dashboard Routes
 */
const DashboardRoutes: React.FC = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/overview" replace />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/tokens" element={<TokensPage />} />
        <Route path="/theme" element={<ThemePage />} />
        <Route path="*" element={<Navigate to="/overview" replace />} />
      </Routes>
    </DashboardLayout>
  );
};

/**
 * Main App Component
 *
 * Wraps everything with BrowserRouter and AppProvider.
 */
export const DesignSystemManagerApp: React.FC = () => {
  return (
    <BrowserRouter>
      <AppWithRouter>
        <DashboardRoutes />
      </AppWithRouter>
    </BrowserRouter>
  );
};

/**
 * Standalone version without BrowserRouter
 * Use this when you already have a router in your app.
 */
export const DesignSystemManagerContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AppProvider
      navigation={navigation}
      branding={{
        title: 'Design System Manager',
      }}
      router={{
        pathname: location.pathname,
        navigate: (path) => navigate(path),
      }}
    >
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/overview" replace />} />
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/tokens" element={<TokensPage />} />
          <Route path="/theme" element={<ThemePage />} />
        </Routes>
      </DashboardLayout>
    </AppProvider>
  );
};

export default DesignSystemManagerApp;
