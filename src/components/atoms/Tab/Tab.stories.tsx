/**
 * Tab component stories
 */

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Tab } from './Tab';

const meta: Meta<typeof Tab> = {
  title: 'Atoms/Tab',
  component: Tab,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['inherit', 'primary', 'secondary'],
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right', 'top'],
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    label: 'Tab',
    color: 'inherit',
    icon: <AddIcon fontSize="small" />,
    iconPosition: 'left',
  },
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = React.useState(0);
    return (
      <Tabs
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        textColor={args.color === 'inherit' ? 'inherit' : args.color}
        indicatorColor={args.color === 'inherit' ? 'primary' : args.color}
      >
        <Tab {...args} />
        <Tab {...args} label="Tab + icon" icon={<AddIcon fontSize="small" />} />
        <Tab {...args} label="Disabled" disabled />
      </Tabs>
    );
  },
};

export const IconPositions: Story = {
  render: () => {
    const [value, setValue] = React.useState(0);
    return (
      <Tabs value={value} onChange={(_, v) => setValue(v)} textColor="primary" indicatorColor="primary">
        <Tab label="Left" icon={<AddIcon fontSize="small" />} iconPosition="left" />
        <Tab label="Top" icon={<AddIcon fontSize="small" />} iconPosition="top" />
        <Tab label="Right" icon={<AddIcon fontSize="small" />} iconPosition="right" />
      </Tabs>
    );
  },
};

export const Colors: Story = {
  render: () => {
    const [value, setValue] = React.useState(0);
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Tabs value={value} onChange={(_, v) => setValue(v)} textColor="primary" indicatorColor="primary">
          <Tab label="Primary" color="primary" icon={<AddIcon fontSize="small" />} />
          <Tab label="Primary" color="primary" />
        </Tabs>
        <Tabs value={value} onChange={(_, v) => setValue(v)} textColor="secondary" indicatorColor="secondary">
          <Tab label="Secondary" color="secondary" icon={<AddIcon fontSize="small" />} />
          <Tab label="Secondary" color="secondary" />
        </Tabs>
      </Box>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const [value, setValue] = React.useState(0);
    return (
      <Tabs
        orientation="vertical"
        value={value}
        onChange={(_, v) => setValue(v)}
        textColor="primary"
        indicatorColor="primary"
        sx={{ height: 200 }}
      >
        <Tab label="Tab" icon={<AddIcon fontSize="small" />} iconPosition="top" />
        <Tab label="Tab" />
        <Tab label="Disabled" disabled />
      </Tabs>
    );
  },
};

