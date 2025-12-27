/**
 * Grid component stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';
import { Paper } from '../Paper';
import { Typography } from '../Typography';

const meta: Meta<typeof Grid> = {
  title: 'Atoms/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    container: {
      control: 'boolean',
      description: 'If true, the component will have the flex container behavior',
    },
    spacing: {
      control: 'number',
      description: 'Defines the space between the type item components',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

const Item = ({ children }: { children: React.ReactNode }) => (
  <Paper sx={{ padding: 2, textAlign: 'center', height: '100%' }}>{children}</Paper>
);

/**
 * Basic grid
 */
export const Basic: Story = {
  render: () => (
    <Grid container spacing={2}>
      <Grid xs={12}>
        <Item>xs=12</Item>
      </Grid>
      <Grid xs={6}>
        <Item>xs=6</Item>
      </Grid>
      <Grid xs={6}>
        <Item>xs=6</Item>
      </Grid>
      <Grid xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid xs={4}>
        <Item>xs=4</Item>
      </Grid>
    </Grid>
  ),
};

/**
 * Responsive grid
 */
export const Responsive: Story = {
  render: () => (
    <Grid container spacing={2}>
      <Grid xs={12} sm={6} md={4} lg={3}>
        <Item>Responsive</Item>
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={3}>
        <Item>Grid</Item>
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={3}>
        <Item>Items</Item>
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={3}>
        <Item>Resize</Item>
      </Grid>
    </Grid>
  ),
};

/**
 * Auto width
 */
export const AutoWidth: Story = {
  render: () => (
    <Grid container spacing={3}>
      <Grid xs="auto">
        <Item>Auto</Item>
      </Grid>
      <Grid xs={6}>
        <Item>xs=6</Item>
      </Grid>
      <Grid xs="auto">
        <Item>Auto</Item>
      </Grid>
    </Grid>
  ),
};

/**
 * Different spacing
 */
export const DifferentSpacing: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <Typography variant="h6" gutterBottom>
          Spacing: 1
        </Typography>
        <Grid container spacing={1}>
          <Grid xs={4}>
            <Item>Item 1</Item>
          </Grid>
          <Grid xs={4}>
            <Item>Item 2</Item>
          </Grid>
          <Grid xs={4}>
            <Item>Item 3</Item>
          </Grid>
        </Grid>
      </div>
      <div>
        <Typography variant="h6" gutterBottom>
          Spacing: 2
        </Typography>
        <Grid container spacing={2}>
          <Grid xs={4}>
            <Item>Item 1</Item>
          </Grid>
          <Grid xs={4}>
            <Item>Item 2</Item>
          </Grid>
          <Grid xs={4}>
            <Item>Item 3</Item>
          </Grid>
        </Grid>
      </div>
      <div>
        <Typography variant="h6" gutterBottom>
          Spacing: 4
        </Typography>
        <Grid container spacing={4}>
          <Grid xs={4}>
            <Item>Item 1</Item>
          </Grid>
          <Grid xs={4}>
            <Item>Item 2</Item>
          </Grid>
          <Grid xs={4}>
            <Item>Item 3</Item>
          </Grid>
        </Grid>
      </div>
    </div>
  ),
};

/**
 * Row and column spacing
 */
export const RowColumnSpacing: Story = {
  render: () => (
    <Grid container rowSpacing={1} columnSpacing={2}>
      <Grid xs={6}>
        <Item>Row spacing: 1</Item>
      </Grid>
      <Grid xs={6}>
        <Item>Column spacing: 2</Item>
      </Grid>
      <Grid xs={6}>
        <Item>Item 3</Item>
      </Grid>
      <Grid xs={6}>
        <Item>Item 4</Item>
      </Grid>
    </Grid>
  ),
};

/**
 * Nested grid
 */
export const NestedGrid: Story = {
  render: () => (
    <Grid container spacing={2}>
      <Grid xs={12} md={6}>
        <Item>
          <Grid container spacing={1}>
            <Grid xs={6}>
              <Paper sx={{ padding: 1, backgroundColor: 'primary.light' }}>Nested 1</Paper>
            </Grid>
            <Grid xs={6}>
              <Paper sx={{ padding: 1, backgroundColor: 'primary.light' }}>Nested 2</Paper>
            </Grid>
          </Grid>
        </Item>
      </Grid>
      <Grid xs={12} md={6}>
        <Item>Regular Grid Item</Item>
      </Grid>
    </Grid>
  ),
};

/**
 * Complex layout
 */
export const ComplexLayout: Story = {
  render: () => (
    <Grid container spacing={2}>
      <Grid xs={12}>
        <Item>Header (xs=12)</Item>
      </Grid>
      <Grid xs={12} md={3}>
        <Item>Sidebar (xs=12, md=3)</Item>
      </Grid>
      <Grid xs={12} md={6}>
        <Item>Main Content (xs=12, md=6)</Item>
      </Grid>
      <Grid xs={12} md={3}>
        <Item>Right Sidebar (xs=12, md=3)</Item>
      </Grid>
      <Grid xs={12}>
        <Item>Footer (xs=12)</Item>
      </Grid>
    </Grid>
  ),
};

/**
 * Card grid
 */
export const CardGrid: Story = {
  render: () => (
    <Grid container spacing={3}>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Grid key={item} xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 3 }}>
            <Typography variant="h5" gutterBottom>
              Card {item}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is a card in a responsive grid layout.
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  ),
};

/**
 * Dashboard layout
 */
export const DashboardLayout: Story = {
  render: () => (
    <Grid container spacing={2}>
      <Grid xs={12} md={8}>
        <Paper sx={{ padding: 2, height: 200 }}>
          <Typography variant="h6">Main Chart</Typography>
        </Paper>
      </Grid>
      <Grid xs={12} md={4}>
        <Paper sx={{ padding: 2, height: 200 }}>
          <Typography variant="h6">Stats</Typography>
        </Paper>
      </Grid>
      <Grid xs={12} sm={6} md={3}>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6">Metric 1</Typography>
          <Typography variant="h4">1,234</Typography>
        </Paper>
      </Grid>
      <Grid xs={12} sm={6} md={3}>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6">Metric 2</Typography>
          <Typography variant="h4">5,678</Typography>
        </Paper>
      </Grid>
      <Grid xs={12} sm={6} md={3}>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6">Metric 3</Typography>
          <Typography variant="h4">9,012</Typography>
        </Paper>
      </Grid>
      <Grid xs={12} sm={6} md={3}>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6">Metric 4</Typography>
          <Typography variant="h4">3,456</Typography>
        </Paper>
      </Grid>
    </Grid>
  ),
};

/**
 * Responsive columns
 */
export const ResponsiveColumns: Story = {
  render: () => (
    <Grid container spacing={2}>
      <Grid xs={12}>
        <Typography variant="h6" gutterBottom>
          1 column on mobile, 2 on tablet, 4 on desktop
        </Typography>
      </Grid>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <Grid key={item} xs={12} sm={6} lg={3}>
          <Item>Item {item}</Item>
        </Grid>
      ))}
    </Grid>
  ),
};
