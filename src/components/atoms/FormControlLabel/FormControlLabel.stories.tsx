/**
 * FormControlLabel component stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { FormControlLabel } from './FormControlLabel';
import { Checkbox } from '../Checkbox';
import { Radio } from '../Radio';
import { Switch } from '../Switch';

const meta: Meta<typeof FormControlLabel> = {
  title: 'Atoms/FormControlLabel',
  component: FormControlLabel,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label text',
    },
    labelPlacement: {
      control: 'select',
      options: ['end', 'start', 'top', 'bottom'],
      description: 'The position of the label',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the component is disabled',
    },
    required: {
      control: 'boolean',
      description: 'If true, the control is required',
    },
  },
};

export default meta;
type Story = StoryObj<typeof FormControlLabel>;

/**
 * Basic with Checkbox
 */
export const WithCheckbox: Story = {
  args: {
    control: <Checkbox />,
    label: 'Remember me',
  },
};

/**
 * With Radio
 */
export const WithRadio: Story = {
  args: {
    control: <Radio />,
    label: 'Radio option',
  },
};

/**
 * With Switch
 */
export const WithSwitch: Story = {
  args: {
    control: <Switch />,
    label: 'Enable notifications',
  },
};

/**
 * Disabled state
 */
export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <FormControlLabel control={<Checkbox />} label="Disabled Checkbox" disabled />
      <FormControlLabel control={<Radio />} label="Disabled Radio" disabled />
      <FormControlLabel control={<Switch />} label="Disabled Switch" disabled />
    </div>
  ),
};

/**
 * Label placement - End (default)
 */
export const LabelPlacementEnd: Story = {
  args: {
    control: <Checkbox />,
    label: 'Label at end',
    labelPlacement: 'end',
  },
};

/**
 * Label placement - Start
 */
export const LabelPlacementStart: Story = {
  args: {
    control: <Checkbox />,
    label: 'Label at start',
    labelPlacement: 'start',
  },
};

/**
 * Label placement - Top
 */
export const LabelPlacementTop: Story = {
  args: {
    control: <Checkbox />,
    label: 'Label on top',
    labelPlacement: 'top',
  },
};

/**
 * Label placement - Bottom
 */
export const LabelPlacementBottom: Story = {
  args: {
    control: <Checkbox />,
    label: 'Label on bottom',
    labelPlacement: 'bottom',
  },
};

/**
 * All label placements comparison
 */
export const AllLabelPlacements: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px' }}>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="End"
        labelPlacement="end"
      />
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Start"
        labelPlacement="start"
      />
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Top"
        labelPlacement="top"
      />
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Bottom"
        labelPlacement="bottom"
      />
    </div>
  ),
};

/**
 * Required field
 */
export const Required: Story = {
  args: {
    control: <Checkbox />,
    label: 'I agree to the terms and conditions',
    required: true,
  },
};

/**
 * With custom styling
 */
export const CustomStyling: Story = {
  render: () => (
    <FormControlLabel
      control={<Checkbox defaultChecked />}
      label="Custom styled label"
      sx={{
        '& .MuiFormControlLabel-label': {
          fontSize: '18px',
          fontWeight: 600,
          color: 'primary.main',
        },
      }}
    />
  ),
};

/**
 * All control types
 */
export const AllControlTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Checkbox Control" />
      <FormControlLabel control={<Radio defaultChecked />} label="Radio Control" />
      <FormControlLabel control={<Switch defaultChecked />} label="Switch Control" />
    </div>
  ),
};
