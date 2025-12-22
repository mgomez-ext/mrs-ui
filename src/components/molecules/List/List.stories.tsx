/**
 * List component stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Box, Typography, Divider, ListItemText, ListItemIcon, ListSubheader } from '@mui/material';
import { List } from './List';
import { ListItem } from '../ListItem';
import { Icon } from '../../atoms/Icon';
import { IconButton } from '../../atoms/IconButton';
import React from 'react';

const meta: Meta<typeof List> = {
  title: 'Molecules/List',
  component: List,
  tags: ['autodocs'],
  argTypes: {
    dense: {
      control: 'boolean',
      description: 'If `true`, compact vertical padding is used.',
    },
    disablePadding: {
      control: 'boolean',
      description: 'If `true`, vertical padding is removed from the list.',
    },
    sx: {
      control: 'object',
      description:
        'The system prop that allows defining system overrides as well as additional CSS styles.',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  render: () => (
    <Box sx={{ width: 300, bgcolor: 'background.paper' }}>
      <List>
        <ListItem>
          <ListItemText primary="List item 1" />
        </ListItem>
        <ListItem>
          <ListItemText primary="List item 2" />
        </ListItem>
        <ListItem>
          <ListItemText primary="List item 3" />
        </ListItem>
      </List>
    </Box>
  ),
};

export const WithPadding: Story = {
  render: () => (
    <Box sx={{ width: 300, bgcolor: 'background.paper' }}>
      <Typography variant="body2" sx={{ mb: 2 }}>
        With Padding (default)
      </Typography>
      <List sx={{ border: '1px solid', borderColor: 'divider' }}>
        <ListItem>
          <ListItemText primary="Item 1" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Item 2" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Item 3" />
        </ListItem>
      </List>
    </Box>
  ),
};

export const DisablePadding: Story = {
  render: () => (
    <Box sx={{ width: 300, bgcolor: 'background.paper' }}>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Disable Padding
      </Typography>
      <List disablePadding sx={{ border: '1px solid', borderColor: 'divider' }}>
        <ListItem>
          <ListItemText primary="Item 1" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Item 2" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Item 3" />
        </ListItem>
      </List>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'List with vertical padding removed using disablePadding prop.',
      },
    },
  },
};

export const Dense: Story = {
  render: () => (
    <Box sx={{ width: 300, bgcolor: 'background.paper' }}>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Dense List
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText primary="Dense item 1" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Dense item 2" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Dense item 3" />
        </ListItem>
      </List>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'List with compact vertical padding for dense layouts.',
      },
    },
  },
};

export const WithIcons: Story = {
  render: () => (
    <Box sx={{ width: 300, bgcolor: 'background.paper' }}>
      <List>
        <ListItem>
          <ListItemIcon>
            <Icon name="InboxRounded" />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Icon name="DraftsRounded" />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Icon name="SendRounded" />
          </ListItemIcon>
          <ListItemText primary="Sent" />
        </ListItem>
      </List>
    </Box>
  ),
};

export const WithSecondaryActions: Story = {
  render: () => (
    <Box sx={{ width: 300, bgcolor: 'background.paper' }}>
      <List>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="add">
              <Icon name="AddRounded" />
            </IconButton>
          }
        >
          <ListItemIcon>
            <Icon name="InboxRounded" />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="add">
              <Icon name="AddRounded" />
            </IconButton>
          }
        >
          <ListItemIcon>
            <Icon name="DraftsRounded" />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
    </Box>
  ),
};

export const WithSubheader: Story = {
  render: () => (
    <Box sx={{ width: 300, bgcolor: 'background.paper' }}>
      <List
        subheader={
          <ListSubheader component="div" id="list-subheader">
            Settings
          </ListSubheader>
        }
      >
        <ListItem>
          <ListItemIcon>
            <Icon name="WifiRounded" />
          </ListItemIcon>
          <ListItemText primary="Wi-Fi" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Icon name="BluetoothRounded" />
          </ListItemIcon>
          <ListItemText primary="Bluetooth" />
        </ListItem>
      </List>
    </Box>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, p: 2 }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Disable Padding = False, Dense = False
        </Typography>
        <List
          sx={{
            width: 300,
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <ListItem>
            <ListItemIcon>
              <Icon name="AddRounded" />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <Icon name="AddRounded" />
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Icon name="AddRounded" />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <Icon name="AddRounded" />
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Icon name="AddRounded" />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <Icon name="AddRounded" />
            </IconButton>
          </ListItem>
        </List>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Disable Padding = True, Dense = False
        </Typography>
        <List
          disablePadding
          sx={{
            width: 300,
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <ListItem>
            <ListItemIcon>
              <Icon name="AddRounded" />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <Icon name="AddRounded" />
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Icon name="AddRounded" />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <Icon name="AddRounded" />
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Icon name="AddRounded" />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <Icon name="AddRounded" />
            </IconButton>
          </ListItem>
        </List>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Disable Padding = False, Dense = True
        </Typography>
        <List
          dense
          sx={{
            width: 300,
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <ListItem>
            <ListItemIcon>
              <Icon name="AddRounded" />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <Icon name="AddRounded" />
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Icon name="AddRounded" />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <Icon name="AddRounded" />
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Icon name="AddRounded" />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <Icon name="AddRounded" />
            </IconButton>
          </ListItem>
        </List>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Disable Padding = True, Dense = True
        </Typography>
        <List
          dense
          disablePadding
          sx={{
            width: 300,
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <ListItem>
            <ListItemIcon>
              <Icon name="AddRounded" />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <Icon name="AddRounded" />
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Icon name="AddRounded" />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
              <Icon name="AddRounded" />
            </IconButton>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Icon name="AddRounded" />
            </ListItemIcon>
            <ListItemText primary="List item" />
            <IconButton edge="end">
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
        story: 'All combinations of disablePadding and dense props.',
      },
    },
  },
};

export const Playground: Story = {
  args: {
    dense: false,
    disablePadding: false,
  },
  render: (args) => (
    <Box sx={{ width: 300, bgcolor: 'background.paper' }}>
      <List {...args}>
        <ListItem>
          <ListItemText primary="Item 1" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Item 2" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Item 3" />
        </ListItem>
      </List>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to experiment with all List props.',
      },
    },
  },
};
