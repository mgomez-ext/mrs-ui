/**
 * Skeleton component stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack, Typography as MuiTypography, Card, CardContent, Avatar } from '@mui/material';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'circular', 'rectangular', 'rounded'],
      description: 'The type of content that will be rendered',
    },
    width: {
      control: 'text',
      description: 'Width of the skeleton',
    },
    height: {
      control: 'text',
      description: 'Height of the skeleton',
    },
    animation: {
      control: 'select',
      options: ['pulse', 'wave', false],
      description: 'The animation type',
    },
  },
  args: {
    variant: 'text',
    animation: 'pulse',
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

/**
 * Default text skeleton
 */
export const Default: Story = {
  args: {},
};

/**
 * Text variant (default)
 */
export const Text: Story = {
  args: {
    variant: 'text',
  },
};

/**
 * Circular variant (for avatars)
 */
export const Circular: Story = {
  args: {
    variant: 'circular',
    width: 40,
    height: 40,
  },
};

/**
 * Rectangular variant
 */
export const Rectangular: Story = {
  args: {
    variant: 'rectangular',
    width: 120,
    height: 120,
  },
};

/**
 * Rounded variant
 */
export const Rounded: Story = {
  args: {
    variant: 'rounded',
    width: 120,
    height: 120,
  },
};

/**
 * Wave animation
 */
export const WaveAnimation: Story = {
  args: {
    animation: 'wave',
    width: 200,
  },
};

/**
 * Without animation
 */
export const NoAnimation: Story = {
  args: {
    animation: false,
    width: 200,
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
            Text Variant
          </MuiTypography>
          <Stack spacing={1}>
            <Skeleton variant="text" width={200} />
            <Skeleton variant="text" width={150} />
            <Skeleton variant="text" width={100} />
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Circular Variant (Avatars)
          </MuiTypography>
          <Stack direction="row" spacing={2}>
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="circular" width={56} height={56} />
            <Skeleton variant="circular" width={80} height={80} />
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Rectangular Variant
          </MuiTypography>
          <Stack direction="row" spacing={2}>
            <Skeleton variant="rectangular" width={100} height={100} />
            <Skeleton variant="rectangular" width={150} height={100} />
            <Skeleton variant="rectangular" width={200} height={150} />
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Rounded Variant
          </MuiTypography>
          <Stack direction="row" spacing={2}>
            <Skeleton variant="rounded" width={100} height={100} />
            <Skeleton variant="rounded" width={150} height={100} />
            <Skeleton variant="rounded" width={200} height={150} />
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
 * Different animations
 */
export const Animations: Story = {
  render: () => (
    <Box sx={{ p: 4 }}>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Pulse Animation (Default)
          </MuiTypography>
          <Skeleton animation="pulse" width={200} />
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Wave Animation
          </MuiTypography>
          <Skeleton animation="wave" width={200} />
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            No Animation
          </MuiTypography>
          <Skeleton animation={false} width={200} />
        </Box>
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
            User Profile Loading
          </MuiTypography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Skeleton variant="circular" width={40} height={40} />
            <Stack spacing={1} sx={{ flex: 1 }}>
              <Skeleton variant="text" width="60%" />
              <Skeleton variant="text" width="40%" />
            </Stack>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Article Loading
          </MuiTypography>
          <Box>
            <Skeleton variant="text" width="80%" height={32} sx={{ mb: 1 }} />
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="60%" />
          </Box>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Card Loading
          </MuiTypography>
          <Card sx={{ maxWidth: 345 }}>
            <Skeleton variant="rectangular" width="100%" height={140} />
            <CardContent>
              <Skeleton variant="text" width="60%" height={24} sx={{ mb: 1 }} />
              <Skeleton variant="text" width="100%" />
              <Skeleton variant="text" width="100%" />
              <Skeleton variant="text" width="80%" />
            </CardContent>
          </Card>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            List Loading
          </MuiTypography>
          <Stack spacing={2}>
            {[1, 2, 3].map((item) => (
              <Stack key={item} direction="row" spacing={2} alignItems="center">
                <Skeleton variant="circular" width={40} height={40} />
                <Stack spacing={1} sx={{ flex: 1 }}>
                  <Skeleton variant="text" width="70%" />
                  <Skeleton variant="text" width="50%" />
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Image Gallery Loading
          </MuiTypography>
          <Stack direction="row" spacing={2}>
            <Skeleton variant="rectangular" width={150} height={150} />
            <Skeleton variant="rectangular" width={150} height={150} />
            <Skeleton variant="rectangular" width={150} height={150} />
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Table Row Loading
          </MuiTypography>
          <Stack spacing={1}>
            {[1, 2, 3, 4].map((item) => (
              <Stack key={item} direction="row" spacing={2} alignItems="center">
                <Skeleton variant="text" width={50} />
                <Skeleton variant="text" width={150} sx={{ flex: 1 }} />
                <Skeleton variant="text" width={100} />
                <Skeleton variant="rectangular" width={60} height={32} />
              </Stack>
            ))}
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
            Skeleton Variants
          </MuiTypography>

          <Stack spacing={4} sx={{ mt: 3 }}>
            <Box>
              <MuiTypography variant="h6" sx={{ mb: 2 }}>
                Text
              </MuiTypography>
              <Stack spacing={1}>
                <Skeleton variant="text" width={200} />
                <Skeleton variant="text" width={300} />
                <Skeleton variant="text" width={250} />
              </Stack>
            </Box>

            <Box>
              <MuiTypography variant="h6" sx={{ mb: 2 }}>
                Circular (Avatars)
              </MuiTypography>
              <Stack direction="row" spacing={2}>
                <Skeleton variant="circular" width={32} height={32} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="circular" width={56} height={56} />
                <Skeleton variant="circular" width={80} height={80} />
              </Stack>
            </Box>

            <Box>
              <MuiTypography variant="h6" sx={{ mb: 2 }}>
                Rectangular & Rounded
              </MuiTypography>
              <Stack direction="row" spacing={2}>
                <Skeleton variant="rectangular" width={120} height={120} />
                <Skeleton variant="rounded" width={120} height={120} />
              </Stack>
            </Box>

            <Box>
              <MuiTypography variant="h6" sx={{ mb: 2 }}>
                Animations
              </MuiTypography>
              <Stack spacing={2}>
                <Box>
                  <MuiTypography variant="caption" sx={{ mb: 1, display: 'block' }}>
                    Pulse (default)
                  </MuiTypography>
                  <Skeleton animation="pulse" width={200} />
                </Box>
                <Box>
                  <MuiTypography variant="caption" sx={{ mb: 1, display: 'block' }}>
                    Wave
                  </MuiTypography>
                  <Skeleton animation="wave" width={200} />
                </Box>
                <Box>
                  <MuiTypography variant="caption" sx={{ mb: 1, display: 'block' }}>
                    No animation
                  </MuiTypography>
                  <Skeleton animation={false} width={200} />
                </Box>
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
