/**
 * Paper component stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack } from '@mui/material';
import { Paper } from './Paper';
import { Typography } from '../Typography';

const meta: Meta<typeof Paper> = {
  title: 'Atoms/Paper',
  component: Paper,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevation', 'outlined'],
      description: 'The variant to use',
    },
    elevation: {
      control: 'select',
      options: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
      ],
      description: 'Shadow depth (0-24)',
    },
    square: {
      control: 'boolean',
      description: 'If true, rounded corners are disabled',
    },
    children: {
      control: 'text',
      description: 'The content of the component',
    },
  },
  args: {
    variant: 'elevation',
    elevation: 1,
    square: false,
    children: 'Paper Content',
  },
};

export default meta;
type Story = StoryObj<typeof Paper>;

/**
 * Default paper with elevation 1
 */
export const Default: Story = {
  args: {},
  render: (args) => (
    <Paper {...args}>
      <Box sx={{ p: 3, minWidth: 200, minHeight: 100 }}>
        <Typography variant="h6">Paper Component</Typography>
        <Typography variant="body1">This is a paper component with default elevation.</Typography>
      </Box>
    </Paper>
  ),
};

/**
 * Paper variants
 */
export const Variants: Story = {
  render: () => (
    <Stack spacing={3} direction="row" flexWrap="wrap" gap={2}>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Elevation (elevation 1)
        </Typography>
        <Paper variant="elevation" elevation={1} sx={{ p: 3, minWidth: 200, minHeight: 100 }}>
          <Typography variant="body1">Elevation Variant</Typography>
        </Paper>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Outlined
        </Typography>
        <Paper variant="outlined" sx={{ p: 3, minWidth: 200, minHeight: 100 }}>
          <Typography variant="body1">Outlined Variant</Typography>
        </Paper>
      </Box>
    </Stack>
  ),
};

/**
 * Different elevation levels
 */
export const Elevations: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Elevation 0
        </Typography>
        <Paper variant="elevation" elevation={0} sx={{ p: 3, minWidth: 200, minHeight: 100 }}>
          <Typography variant="body1">No shadow</Typography>
        </Paper>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Elevation 1 (default)
        </Typography>
        <Paper variant="elevation" elevation={1} sx={{ p: 3, minWidth: 200, minHeight: 100 }}>
          <Typography variant="body1">Light shadow</Typography>
        </Paper>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Elevation 4
        </Typography>
        <Paper variant="elevation" elevation={4} sx={{ p: 3, minWidth: 200, minHeight: 100 }}>
          <Typography variant="body1">Medium shadow</Typography>
        </Paper>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Elevation 8
        </Typography>
        <Paper variant="elevation" elevation={8} sx={{ p: 3, minWidth: 200, minHeight: 100 }}>
          <Typography variant="body1">Strong shadow</Typography>
        </Paper>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Elevation 16
        </Typography>
        <Paper variant="elevation" elevation={16} sx={{ p: 3, minWidth: 200, minHeight: 100 }}>
          <Typography variant="body1">Very strong shadow</Typography>
        </Paper>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Elevation 24 (maximum)
        </Typography>
        <Paper variant="elevation" elevation={24} sx={{ p: 3, minWidth: 200, minHeight: 100 }}>
          <Typography variant="body1">Maximum shadow</Typography>
        </Paper>
      </Box>
    </Stack>
  ),
};

/**
 * All elevation levels showcase
 */
