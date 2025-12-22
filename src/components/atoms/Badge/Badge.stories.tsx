/**
 * Badge component stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack, Typography as MuiTypography, IconButton } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    badgeContent: {
      control: 'number',
      description: 'The content rendered within the badge',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
      description: 'The color of the component',
    },
    variant: {
      control: 'select',
      options: ['standard', 'dot'],
      description: 'The variant to use',
    },
    max: {
      control: 'number',
      description: 'Max count to show',
    },
    showZero: {
      control: 'boolean',
      description: 'Controls whether the badge is hidden when badgeContent is zero',
    },
    invisible: {
      control: 'boolean',
      description: 'If true, the badge is invisible',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

/**
 * Default badge with primary color
 */
export const Default: Story = {
  args: {
    badgeContent: 4,
    color: 'primary',
  },
  render: (args) => (
    <Badge {...args}>
      <MailIcon />
    </Badge>
  ),
};

// Standard Variant Stories
/**
 * Standard badge with default color
 */
export const StandardDefault: Story = {
  args: {
    badgeContent: 1,
    color: 'default',
    variant: 'standard',
  },
  render: (args) => (
    <Badge {...args}>
      <MailIcon />
    </Badge>
  ),
};

/**
 * Standard badge with primary color
 */
export const StandardPrimary: Story = {
  args: {
    badgeContent: 1,
    color: 'primary',
    variant: 'standard',
  },
  render: (args) => (
    <Badge {...args}>
      <MailIcon />
    </Badge>
  ),
};

/**
 * Standard badge with secondary color
 */
export const StandardSecondary: Story = {
  args: {
    badgeContent: 1,
    color: 'secondary',
    variant: 'standard',
  },
  render: (args) => (
    <Badge {...args}>
      <MailIcon />
    </Badge>
  ),
};

/**
 * Standard badge with error color (notification)
 */
export const StandardError: Story = {
  args: {
    badgeContent: 1,
    color: 'error',
    variant: 'standard',
  },
  render: (args) => (
    <Badge {...args}>
      <NotificationsIcon />
    </Badge>
  ),
};

// Dot Variant Stories
/**
 * Dot badge with primary color
 */
export const DotPrimary: Story = {
  args: {
    variant: 'dot',
    color: 'primary',
  },
  render: (args) => (
    <Badge {...args}>
      <MailIcon />
    </Badge>
  ),
};

/**
 * Dot badge with secondary color
 */
export const DotSecondary: Story = {
  args: {
    variant: 'dot',
    color: 'secondary',
  },
  render: (args) => (
    <Badge {...args}>
      <MailIcon />
    </Badge>
  ),
};

/**
 * Dot badge with error color (notification)
 */
export const DotError: Story = {
  args: {
    variant: 'dot',
    color: 'error',
  },
  render: (args) => (
    <Badge {...args}>
      <NotificationsIcon />
    </Badge>
  ),
};

// Advanced Usage
/**
 * Badge with max count
 */
export const WithMax: Story = {
  args: {
    badgeContent: 100,
    color: 'error',
    max: 99,
  },
  render: (args) => (
    <Badge {...args}>
      <NotificationsIcon />
    </Badge>
  ),
};

/**
 * Badge showing zero
 */
export const ShowZero: Story = {
  args: {
    badgeContent: 0,
    color: 'primary',
    showZero: true,
  },
  render: (args) => (
    <Badge {...args}>
      <MailIcon />
    </Badge>
  ),
};

/**
 * Invisible badge
 */
export const Invisible: Story = {
  args: {
    badgeContent: 4,
    color: 'primary',
    invisible: true,
  },
  render: (args) => (
    <Badge {...args}>
      <MailIcon />
    </Badge>
  ),
};

/**
 * All colors showcase
 */
export const AllColors: Story = {
  render: () => (
    <Box sx={{ p: 4 }}>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Standard Variant
          </MuiTypography>
          <Stack direction="row" spacing={4}>
            <Box textAlign="center">
              <Badge badgeContent={4} color="default">
                <MailIcon />
              </Badge>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Default
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Badge badgeContent={4} color="primary">
                <MailIcon />
              </Badge>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Primary
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Secondary
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Error
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Badge badgeContent={4} color="info">
                <MailIcon />
              </Badge>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Info
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Badge badgeContent={4} color="success">
                <MailIcon />
              </Badge>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Success
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Badge badgeContent={4} color="warning">
                <MailIcon />
              </Badge>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Warning
              </MuiTypography>
            </Box>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Dot Variant
          </MuiTypography>
          <Stack direction="row" spacing={4}>
            <Box textAlign="center">
              <Badge variant="dot" color="default">
                <MailIcon />
              </Badge>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Default
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Badge variant="dot" color="primary">
                <MailIcon />
              </Badge>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Primary
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Badge variant="dot" color="secondary">
                <MailIcon />
              </Badge>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Secondary
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Badge variant="dot" color="error">
                <NotificationsIcon />
              </Badge>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Error
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
            Notifications
          </MuiTypography>
          <Stack direction="row" spacing={2}>
            <IconButton>
              <Badge badgeContent={5} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={12} color="primary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={100} max={99} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Shopping Cart
          </MuiTypography>
          <Stack direction="row" spacing={2}>
            <IconButton>
              <Badge badgeContent={3} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={0} showZero color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Status Indicators
          </MuiTypography>
          <Stack direction="row" spacing={2}>
            <IconButton>
              <Badge variant="dot" color="success">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge variant="dot" color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge variant="dot" color="warning">
                <MailIcon />
              </Badge>
            </IconButton>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Favorites
          </MuiTypography>
          <Stack direction="row" spacing={2}>
            <IconButton>
              <Badge badgeContent={23} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge variant="dot" color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
