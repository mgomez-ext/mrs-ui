/**
 * Container component stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';
import { Typography } from '../Typography';
import { Paper } from '../Paper';
import { Box } from '../Box';

const meta: Meta<typeof Container> = {
  title: 'Atoms/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', false],
      description: 'Determine the max-width of the container',
    },
    disableGutters: {
      control: 'boolean',
      description: 'If true, the left and right padding is removed',
    },
    fixed: {
      control: 'boolean',
      description: 'Set the max-width to match the min-width of the current breakpoint',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

/**
 * Basic container
 */
export const Basic: Story = {
  render: () => (
    <Container>
      <Paper sx={{ padding: 3 }}>
        <Typography>This is a Container with default maxWidth="lg"</Typography>
      </Paper>
    </Container>
  ),
};

/**
 * Max width variants
 */
export const MaxWidthVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Container maxWidth="xs">
        <Paper sx={{ padding: 2, backgroundColor: 'primary.light' }}>
          <Typography>maxWidth="xs" (444px)</Typography>
        </Paper>
      </Container>
      <Container maxWidth="sm">
        <Paper sx={{ padding: 2, backgroundColor: 'secondary.light' }}>
          <Typography>maxWidth="sm" (600px)</Typography>
        </Paper>
      </Container>
      <Container maxWidth="md">
        <Paper sx={{ padding: 2, backgroundColor: 'info.light' }}>
          <Typography>maxWidth="md" (900px)</Typography>
        </Paper>
      </Container>
      <Container maxWidth="lg">
        <Paper sx={{ padding: 2, backgroundColor: 'success.light' }}>
          <Typography>maxWidth="lg" (1200px)</Typography>
        </Paper>
      </Container>
      <Container maxWidth="xl">
        <Paper sx={{ padding: 2, backgroundColor: 'warning.light' }}>
          <Typography>maxWidth="xl" (1536px)</Typography>
        </Paper>
      </Container>
    </div>
  ),
};

/**
 * Fluid container (no maxWidth)
 */
export const Fluid: Story = {
  render: () => (
    <Container maxWidth={false}>
      <Paper sx={{ padding: 3, backgroundColor: 'error.light' }}>
        <Typography>Fluid container (maxWidth=false) - takes full width</Typography>
      </Paper>
    </Container>
  ),
};

/**
 * Without gutters
 */
export const DisableGutters: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Container>
        <Paper sx={{ padding: 2 }}>
          <Typography>With gutters (default)</Typography>
        </Paper>
      </Container>
      <Container disableGutters>
        <Paper sx={{ padding: 2, backgroundColor: 'primary.light' }}>
          <Typography>Without gutters - content touches edges</Typography>
        </Paper>
      </Container>
    </div>
  ),
};

/**
 * Fixed container
 */
export const Fixed: Story = {
  render: () => (
    <Container fixed>
      <Paper sx={{ padding: 3 }}>
        <Typography>
          Fixed container - max-width matches min-width of current breakpoint
        </Typography>
      </Paper>
    </Container>
  ),
};

/**
 * Page layout example
 */
export const PageLayout: Story = {
  render: () => (
    <Container maxWidth="lg">
      <Box sx={{ paddingY: 4 }}>
        <Typography variant="h3" gutterBottom>
          Page Title
        </Typography>
        <Typography variant="body1" paragraph>
          This is a typical page layout using Container component. The content is centered
          and has a maximum width of "lg" (1200px).
        </Typography>
        <Paper sx={{ padding: 3, marginTop: 3 }}>
          <Typography variant="h5" gutterBottom>
            Content Section
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Container provides consistent horizontal padding and centers content on larger
            screens.
          </Typography>
        </Paper>
      </Box>
    </Container>
  ),
};

/**
 * Multiple containers
 */
export const MultipleContainers: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <Box sx={{ backgroundColor: 'primary.main', paddingY: 4 }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ color: 'white' }}>
            Hero Section (md)
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Typography variant="h5" gutterBottom>
          Main Content (lg)
        </Typography>
        <Typography>Different sections can use different container widths.</Typography>
      </Container>
      <Box sx={{ backgroundColor: '#f5f5f5', paddingY: 4 }}>
        <Container maxWidth="sm">
          <Typography variant="h6" align="center">
            Narrow Section (sm)
          </Typography>
        </Container>
      </Box>
    </div>
  ),
};

/**
 * Blog layout
 */
export const BlogLayout: Story = {
  render: () => (
    <Container maxWidth="md">
      <Box sx={{ paddingY: 4 }}>
        <Typography variant="h3" gutterBottom>
          Blog Post Title
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Published on December 27, 2024
        </Typography>
        <Box sx={{ marginY: 3 }}>
          <Typography variant="body1" paragraph>
            This is a blog post layout using Container with maxWidth="md" which provides
            optimal reading width for text content.
          </Typography>
          <Typography variant="body1" paragraph>
            The 900px max-width ensures text doesn't stretch too wide on large screens,
            maintaining comfortable reading line lengths.
          </Typography>
        </Box>
        <Paper sx={{ padding: 3, backgroundColor: '#f5f5f5' }}>
          <Typography variant="h6" gutterBottom>
            Highlighted Section
          </Typography>
          <Typography variant="body2">
            Important information or quotes can be highlighted in a Paper component within
            the Container.
          </Typography>
        </Paper>
      </Box>
    </Container>
  ),
};

/**
 * Form layout
 */
export const FormLayout: Story = {
  render: () => (
    <Container maxWidth="sm">
      <Paper sx={{ padding: 4, marginTop: 4 }}>
        <Typography variant="h5" gutterBottom>
          Sign In
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Forms work well in narrow containers (sm: 600px)
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Paper sx={{ padding: 2, backgroundColor: '#f5f5f5' }}>Email field</Paper>
          <Paper sx={{ padding: 2, backgroundColor: '#f5f5f5' }}>Password field</Paper>
          <Paper sx={{ padding: 2, backgroundColor: 'primary.main', color: 'white' }}>
            Sign In Button
          </Paper>
        </Box>
      </Paper>
    </Container>
  ),
};
