/**
 * ButtonGroup component stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Box, Typography } from '@mui/material';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../../atoms/Button';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Molecules/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The group orientation (layout flow direction).',
    },
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
      description: 'The variant to use.',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'inherit'],
      description: 'The color of the component.',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the component.',
    },
    disabled: {
      control: 'boolean',
      description: 'If `true`, the component is disabled.',
    },
    disableElevation: {
      control: 'boolean',
      description: 'If `true`, no elevation is used.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'If `true`, the buttons will take up the full width of its container.',
    },
    children: {
      control: false,
      description: 'The content of the component.',
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
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  args: {
    children: [
      <Button key="one">One</Button>,
      <Button key="two">Two</Button>,
      <Button key="three">Three</Button>,
    ],
  },
};

export const Variants: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Contained (default)
        </Typography>
        <ButtonGroup variant="contained">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Outlined
        </Typography>
        <ButtonGroup variant="outlined">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Text
        </Typography>
        <ButtonGroup variant="text">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
    </Stack>
  ),
};

export const Colors: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Primary (default)
        </Typography>
        <ButtonGroup color="primary">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Secondary
        </Typography>
        <ButtonGroup color="secondary">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Error
        </Typography>
        <ButtonGroup color="error">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Inherit
        </Typography>
        <Box sx={{ color: 'purple' }}>
          <ButtonGroup color="inherit">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Small
        </Typography>
        <ButtonGroup size="small">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Medium (default)
        </Typography>
        <ButtonGroup size="medium">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Large
        </Typography>
        <ButtonGroup size="large">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
    </Stack>
  ),
};

export const Orientation: Story = {
  render: () => (
    <Stack spacing={3} direction="row" alignItems="flex-start">
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Horizontal (default)
        </Typography>
        <ButtonGroup orientation="horizontal">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Vertical
        </Typography>
        <ButtonGroup orientation="vertical">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
    </Stack>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Disabled Group
        </Typography>
        <ButtonGroup disabled>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Individual Disabled Buttons
        </Typography>
        <ButtonGroup>
          <Button>One</Button>
          <Button disabled>Two (Disabled)</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
    </Stack>
  ),
};

export const DisableElevation: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          With Elevation (default)
        </Typography>
        <ButtonGroup variant="contained">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Without Elevation
        </Typography>
        <ButtonGroup variant="contained" disableElevation>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
    </Stack>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Box sx={{ width: '100%', maxWidth: 600 }}>
      <Typography variant="body2" sx={{ mb: 1 }}>
        Full Width Button Group
      </Typography>
      <ButtonGroup fullWidth>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Box>
  ),
};

export const VerticalFullWidth: Story = {
  render: () => (
    <Box sx={{ width: '100%', maxWidth: 300 }}>
      <Typography variant="body2" sx={{ mb: 1 }}>
        Vertical Full Width
      </Typography>
      <ButtonGroup orientation="vertical" fullWidth>
        <Button>Top</Button>
        <Button>Middle</Button>
        <Button>Bottom</Button>
      </ButtonGroup>
    </Box>
  ),
};

export const OutlinedVariantAllColors: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Outlined Primary
        </Typography>
        <ButtonGroup variant="outlined" color="primary">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Outlined Secondary
        </Typography>
        <ButtonGroup variant="outlined" color="secondary">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Outlined Error
        </Typography>
        <ButtonGroup variant="outlined" color="error">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
    </Stack>
  ),
};

export const RealWorldExamples: Story = {
  render: () => (
    <Stack spacing={4} sx={{ width: '100%', maxWidth: 800 }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Text Alignment
        </Typography>
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
          <Button>Justify</Button>
        </ButtonGroup>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          View Options
        </Typography>
        <ButtonGroup variant="outlined">
          <Button>List</Button>
          <Button>Grid</Button>
          <Button>Gallery</Button>
        </ButtonGroup>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Zoom Controls
        </Typography>
        <ButtonGroup size="small">
          <Button>-</Button>
          <Button>100%</Button>
          <Button>+</Button>
        </ButtonGroup>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Vertical Navigation
        </Typography>
        <ButtonGroup orientation="vertical" variant="outlined" fullWidth sx={{ maxWidth: 200 }}>
          <Button>Dashboard</Button>
          <Button>Analytics</Button>
          <Button>Settings</Button>
          <Button>Profile</Button>
        </ButtonGroup>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Filter Options
        </Typography>
        <ButtonGroup variant="text" color="secondary">
          <Button>All</Button>
          <Button>Active</Button>
          <Button>Pending</Button>
          <Button>Archived</Button>
        </ButtonGroup>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Action Buttons
        </Typography>
        <ButtonGroup>
          <Button>Save</Button>
          <Button>Save & Continue</Button>
          <Button color="secondary">Cancel</Button>
        </ButtonGroup>
      </Box>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples of ButtonGroup usage in various UI scenarios.',
      },
    },
  },
};

export const Playground: Story = {
  args: {
    orientation: 'horizontal',
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    disabled: false,
    disableElevation: false,
    fullWidth: false,
    children: [
      <Button key="one">One</Button>,
      <Button key="two">Two</Button>,
      <Button key="three">Three</Button>,
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to experiment with all ButtonGroup props.',
      },
    },
  },
};
