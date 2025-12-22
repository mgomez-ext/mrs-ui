/**
 * Avatar component stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack, Typography as MuiTypography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: [18, 24, 32, 40],
      description: 'The size of the avatar in pixels',
    },
    variant: {
      control: 'select',
      options: ['circular', 'rounded', 'square'],
      description: 'The shape variant of the avatar',
    },
    src: {
      control: 'text',
      description: 'The source URL of the avatar image',
    },
    alt: {
      control: 'text',
      description: 'The alt text for the image',
    },
    children: {
      control: 'text',
      description: 'The content of the avatar (text initials or icon)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

/**
 * Default avatar with initials
 */
export const Default: Story = {
  args: {
    children: 'JD',
  },
};

// Size Stories - Text
/**
 * 18px avatar with text
 */
export const Size18Text: Story = {
  args: {
    size: 18,
    children: 'P',
  },
};

/**
 * 24px avatar with text
 */
export const Size24Text: Story = {
  args: {
    size: 24,
    children: 'P',
  },
};

/**
 * 32px avatar with text
 */
export const Size32Text: Story = {
  args: {
    size: 32,
    children: 'P',
  },
};

/**
 * 40px avatar with text (default)
 */
export const Size40Text: Story = {
  args: {
    size: 40,
    children: 'P',
  },
};

// Size Stories - Icon
/**
 * 18px avatar with icon
 */
export const Size18Icon: Story = {
  args: {
    size: 18,
  },
  render: (args) => (
    <Avatar {...args}>
      <FavoriteIcon sx={{ fontSize: 12 }} />
    </Avatar>
  ),
};

/**
 * 24px avatar with icon
 */
export const Size24Icon: Story = {
  args: {
    size: 24,
  },
  render: (args) => (
    <Avatar {...args}>
      <FavoriteIcon sx={{ fontSize: 14 }} />
    </Avatar>
  ),
};

/**
 * 32px avatar with icon
 */
export const Size32Icon: Story = {
  args: {
    size: 32,
  },
  render: (args) => (
    <Avatar {...args}>
      <FavoriteIcon sx={{ fontSize: 18 }} />
    </Avatar>
  ),
};

/**
 * 40px avatar with icon
 */
export const Size40Icon: Story = {
  args: {
    size: 40,
  },
  render: (args) => (
    <Avatar {...args}>
      <FavoriteIcon sx={{ fontSize: 24 }} />
    </Avatar>
  ),
};

// Size Stories - Image
/**
 * 18px avatar with image
 */
export const Size18Image: Story = {
  args: {
    size: 18,
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'Avatar',
  },
};

/**
 * 24px avatar with image
 */
export const Size24Image: Story = {
  args: {
    size: 24,
    src: 'https://i.pravatar.cc/150?img=2',
    alt: 'Avatar',
  },
};

/**
 * 32px avatar with image
 */
export const Size32Image: Story = {
  args: {
    size: 32,
    src: 'https://i.pravatar.cc/150?img=3',
    alt: 'Avatar',
  },
};

/**
 * 40px avatar with image
 */
export const Size40Image: Story = {
  args: {
    size: 40,
    src: 'https://i.pravatar.cc/150?img=4',
    alt: 'Avatar',
  },
};

// Variant Stories
/**
 * Circular variant (default)
 */
export const Circular: Story = {
  args: {
    variant: 'circular',
    children: 'JD',
  },
};

/**
 * Rounded variant
 */
export const Rounded: Story = {
  args: {
    variant: 'rounded',
    children: 'JD',
  },
};

/**
 * Square variant
 */
export const Square: Story = {
  args: {
    variant: 'square',
    children: 'JD',
  },
};

/**
 * All sizes showcase
 */
