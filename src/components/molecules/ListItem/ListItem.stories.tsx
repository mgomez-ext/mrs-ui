/**
 * ListItem component stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Box, Typography, ListItemText, ListItemIcon, Divider as MuiDivider } from '@mui/material';
import { ListItem } from './ListItem';
import { List } from '../List';
import { Icon } from '../../atoms/Icon';
import { IconButton } from '../../atoms/IconButton';
import React from 'react';

const meta: Meta<typeof ListItem> = {
  title: 'Molecules/ListItem',
  component: ListItem,
  tags: ['autodocs'],
  argTypes: {
    button: {
      control: 'boolean',
      description: 'If `true`, the list item is a button (using `ListItemButton`).',
    },
    dense: {
      control: 'boolean',
      description: 'If `true`, compact vertical padding is used.',
    },
    disableGutters: {
      control: 'boolean',
      description: 'If `true`, the left and right padding is removed.',
    },
    divider: {
      control: 'boolean',
      description: 'If `true`, a 1px light border is added to the bottom.',
    },
    disablePadding: {
      control: 'boolean',
      description: 'If `true`, all padding is removed.',
    },
    selected: {
      control: 'boolean',
      description: 'If `true`, the list item is selected (only when button=true).',
    },
    disabled: {
      control: 'boolean',
      description: 'If `true`, the list item is disabled (only when button=true).',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Default: Story = {
  render: () => (
    <Box sx={{ width: 300, bgcolor: 'background.paper' }}>
      <List>
        <ListItem onClick={() => console.log('Clicked')}>
          <ListItemText primary="Default list item (interactive)" />
        </ListItem>
      </List>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Default list item is interactive by default (button=true).',
      },
    },
  },
};

export const WithIcon: Story = {
  render: () => (
    <Box sx={{ width: 300, bgcolor: 'background.paper' }}>
      <List>
        <ListItem onClick={() => console.log('Clicked')}>
          <ListItemIcon>
            <Icon name="InboxRounded" />
          </ListItemIcon>
          <ListItemText primary="List item with icon" />
        </ListItem>
      </List>
    </Box>
  ),
};

export const WithSecondaryText: Story = {
  render: () => (
    <Box sx={{ width: 300, bgcolor: 'background.paper' }}>
      <List>
        <ListItem onClick={() => console.log('Clicked')}>
          <ListItemIcon>
            <Icon name="AddRounded" />
          </ListItemIcon>
          <ListItemText primary="List item" secondary="Secondary text" />
        </ListItem>
      </List>
    </Box>
  ),
};

export const WithSecondaryAction: Story = {
  render: () => (
    <Box sx={{ width: 300, bgcolor: 'background.paper' }}>
      <List>
        <ListItem
          onClick={() => console.log('Clicked')}
          secondaryAction={
            <IconButton edge="end" aria-label="add">
              <Icon name="AddRounded" />
            </IconButton>
          }
        >
          <ListItemIcon>
            <Icon name="AddRounded" />
          </ListItemIcon>
          <ListItemText primary="List item" />
        </ListItem>
      </List>
    </Box>
  ),
};

export const WithDivider: Story = {
  render: () => (
    <Box sx={{ width: 300, bgcolor: 'background.paper' }}>
      <List>
        <ListItem divider>
          <ListItemText primary="Item with divider" />
        </ListItem>
        <ListItem divider>
          <ListItemText primary="Item with divider" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Last item (no divider)" />
        </ListItem>
      </List>
    </Box>
  ),
};

export const Dense: Story = {
  render: () => (
    <Box sx={{ width: 300, bgcolor: 'background.paper' }}>
      <List dense>
        <ListItem dense>
          <ListItemIcon>
            <Icon name="AddRounded" />
          </ListItemIcon>
          <ListItemText primary="Dense item 1" secondary="Secondary" />
        </ListItem>
        <ListItem dense>
          <ListItemIcon>
            <Icon name="AddRounded" />
          </ListItemIcon>
          <ListItemText primary="Dense item 2" secondary="Secondary" />
        </ListItem>
        <ListItem dense>
          <ListItemIcon>
            <Icon name="AddRounded" />
          </ListItemIcon>
          <ListItemText primary="Dense item 3" secondary="Secondary" />
        </ListItem>
      </List>
    </Box>
  ),
};

export const DisableGutters: Story = {
  render: () => (
    <Box
      sx={{ width: 300, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }}
    >
      <List>
        <ListItem disableGutters onClick={() => console.log('Clicked')}>
          <ListItemIcon>
            <Icon name="AddRounded" />
          </ListItemIcon>
          <ListItemText primary="No horizontal padding" />
          <IconButton edge="end">
            <Icon name="AddRounded" />
          </IconButton>
        </ListItem>
        <MuiDivider component="li" />
        <ListItem onClick={() => console.log('Clicked')}>
          <ListItemIcon>
            <Icon name="AddRounded" />
          </ListItemIcon>
          <ListItemText primary="With horizontal padding" />
          <IconButton edge="end">
            <Icon name="AddRounded" />
          </IconButton>
        </ListItem>
      </List>
    </Box>
  ),
};

export const InteractiveWithSelection: Story = {
  render: () => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    return (
      <Box sx={{ width: 300, bgcolor: 'background.paper' }}>
        <List>
          <ListItem onClick={() => setSelectedIndex(0)} selected={selectedIndex === 0}>
            <ListItemIcon>
              <Icon name="InboxRounded" />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem onClick={() => setSelectedIndex(1)} selected={selectedIndex === 1}>
            <ListItemIcon>
              <Icon name="DraftsRounded" />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
          <ListItem onClick={() => setSelectedIndex(2)} selected={selectedIndex === 2}>
            <ListItemIcon>
              <Icon name="SendRounded" />
            </ListItemIcon>
            <ListItemText primary="Sent" />
          </ListItem>
        </List>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Interactive list items with selection state. Note: Selected items show text in SemiBold weight and primary.dark color (Figma spec).',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, p: 2 }}>
      <Box>
        <Typography variant="body2" gutterBottom>
          Enabled (Default)
        </Typography>
        <List sx={{ width: 300, bgcolor: 'background.paper' }}>
          <ListItem onClick={() => console.log('Clicked')}>
            <ListItemIcon>
              <Icon name="AddRounded" />
            </ListItemIcon>
            <ListItemText primary="Enabled state" />
            <IconButton edge="end">
              <Icon name="AddRounded" />
            </IconButton>
          </ListItem>
        </List>
      </Box>

      <Box>
        <Typography variant="body2" gutterBottom>
          Selected (SemiBold, primary.dark)
        </Typography>
        <List sx={{ width: 300, bgcolor: 'background.paper' }}>
          <ListItem selected onClick={() => console.log('Clicked')}>
            <ListItemIcon>
              <Icon name="AddRounded" />
            </ListItemIcon>
            <ListItemText primary="Selected state" />
            <IconButton edge="end">
              <Icon name="AddRounded" />
            </IconButton>
          </ListItem>
        </List>
      </Box>

      <Box>
        <Typography variant="body2" gutterBottom>
          Disabled
        </Typography>
        <List sx={{ width: 300, bgcolor: 'background.paper' }}>
          <ListItem disabled>
            <ListItemIcon>
              <Icon name="AddRounded" />
            </ListItemIcon>
            <ListItemText primary="Disabled state" />
            <IconButton edge="end" disabled>
              <Icon name="AddRounded" />
            </IconButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'All interaction states. Selected state has special styling with SemiBold font weight and primary.dark color as per Figma specifications.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3, p: 2 }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Dense=False, Disabled Gutters=False
        </Typography>
        <List sx={{ width: 300, bgcolor: 'background.paper' }}>
          <ListItem button>
            <ListItemIcon>
              <Icon name="AddRounded" />
            </ListItemIcon>
            <ListItemText primary="Enabled" />
            <IconButton edge="end">
              <Icon name="AddRounded" />
            </IconButton>
          </ListItem>
          <ListItem button selected sx={{ mt: 1 }}>
            <ListItemIcon>
              <Icon name="AddRounded" />
            </ListItemIcon>
            <ListItemText primary="Selected" />
            <IconButton edge="end">
              <Icon name="AddRounded" />
            </IconButton>
          </ListItem>
          <ListItem button disabled sx={{ mt: 1 }}>
            <ListItemIcon>
              <Icon name="AddRounded" />
            </ListItemIcon>
            <ListItemText primary="Disabled" />
            <IconButton edge="end" disabled>
              <Icon name="AddRounded" />
            </IconButton>
          </ListItem>
        </List>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Dense=False, Disabled Gutters=True
        </Typography>
        <List sx={{ width: 300, bgcolor: 'background.paper' }}>
          <ListItem button disableGutters>
            <ListItemIcon>
              <Icon name="AddRounded" />
            </ListItemIcon>
            <ListItemText primary="Enabled" />
            <IconButton edge="end">
              <Icon name="AddRounded" />
            </IconButton>
          </ListItem>
          <ListItem button disableGutters selected sx={{ mt: 1 }}>
            <ListItemIcon>
              <Icon name="AddRounded" />
            </ListItemIcon>
            <ListItemText primary="Selected" />
            <IconButton edge="end">
              <Icon name="AddRounded" />
            </IconButton>
          </ListItem>
          <ListItem button disableGutters disabled sx={{ mt: 1 }}>
            <ListItemIcon>
              <Icon name="AddRounded" />
            </ListItemIcon>
            <ListItemText primary="Disabled" />
            <IconButton edge="end" disabled>
              <Icon name="AddRounded" />
            </IconButton>
          </ListItem>
        </List>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Dense=True, Disabled Gutters=False
        </Typography>
        <List dense sx={{ width: 300, bgcolor: 'background.paper' }}>
          <ListItem dense button>
            <ListItemIcon>
              <Icon name="AddRounded" />
            </ListItemIcon>
            <ListItemText primary="Enabled" secondary="Secondary" />
            <IconButton edge="end">
              <Icon name="AddRounded" />
            </IconButton>
          </ListItem>
          <ListItem dense button selected sx={{ mt: 1 }}>
            <ListItemIcon>
              <Icon name="AddRounded" />
            </ListItemIcon>
            <ListItemText primary="Selected" secondary="Secondary" />
            <IconButton edge="end">
              <Icon name="AddRounded" />
            </IconButton>
          </ListItem>
          <ListItem dense button disabled sx={{ mt: 1 }}>
            <ListItemIcon>
              <Icon name="AddRounded" />
            </ListItemIcon>
            <ListItemText primary="Disabled" secondary="Secondary" />
            <IconButton edge="end" disabled>
              <Icon name="AddRounded" />
            </IconButton>
          </ListItem>
        </List>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Dense=True, Disabled Gutters=True
        </Typography>
        <List dense sx={{ width: 300, bgcolor: 'background.paper' }}>
          <ListItem dense button disableGutters>
            <ListItemIcon>
              <Icon name="AddRounded" />
            </ListItemIcon>
            <ListItemText primary="Enabled" secondary="Secondary" />
            <IconButton edge="end">
              <Icon name="AddRounded" />
            </IconButton>
          </ListItem>
          <ListItem dense button disableGutters selected sx={{ mt: 1 }}>
            <ListItemIcon>
              <Icon name="AddRounded" />
            </ListItemIcon>
            <ListItemText primary="Selected" secondary="Secondary" />
            <IconButton edge="end">
              <Icon name="AddRounded" />
            </IconButton>
          </ListItem>
          <ListItem dense button disableGutters disabled sx={{ mt: 1 }}>
            <ListItemIcon>
              <Icon name="AddRounded" />
            </ListItemIcon>
            <ListItemText primary="Disabled" secondary="Secondary" />
            <IconButton edge="end" disabled>
              <Icon name="AddRounded" />
            </IconButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All combinations of dense and disableGutters props with different states.',
      },
    },
  },
};

export const Playground: Story = {
  args: {
    button: false,
    dense: false,
    disableGutters: false,
    divider: false,
    selected: false,
    disabled: false,
  },
  render: (args) => (
    <Box sx={{ width: 300, bgcolor: 'background.paper' }}>
      <List>
        <ListItem {...args}>
          <ListItemIcon>
            <Icon name="AddRounded" />
          </ListItemIcon>
          <ListItemText primary="List item" secondary="Secondary text" />
          <IconButton edge="end">
            <Icon name="AddRounded" />
          </IconButton>
        </ListItem>
      </List>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to experiment with all ListItem props.',
      },
    },
  },
};
