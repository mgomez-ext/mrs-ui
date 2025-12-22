/**
 * Test utilities for MRS Design System
 * Custom render function with theme provider
 */

import React, { ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '../src/theme/theme';

/**
 * Wrapper component that provides theme context
 */
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

/**
 * Custom render function that wraps components with ThemeProvider
 * Use this instead of the default render from @testing-library/react
 * 
 * @example
 * ```tsx
 * import { renderWithTheme } from '../../../tests/test-utils';
 * 
 * test('renders button', () => {
 *   const { getByText } = renderWithTheme(<Button>Click me</Button>);
 *   expect(getByText('Click me')).toBeInTheDocument();
 * });
 * ```
 */
export const renderWithTheme = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): RenderResult => {
  return render(ui, { wrapper: AllTheProviders, ...options });
};

/**
 * Re-export everything from React Testing Library
 */
export * from '@testing-library/react';

/**
 * Export custom render as default render
 */
export { renderWithTheme as render };

