/**
 * Icon component stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack, Typography as MuiTypography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'inherit'],
      description: 'Size of the icon',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

// SVG Icon Stories
/**
 * Default SVG icon (Medium size)
 */
export const Default: Story = {
  args: {
    icon: AddIcon,
    size: 'medium',
  },
};

/**
 * Small SVG icon
 */
export const SmallSvg: Story = {
  args: {
    icon: AddIcon,
    size: 'small',
  },
};

/**
 * Medium SVG icon
 */
export const MediumSvg: Story = {
  args: {
    icon: AddIcon,
    size: 'medium',
  },
};

/**
 * Large SVG icon
 */
export const LargeSvg: Story = {
  args: {
    icon: AddIcon,
    size: 'large',
  },
};

/**
 * Inherit size SVG icon
 */
export const InheritSvg: Story = {
  args: {
    icon: AddIcon,
    size: 'inherit',
  },
  render: (args) => (
    <MuiTypography variant="h3">
      Text with icon <Icon {...args} />
    </MuiTypography>
  ),
};

// Font Icon Stories
/**
 * Small Font icon
 */
export const SmallFont: Story = {
  args: {
    type: 'font',
    iconName: 'add',
    size: 'small',
  } as any,
};

/**
 * Medium Font icon
 */
export const MediumFont: Story = {
  args: {
    type: 'font',
    iconName: 'add',
    size: 'medium',
  } as any,
};

/**
 * Large Font icon
 */
export const LargeFont: Story = {
  args: {
    type: 'font',
    iconName: 'add',
    size: 'large',
  } as any,
};

/**
 * Inherit size Font icon
 */
export const InheritFont: Story = {
  args: {
    type: 'font',
    iconName: 'add',
    size: 'inherit',
  } as any,
  render: (args) => (
    <MuiTypography variant="h3">
      Text with icon <Icon {...args} />
    </MuiTypography>
  ),
};

// Color Variations
/**
 * Primary color icon
 */
export const PrimaryColor: Story = {
  args: {
    icon: FavoriteIcon,
    size: 'medium',
    sx: { color: 'primary.main' },
  },
};

/**
 * Secondary color icon
 */
export const SecondaryColor: Story = {
  args: {
    icon: FavoriteIcon,
    size: 'medium',
    sx: { color: 'secondary.main' },
  },
};

/**
 * Error color icon
 */
export const ErrorColor: Story = {
  args: {
    icon: DeleteIcon,
    size: 'medium',
    sx: { color: 'error.main' },
  },
};

/**
 * Success color icon
 */
export const SuccessColor: Story = {
  args: {
    icon: FavoriteIcon,
    size: 'medium',
    sx: { color: 'success.main' },
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
            SVG Icons - All Sizes
          </MuiTypography>
          <Stack direction="row" spacing={4} alignItems="center">
            <Box textAlign="center">
              <Icon icon={AddIcon} size="small" />
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Small
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Icon icon={AddIcon} size="medium" />
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Medium
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Icon icon={AddIcon} size="large" />
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Large
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <MuiTypography variant="h4">
                <Icon icon={AddIcon} size="inherit" />
              </MuiTypography>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Inherit
              </MuiTypography>
            </Box>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Font Icons - All Sizes
          </MuiTypography>
          <Stack direction="row" spacing={4} alignItems="center">
            <Box textAlign="center">
              <Icon type="font" iconName="add" size="small" />
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Small
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Icon type="font" iconName="add" size="medium" />
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Medium
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Icon type="font" iconName="add" size="large" />
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Large
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <MuiTypography variant="h4">
                <Icon type="font" iconName="add" size="inherit" />
              </MuiTypography>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Inherit
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
 * Icon gallery showcase
 */
export const IconGallery: Story = {
  render: () => (
    <Box sx={{ p: 4 }}>
      <MuiTypography variant="h5" sx={{ mb: 3 }}>
        Common Icons
      </MuiTypography>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="subtitle2" sx={{ mb: 2 }}>
            Action Icons
          </MuiTypography>
          <Stack direction="row" spacing={3} alignItems="center">
            <Box textAlign="center">
              <Icon icon={AddIcon} size="medium" />
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Add
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Icon icon={DeleteIcon} size="medium" sx={{ color: 'error.main' }} />
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Delete
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Icon icon={SearchIcon} size="medium" />
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Search
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Icon icon={SettingsIcon} size="medium" />
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Settings
              </MuiTypography>
            </Box>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="subtitle2" sx={{ mb: 2 }}>
            Navigation Icons
          </MuiTypography>
          <Stack direction="row" spacing={3} alignItems="center">
            <Box textAlign="center">
              <Icon icon={HomeIcon} size="medium" />
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Home
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Icon icon={FavoriteIcon} size="medium" sx={{ color: 'error.main' }} />
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Favorite
              </MuiTypography>
            </Box>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="subtitle2" sx={{ mb: 2 }}>
            With Text (Inherit Size)
          </MuiTypography>
          <Stack spacing={2}>
            <MuiTypography variant="h4">
              <Icon icon={HomeIcon} size="inherit" /> Home Page
            </MuiTypography>
            <MuiTypography variant="body1">
              <Icon icon={FavoriteIcon} size="inherit" sx={{ color: 'error.main' }} /> This is your
              favorite
            </MuiTypography>
            <MuiTypography variant="caption">
              <Icon icon={SettingsIcon} size="inherit" /> Settings
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
