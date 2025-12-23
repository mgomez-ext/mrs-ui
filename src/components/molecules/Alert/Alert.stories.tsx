/**
 * Alert component stories
 */

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Box, Button } from '@mui/material';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Molecules/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    severity: {
      control: 'select',
      options: ['error', 'warning', 'info', 'success'],
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'standard'],
    },
    icon: { control: 'boolean' },
    close: { control: 'boolean' },
  },
  args: {
    severity: 'error',
    variant: 'filled',
    title: 'Title',
    description: 'Description',
    icon: true,
    close: true,
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Playground: Story = {
  args: {},
};

export const Variants: Story = {
  args: {
    icon: false,
    close: false,
    severity: 'info',
  },
  render: () => (
    <Stack spacing={3}>
      {(['error', 'warning', 'info', 'success'] as const).map((severity) => (
        <Box key={severity}>
          <Stack direction="column" spacing={2} flexWrap="wrap" useFlexGap>
            <Alert severity={severity} variant="filled" title="Title" description="Description" />
            <Alert severity={severity} variant="outlined" title="Title" description="Description" />
            <Alert severity={severity} variant="standard" title="Title" description="Description" />
          </Stack>
        </Box>
      ))}
    </Stack>
  ),
};

export const WithoutIcon: Story = {
  args: {
    severity: 'info',
  },

  render: () => (
    <Stack spacing={2}>
      <Alert severity="error" variant="filled" icon={false} title="No icon" description="Filled" />
      <Alert
        severity="info"
        variant="outlined"
        icon={false}
        title="No icon"
        description="Outlined"
      />
    </Stack>
  ),
};

export const WithActionAndClose: Story = {
  render: () => (
    <Alert
      severity="success"
      variant="outlined"
      title="Action"
      description="Includes action and close button"
      close
      onClose={() => undefined}
      action={
        <Button size="small" color="inherit" variant="text">
          Undo
        </Button>
      }
    />
  ),
};
