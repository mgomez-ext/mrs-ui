/**
 * Chip component stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack } from '@mui/material';
import { Chip } from './Chip';
import { Avatar } from '../Avatar';

const meta: Meta<typeof Chip> = {
  title: 'Atoms/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The content of the component',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'The size of the component',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
      description: 'The color of the component',
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined'],
      description: 'The variant to use',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the component is disabled',
    },
    clickable: {
      control: 'boolean',
      description: 'If true, the chip will appear clickable',
    },
    onClick: {
      action: 'clicked',
      description: 'Callback fired when the chip is clicked',
    },
    onDelete: {
      action: 'deleted',
      description: 'Callback fired when the delete icon is clicked',
    },
  },
  args: {
    label: 'Chip',
    size: 'medium',
    color: 'default',
    variant: 'filled',
    disabled: false,
    clickable: false,
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

/**
 * Default chip
 */
export const Default: Story = {
  args: {},
};

/**
 * Chip sizes
 */
export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Chip label="Small" size="small" />
      <Chip label="Medium" size="medium" />
    </Stack>
  ),
};

/**
 * Chip colors - Filled variant
 */
export const ColorsFilled: Story = {
  render: () => (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Chip label="Default" color="default" variant="filled" />
        <Chip label="Primary" color="primary" variant="filled" />
        <Chip label="Secondary" color="secondary" variant="filled" />
        <Chip label="Error" color="error" variant="filled" />
        <Chip label="Warning" color="warning" variant="filled" />
        <Chip label="Info" color="info" variant="filled" />
        <Chip label="Success" color="success" variant="filled" />
      </Stack>
    </Stack>
  ),
};

/**
 * Chip colors - Outlined variant
 */
export const ColorsOutlined: Story = {
  render: () => (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Chip label="Default" color="default" variant="outlined" />
        <Chip label="Primary" color="primary" variant="outlined" />
        <Chip label="Secondary" color="secondary" variant="outlined" />
        <Chip label="Error" color="error" variant="outlined" />
        <Chip label="Warning" color="warning" variant="outlined" />
        <Chip label="Info" color="info" variant="outlined" />
        <Chip label="Success" color="success" variant="outlined" />
      </Stack>
    </Stack>
  ),
};

/**
 * Disabled chips
 */
export const Disabled: Story = {
  render: () => (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Chip label="Default Disabled" color="default" disabled />
        <Chip label="Primary Disabled" color="primary" disabled />
        <Chip label="Outlined Disabled" color="default" variant="outlined" disabled />
        <Chip label="Primary Outlined Disabled" color="primary" variant="outlined" disabled />
      </Stack>
    </Stack>
  ),
};

/**
 * Clickable chips
 */
export const Clickable: Story = {
  render: () => (
    <Stack direction="row" spacing={2} flexWrap="wrap">
      <Chip label="Clickable" clickable onClick={() => alert('Clicked!')} />
      <Chip label="Primary Clickable" color="primary" clickable onClick={() => alert('Clicked!')} />
      <Chip
        label="Outlined Clickable"
        variant="outlined"
        clickable
        onClick={() => alert('Clicked!')}
      />
    </Stack>
  ),
};

/**
 * Chips with avatar
 */
export const WithAvatar: Story = {
  render: () => (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Chip label="Avatar" avatar={<Avatar>M</Avatar>} />
        <Chip label="Avatar Primary" color="primary" avatar={<Avatar>P</Avatar>} />
        <Chip label="Avatar Small" size="small" avatar={<Avatar size="18px">S</Avatar>} />
        <Chip label="Avatar Outlined" variant="outlined" avatar={<Avatar>O</Avatar>} />
      </Stack>
    </Stack>
  ),
};

/**
 * Deletable chips
 */
export const Deletable: Story = {
  render: () => (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Chip label="Deletable" onDelete={() => alert('Delete clicked!')} />
        <Chip label="Primary" color="primary" onDelete={() => alert('Delete clicked!')} />
        <Chip label="Small" size="small" onDelete={() => alert('Delete clicked!')} />
        <Chip label="Outlined" variant="outlined" onDelete={() => alert('Delete clicked!')} />
      </Stack>
    </Stack>
  ),
};

/**
 * Chips with avatar and delete
 */
