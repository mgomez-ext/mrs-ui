/**
 * Select component stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { MenuItem } from '../MenuItem';
import { FormControl, InputLabel, FormHelperText, Chip, Box } from '@mui/material';
import { useState } from 'react';

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
      description: 'The variant of the select',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'],
      description: 'The color of the select',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'The size of the select',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the select will be disabled',
    },
    error: {
      control: 'boolean',
      description: 'If true, the select will indicate an error',
    },
    fullWidth: {
      control: 'boolean',
      description: 'If true, the select will take up the full width',
    },
    multiple: {
      control: 'boolean',
      description: 'If true, allows multiple selections',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

/**
 * Basic select
 */
export const Basic: Story = {
  render: () => {
    const [age, setAge] = useState('');

    return (
      <Select
        value={age}
        onChange={(e) => setAge(e.target.value as string)}
        displayEmpty
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    );
  },
};

/**
 * With label (using FormControl)
 */
export const WithLabel: Story = {
  render: () => {
    const [age, setAge] = useState('');

    return (
      <FormControl fullWidth>
        <InputLabel id="age-label">Age</InputLabel>
        <Select
          labelId="age-label"
          value={age}
          label="Age"
          onChange={(e) => setAge(e.target.value as string)}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    );
  },
};

/**
 * With helper text
 */
export const WithHelperText: Story = {
  render: () => {
    const [age, setAge] = useState('');

    return (
      <FormControl fullWidth>
        <InputLabel id="age-helper-label">Age</InputLabel>
        <Select
          labelId="age-helper-label"
          value={age}
          label="Age"
          onChange={(e) => setAge(e.target.value as string)}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Please select your age range</FormHelperText>
      </FormControl>
    );
  },
};

/**
 * Outlined variant (default)
 */
export const Outlined: Story = {
  render: () => {
    const [value, setValue] = useState('option1');

    return (
      <FormControl>
        <InputLabel>Outlined</InputLabel>
        <Select
          variant="outlined"
          value={value}
          label="Outlined"
          onChange={(e) => setValue(e.target.value as string)}
        >
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
      </FormControl>
    );
  },
};

/**
 * Filled variant
 */
export const Filled: Story = {
  render: () => {
    const [value, setValue] = useState('option1');

    return (
      <FormControl variant="filled">
        <InputLabel>Filled</InputLabel>
        <Select
          variant="filled"
          value={value}
          label="Filled"
          onChange={(e) => setValue(e.target.value as string)}
        >
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
      </FormControl>
    );
  },
};

/**
 * Standard variant
 */
export const Standard: Story = {
  render: () => {
    const [value, setValue] = useState('option1');

    return (
      <FormControl variant="standard">
        <InputLabel>Standard</InputLabel>
        <Select
          variant="standard"
          value={value}
          label="Standard"
          onChange={(e) => setValue(e.target.value as string)}
        >
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
      </FormControl>
    );
  },
};

/**
 * Small size
 */
export const Small: Story = {
  render: () => {
    const [value, setValue] = useState('option1');

    return (
      <FormControl size="small">
        <InputLabel>Small</InputLabel>
        <Select
          size="small"
          value={value}
          label="Small"
          onChange={(e) => setValue(e.target.value as string)}
        >
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
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
      <FormControl error fullWidth>
        <InputLabel>Required Field</InputLabel>
        <Select
          value={value}
          label="Required Field"
          error
          onChange={(e) => setValue(e.target.value as string)}
        >
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
        </Select>
        <FormHelperText>This field is required</FormHelperText>
      </FormControl>
    );
  },
};

/**
 * Disabled state
 */
export const Disabled: Story = {
  render: () => (
    <FormControl disabled>
      <InputLabel>Disabled</InputLabel>
      <Select value="option1" label="Disabled" disabled>
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
      </Select>
    </FormControl>
  ),
};

/**
 * Multiple selection
 */
export const Multiple: Story = {
  render: () => {
    const [values, setValues] = useState<string[]>([]);

    return (
      <FormControl fullWidth>
        <InputLabel>Multiple Select</InputLabel>
        <Select
          multiple
          value={values}
          label="Multiple Select"
          onChange={(e) => setValues(e.target.value as string[])}
        >
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
          <MenuItem value="option4">Option 4</MenuItem>
        </Select>
      </FormControl>
    );
  },
};

/**
 * Multiple selection with chips
 */
export const MultipleWithChips: Story = {
  render: () => {
    const [values, setValues] = useState<string[]>([]);

    return (
      <FormControl fullWidth>
        <InputLabel>Select Tags</InputLabel>
        <Select
          multiple
          value={values}
          label="Select Tags"
          onChange={(e) => setValues(e.target.value as string[])}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {(selected as string[]).map((value) => (
                <Chip key={value} label={value} size="small" />
              ))}
            </Box>
          )}
        >
          <MenuItem value="React">React</MenuItem>
          <MenuItem value="TypeScript">TypeScript</MenuItem>
          <MenuItem value="Material-UI">Material-UI</MenuItem>
          <MenuItem value="Storybook">Storybook</MenuItem>
        </Select>
      </FormControl>
    );
  },
};

/**
 * Auto width
 */
export const AutoWidth: Story = {
  render: () => {
    const [value, setValue] = useState('option1');

    return (
      <FormControl>
        <InputLabel>Auto Width</InputLabel>
        <Select
          autoWidth
          value={value}
          label="Auto Width"
          onChange={(e) => setValue(e.target.value as string)}
        >
          <MenuItem value="option1">Short</MenuItem>
          <MenuItem value="option2">Medium Length Option</MenuItem>
          <MenuItem value="option3">Very Long Option Text Here</MenuItem>
        </Select>
      </FormControl>
    );
  },
};

/**
 * All variants comparison
 */
export const AllVariants: Story = {
  render: () => {
    const [outlined, setOutlined] = useState('option1');
    const [filled, setFilled] = useState('option1');
    const [standard, setStandard] = useState('option1');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <FormControl>
          <InputLabel>Outlined</InputLabel>
          <Select
            variant="outlined"
            value={outlined}
            label="Outlined"
            onChange={(e) => setOutlined(e.target.value as string)}
          >
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="filled">
          <InputLabel>Filled</InputLabel>
          <Select
            variant="filled"
            value={filled}
            label="Filled"
            onChange={(e) => setFilled(e.target.value as string)}
          >
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="standard">
          <InputLabel>Standard</InputLabel>
          <Select
            variant="standard"
            value={standard}
            label="Standard"
            onChange={(e) => setStandard(e.target.value as string)}
          >
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  },
};

/**
 * All colors comparison
 */
export const AllColors: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {(['primary', 'secondary', 'error', 'warning', 'info', 'success'] as const).map(
          (color) => (
            <FormControl key={color}>
              <InputLabel>{color.charAt(0).toUpperCase() + color.slice(1)}</InputLabel>
              <Select
                color={color}
                value="option1"
                label={color.charAt(0).toUpperCase() + color.slice(1)}
              >
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
              </Select>
            </FormControl>
          )
        )}
      </div>
    );
  },
};
