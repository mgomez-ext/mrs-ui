/**
 * Typography component stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack } from '@mui/material';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'caption',
        'overline',
      ],
      description: 'The variant of the typography',
    },
    gutterBottom: {
      control: 'boolean',
      description: 'If true, adds margin bottom to the component',
    },
    children: {
      control: 'text',
      description: 'The content of the typography',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

/**
 * Default body1 variant
 */
export const Default: Story = {
  args: {
    variant: 'body1',
    children: 'Typography',
  },
};

// Heading Variants
/**
 * H1 Heading
 */
export const H1: Story = {
  args: {
    variant: 'h1',
    children: 'Typography',
  },
};

/**
 * H1 with Gutter Bottom
 */
export const H1GutterBottom: Story = {
  args: {
    variant: 'h1',
    gutterBottom: true,
    children: 'Typography',
  },
};

/**
 * H2 Heading
 */
export const H2: Story = {
  args: {
    variant: 'h2',
    children: 'Typography',
  },
};

/**
 * H2 with Gutter Bottom
 */
export const H2GutterBottom: Story = {
  args: {
    variant: 'h2',
    gutterBottom: true,
    children: 'Typography',
  },
};

/**
 * H3 Heading
 */
export const H3: Story = {
  args: {
    variant: 'h3',
    children: 'Typography',
  },
};

/**
 * H3 with Gutter Bottom
 */
export const H3GutterBottom: Story = {
  args: {
    variant: 'h3',
    gutterBottom: true,
    children: 'Typography',
  },
};

/**
 * H4 Heading
 */
export const H4: Story = {
  args: {
    variant: 'h4',
    children: 'Typography',
  },
};

/**
 * H4 with Gutter Bottom
 */
export const H4GutterBottom: Story = {
  args: {
    variant: 'h4',
    gutterBottom: true,
    children: 'Typography',
  },
};

/**
 * H5 Heading
 */
export const H5: Story = {
  args: {
    variant: 'h5',
    children: 'Typography',
  },
};

/**
 * H5 with Gutter Bottom
 */
export const H5GutterBottom: Story = {
  args: {
    variant: 'h5',
    gutterBottom: true,
    children: 'Typography',
  },
};

/**
 * H6 Heading
 */
export const H6: Story = {
  args: {
    variant: 'h6',
    children: 'Typography',
  },
};

/**
 * H6 with Gutter Bottom
 */
export const H6GutterBottom: Story = {
  args: {
    variant: 'h6',
    gutterBottom: true,
    children: 'Typography',
  },
};

// Body Variants
/**
 * Body 1 (default)
 */
export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'Typography',
  },
};

/**
 * Body 1 with Gutter Bottom
 */
export const Body1GutterBottom: Story = {
  args: {
    variant: 'body1',
    gutterBottom: true,
    children: 'Typography',
  },
};

/**
 * Body 2
 */
export const Body2: Story = {
  args: {
    variant: 'body2',
    children: 'Typography',
  },
};

/**
 * Body 2 with Gutter Bottom
 */
export const Body2GutterBottom: Story = {
  args: {
    variant: 'body2',
    gutterBottom: true,
    children: 'Typography',
  },
};

// Subtitle Variants
/**
 * Subtitle 1
 */
export const Subtitle1: Story = {
  args: {
    variant: 'subtitle1',
    children: 'Typography',
  },
};

/**
 * Subtitle 1 with Gutter Bottom
 */
export const Subtitle1GutterBottom: Story = {
  args: {
    variant: 'subtitle1',
    gutterBottom: true,
    children: 'Typography',
  },
};

/**
 * Subtitle 2
 */
export const Subtitle2: Story = {
  args: {
    variant: 'subtitle2',
    children: 'Typography',
  },
};

/**
 * Subtitle 2 with Gutter Bottom
 */
export const Subtitle2GutterBottom: Story = {
  args: {
    variant: 'subtitle2',
    gutterBottom: true,
    children: 'Typography',
  },
};

// Small Text Variants
/**
 * Caption
 */
export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Typography',
  },
};

/**
 * Caption with Gutter Bottom
 */
export const CaptionGutterBottom: Story = {
  args: {
    variant: 'caption',
    gutterBottom: true,
    children: 'Typography',
  },
};

/**
 * Overline
 */
export const Overline: Story = {
  args: {
    variant: 'overline',
    children: 'Typography',
  },
};

/**
 * Overline with Gutter Bottom
 */
export const OverlineGutterBottom: Story = {
  args: {
    variant: 'overline',
    gutterBottom: true,
    children: 'Typography',
  },
};

/**
 * All variants showcase
 */
