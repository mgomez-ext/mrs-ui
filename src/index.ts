/**
 * MRS Design System - Main Entry Point
 * @package @mgomez-ext/mrs-ui
 * @version 0.12.0
 */

// Import type augmentations (must be before any MUI imports)
import './types/theme.d.ts';

// Theme exports
export { theme, lightTheme, darkTheme } from './theme/theme';
export type { MRSTheme } from './theme/types';
export * from './theme/tokens';

// Component exports
export * from './components';

// Animation hooks exports
export * from './hooks/animations';

// Effect components exports
export * from './components/effects';
