/**
 * LinearProgress component stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack, Typography as MuiTypography } from '@mui/material';
import { LinearProgress } from './LinearProgress';

const meta: Meta<typeof LinearProgress> = {
  title: 'Atoms/LinearProgress',
  component: LinearProgress,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'inherit'],
      description: 'The color of the component',
    },
    variant: {
      control: 'select',
      options: ['determinate', 'indeterminate', 'buffer'],
      description: 'The variant to use',
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'The value of the progress (determinate/buffer)',
    },
    valueBuffer: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'The buffer value (buffer variant only)',
    },
    showLabel: {
      control: 'boolean',
      description: 'If true, shows the progress value as a label',
    },
  },
  args: {
    color: 'primary',
    variant: 'indeterminate',
    showLabel: false,
  },
};

export default meta;
type Story = StoryObj<typeof LinearProgress>;

/**
 * Default indeterminate linear progress
 */
export const Default: Story = {
  args: {},
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
    value: 50,
  },
};

/**
 * Determinate with label
 */
export const DeterminateWithLabel: Story = {
  args: {
    variant: 'determinate',
    value: 50,
    showLabel: true,
  },
};

/**
 * Buffer variant
 */
export const Buffer: Story = {
  args: {
    variant: 'buffer',
    value: 50,
    valueBuffer: 75,
  },
};

/**
 * Buffer with label
 */
export const BufferWithLabel: Story = {
  args: {
    variant: 'buffer',
    value: 50,
    valueBuffer: 75,
    showLabel: true,
  },
};

/**
 * All variants showcase
 */
export const AllVariants: Story = {
  render: () => (
    <Box sx={{ p: 4 }}>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Indeterminate (Loading)
          </MuiTypography>
          <LinearProgress variant="indeterminate" />
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Determinate (With Progress Value)
          </MuiTypography>
          <LinearProgress variant="determinate" value={50} />
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Buffer (With Buffer Value)
          </MuiTypography>
          <LinearProgress variant="buffer" value={50} valueBuffer={75} />
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
          <Stack spacing={2}>
            <LinearProgress color="primary" variant="indeterminate" />
            <LinearProgress color="primary" variant="determinate" value={50} />
            <LinearProgress color="primary" variant="buffer" value={50} valueBuffer={75} />
            <LinearProgress color="primary" variant="determinate" value={50} showLabel />
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Secondary Color
          </MuiTypography>
          <Stack spacing={2}>
            <LinearProgress color="secondary" variant="indeterminate" />
            <LinearProgress color="secondary" variant="determinate" value={50} />
            <LinearProgress color="secondary" variant="buffer" value={50} valueBuffer={75} />
            <LinearProgress color="secondary" variant="determinate" value={50} showLabel />
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Inherit Color
          </MuiTypography>
          <Stack spacing={2}>
            <LinearProgress color="inherit" variant="indeterminate" />
            <LinearProgress color="inherit" variant="determinate" value={50} />
            <LinearProgress color="inherit" variant="buffer" value={50} valueBuffer={75} />
            <LinearProgress color="inherit" variant="determinate" value={50} showLabel />
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
      <Stack spacing={2}>
        <LinearProgress variant="determinate" value={25} showLabel />
        <LinearProgress variant="determinate" value={50} showLabel />
        <LinearProgress variant="determinate" value={75} showLabel />
        <LinearProgress variant="determinate" value={100} showLabel />
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
            Page Loading
          </MuiTypography>
          <LinearProgress variant="indeterminate" />
          <MuiTypography
            variant="caption"
            sx={{ mt: 1, display: 'block', color: 'text.secondary' }}
          >
            Loading page content...
          </MuiTypography>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            File Upload Progress
          </MuiTypography>
          <Stack spacing={1}>
            <MuiTypography variant="body2">document.pdf</MuiTypography>
            <LinearProgress variant="determinate" value={65} showLabel />
            <MuiTypography variant="caption" sx={{ color: 'text.secondary' }}>
              2.1 MB of 3.2 MB uploaded
            </MuiTypography>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Buffer (Streaming Video)
          </MuiTypography>
          <Stack spacing={1}>
            <MuiTypography variant="body2">Video playback</MuiTypography>
            <LinearProgress variant="buffer" value={60} valueBuffer={80} />
            <MuiTypography variant="caption" sx={{ color: 'text.secondary' }}>
              Played: 60% • Buffered: 80%
            </MuiTypography>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Multi-step Process
          </MuiTypography>
          <Stack spacing={1}>
            <MuiTypography variant="body2">Step 2 of 4</MuiTypography>
            <LinearProgress variant="determinate" value={50} showLabel />
            <MuiTypography variant="caption" sx={{ color: 'text.secondary' }}>
              Completing profile setup
            </MuiTypography>
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
 * Full showcase
 */
export const FullShowcase: Story = {
  render: () => (
    <Box sx={{ p: 4 }}>
      <Stack spacing={6}>
        <Box>
          <MuiTypography variant="h4" gutterBottom>
            Linear Progress Variants
          </MuiTypography>

          <Stack spacing={4} sx={{ mt: 3 }}>
            <Box>
              <MuiTypography variant="h6" sx={{ mb: 2 }}>
                Indeterminate (Loading)
              </MuiTypography>
              <Stack spacing={2}>
                <LinearProgress variant="indeterminate" color="primary" />
                <LinearProgress variant="indeterminate" color="secondary" />
                <LinearProgress variant="indeterminate" color="inherit" />
              </Stack>
            </Box>

            <Box>
              <MuiTypography variant="h6" sx={{ mb: 2 }}>
                Determinate (With Progress Value)
              </MuiTypography>
              <Stack spacing={2}>
                <LinearProgress variant="determinate" value={25} />
                <LinearProgress variant="determinate" value={50} />
                <LinearProgress variant="determinate" value={75} />
                <LinearProgress variant="determinate" value={100} />
              </Stack>
            </Box>

            <Box>
              <MuiTypography variant="h6" sx={{ mb: 2 }}>
                Buffer (Streaming/Buffering)
              </MuiTypography>
              <Stack spacing={2}>
                <LinearProgress variant="buffer" value={30} valueBuffer={60} />
                <LinearProgress variant="buffer" value={50} valueBuffer={80} />
                <LinearProgress variant="buffer" value={70} valueBuffer={90} />
              </Stack>
            </Box>

            <Box>
              <MuiTypography variant="h6" sx={{ mb: 2 }}>
                With Labels
              </MuiTypography>
              <Stack spacing={2}>
                <LinearProgress variant="determinate" value={25} showLabel />
                <LinearProgress variant="determinate" value={50} showLabel color="secondary" />
                <LinearProgress variant="determinate" value={75} showLabel />
                <LinearProgress variant="buffer" value={60} valueBuffer={80} showLabel />
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
