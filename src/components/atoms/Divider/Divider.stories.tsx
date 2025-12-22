/**
 * Divider component stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import {
  Box,
  Stack,
  Typography as MuiTypography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Atoms/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the divider',
    },
    variant: {
      control: 'select',
      options: ['fullWidth', 'inset', 'middle'],
      description: 'The variant to use',
    },
    light: {
      control: 'boolean',
      description: 'If true, the divider will have a lighter color',
    },
    absolute: {
      control: 'boolean',
      description: 'Absolutely position the divider',
    },
    flexItem: {
      control: 'boolean',
      description: 'If true, a vertical divider will have the correct height',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

/**
 * Default horizontal divider
 */
export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <Box sx={{ width: '100%', maxWidth: 360 }}>
      <MuiTypography variant="body1">Content above</MuiTypography>
      <Divider {...args} />
      <MuiTypography variant="body1">Content below</MuiTypography>
    </Box>
  ),
};

/**
 * Vertical divider
 */
export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    flexItem: true,
  },
  render: (args) => (
    <Stack direction="row" spacing={2} sx={{ height: 100 }}>
      <MuiTypography variant="body1">Left</MuiTypography>
      <Divider {...args} />
      <MuiTypography variant="body1">Right</MuiTypography>
    </Stack>
  ),
};

/**
 * Full width variant (default)
 */
export const FullWidth: Story = {
  args: {
    variant: 'fullWidth',
  },
  render: (args) => (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List>
        <ListItem>
          <ListItemText primary="Item 1" />
        </ListItem>
        <Divider {...args} />
        <ListItem>
          <ListItemText primary="Item 2" />
        </ListItem>
        <Divider {...args} />
        <ListItem>
          <ListItemText primary="Item 3" />
        </ListItem>
      </List>
    </Box>
  ),
};

/**
 * Inset variant
 */
export const Inset: Story = {
  args: {
    variant: 'inset',
  },
  render: (args) => (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List>
        <ListItem>
          <ListItemText primary="Item 1" />
        </ListItem>
        <Divider {...args} />
        <ListItem>
          <ListItemText primary="Item 2" />
        </ListItem>
        <Divider {...args} />
        <ListItem>
          <ListItemText primary="Item 3" />
        </ListItem>
      </List>
    </Box>
  ),
};

/**
 * Middle variant
 */
export const Middle: Story = {
  args: {
    variant: 'middle',
  },
  render: (args) => (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List>
        <ListItem>
          <ListItemText primary="Item 1" />
        </ListItem>
        <Divider {...args} />
        <ListItem>
          <ListItemText primary="Item 2" />
        </ListItem>
        <Divider {...args} />
        <ListItem>
          <ListItemText primary="Item 3" />
        </ListItem>
      </List>
    </Box>
  ),
};

/**
 * Light divider
 */
export const Light: Story = {
  args: {
    light: true,
  },
  render: (args) => (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'grey.900', p: 2 }}>
      <MuiTypography variant="body1" color="white">
        Content above
      </MuiTypography>
      <Divider {...args} />
      <MuiTypography variant="body1" color="white">
        Content below
      </MuiTypography>
    </Box>
  ),
};

/**
 * Divider with text
 */
export const WithText: Story = {
  render: () => (
    <Box sx={{ width: '100%', maxWidth: 360 }}>
      <MuiTypography variant="body1">Content above</MuiTypography>
      <Divider>CENTER</Divider>
      <MuiTypography variant="body1">Content below</MuiTypography>
    </Box>
  ),
};

/**
 * Divider with text aligned left
 */
export const TextAlignLeft: Story = {
  render: () => (
    <Box sx={{ width: '100%', maxWidth: 360 }}>
      <MuiTypography variant="body1">Content above</MuiTypography>
      <Divider textAlign="left">LEFT</Divider>
      <MuiTypography variant="body1">Content below</MuiTypography>
    </Box>
  ),
};

/**
 * Divider with text aligned right
 */
export const TextAlignRight: Story = {
  render: () => (
    <Box sx={{ width: '100%', maxWidth: 360 }}>
      <MuiTypography variant="body1">Content above</MuiTypography>
      <Divider textAlign="right">RIGHT</Divider>
      <MuiTypography variant="body1">Content below</MuiTypography>
    </Box>
  ),
};

/**
 * Vertical divider in flex container
 */
export const VerticalInFlex: Story = {
  render: () => (
    <Box sx={{ display: 'flex', alignItems: 'center', height: 100 }}>
      <MuiTypography variant="body1">Left Content</MuiTypography>
      <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
      <MuiTypography variant="body1">Center Content</MuiTypography>
      <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
      <MuiTypography variant="body1">Right Content</MuiTypography>
    </Box>
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
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Horizontal Dividers
          </MuiTypography>
          <Stack spacing={2}>
            <Box>
              <MuiTypography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                Full Width
              </MuiTypography>
              <Divider variant="fullWidth" />
            </Box>
            <Box>
              <MuiTypography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                Inset
              </MuiTypography>
              <Divider variant="inset" />
            </Box>
            <Box>
              <MuiTypography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                Middle
              </MuiTypography>
              <Divider variant="middle" />
            </Box>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Vertical Dividers
          </MuiTypography>
          <Stack direction="row" spacing={2} sx={{ height: 100, alignItems: 'center' }}>
            <MuiTypography variant="body2">Item 1</MuiTypography>
            <Divider orientation="vertical" flexItem />
            <MuiTypography variant="body2">Item 2</MuiTypography>
            <Divider orientation="vertical" flexItem />
            <MuiTypography variant="body2">Item 3</MuiTypography>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            With Text
          </MuiTypography>
          <Stack spacing={2}>
            <Divider textAlign="left">LEFT</Divider>
            <Divider>CENTER</Divider>
            <Divider textAlign="right">RIGHT</Divider>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Light Variant
          </MuiTypography>
          <Box sx={{ bgcolor: 'grey.900', p: 2 }}>
            <MuiTypography variant="body2" color="white" sx={{ mb: 1 }}>
              Content above
            </MuiTypography>
            <Divider light />
            <MuiTypography variant="body2" color="white" sx={{ mt: 1 }}>
              Content below
            </MuiTypography>
          </Box>
        </Box>
      </Stack>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