export const WithAvatarAndDelete: Story = {
  render: () => (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Chip
          label="Complete"
          avatar={<Avatar>C</Avatar>}
          onDelete={() => alert('Delete clicked!')}
        />
        <Chip
          label="Primary"
          color="primary"
          avatar={<Avatar>P</Avatar>}
          onDelete={() => alert('Delete clicked!')}
        />
        <Chip
          label="Small"
          size="small"
          avatar={<Avatar size="18px">S</Avatar>}
          onDelete={() => alert('Delete clicked!')}
        />
        <Chip
          label="Outlined"
          variant="outlined"
          avatar={<Avatar>O</Avatar>}
          onDelete={() => alert('Delete clicked!')}
        />
      </Stack>
    </Stack>
  ),
};

/**
 * All variants showcase
 */
export const AllVariants: Story = {
  render: () => (
    <Box sx={{ p: 4 }}>
      <Stack spacing={4}>
        <Box>
          <Box sx={{ mb: 2, fontWeight: 'bold' }}>Medium - Default - Filled</Box>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Chip label="Basic" />
            <Chip label="Clickable" onClick={() => {}} />
            <Chip label="Deletable" onDelete={() => {}} />
            <Chip label="Avatar" avatar={<Avatar>A</Avatar>} />
            <Chip label="Complete" avatar={<Avatar>C</Avatar>} onDelete={() => {}} />
            <Chip label="Disabled" disabled />
          </Stack>
        </Box>

        <Box>
          <Box sx={{ mb: 2, fontWeight: 'bold' }}>Medium - Primary - Filled</Box>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Chip label="Basic" color="primary" />
            <Chip label="Clickable" color="primary" onClick={() => {}} />
            <Chip label="Deletable" color="primary" onDelete={() => {}} />
            <Chip label="Avatar" color="primary" avatar={<Avatar>A</Avatar>} />
            <Chip
              label="Complete"
              color="primary"
              avatar={<Avatar>C</Avatar>}
              onDelete={() => {}}
            />
            <Chip label="Disabled" color="primary" disabled />
          </Stack>
        </Box>

        <Box>
          <Box sx={{ mb: 2, fontWeight: 'bold' }}>Small - Default - Filled</Box>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Chip label="Basic" size="small" />
            <Chip label="Clickable" size="small" onClick={() => {}} />
            <Chip label="Deletable" size="small" onDelete={() => {}} />
            <Chip label="Avatar" size="small" avatar={<Avatar size="18px">A</Avatar>} />
            <Chip
              label="Complete"
              size="small"
              avatar={<Avatar size="18px">C</Avatar>}
              onDelete={() => {}}
            />
            <Chip label="Disabled" size="small" disabled />
          </Stack>
        </Box>

        <Box>
          <Box sx={{ mb: 2, fontWeight: 'bold' }}>Small - Primary - Filled</Box>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Chip label="Basic" size="small" color="primary" />
            <Chip label="Clickable" size="small" color="primary" onClick={() => {}} />
            <Chip label="Deletable" size="small" color="primary" onDelete={() => {}} />
            <Chip
              label="Avatar"
              size="small"
              color="primary"
              avatar={<Avatar size="18px">A</Avatar>}
            />
            <Chip
              label="Complete"
              size="small"
              color="primary"
              avatar={<Avatar size="18px">C</Avatar>}
              onDelete={() => {}}
            />
            <Chip label="Disabled" size="small" color="primary" disabled />
          </Stack>
        </Box>

        <Box>
          <Box sx={{ mb: 2, fontWeight: 'bold' }}>Medium - Default - Outlined</Box>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Chip label="Basic" variant="outlined" />
            <Chip label="Clickable" variant="outlined" onClick={() => {}} />
            <Chip label="Deletable" variant="outlined" onDelete={() => {}} />
            <Chip label="Avatar" variant="outlined" avatar={<Avatar>A</Avatar>} />
            <Chip
              label="Complete"
              variant="outlined"
              avatar={<Avatar>C</Avatar>}
              onDelete={() => {}}
            />
            <Chip label="Disabled" variant="outlined" disabled />
          </Stack>
        </Box>

        <Box>
          <Box sx={{ mb: 2, fontWeight: 'bold' }}>Medium - Primary - Outlined</Box>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Chip label="Basic" color="primary" variant="outlined" />
            <Chip label="Clickable" color="primary" variant="outlined" onClick={() => {}} />
            <Chip label="Deletable" color="primary" variant="outlined" onDelete={() => {}} />
            <Chip label="Avatar" color="primary" variant="outlined" avatar={<Avatar>A</Avatar>} />
            <Chip
              label="Complete"
              color="primary"
              variant="outlined"
              avatar={<Avatar>C</Avatar>}
              onDelete={() => {}}
            />
            <Chip label="Disabled" color="primary" variant="outlined" disabled />
          </Stack>
        </Box>

        <Box>
          <Box sx={{ mb: 2, fontWeight: 'bold' }}>Small - Default - Outlined</Box>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Chip label="Basic" size="small" variant="outlined" />
            <Chip label="Clickable" size="small" variant="outlined" onClick={() => {}} />
            <Chip label="Deletable" size="small" variant="outlined" onDelete={() => {}} />
            <Chip
              label="Avatar"
              size="small"
              variant="outlined"
              avatar={<Avatar size="18px">A</Avatar>}
            />
            <Chip
              label="Complete"
              size="small"
              variant="outlined"
              avatar={<Avatar size="18px">C</Avatar>}
              onDelete={() => {}}
            />
            <Chip label="Disabled" size="small" variant="outlined" disabled />
          </Stack>
        </Box>

        <Box>
          <Box sx={{ mb: 2, fontWeight: 'bold' }}>Small - Primary - Outlined</Box>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Chip label="Basic" size="small" color="primary" variant="outlined" />
            <Chip
              label="Clickable"
              size="small"
              color="primary"
              variant="outlined"
              onClick={() => {}}
            />
            <Chip
              label="Deletable"
              size="small"
              color="primary"
              variant="outlined"
              onDelete={() => {}}
            />
            <Chip
              label="Avatar"
              size="small"
              color="primary"
              variant="outlined"
              avatar={<Avatar size="18px">A</Avatar>}
            />
            <Chip
              label="Complete"
              size="small"
              color="primary"
              variant="outlined"
              avatar={<Avatar size="18px">C</Avatar>}
              onDelete={() => {}}
            />
            <Chip label="Disabled" size="small" color="primary" variant="outlined" disabled />
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
          <Box sx={{ mb: 2, fontWeight: 'bold' }}>Filter Tags</Box>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Chip label="Active" color="success" size="small" />
            <Chip label="Pending" color="warning" size="small" />
            <Chip label="Cancelled" color="error" size="small" />
            <Chip label="All" size="small" />
          </Stack>
        </Box>

        <Box>
          <Box sx={{ mb: 2, fontWeight: 'bold' }}>Selected Items</Box>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Chip label="React" onDelete={() => {}} />
            <Chip label="TypeScript" onDelete={() => {}} />
            <Chip label="Material-UI" onDelete={() => {}} />
            <Chip label="Storybook" onDelete={() => {}} />
          </Stack>
        </Box>

        <Box>
          <Box sx={{ mb: 2, fontWeight: 'bold' }}>User Tags</Box>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Chip label="John Doe" avatar={<Avatar>JD</Avatar>} onDelete={() => {}} />
            <Chip label="Jane Smith" avatar={<Avatar>JS</Avatar>} onDelete={() => {}} />
            <Chip label="Bob Johnson" avatar={<Avatar>BJ</Avatar>} onDelete={() => {}} />
          </Stack>
        </Box>

        <Box>
          <Box sx={{ mb: 2, fontWeight: 'bold' }}>Category Tags</Box>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Chip label="Frontend" color="primary" variant="outlined" clickable />
            <Chip label="Backend" color="primary" variant="outlined" clickable />
            <Chip label="DevOps" color="primary" variant="outlined" clickable />
            <Chip label="Design" color="primary" variant="outlined" clickable />
          </Stack>
        </Box>

        <Box>
          <Box sx={{ mb: 2, fontWeight: 'bold' }}>Status Indicators</Box>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Chip label="Online" color="success" size="small" />
            <Chip label="Away" color="warning" size="small" />
            <Chip label="Busy" color="error" size="small" />
            <Chip label="Offline" color="default" size="small" />
          </Stack>
        </Box>
      </Stack>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
