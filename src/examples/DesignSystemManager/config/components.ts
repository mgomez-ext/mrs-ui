/**
 * Component metadata for the Design System Manager
 */

export interface ComponentInfo {
  name: string;
  description: string;
  category: 'atoms' | 'molecules' | 'organisms' | 'effects';
  status: 'stable' | 'beta' | 'deprecated';
  storybookPath?: string;
}

export const componentsList: ComponentInfo[] = [
  // Atoms
  { name: 'Avatar', description: 'Display user profile images or initials', category: 'atoms', status: 'stable', storybookPath: '?path=/docs/atoms-avatar' },
  { name: 'Badge', description: 'Small count or status indicator', category: 'atoms', status: 'stable', storybookPath: '?path=/docs/atoms-badge' },
  { name: 'Box', description: 'Flexible container component', category: 'atoms', status: 'stable', storybookPath: '?path=/docs/atoms-box' },
  { name: 'Button', description: 'Primary interactive element for actions', category: 'atoms', status: 'stable', storybookPath: '?path=/docs/atoms-button' },
  { name: 'Card', description: 'Container for grouped content', category: 'atoms', status: 'stable', storybookPath: '?path=/docs/atoms-card' },
  { name: 'Checkbox', description: 'Multi-select input control', category: 'atoms', status: 'stable', storybookPath: '?path=/docs/atoms-checkbox' },
  { name: 'Chip', description: 'Compact element for tags or actions', category: 'atoms', status: 'stable', storybookPath: '?path=/docs/atoms-chip' },
  { name: 'CircularProgress', description: 'Circular loading indicator', category: 'atoms', status: 'stable', storybookPath: '?path=/docs/atoms-circularprogress' },
  { name: 'Container', description: 'Centered content wrapper with max-width', category: 'atoms', status: 'stable', storybookPath: '?path=/docs/atoms-container' },
  { name: 'Divider', description: 'Visual separator between content', category: 'atoms', status: 'stable', storybookPath: '?path=/docs/atoms-divider' },
  { name: 'FormControlLabel', description: 'Label wrapper for form controls', category: 'atoms', status: 'stable', storybookPath: '?path=/docs/atoms-formcontrollabel' },
  { name: 'Grid', description: 'Responsive layout grid system', category: 'atoms', status: 'stable', storybookPath: '?path=/docs/atoms-grid' },
  { name: 'IconButton', description: 'Button with icon-only content', category: 'atoms', status: 'stable', storybookPath: '?path=/docs/atoms-iconbutton' },
  { name: 'LinearProgress', description: 'Linear loading indicator', category: 'atoms', status: 'stable', storybookPath: '?path=/docs/atoms-linearprogress' },
  { name: 'Link', description: 'Navigation link element', category: 'atoms', status: 'stable', storybookPath: '?path=/docs/atoms-link' },
  { name: 'MaterialSymbol', description: 'Material Symbols icon component', category: 'atoms', status: 'stable', storybookPath: '?path=/docs/atoms-materialsymbol' },
  { name: 'Paper', description: 'Elevated surface container', category: 'atoms', status: 'stable', storybookPath: '?path=/docs/atoms-paper' },
  { name: 'Radio', description: 'Single-select input control', category: 'atoms', status: 'stable', storybookPath: '?path=/docs/atoms-radio' },
  { name: 'RadioGroup', description: 'Group of radio buttons', category: 'atoms', status: 'stable', storybookPath: '?path=/docs/atoms-radiogroup' },
  { name: 'Skeleton', description: 'Placeholder for loading content', category: 'atoms', status: 'stable', storybookPath: '?path=/docs/atoms-skeleton' },
  { name: 'Slider', description: 'Range input control', category: 'atoms', status: 'stable', storybookPath: '?path=/docs/atoms-slider' },
  { name: 'Stack', description: 'One-dimensional layout component', category: 'atoms', status: 'stable', storybookPath: '?path=/docs/atoms-stack' },
  { name: 'Switch', description: 'Toggle switch control', category: 'atoms', status: 'stable', storybookPath: '?path=/docs/atoms-switch' },
  { name: 'TextField', description: 'Text input field', category: 'atoms', status: 'stable', storybookPath: '?path=/docs/atoms-textfield' },
  { name: 'Toolbar', description: 'Container for action items', category: 'atoms', status: 'stable', storybookPath: '?path=/docs/atoms-toolbar' },
  { name: 'Tooltip', description: 'Informative text on hover', category: 'atoms', status: 'stable', storybookPath: '?path=/docs/atoms-tooltip' },
  { name: 'Typography', description: 'Text display component', category: 'atoms', status: 'stable', storybookPath: '?path=/docs/atoms-typography' },
  { name: 'AccountStack', description: 'User account display with avatar', category: 'atoms', status: 'stable', storybookPath: '?path=/docs/atoms-accountstack' },

  // Molecules
  { name: 'Accordion', description: 'Expandable content panels', category: 'molecules', status: 'stable', storybookPath: '?path=/docs/molecules-accordion' },
  { name: 'Alert', description: 'Feedback messages and notifications', category: 'molecules', status: 'stable', storybookPath: '?path=/docs/molecules-alert' },
  { name: 'AppBar', description: 'Top navigation bar', category: 'molecules', status: 'stable', storybookPath: '?path=/docs/molecules-appbar' },
  { name: 'Autocomplete', description: 'Searchable select input', category: 'molecules', status: 'stable', storybookPath: '?path=/docs/molecules-autocomplete' },
  { name: 'BottomNavigation', description: 'Mobile bottom navigation bar', category: 'molecules', status: 'stable', storybookPath: '?path=/docs/molecules-bottomnavigation' },
  { name: 'ButtonGroup', description: 'Group of related buttons', category: 'molecules', status: 'stable', storybookPath: '?path=/docs/molecules-buttongroup' },
  { name: 'DatePicker', description: 'Date selection input', category: 'molecules', status: 'stable', storybookPath: '?path=/docs/molecules-datepicker' },
  { name: 'DateTimePicker', description: 'Date and time selection input', category: 'molecules', status: 'stable', storybookPath: '?path=/docs/molecules-datetimepicker' },
  { name: 'Dialog', description: 'Modal dialog overlay', category: 'molecules', status: 'stable', storybookPath: '?path=/docs/molecules-dialog' },
  { name: 'Drawer', description: 'Side panel navigation', category: 'molecules', status: 'stable', storybookPath: '?path=/docs/molecules-drawer' },
  { name: 'DrawerNavigation', description: 'Navigation drawer with items', category: 'molecules', status: 'stable', storybookPath: '?path=/docs/molecules-drawernavigation' },
  { name: 'ExpandableNavItem', description: 'Expandable navigation item', category: 'molecules', status: 'stable', storybookPath: '?path=/docs/molecules-expandablenavitem' },
  { name: 'List', description: 'Vertical list of items', category: 'molecules', status: 'stable', storybookPath: '?path=/docs/molecules-list' },
  { name: 'ListItem', description: 'Individual list item', category: 'molecules', status: 'stable', storybookPath: '?path=/docs/molecules-listitem' },
  { name: 'Menu', description: 'Dropdown menu options', category: 'molecules', status: 'stable', storybookPath: '?path=/docs/molecules-menu' },
  { name: 'Pagination', description: 'Page navigation controls', category: 'molecules', status: 'stable', storybookPath: '?path=/docs/molecules-pagination' },
  { name: 'Rating', description: 'Star rating input', category: 'molecules', status: 'stable', storybookPath: '?path=/docs/molecules-rating' },
  { name: 'Sidenav', description: 'Side navigation panel', category: 'molecules', status: 'stable', storybookPath: '?path=/docs/molecules-sidenav' },
  { name: 'Snackbar', description: 'Brief notification messages', category: 'molecules', status: 'stable', storybookPath: '?path=/docs/molecules-snackbar' },
  { name: 'SpeedDial', description: 'Floating action button with options', category: 'molecules', status: 'stable', storybookPath: '?path=/docs/molecules-speeddial' },
  { name: 'Stepper', description: 'Step-by-step progress indicator', category: 'molecules', status: 'stable', storybookPath: '?path=/docs/molecules-stepper' },
  { name: 'Table', description: 'Data table with sorting/pagination', category: 'molecules', status: 'stable', storybookPath: '?path=/docs/molecules-table' },
  { name: 'Tabs', description: 'Tab navigation', category: 'molecules', status: 'stable', storybookPath: '?path=/docs/molecules-tabs' },
  { name: 'TimePicker', description: 'Time selection input', category: 'molecules', status: 'stable', storybookPath: '?path=/docs/molecules-timepicker' },

  // Effects
  { name: 'AnimatedBadge', description: 'Badge with animation effects', category: 'effects', status: 'stable', storybookPath: '?path=/docs/effects-animatedbadge' },
  { name: 'LoadingDots', description: 'Animated loading dots', category: 'effects', status: 'stable', storybookPath: '?path=/docs/effects-loadingdots' },
  { name: 'RippleButton', description: 'Button with ripple effect', category: 'effects', status: 'stable', storybookPath: '?path=/docs/effects-ripplebutton' },
];

export const componentsByCategory = componentsList.reduce(
  (acc, component) => {
    if (!acc[component.category]) {
      acc[component.category] = [];
    }
    acc[component.category]!.push(component);
    return acc;
  },
  {} as Record<string, ComponentInfo[]>
);

export const componentCounts = {
  atoms: componentsList.filter((c) => c.category === 'atoms').length,
  molecules: componentsList.filter((c) => c.category === 'molecules').length,
  organisms: componentsList.filter((c) => c.category === 'organisms').length,
  effects: componentsList.filter((c) => c.category === 'effects').length,
  total: componentsList.length,
};
