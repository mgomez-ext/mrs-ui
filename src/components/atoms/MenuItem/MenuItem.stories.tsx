/**
 * MenuItem component stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { MenuItem } from './MenuItem';
import CheckIcon from '@mui/icons-material/Check';
import { ListItemIcon, ListItemText } from '@mui/material';

const meta: Meta<typeof MenuItem> = {
  title: 'Atoms/MenuItem',
  component: MenuItem,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'If true, the menu item will be disabled',
    },
    selected: {
      control: 'boolean',
      description: 'If true, the menu item will be selected',
    },
    divider: {
      control: 'boolean',
      description: 'If true, the menu item will be a divider',
    },
    dense: {
      control: 'boolean',
      description: 'If true, compact vertical padding',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

/**
 * Default menu item
 */
export const Default: Story = {
  args: {
    children: 'Menu Item',
  },
};

/**
 * Disabled menu item
 */
export const Disabled: Story = {
  args: {
    children: 'Disabled Item',
    disabled: true,
  },
};

/**
 * Selected menu item
 */
export const Selected: Story = {
  args: {
    children: 'Selected Item',
    selected: true,
  },
};

/**
 * Dense menu item
 */
export const Dense: Story = {
  args: {
    children: 'Dense Item',
    dense: true,
  },
};

/**
 * With divider
 */
export const WithDivider: Story = {
  args: {
    children: 'Item with Divider',
    divider: true,
  },
};

/**
 * With icon
 */
export const WithIcon: Story = {
  render: () => (
    <MenuItem>
      <ListItemIcon>
        <CheckIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText>Item with Icon</ListItemText>
    </MenuItem>
  ),
};

/**
 * All states comparison
 */
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
      <MenuItem>Default</MenuItem>
      <MenuItem selected>Selected</MenuItem>
      <MenuItem disabled>Disabled</MenuItem>
      <MenuItem dense>Dense</MenuItem>
      <MenuItem divider>With Divider</MenuItem>
    </div>
  ),
};
