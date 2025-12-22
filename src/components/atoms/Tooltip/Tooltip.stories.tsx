/**
 * Tooltip component stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack, Typography as MuiTypography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Tooltip } from './Tooltip';
import { Button } from '../Button';
import { IconButton } from '../IconButton';

const meta: Meta<typeof Tooltip> = {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Tooltip content',
    },
    placement: {
      control: 'select',
      options: [
        'top-start',
        'top',
        'top-end',
        'right-start',
        'right',
        'right-end',
        'bottom-start',
        'bottom',
        'bottom-end',
        'left-start',
        'left',
        'left-end',
      ],
      description: 'Tooltip placement relative to the child element',
    },
    arrow: {
      control: 'boolean',
      description: 'If true, adds an arrow to the tooltip',
    },
    enterDelay: {
      control: 'number',
      description: 'The number of milliseconds to wait before showing the tooltip',
    },
    leaveDelay: {
      control: 'number',
      description: 'The number of milliseconds to wait before hiding the tooltip',
    },
    disableHoverListener: {
      control: 'boolean',
      description: 'If true, do not respond to hover events',
    },
    disableFocusListener: {
      control: 'boolean',
      description: 'If true, do not respond to focus events',
    },
    disableTouchListener: {
      control: 'boolean',
      description: 'If true, do not respond to touch events',
    },
    open: {
      control: 'boolean',
      description: 'If true, the tooltip is shown (controlled mode)',
    },
  },
  args: {
    title: 'My Tooltip',
    arrow: true,
    placement: 'bottom',
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

/**
 * Default tooltip with arrow
 */
export const Default: Story = {
  args: {
    title: 'My Tooltip',
  },
  render: (args) => (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
      <Tooltip {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    </Box>
  ),
};

/**
 * Tooltip without arrow
 */
export const WithoutArrow: Story = {
  args: {
    title: 'My Tooltip',
    arrow: false,
  },
  render: (args) => (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
      <Tooltip {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    </Box>
  ),
};

// Placement Stories
/**
 * Tooltip positioned at the top
 */
export const PlacementTop: Story = {
  args: {
    title: 'My Tooltip',
    placement: 'top',
  },
  render: (args) => (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 8 }}>
      <Tooltip {...args}>
        <Button>Top</Button>
      </Tooltip>
    </Box>
  ),
};

/**
 * Tooltip positioned at the bottom
 */
export const PlacementBottom: Story = {
  args: {
    title: 'My Tooltip',
    placement: 'bottom',
  },
  render: (args) => (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 8 }}>
      <Tooltip {...args}>
        <Button>Bottom</Button>
      </Tooltip>
    </Box>
  ),
};

/**
 * Tooltip positioned on the left
 */
export const PlacementLeft: Story = {
  args: {
    title: 'My Tooltip',
    placement: 'left',
  },
  render: (args) => (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 8 }}>
      <Tooltip {...args}>
        <Button>Left</Button>
      </Tooltip>
    </Box>
  ),
};

/**
 * Tooltip positioned on the right
 */
export const PlacementRight: Story = {
  args: {
    title: 'My Tooltip',
    placement: 'right',
  },
  render: (args) => (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 8 }}>
      <Tooltip {...args}>
        <Button>Right</Button>
      </Tooltip>
    </Box>
  ),
};

/**
 * All placement options
 */
export const AllPlacements: Story = {
  render: () => (
    <Box sx={{ p: 8 }}>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Top Placements
          </MuiTypography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Tooltip title="Top Start" placement="top-start">
              <Button>Top Start</Button>
            </Tooltip>
            <Tooltip title="Top" placement="top">
              <Button>Top</Button>
            </Tooltip>
            <Tooltip title="Top End" placement="top-end">
              <Button>Top End</Button>
            </Tooltip>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Bottom Placements
          </MuiTypography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Tooltip title="Bottom Start" placement="bottom-start">
              <Button>Bottom Start</Button>
            </Tooltip>
            <Tooltip title="Bottom" placement="bottom">
              <Button>Bottom</Button>
            </Tooltip>
            <Tooltip title="Bottom End" placement="bottom-end">
              <Button>Bottom End</Button>
            </Tooltip>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Left Placements
          </MuiTypography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Tooltip title="Left Start" placement="left-start">
              <Button>Left Start</Button>
            </Tooltip>
            <Tooltip title="Left" placement="left">
              <Button>Left</Button>
            </Tooltip>
            <Tooltip title="Left End" placement="left-end">
              <Button>Left End</Button>
            </Tooltip>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Right Placements
          </MuiTypography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Tooltip title="Right Start" placement="right-start">
              <Button>Right Start</Button>
            </Tooltip>
            <Tooltip title="Right" placement="right">
              <Button>Right</Button>
            </Tooltip>
            <Tooltip title="Right End" placement="right-end">
              <Button>Right End</Button>
            </Tooltip>
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
 * Tooltip with icon button
 */
export const WithIconButton: Story = {
  render: () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
      <Stack direction="row" spacing={2}>
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add">
          <IconButton aria-label="add">
            <AddIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    </Box>
  ),
};

/**
 * Tooltip with custom delay
 */
export const WithDelay: Story = {
  render: () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
      <Stack direction="row" spacing={2}>
        <Tooltip title="Default delay">
          <Button>Default</Button>
        </Tooltip>
        <Tooltip title="500ms enter delay" enterDelay={500}>
          <Button>Enter Delay 500ms</Button>
        </Tooltip>
        <Tooltip title="500ms leave delay" leaveDelay={500}>
          <Button>Leave Delay 500ms</Button>
        </Tooltip>
      </Stack>
    </Box>
  ),
};

