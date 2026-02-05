/**
 * Dashboard Hooks
 *
 * Custom hooks for the dashboard template.
 */

export { useThemeMode } from './useThemeMode';
export { useCopyToClipboard } from './useCopyToClipboard';

// Re-export context hooks
export { useNavigation } from '../providers/NavigationContext';
export { useAuth } from '../providers/AuthContext';
