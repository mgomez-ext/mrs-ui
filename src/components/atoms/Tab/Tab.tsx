/**
 * Tab component
 * Wraps MUI Tab to align with MRS typography, spacing, and icon positions.
 */

import React from 'react';
import { Tab as MuiTab } from '@mui/material/Tab';
import type { TabProps, TabIconPosition } from './Tab.types';

const mapIconPosition = (position: TabIconPosition) => {
  if (position === 'right') return 'end';
  if (position === 'top') return 'top';
  return 'start';
};

export const Tab = React.forwardRef<HTMLButtonElement, TabProps>(
  ({ color = 'inherit', iconPosition = 'left', icon, label, ...rest }, ref) => {
    return (
      <MuiTab
        ref={ref}
        icon={icon}
        label={label}
        iconPosition={mapIconPosition(iconPosition)}
        textColor={color}
        sx={{
          textTransform: 'uppercase',
          letterSpacing: '0.4px',
          fontWeight: (theme) => theme.typography.fontWeightMedium,
          fontSize: (theme) => theme.typography.button?.fontSize || '0.875rem',
          gap: 1,
          px: 2,
          py: 1.125,
          minHeight: 36,
          minWidth: 'auto',
        }}
        {...rest}
      />
    );
  },
);

Tab.displayName = 'Tab';

export default Tab;