/**
 * Tooltip with complex content
 */
export const ComplexContent: Story = {
  render: () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
      <Tooltip
        title={
          <Box>
            <MuiTypography variant="subtitle2" sx={{ color: 'inherit' }}>
              Complex Tooltip
            </MuiTypography>
            <MuiTypography variant="body2" sx={{ color: 'inherit', mt: 0.5 }}>
              This tooltip contains multiple lines of text and can include rich content.
            </MuiTypography>
          </Box>
        }
      >
        <Button>Hover for complex tooltip</Button>
      </Tooltip>
    </Box>
  ),
};

/**
 * Controlled tooltip (always open)
 */
export const Controlled: Story = {
  render: () => (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
      <Tooltip title="This tooltip is always visible" open={true}>
        <Button>Always showing tooltip</Button>
      </Tooltip>
    </Box>
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
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Action Buttons with Tooltips
          </MuiTypography>
          <Stack direction="row" spacing={1}>
            <Tooltip title="Save changes">
              <IconButton aria-label="save">
                <AddIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete item">
              <IconButton aria-label="delete" color="error">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Help Text
          </MuiTypography>
          <Tooltip title="Click to learn more about this feature">
            <Button variant="outlined">What's this?</Button>
          </Tooltip>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Disabled Button with Tooltip
          </MuiTypography>
          <Tooltip title="This feature is coming soon">
            {/* Wrap disabled button in span to make tooltip work */}
            <span>
              <Button disabled>Coming Soon</Button>
            </span>
          </Tooltip>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Long Text Truncation
          </MuiTypography>
          <Tooltip title="This is a very long text that would be truncated in the UI but fully visible in the tooltip">
            <MuiTypography
              sx={{
                maxWidth: 200,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              This is a very long text that would be truncated...
            </MuiTypography>
          </Tooltip>
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
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="h4" gutterBottom>
            Tooltip Placements
          </MuiTypography>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4, mt: 4 }}>
            <Box textAlign="center">
              <Tooltip title="Top" placement="top">
                <Button>Top</Button>
              </Tooltip>
            </Box>
            <Box textAlign="center">
              <Tooltip title="Bottom" placement="bottom">
                <Button>Bottom</Button>
              </Tooltip>
            </Box>
            <Box textAlign="center">
              <Tooltip title="Left" placement="left">
                <Button>Left</Button>
              </Tooltip>
            </Box>
            <Box textAlign="center">
              <Tooltip title="Right" placement="right">
                <Button>Right</Button>
              </Tooltip>
            </Box>
            <Box textAlign="center">
              <Tooltip title="No Arrow" arrow={false}>
                <Button>No Arrow</Button>
              </Tooltip>
            </Box>
          </Box>
        </Box>

        <Box>
          <MuiTypography variant="h4" gutterBottom>
            With Icon Buttons
          </MuiTypography>
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <Tooltip title="Add item">
              <IconButton aria-label="add">
                <AddIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete item">
              <IconButton aria-label="delete" color="error">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h4" gutterBottom>
            Custom Delays
          </MuiTypography>
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <Tooltip title="Instant">
              <Button>Instant</Button>
            </Tooltip>
            <Tooltip title="Delayed (500ms)" enterDelay={500}>
              <Button>Delayed</Button>
            </Tooltip>
          </Stack>
        </Box>
      </Stack>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
