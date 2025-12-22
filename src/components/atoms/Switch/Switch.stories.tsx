/**
 * Switch component stories
 */

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack, Typography, FormControlLabel, FormGroup } from '@mui/material';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Atoms/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'If `true`, the component is checked.',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'The size of the component.',
    },
    color: {
      control: 'select',
      options: ['default', 'primary'],
      description: 'The color of the component.',
    },
    disabled: {
      control: 'boolean',
      description: 'If `true`, the component is disabled.',
    },
    disableRipple: {
      control: 'boolean',
      description: 'If `true`, the ripple effect is disabled.',
    },
    required: {
      control: 'boolean',
      description: 'If `true`, the input element is required.',
    },
    onChange: {
      action: 'onChange',
      description: 'Callback fired when the state is changed.',
    },
    sx: {
      control: 'object',
      description:
        'The system prop that allows defining system overrides as well as additional CSS styles.',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack spacing={2}>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Small
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Switch size="small" />
          <Switch size="small" checked />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Medium (default)
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Switch size="medium" />
          <Switch size="medium" checked />
        </Stack>
      </Box>
    </Stack>
  ),
};

export const Colors: Story = {
  render: () => (
    <Stack spacing={2}>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Primary (default)
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Switch color="primary" />
          <Switch color="primary" checked />
          <Switch color="primary" disabled />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Default
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Switch color="default" />
          <Switch color="default" checked />
          <Switch color="default" disabled />
        </Stack>
      </Box>
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack spacing={2}>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Enabled
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Switch />
          <Switch checked />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Disabled
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Switch disabled />
          <Switch disabled checked />
        </Stack>
      </Box>
    </Stack>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <FormGroup>
      <FormControlLabel control={<Switch />} label="Off" />
      <FormControlLabel control={<Switch defaultChecked />} label="On" />
      <FormControlLabel control={<Switch disabled />} label="Disabled off" />
      <FormControlLabel control={<Switch disabled defaultChecked />} label="Disabled on" />
    </FormGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Switches with labels using FormControlLabel component.',
      },
    },
  },
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };

    return (
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label={`Switch is ${checked ? 'on' : 'off'}`}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a controlled switch with React state.',
      },
    },
  },
};

export const Playground: Story = {
  args: {
    checked: false,
    size: 'medium',
    color: 'primary',
    disabled: false,
    disableRipple: false,
    required: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to experiment with all Switch props.',
      },
    },
  },
};
