/**
 * Stack component stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from './Stack';
import { Paper } from '../Paper';
import { Divider } from '../Divider';
import { Button } from '../Button';
import { Chip } from '../Chip';

const meta: Meta<typeof Stack> = {
  title: 'Atoms/Stack',
  component: Stack,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
      description: 'The direction of the stack',
    },
    spacing: {
      control: 'number',
      description: 'The space between children',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

const Item = ({ children }: { children: React.ReactNode }) => (
  <Paper sx={{ padding: 2, textAlign: 'center' }}>{children}</Paper>
);

/**
 * Basic column stack
 */
export const Basic: Story = {
  render: () => (
    <Stack spacing={2}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
  ),
};

/**
 * Row direction
 */
export const Row: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
  ),
};

/**
 * Column direction (default)
 */
export const Column: Story = {
  render: () => (
    <Stack direction="column" spacing={2}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
  ),
};

/**
 * Row reverse
 */
export const RowReverse: Story = {
  render: () => (
    <Stack direction="row-reverse" spacing={2}>
      <Item>Item 1 (appears last)</Item>
      <Item>Item 2</Item>
      <Item>Item 3 (appears first)</Item>
    </Stack>
  ),
};

/**
 * Column reverse
 */
export const ColumnReverse: Story = {
  render: () => (
    <Stack direction="column-reverse" spacing={2}>
      <Item>Item 1 (appears last)</Item>
      <Item>Item 2</Item>
      <Item>Item 3 (appears first)</Item>
    </Stack>
  ),
};

/**
 * Different spacing values
 */
export const DifferentSpacing: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <p>Spacing: 0</p>
        <Stack direction="row" spacing={0}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </div>
      <div>
        <p>Spacing: 1</p>
        <Stack direction="row" spacing={1}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </div>
      <div>
        <p>Spacing: 2</p>
        <Stack direction="row" spacing={2}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </div>
      <div>
        <p>Spacing: 4</p>
        <Stack direction="row" spacing={4}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </div>
    </div>
  ),
};

/**
 * With divider
 */
export const WithDivider: Story = {
  render: () => (
    <Stack spacing={2} divider={<Divider />}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
  ),
};

/**
 * Row with divider
 */
export const RowWithDivider: Story = {
  render: () => (
    <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
  ),
};

/**
 * Responsive direction
 */
export const ResponsiveDirection: Story = {
  render: () => (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
      <Item>Column on mobile, Row on desktop</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
  ),
};

/**
 * Responsive spacing
 */
export const ResponsiveSpacing: Story = {
  render: () => (
    <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
      <Item>Spacing increases with screen size</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
  ),
};

/**
 * Button group
 */
export const ButtonGroup: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">Save</Button>
      <Button variant="outlined">Cancel</Button>
      <Button variant="text">Reset</Button>
    </Stack>
  ),
};

/**
 * Chip stack
 */
export const ChipStack: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip label="React" color="primary" />
      <Chip label="TypeScript" color="secondary" />
      <Chip label="Material-UI" color="success" />
      <Chip label="Storybook" color="info" />
    </Stack>
  ),
};

/**
 * Nested stacks
 */
export const NestedStacks: Story = {
  render: () => (
    <Stack spacing={3}>
      <Stack direction="row" spacing={2}>
        <Item>Row 1, Col 1</Item>
        <Item>Row 1, Col 2</Item>
        <Item>Row 1, Col 3</Item>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Item>Row 2, Col 1</Item>
        <Item>Row 2, Col 2</Item>
        <Item>Row 2, Col 3</Item>
      </Stack>
    </Stack>
  ),
};

/**
 * useFlexGap
 */
export const UseFlexGap: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <p>Without useFlexGap (default - uses margin)</p>
        <Stack direction="row" spacing={2}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </div>
      <div>
        <p>With useFlexGap (uses CSS gap property)</p>
        <Stack direction="row" spacing={2} useFlexGap>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </div>
    </div>
  ),
};