export const AllElevations: Story = {
  render: () => (
    <Box sx={{ p: 4 }}>
      <Typography variant="h6" sx={{ mb: 3 }}>
        All Elevation Levels (0-24)
      </Typography>
      <Stack spacing={2}>
        {[
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
        ].map((elevation) => (
          <Box key={elevation}>
            <Typography variant="caption" sx={{ mb: 1, display: 'block' }}>
              Elevation {elevation}
            </Typography>
            <Paper
              variant="elevation"
              elevation={
                elevation as
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 9
                  | 10
                  | 11
                  | 12
                  | 13
                  | 14
                  | 15
                  | 16
                  | 17
                  | 18
                  | 19
                  | 20
                  | 21
                  | 22
                  | 23
                  | 24
              }
              sx={{ p: 2, minWidth: 300 }}
            >
              <Typography variant="body2">Paper with elevation {elevation}</Typography>
            </Paper>
          </Box>
        ))}
      </Stack>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * Square corners
 */
export const SquareCorners: Story = {
  render: () => (
    <Stack spacing={3} direction="row" flexWrap="wrap" gap={2}>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Rounded (default)
        </Typography>
        <Paper variant="elevation" elevation={4} sx={{ p: 3, minWidth: 200, minHeight: 100 }}>
          <Typography variant="body1">Rounded corners</Typography>
        </Paper>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Square
        </Typography>
        <Paper
          variant="elevation"
          elevation={4}
          square
          sx={{ p: 3, minWidth: 200, minHeight: 100 }}
        >
          <Typography variant="body1">Square corners</Typography>
        </Paper>
      </Box>
    </Stack>
  ),
};

/**
 * Real-world examples
 */
export const RealWorldExamples: Story = {
  render: () => (
    <Box sx={{ p: 4 }}>
      <Stack spacing={4}>
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Card Layout
          </Typography>
          <Paper variant="elevation" elevation={2} sx={{ p: 3, maxWidth: 400 }}>
            <Typography variant="h5" sx={{ mb: 1 }}>
              Card Title
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Card subtitle
            </Typography>
            <Typography variant="body1">
              This is a card example using the Paper component with elevation 2. It provides a
              subtle shadow effect that lifts the content.
            </Typography>
          </Paper>
        </Box>

        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Form Container
          </Typography>
          <Paper variant="outlined" sx={{ p: 3, maxWidth: 400 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Login Form
            </Typography>
            <Typography variant="body1">
              Forms often use outlined paper for a cleaner, less elevated appearance.
            </Typography>
          </Paper>
        </Box>

        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Dashboard Widget
          </Typography>
          <Paper variant="elevation" elevation={4} sx={{ p: 3, maxWidth: 400 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Statistics
            </Typography>
            <Typography variant="h3" color="primary">
              1,234
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Total users this month
            </Typography>
          </Paper>
        </Box>

        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Sidebar Panel
          </Typography>
          <Paper variant="elevation" elevation={8} square sx={{ p: 3, maxWidth: 300 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Navigation
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body1">Home</Typography>
              <Typography variant="body1">Products</Typography>
              <Typography variant="body1">Settings</Typography>
            </Stack>
          </Paper>
        </Box>

        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Modal Dialog Content
          </Typography>
          <Paper variant="elevation" elevation={24} sx={{ p: 3, maxWidth: 400 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Confirm Action
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Are you sure you want to proceed with this action?
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Maximum elevation (24) is typically used for modals and dialogs that appear above all
              other content.
            </Typography>
          </Paper>
        </Box>
      </Stack>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * Comparison showcase
 */
export const Comparison: Story = {
  render: () => (
    <Box sx={{ p: 4 }}>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Variant & Elevation Comparison
      </Typography>
      <Stack spacing={4}>
        <Box>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Low Elevation (1-4) - Subtle depth
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            {[1, 2, 3, 4].map((elevation) => (
              <Paper
                key={elevation}
                variant="elevation"
                elevation={elevation as 1 | 2 | 3 | 4}
                sx={{ p: 2, minWidth: 150 }}
              >
                <Typography variant="caption">Elevation {elevation}</Typography>
              </Paper>
            ))}
          </Stack>
        </Box>

        <Box>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Medium Elevation (8-12) - Clear separation
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            {[8, 9, 10, 11, 12].map((elevation) => (
              <Paper
                key={elevation}
                variant="elevation"
                elevation={elevation as 8 | 9 | 10 | 11 | 12}
                sx={{ p: 2, minWidth: 150 }}
              >
                <Typography variant="caption">Elevation {elevation}</Typography>
              </Paper>
            ))}
          </Stack>
        </Box>

        <Box>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            High Elevation (16-24) - Strong prominence
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            {[16, 18, 20, 22, 24].map((elevation) => (
              <Paper
                key={elevation}
                variant="elevation"
                elevation={elevation as 16 | 18 | 20 | 22 | 24}
                sx={{ p: 2, minWidth: 150 }}
              >
                <Typography variant="caption">Elevation {elevation}</Typography>
              </Paper>
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
