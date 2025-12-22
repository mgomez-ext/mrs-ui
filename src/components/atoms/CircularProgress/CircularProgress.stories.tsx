/**
 * CircularProgress component stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack, Typography as MuiTypography } from '@mui/material';
import { CircularProgress } from './CircularProgress';

const meta: Meta<typeof CircularProgress> = {
  title: 'Atoms/CircularProgress',
  component: CircularProgress,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: [16, 32],
      description: 'The size of the circular progress indicator',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'inherit'],
      description: 'The color of the component',
    },
    variant: {
      control: 'select',
      options: ['determinate', 'indeterminate'],
      description: 'The variant to use',
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'The value of the progress (determinate only)',
    },
    showLabel: {
      control: 'boolean',
      description: 'If true, shows the progress value as a label',
    },
  },
  args: {
    size: 32,
    color: 'primary',
    variant: 'indeterminate',
    showLabel: false,
  },
};

export default meta;
type Story = StoryObj<typeof CircularProgress>;

/**
 * Default indeterminate circular progress
 */
export const Default: Story = {
  args: {},
};

/**
 * Small size (16px)
 */
export const Small: Story = {
  args: {
    size: 16,
  },
};

/**
 * Large size (32px)
 */
export const Large: Story = {
  args: {
    size: 32,
  },
};

/**
 * With secondary color
 */
export const Secondary: Story = {
  args: {
    color: 'secondary',
  },
};

/**
 * With inherit color
 */
export const Inherit: Story = {
  args: {
    color: 'inherit',
  },
};

/**
 * Determinate variant with value
 */
export const Determinate: Story = {
  args: {
    variant: 'determinate',
    value: 75,
  },
};

/**
 * Determinate with label
 */
export const DeterminateWithLabel: Story = {
  args: {
    variant: 'determinate',
    value: 99,
    showLabel: true,
  },
};

/**
 * All sizes showcase
 */
export const AllSizes: Story = {
  render: () => (
    <Box sx={{ p: 4 }}>
      <MuiTypography variant="h6" sx={{ mb: 3 }}>
        Circular Progress Sizes
      </MuiTypography>
      <Stack direction="row" spacing={4} alignItems="center">
        <Box textAlign="center">
          <CircularProgress size={16} />
          <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
            16px
          </MuiTypography>
        </Box>
        <Box textAlign="center">
          <CircularProgress size={32} />
          <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
            32px
          </MuiTypography>
        </Box>
      </Stack>
    </Box>
  ),
  parameters: {
    layout: 'padded',
  },
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
            Primary Color
          </MuiTypography>
          <Stack direction="row" spacing={2}>
            <CircularProgress color="primary" size={16} />
            <CircularProgress color="primary" size={32} />
            <CircularProgress
              color="primary"
              size={32}
              variant="determinate"
              value={99}
              showLabel
            />
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Secondary Color
          </MuiTypography>
          <Stack direction="row" spacing={2}>
            <CircularProgress color="secondary" size={16} />
            <CircularProgress color="secondary" size={32} />
            <CircularProgress
              color="secondary"
              size={32}
              variant="determinate"
              value={99}
              showLabel
            />
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Inherit Color
          </MuiTypography>
          <Stack direction="row" spacing={2}>
            <CircularProgress color="inherit" size={16} />
            <CircularProgress color="inherit" size={32} />
            <CircularProgress
              color="inherit"
              size={32}
              variant="determinate"
              value={99}
              showLabel
            />
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
 * With labels showcase
 */
export const WithLabels: Story = {
  render: () => (
    <Box sx={{ p: 4 }}>
      <MuiTypography variant="h6" sx={{ mb: 3 }}>
        Progress with Labels
      </MuiTypography>
      <Stack direction="row" spacing={4}>
        <CircularProgress variant="determinate" value={25} showLabel size={32} />
        <CircularProgress variant="determinate" value={50} showLabel size={32} />
        <CircularProgress variant="determinate" value={75} showLabel size={32} />
        <CircularProgress variant="determinate" value={99} showLabel size={32} />
      </Stack>
    </Box>
  ),
  parameters: {
    layout: 'padded',
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
            Loading State
          </MuiTypography>
          <Stack direction="row" spacing={2} alignItems="center">
            <CircularProgress size={16} />
            <MuiTypography variant="body2">Loading...</MuiTypography>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            File Upload Progress
          </MuiTypography>
          <Stack spacing={1}>
            <MuiTypography variant="body2">Uploading file...</MuiTypography>
            <Stack direction="row" spacing={2} alignItems="center">
              <CircularProgress variant="determinate" value={75} showLabel size={32} />
              <MuiTypography variant="caption" sx={{ color: 'text.secondary' }}>
                3.2 MB of 4.3 MB
              </MuiTypography>
            </Stack>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Inline with Text
          </MuiTypography>
          <MuiTypography variant="body1">
            Please wait while we process your request
            <CircularProgress size={16} sx={{ ml: 1, verticalAlign: 'middle' }} />
          </MuiTypography>
        </Box>
      </Stack>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * Full showcase
 */
export const FullShowcase: Story = {
  render: () => (
    <Box sx={{ p: 4 }}>
      <Stack spacing={6}>
        <Box>
          <MuiTypography variant="h4" gutterBottom>
            Circular Progress Variants
          </MuiTypography>

          <Stack spacing={4} sx={{ mt: 3 }}>
            <Box>
              <MuiTypography variant="h6" sx={{ mb: 2 }}>
                Indeterminate (Loading)
              </MuiTypography>
              <Stack direction="row" spacing={3}>
                <CircularProgress size={16} color="primary" />
                <CircularProgress size={32} color="primary" />
                <CircularProgress size={32} color="secondary" />
                <CircularProgress size={32} color="inherit" />
              </Stack>
            </Box>

            <Box>
              <MuiTypography variant="h6" sx={{ mb: 2 }}>
                Determinate (With Progress Value)
              </MuiTypography>
              <Stack direction="row" spacing={3}>
                <CircularProgress variant="determinate" value={25} size={32} />
                <CircularProgress variant="determinate" value={50} size={32} />
                <CircularProgress variant="determinate" value={75} size={32} />
                <CircularProgress variant="determinate" value={100} size={32} />
              </Stack>
            </Box>

            <Box>
              <MuiTypography variant="h6" sx={{ mb: 2 }}>
                With Labels
              </MuiTypography>
              <Stack direction="row" spacing={3}>
                <CircularProgress variant="determinate" value={25} showLabel size={32} />
                <CircularProgress
                  variant="determinate"
                  value={50}
                  showLabel
                  size={32}
                  color="secondary"
                />
                <CircularProgress variant="determinate" value={75} showLabel size={32} />
                <CircularProgress
                  variant="determinate"
                  value={99}
                  showLabel
                  size={32}
                  color="secondary"
                />
              </Stack>
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
