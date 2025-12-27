/**
 * RadioGroup component stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from './RadioGroup';
import { Radio } from '../Radio';
import { FormControlLabel } from '../FormControlLabel';
import { FormControl, FormLabel, FormHelperText } from '@mui/material';
import { useState } from 'react';

const meta: Meta<typeof RadioGroup> = {
  title: 'Atoms/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    row: {
      control: 'boolean',
      description: 'Display group of elements in a compact row',
    },
    defaultValue: {
      control: 'text',
      description: 'The default value',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

/**
 * Basic radio group
 */
export const Basic: Story = {
  render: () => {
    const [value, setValue] = useState('option1');

    return (
      <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
        <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
        <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
        <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
      </RadioGroup>
    );
  },
};

/**
 * With label and helper text
 */
export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = useState('female');

    return (
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
        <FormHelperText>Select your gender</FormHelperText>
      </FormControl>
    );
  },
};

/**
 * Row layout
 */
export const Row: Story = {
  render: () => {
    const [value, setValue] = useState('yes');

    return (
      <FormControl>
        <FormLabel>Do you agree?</FormLabel>
        <RadioGroup row value={value} onChange={(e) => setValue(e.target.value)}>
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          <FormControlLabel value="maybe" control={<Radio />} label="Maybe" />
        </RadioGroup>
      </FormControl>
    );
  },
};

/**
 * Disabled options
 */
export const WithDisabledOption: Story = {
  render: () => {
    const [value, setValue] = useState('option1');

    return (
      <FormControl>
        <FormLabel>Choose an option</FormLabel>
        <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
          <FormControlLabel value="option1" control={<Radio />} label="Available Option 1" />
          <FormControlLabel value="option2" control={<Radio />} label="Available Option 2" />
          <FormControlLabel value="option3" control={<Radio />} label="Disabled Option" disabled />
        </RadioGroup>
      </FormControl>
    );
  },
};

/**
 * Error state
 */
export const Error: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <FormControl error>
        <FormLabel>Required Selection</FormLabel>
        <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
          <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
          <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
        </RadioGroup>
        <FormHelperText>Please select an option</FormHelperText>
      </FormControl>
    );
  },
};

/**
 * All colors
 */
export const AllColors: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {(['primary', 'secondary', 'error', 'warning', 'info', 'success'] as const).map(
          (color) => (
            <FormControl key={color}>
              <FormLabel>{color.charAt(0).toUpperCase() + color.slice(1)}</FormLabel>
              <RadioGroup defaultValue="option1">
                <FormControlLabel
                  value="option1"
                  control={<Radio color={color} />}
                  label="Option 1"
                />
                <FormControlLabel
                  value="option2"
                  control={<Radio color={color} />}
                  label="Option 2"
                />
              </RadioGroup>
            </FormControl>
          )
        )}
      </div>
    );
  },
};

/**
 * Controlled vs Uncontrolled
 */
export const ControlledVsUncontrolled: Story = {
  render: () => {
    const [controlledValue, setControlledValue] = useState('controlled1');

    return (
      <div style={{ display: 'flex', gap: '48px' }}>
        <FormControl>
          <FormLabel>Controlled</FormLabel>
          <RadioGroup
            value={controlledValue}
            onChange={(e) => setControlledValue(e.target.value)}
          >
            <FormControlLabel
              value="controlled1"
              control={<Radio />}
              label="Controlled 1"
            />
            <FormControlLabel
              value="controlled2"
              control={<Radio />}
              label="Controlled 2"
            />
          </RadioGroup>
          <FormHelperText>Value: {controlledValue}</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>Uncontrolled</FormLabel>
          <RadioGroup defaultValue="uncontrolled1">
            <FormControlLabel
              value="uncontrolled1"
              control={<Radio />}
              label="Uncontrolled 1"
            />
            <FormControlLabel
              value="uncontrolled2"
              control={<Radio />}
              label="Uncontrolled 2"
            />
          </RadioGroup>
          <FormHelperText>Uses defaultValue</FormHelperText>
        </FormControl>
      </div>
    );
  },
};
