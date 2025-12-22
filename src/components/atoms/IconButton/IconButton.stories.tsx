/**
 * IconButton component stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack, Typography as MuiTypography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Atoms/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: [
        'default',
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
        'inherit',
      ],
      description: 'The color of the button',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the button will be disabled',
    },
    edge: {
      control: 'select',
      options: [false, 'start', 'end'],
      description: 'If given, uses a negative margin to counteract padding',
    },
    disableRipple: {
      control: 'boolean',
      description: 'If true, the ripple effect is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

/**
 * Default icon button
 */
export const Default: Story = {
  args: {
    'aria-label': 'add',
  },
  render: (args) => (
    <IconButton {...args}>
      <AddIcon />
    </IconButton>
  ),
};

// Size Variants
/**
 * Small icon button
 */
export const Small: Story = {
  args: {
    size: 'small',
    'aria-label': 'add',
  },
  render: (args) => (
    <IconButton {...args}>
      <AddIcon />
    </IconButton>
  ),
};

/**
 * Medium icon button (default)
 */
export const Medium: Story = {
  args: {
    size: 'medium',
    'aria-label': 'add',
  },
  render: (args) => (
    <IconButton {...args}>
      <AddIcon />
    </IconButton>
  ),
};

/**
 * Large icon button
 */
export const Large: Story = {
  args: {
    size: 'large',
    'aria-label': 'add',
  },
  render: (args) => (
    <IconButton {...args}>
      <AddIcon />
    </IconButton>
  ),
};

// Color Variants
/**
 * Primary color icon button
 */
export const Primary: Story = {
  args: {
    color: 'primary',
    'aria-label': 'add',
  },
  render: (args) => (
    <IconButton {...args}>
      <AddIcon />
    </IconButton>
  ),
};

/**
 * Secondary color icon button
 */
export const Secondary: Story = {
  args: {
    color: 'secondary',
    'aria-label': 'add',
  },
  render: (args) => (
    <IconButton {...args}>
      <AddIcon />
    </IconButton>
  ),
};

/**
 * Error color icon button
 */
export const Error: Story = {
  args: {
    color: 'error',
    'aria-label': 'delete',
  },
  render: (args) => (
    <IconButton {...args}>
      <DeleteIcon />
    </IconButton>
  ),
};

/**
 * Disabled icon button
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    'aria-label': 'disabled',
  },
  render: (args) => (
    <IconButton {...args}>
      <AddIcon />
    </IconButton>
  ),
};

/**
 * All sizes showcase
 */
export const AllSizes: Story = {
  render: () => (
    <Box sx={{ p: 4 }}>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Small Size
          </MuiTypography>
          <Stack direction="row" spacing={2}>
            <Box textAlign="center">
              <IconButton size="small" color="default" aria-label="default">
                <AddIcon />
              </IconButton>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Default
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <IconButton size="small" color="primary" aria-label="primary">
                <AddIcon />
              </IconButton>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Primary
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <IconButton size="small" color="secondary" aria-label="secondary">
                <AddIcon />
              </IconButton>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Secondary
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <IconButton size="small" color="error" aria-label="error">
                <DeleteIcon />
              </IconButton>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Error
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <IconButton size="small" disabled aria-label="disabled">
                <AddIcon />
              </IconButton>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Disabled
              </MuiTypography>
            </Box>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Medium Size (Default)
          </MuiTypography>
          <Stack direction="row" spacing={2}>
            <Box textAlign="center">
              <IconButton size="medium" color="default" aria-label="default">
                <AddIcon />
              </IconButton>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Default
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <IconButton size="medium" color="primary" aria-label="primary">
                <AddIcon />
              </IconButton>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Primary
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <IconButton size="medium" color="secondary" aria-label="secondary">
                <AddIcon />
              </IconButton>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Secondary
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <IconButton size="medium" color="error" aria-label="error">
                <DeleteIcon />
              </IconButton>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Error
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <IconButton size="medium" disabled aria-label="disabled">
                <AddIcon />
              </IconButton>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Disabled
              </MuiTypography>
            </Box>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Large Size
          </MuiTypography>
          <Stack direction="row" spacing={2}>
            <Box textAlign="center">
              <IconButton size="large" color="default" aria-label="default">
                <AddIcon />
              </IconButton>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Default
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <IconButton size="large" color="primary" aria-label="primary">
                <AddIcon />
              </IconButton>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Primary
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <IconButton size="large" color="secondary" aria-label="secondary">
                <AddIcon />
              </IconButton>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Secondary
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <IconButton size="large" color="error" aria-label="error">
                <DeleteIcon />
              </IconButton>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Error
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <IconButton size="large" disabled aria-label="disabled">
                <AddIcon />
              </IconButton>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Disabled
              </MuiTypography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * Real-world examples
 */
export const RealWorldExamples: Story = {
  render: () => (
    <Box sx={{ p: 4 }}>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            App Bar Actions
          </MuiTypography>
          <Stack direction="row" spacing={1}>
            <IconButton aria-label="notifications">
              <NotificationsIcon />
            </IconButton>
            <IconButton aria-label="mail">
              <MailIcon />
            </IconButton>
            <IconButton aria-label="settings">
              <SettingsIcon />
            </IconButton>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Content Actions
          </MuiTypography>
          <Stack direction="row" spacing={1}>
            <IconButton color="primary" aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton color="primary" aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton color="error" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Different Sizes
          </MuiTypography>
          <Stack direction="row" spacing={2} alignItems="center">
            <IconButton size="small" color="primary" aria-label="small add">
              <AddIcon fontSize="small" />
            </IconButton>
            <IconButton size="medium" color="primary" aria-label="medium add">
              <AddIcon />
            </IconButton>
            <IconButton size="large" color="primary" aria-label="large add">
              <AddIcon fontSize="large" />
            </IconButton>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Edge Positioning
          </MuiTypography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              width: 300,
              border: '1px dashed grey',
              p: 2,
            }}
          >
            <IconButton edge="start" aria-label="start edge">
              <AddIcon />
            </IconButton>
            <MuiTypography sx={{ flex: 1, textAlign: 'center' }}>Content</MuiTypography>
            <IconButton edge="end" aria-label="end edge">
              <SettingsIcon />
            </IconButton>
          </Box>
        </Box>
      </Stack>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
