/**
 * Box component stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';
import { Typography } from '../Typography';

const meta: Meta<typeof Box> = {
  title: 'Atoms/Box',
  component: Box,
  tags: ['autodocs'],
  argTypes: {
    component: {
      control: 'text',
      description: 'The component used for the root node',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

/**
 * Basic box
 */
export const Basic: Story = {
  render: () => (
    <Box sx={{ padding: 2, backgroundColor: 'primary.main', color: 'white' }}>
      This is a Box
    </Box>
  ),
};

/**
 * With padding and margin
 */
export const WithSpacing: Story = {
  render: () => (
    <Box sx={{ padding: 3, margin: 2, backgroundColor: 'secondary.main', color: 'white' }}>
      Box with padding and margin
    </Box>
  ),
};

/**
 * With border
 */
export const WithBorder: Story = {
  render: () => (
    <Box sx={{ padding: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
      Box with border
    </Box>
  ),
};

/**
 * Responsive width
 */
export const ResponsiveWidth: Story = {
  render: () => (
    <Box
      sx={{
        width: { xs: '100%', sm: '75%', md: '50%', lg: '25%' },
        padding: 2,
        backgroundColor: 'info.main',
        color: 'white',
      }}
    >
      Responsive width box
    </Box>
  ),
};

/**
 * Flexbox container
 */
export const FlexboxContainer: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 2, padding: 2, backgroundColor: '#f5f5f5' }}>
      <Box sx={{ padding: 2, backgroundColor: 'primary.main', color: 'white' }}>Item 1</Box>
      <Box sx={{ padding: 2, backgroundColor: 'secondary.main', color: 'white' }}>Item 2</Box>
      <Box sx={{ padding: 2, backgroundColor: 'error.main', color: 'white' }}>Item 3</Box>
    </Box>
  ),
};

/**
 * Grid container
 */
export const GridContainer: Story = {
  render: () => (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, padding: 2 }}>
      <Box sx={{ padding: 2, backgroundColor: 'primary.main', color: 'white' }}>1</Box>
      <Box sx={{ padding: 2, backgroundColor: 'secondary.main', color: 'white' }}>2</Box>
      <Box sx={{ padding: 2, backgroundColor: 'error.main', color: 'white' }}>3</Box>
      <Box sx={{ padding: 2, backgroundColor: 'warning.main', color: 'white' }}>4</Box>
      <Box sx={{ padding: 2, backgroundColor: 'info.main', color: 'white' }}>5</Box>
      <Box sx={{ padding: 2, backgroundColor: 'success.main', color: 'white' }}>6</Box>
    </Box>
  ),
};

/**
 * As different HTML elements
 */
export const AsComponents: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Box component="section" sx={{ padding: 2, backgroundColor: '#f5f5f5' }}>
        <Typography>Box as section element</Typography>
      </Box>
      <Box component="article" sx={{ padding: 2, backgroundColor: '#e3f2fd' }}>
        <Typography>Box as article element</Typography>
      </Box>
      <Box component="aside" sx={{ padding: 2, backgroundColor: '#fff3e0' }}>
        <Typography>Box as aside element</Typography>
      </Box>
    </div>
  ),
};

/**
 * Centered content
 */
export const CenteredContent: Story = {
  render: () => (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '200px',
        backgroundColor: 'primary.main',
        color: 'white',
      }}
    >
      Centered Content
    </Box>
  ),
};

/**
 * Shadow variants
 */
export const WithShadow: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', padding: '16px' }}>
      <Box sx={{ padding: 2, boxShadow: 1 }}>Shadow 1</Box>
      <Box sx={{ padding: 2, boxShadow: 2 }}>Shadow 2</Box>
      <Box sx={{ padding: 2, boxShadow: 3 }}>Shadow 3</Box>
      <Box sx={{ padding: 2, boxShadow: 5 }}>Shadow 5</Box>
    </div>
  ),
};

/**
 * Color palette
 */
export const ColorPalette: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Box sx={{ padding: 2, backgroundColor: 'primary.main', color: 'white' }}>Primary</Box>
      <Box sx={{ padding: 2, backgroundColor: 'secondary.main', color: 'white' }}>Secondary</Box>
      <Box sx={{ padding: 2, backgroundColor: 'error.main', color: 'white' }}>Error</Box>
      <Box sx={{ padding: 2, backgroundColor: 'warning.main', color: 'white' }}>Warning</Box>
      <Box sx={{ padding: 2, backgroundColor: 'info.main', color: 'white' }}>Info</Box>
      <Box sx={{ padding: 2, backgroundColor: 'success.main', color: 'white' }}>Success</Box>
    </div>
  ),
};

/**
 * Nested boxes
 */
export const NestedBoxes: Story = {
  render: () => (
    <Box sx={{ padding: 3, backgroundColor: 'primary.main' }}>
      <Box sx={{ padding: 2, backgroundColor: 'secondary.main' }}>
        <Box sx={{ padding: 1, backgroundColor: 'white' }}>Nested Box Content</Box>
      </Box>
    </Box>
  ),
};

/**
 * Overflow handling
 */
export const OverflowHandling: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Box
        sx={{
          width: 200,
          height: 100,
          overflow: 'hidden',
          backgroundColor: '#f5f5f5',
          padding: 1,
        }}
      >
        <Typography>This is a very long text that will be clipped because overflow is hidden</Typography>
      </Box>
      <Box
        sx={{
          width: 200,
          height: 100,
          overflow: 'auto',
          backgroundColor: '#f5f5f5',
          padding: 1,
        }}
      >
        <Typography>
          This is a very long text that will show scrollbars because overflow is auto. You can scroll to see all the content.
        </Typography>
      </Box>
    </div>
  ),
};
