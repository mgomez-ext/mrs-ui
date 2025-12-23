import { ReactNode } from 'react';
import { TabProps as MuiTabProps } from '@mui/material/Tab';

export type TabColor = 'primary' | 'secondary' | 'inherit';

export type TabIconPosition = 'left' | 'right' | 'top';

export interface TabProps
  extends Omit<MuiTabProps, 'textColor' | 'iconPosition' | 'icon'> {
  /**
   * Controls the semantic color of the label and indicator (via Tabs).
   * @default 'inherit'
   */
  color?: TabColor;

  /**
   * Optional icon to render with the label.
   */
  icon?: ReactNode;

  /**
   * Where to place the icon relative to the label.
   * @default 'left'
   */
  iconPosition?: TabIconPosition;
}

