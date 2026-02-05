/**
 * Navigation Configuration for Design System Manager
 */

import type { NavigationItem } from '../../../dashboard/types';

export const navigation: NavigationItem[] = [
  {
    segment: 'overview',
    title: 'Overview',
    icon: 'dashboard',
  },
  {
    segment: 'components',
    title: 'Components',
    icon: 'widgets',
  },
  {
    segment: 'tokens',
    title: 'Design Tokens',
    icon: 'palette',
  },
  {
    segment: 'theme',
    title: 'Theme',
    icon: 'dark_mode',
  },
];

export default navigation;