export const AllVariants: Story = {
  render: () => (
    <Box sx={{ p: 4, maxWidth: 800 }}>
      <Stack spacing={4}>
        <Box>
          <Typography variant="h1" gutterBottom>
            Typography
          </Typography>
          <Typography variant="h1">Typography</Typography>
        </Box>
        <Box>
          <Typography variant="h2" gutterBottom>
            Typography
          </Typography>
          <Typography variant="h2">Typography</Typography>
        </Box>
        <Box>
          <Typography variant="h3" gutterBottom>
            Typography
          </Typography>
          <Typography variant="h3">Typography</Typography>
        </Box>
        <Box>
          <Typography variant="h4" gutterBottom>
            Typography
          </Typography>
          <Typography variant="h4">Typography</Typography>
        </Box>
        <Box>
          <Typography variant="h5" gutterBottom>
            Typography
          </Typography>
          <Typography variant="h5">Typography</Typography>
        </Box>
        <Box>
          <Typography variant="h6" gutterBottom>
            Typography
          </Typography>
          <Typography variant="h6">Typography</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1" gutterBottom>
            Typography
          </Typography>
          <Typography variant="subtitle1">Typography</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Typography
          </Typography>
          <Typography variant="subtitle2">Typography</Typography>
        </Box>
        <Box>
          <Typography variant="body1" gutterBottom>
            Typography
          </Typography>
          <Typography variant="body1">Typography</Typography>
        </Box>
        <Box>
          <Typography variant="body2" gutterBottom>
            Typography
          </Typography>
          <Typography variant="body2">Typography</Typography>
        </Box>
        <Box>
          <Typography variant="caption" gutterBottom>
            Typography
          </Typography>
          <Typography variant="caption">Typography</Typography>
        </Box>
        <Box>
          <Typography variant="overline" gutterBottom>
            Typography
          </Typography>
          <Typography variant="overline">Typography</Typography>
        </Box>
      </Stack>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * Complete showcase with labels
 */
export const CompleteShowcase: Story = {
  render: () => (
    <Box sx={{ p: 4, maxWidth: 1200 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Typography Component Showcase
      </Typography>

      <Stack spacing={6}>
        {/* Headings */}
        <Box>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Headings
          </Typography>
          <Stack spacing={2}>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                H1 - Gutter Bottom
              </Typography>
              <Typography variant="h1" gutterBottom>
                Typography
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                H1 - No Gutter Bottom
              </Typography>
              <Typography variant="h1">Typography</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                H2 - Gutter Bottom
              </Typography>
              <Typography variant="h2" gutterBottom>
                Typography
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                H2 - No Gutter Bottom
              </Typography>
              <Typography variant="h2">Typography</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                H3 - Gutter Bottom
              </Typography>
              <Typography variant="h3" gutterBottom>
                Typography
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                H3 - No Gutter Bottom
              </Typography>
              <Typography variant="h3">Typography</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                H4 - Gutter Bottom
              </Typography>
              <Typography variant="h4" gutterBottom>
                Typography
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                H4 - No Gutter Bottom
              </Typography>
              <Typography variant="h4">Typography</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                H5 - Gutter Bottom
              </Typography>
              <Typography variant="h5" gutterBottom>
                Typography
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                H5 - No Gutter Bottom
              </Typography>
              <Typography variant="h5">Typography</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                H6 - Gutter Bottom
              </Typography>
              <Typography variant="h6" gutterBottom>
                Typography
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                H6 - No Gutter Bottom
              </Typography>
              <Typography variant="h6">Typography</Typography>
            </Box>
          </Stack>
        </Box>

        {/* Body and Subtitles */}
        <Box>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Body and Subtitles
          </Typography>
          <Stack spacing={2}>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                Subtitle 1 - Gutter Bottom
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Typography
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                Subtitle 1 - No Gutter Bottom
              </Typography>
              <Typography variant="subtitle1">Typography</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                Subtitle 2 - Gutter Bottom
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Typography
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                Subtitle 2 - No Gutter Bottom
              </Typography>
              <Typography variant="subtitle2">Typography</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                Body 1 - Gutter Bottom
              </Typography>
              <Typography variant="body1" gutterBottom>
                Typography
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                Body 1 - No Gutter Bottom
              </Typography>
              <Typography variant="body1">Typography</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                Body 2 - Gutter Bottom
              </Typography>
              <Typography variant="body2" gutterBottom>
                Typography
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                Body 2 - No Gutter Bottom
              </Typography>
              <Typography variant="body2">Typography</Typography>
            </Box>
          </Stack>
        </Box>

        {/* Small Text */}
        <Box>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Small Text
          </Typography>
          <Stack spacing={2}>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                Caption - Gutter Bottom
              </Typography>
              <Typography variant="caption" gutterBottom>
                Typography
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                Caption - No Gutter Bottom
              </Typography>
              <Typography variant="caption">Typography</Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                Overline - Gutter Bottom
              </Typography>
              <Typography variant="overline" gutterBottom>
                Typography
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                Overline - No Gutter Bottom
              </Typography>
              <Typography variant="overline">Typography</Typography>
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
