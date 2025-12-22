/**
 * Radio component stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup as MuiRadioGroup,
  Stack,
  Typography,
} from '@mui/material';
import { Radio } from './Radio';
import React from 'react';

const meta: Meta<typeof Radio> = {
  title: 'Atoms/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'If `true`, the component is checked.',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the component.',
    },
    color: {
      control: 'select',
      options: ['default', 'primary'],
      description: 'The color of the component.',
    },
    disabled: {
      control: 'boolean',
      description: 'If `true`, the component is disabled.',
    },
    disableRipple: {
      control: 'boolean',
      description: 'If `true`, the ripple effect is disabled.',
    },
    required: {
      control: 'boolean',
      description: 'If `true`, the component appears indeterminate.',
    },
    onChange: {
      action: 'onChange',
      description: 'Callback fired when the state is changed.',
    },
    value: {
      control: 'text',
      description: 'The value of the component.',
    },
    id: {
      control: 'text',
      description: 'The id of the `input` element.',
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
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    inputProps: { 'aria-label': 'Default radio' },
  },
};

export const Sizes: Story = {
  render: (args) => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Box textAlign="center">
        <Typography variant="caption" display="block" mb={1}>
          Small
        </Typography>
        <Radio {...args} size="small" inputProps={{ 'aria-label': 'Small radio' }} />
      </Box>
      <Box textAlign="center">
        <Typography variant="caption" display="block" mb={1}>
          Medium (default)
        </Typography>
        <Radio {...args} size="medium" inputProps={{ 'aria-label': 'Medium radio' }} />
      </Box>
      <Box textAlign="center">
        <Typography variant="caption" display="block" mb={1}>
          Large
        </Typography>
        <Radio {...args} size="large" inputProps={{ 'aria-label': 'Large radio' }} />
      </Box>
    </Stack>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <Stack direction="row" spacing={3} alignItems="center">
      <Box textAlign="center">
        <Typography variant="caption" display="block" mb={1}>
          Default
        </Typography>
        <Stack direction="row" spacing={1}>
          <Radio {...args} color="default" inputProps={{ 'aria-label': 'Default unchecked' }} />
          <Radio
            {...args}
            color="default"
            checked
            inputProps={{ 'aria-label': 'Default checked' }}
          />
        </Stack>
      </Box>
      <Box textAlign="center">
        <Typography variant="caption" display="block" mb={1}>
          Primary
        </Typography>
        <Stack direction="row" spacing={1}>
          <Radio {...args} color="primary" inputProps={{ 'aria-label': 'Primary unchecked' }} />
          <Radio
            {...args}
            color="primary"
            checked
            inputProps={{ 'aria-label': 'Primary checked' }}
          />
        </Stack>
      </Box>
    </Stack>
  ),
};

export const States: Story = {
  render: (args) => (
    <Stack spacing={2}>
      <Box>
        <Typography variant="body2" gutterBottom>
          Unchecked
        </Typography>
        <Stack direction="row" spacing={2}>
          <Radio {...args} inputProps={{ 'aria-label': 'Unchecked enabled' }} />
          <Radio {...args} disabled inputProps={{ 'aria-label': 'Unchecked disabled' }} />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" gutterBottom>
          Checked
        </Typography>
        <Stack direction="row" spacing={2}>
          <Radio {...args} checked inputProps={{ 'aria-label': 'Checked enabled' }} />
          <Radio {...args} checked disabled inputProps={{ 'aria-label': 'Checked disabled' }} />
        </Stack>
      </Box>
    </Stack>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <Stack direction="row" spacing={2}>
      <Radio {...args} disabled inputProps={{ 'aria-label': 'Disabled unchecked' }} />
      <Radio {...args} disabled checked inputProps={{ 'aria-label': 'Disabled checked' }} />
    </Stack>
  ),
};

export const WithLabels: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = React.useState('female');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(event.target.value);
    };

    return (
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <MuiRadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={selectedValue}
          onChange={handleChange}
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio {...args} />} label="Female" />
          <FormControlLabel value="male" control={<Radio {...args} />} label="Male" />
          <FormControlLabel value="other" control={<Radio {...args} />} label="Other" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio {...args} />}
            label="Disabled"
          />
        </MuiRadioGroup>
      </FormControl>
    );
  },
};

export const AllSizesAndColors: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Small Size
        </Typography>
        <Stack direction="row" spacing={2}>
          <Box>
            <Typography variant="caption" display="block" mb={1}>
              Default
            </Typography>
            <Stack direction="row" spacing={1}>
              <Radio
                size="small"
                color="default"
                inputProps={{ 'aria-label': 'Small default unchecked' }}
              />
              <Radio
                size="small"
                color="default"
                checked
                inputProps={{ 'aria-label': 'Small default checked' }}
              />
              <Radio
                size="small"
                color="default"
                disabled
                inputProps={{ 'aria-label': 'Small default disabled' }}
              />
            </Stack>
          </Box>
          <Box>
            <Typography variant="caption" display="block" mb={1}>
              Primary
            </Typography>
            <Stack direction="row" spacing={1}>
              <Radio
                size="small"
                color="primary"
                inputProps={{ 'aria-label': 'Small primary unchecked' }}
              />
              <Radio
                size="small"
                color="primary"
                checked
                inputProps={{ 'aria-label': 'Small primary checked' }}
              />
              <Radio
                size="small"
                color="primary"
                disabled
                inputProps={{ 'aria-label': 'Small primary disabled' }}
              />
            </Stack>
          </Box>
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Medium Size (Default)
        </Typography>
        <Stack direction="row" spacing={2}>
          <Box>
            <Typography variant="caption" display="block" mb={1}>
              Default
            </Typography>
            <Stack direction="row" spacing={1}>
              <Radio
                size="medium"
                color="default"
                inputProps={{ 'aria-label': 'Medium default unchecked' }}
              />
              <Radio
                size="medium"
                color="default"
                checked
                inputProps={{ 'aria-label': 'Medium default checked' }}
              />
              <Radio
                size="medium"
                color="default"
                disabled
                inputProps={{ 'aria-label': 'Medium default disabled' }}
              />
            </Stack>
          </Box>
          <Box>
            <Typography variant="caption" display="block" mb={1}>
              Primary
            </Typography>
            <Stack direction="row" spacing={1}>
              <Radio
                size="medium"
                color="primary"
                inputProps={{ 'aria-label': 'Medium primary unchecked' }}
              />
              <Radio
                size="medium"
                color="primary"
                checked
                inputProps={{ 'aria-label': 'Medium primary checked' }}
              />
              <Radio
                size="medium"
                color="primary"
                disabled
                inputProps={{ 'aria-label': 'Medium primary disabled' }}
              />
            </Stack>
          </Box>
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Large Size
        </Typography>
        <Stack direction="row" spacing={2}>
          <Box>
            <Typography variant="caption" display="block" mb={1}>
              Default
            </Typography>
            <Stack direction="row" spacing={1}>
              <Radio
                size="large"
                color="default"
                inputProps={{ 'aria-label': 'Large default unchecked' }}
              />
              <Radio
                size="large"
                color="default"
                checked
                inputProps={{ 'aria-label': 'Large default checked' }}
              />
              <Radio
                size="large"
                color="default"
                disabled
                inputProps={{ 'aria-label': 'Large default disabled' }}
              />
            </Stack>
          </Box>
          <Box>
            <Typography variant="caption" display="block" mb={1}>
              Primary
            </Typography>
            <Stack direction="row" spacing={1}>
              <Radio
                size="large"
                color="primary"
                inputProps={{ 'aria-label': 'Large primary unchecked' }}
              />
              <Radio
                size="large"
                color="primary"
                checked
                inputProps={{ 'aria-label': 'Large primary checked' }}
              />
              <Radio
                size="large"
                color="primary"
                disabled
                inputProps={{ 'aria-label': 'Large primary disabled' }}
              />
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Stack>
  ),
};

export const RadioGroupExample: Story = {
  render: () => {
    const [value, setValue] = React.useState('option1');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Select an option</FormLabel>
        <MuiRadioGroup value={value} onChange={handleChange} name="radio-group-example">
          <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
          <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
          <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
        </MuiRadioGroup>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Selected value: <strong>{value}</strong>
        </Typography>
      </FormControl>
    );
  },
};

export const HorizontalRadioGroup: Story = {
  render: () => {
    const [value, setValue] = React.useState('yes');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    return (
      <FormControl>
        <FormLabel id="horizontal-radio-group-label">Do you agree?</FormLabel>
        <MuiRadioGroup
          row
          aria-labelledby="horizontal-radio-group-label"
          value={value}
          onChange={handleChange}
          name="horizontal-radio-group"
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          <FormControlLabel value="maybe" control={<Radio />} label="Maybe" />
        </MuiRadioGroup>
      </FormControl>
    );
  },
};

export const WithoutRipple: Story = {
  render: (args) => (
    <Stack direction="row" spacing={2}>
      <Box textAlign="center">
        <Typography variant="caption" display="block" mb={1}>
          With Ripple (default)
        </Typography>
        <Radio {...args} inputProps={{ 'aria-label': 'With ripple' }} />
      </Box>
      <Box textAlign="center">
        <Typography variant="caption" display="block" mb={1}>
          Without Ripple
        </Typography>
        <Radio {...args} disableRipple inputProps={{ 'aria-label': 'Without ripple' }} />
      </Box>
    </Stack>
  ),
};

export const Playground: Story = {
  args: {
    size: 'medium',
    color: 'primary',
    disabled: false,
    checked: false,
    disableRipple: false,
    required: false,
    inputProps: { 'aria-label': 'Playground radio' },
  },
};