export const AllSizes: Story = {
  render: () => (
    <Box sx={{ p: 4 }}>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Text Initials
          </MuiTypography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box textAlign="center">
              <Avatar size={18}>P</Avatar>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                18px
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Avatar size={24}>P</Avatar>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                24px
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Avatar size={32}>P</Avatar>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                32px
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Avatar size={40}>P</Avatar>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                40px
              </MuiTypography>
            </Box>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Icons
          </MuiTypography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box textAlign="center">
              <Avatar size={18}>
                <FavoriteIcon sx={{ fontSize: 12 }} />
              </Avatar>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                18px
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Avatar size={24}>
                <FavoriteIcon sx={{ fontSize: 14 }} />
              </Avatar>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                24px
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Avatar size={32}>
                <FavoriteIcon sx={{ fontSize: 18 }} />
              </Avatar>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                32px
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Avatar size={40}>
                <FavoriteIcon sx={{ fontSize: 24 }} />
              </Avatar>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                40px
              </MuiTypography>
            </Box>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Images
          </MuiTypography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box textAlign="center">
              <Avatar size={18} src="https://i.pravatar.cc/150?img=1" alt="Avatar 1" />
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                18px
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Avatar size={24} src="https://i.pravatar.cc/150?img=2" alt="Avatar 2" />
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                24px
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Avatar size={32} src="https://i.pravatar.cc/150?img=3" alt="Avatar 3" />
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                32px
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Avatar size={40} src="https://i.pravatar.cc/150?img=4" alt="Avatar 4" />
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                40px
              </MuiTypography>
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

/**
 * All variants showcase
 */
export const AllVariants: Story = {
  args: {
    src: 'https://lh3.googleusercontent.com/a-/ALV-UjVDc7Lc50nxM18hfbDIH8NYyvt_NJx9MscK4vfpqQNnMovPrbc=s480-p-k-rw-no',
    variant: 'circular',
    size: 40,
    children:
      'https://lh3.googleusercontent.com/a-/ALV-UjVDc7Lc50nxM18hfbDIH8NYyvt_NJx9MscK4vfpqQNnMovPrbc=s480-p-k-rw-no',
  },

  render: () => (
    <Box sx={{ p: 4 }}>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Circular (Default)
          </MuiTypography>
          <Stack direction="row" spacing={2}>
            <Avatar variant="circular">JD</Avatar>
            <Avatar variant="circular">
              <PersonIcon />
            </Avatar>
            <Avatar variant="circular" src="https://i.pravatar.cc/150?img=5" alt="Circular" />
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Rounded
          </MuiTypography>
          <Stack direction="row" spacing={2}>
            <Avatar variant="rounded">JD</Avatar>
            <Avatar variant="rounded">
              <PersonIcon />
            </Avatar>
            <Avatar variant="rounded" src="https://i.pravatar.cc/150?img=6" alt="Rounded" />
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Square
          </MuiTypography>
          <Stack direction="row" spacing={2}>
            <Avatar variant="square">JD</Avatar>
            <Avatar variant="square">
              <PersonIcon />
            </Avatar>
            <Avatar variant="square" src="https://i.pravatar.cc/150?img=7" alt="Square" />
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
  args: {
    size: 40,
  },

  render: () => (
    <Box sx={{ p: 4 }}>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            User List
          </MuiTypography>
          <Stack spacing={2}>
            {[
              { name: 'John Doe', initials: 'JD', img: 'https://i.pravatar.cc/150?img=10' },
              { name: 'Jane Smith', initials: 'JS', img: 'https://i.pravatar.cc/150?img=11' },
              { name: 'Bob Johnson', initials: 'BJ', img: 'https://i.pravatar.cc/150?img=12' },
            ].map((user, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar src={user.img} alt={user.name}>
                  {user.initials}
                </Avatar>
                <MuiTypography>{user.name}</MuiTypography>
              </Box>
            ))}
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Comment Thread
          </MuiTypography>
          <Stack spacing={2}>
            {[
              { initials: 'AB', comment: 'Great work on this!' },
              { initials: 'CD', comment: 'Thanks for the feedback!' },
              { initials: 'EF', comment: 'Looking forward to the next iteration.' },
            ].map((item, index) => (
              <Box key={index} sx={{ display: 'flex', gap: 2 }}>
                <Avatar size={32}>{item.initials}</Avatar>
                <Box sx={{ flex: 1 }}>
                  <MuiTypography variant="body2">{item.comment}</MuiTypography>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Team Members (Small)
          </MuiTypography>
          <Stack direction="row" spacing={1}>
            {['AM', 'BP', 'CQ', 'DR', 'ES'].map((initials, index) => (
              <Avatar key={index} size={24}>
                {initials}
              </Avatar>
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
