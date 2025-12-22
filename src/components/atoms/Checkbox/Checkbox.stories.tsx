/**
 * Checkbox component stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Box, Typography, FormControlLabel, FormGroup } from '@mui/material';
import { Checkbox } from './Checkbox';
import React from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'If `true`, the component is checked.',
    },
    indeterminate: {
      control: 'boolean',
      description: 'If `true`, the component appears indeterminate.',
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
      description: 'If `true`, the input element is required.',
    },
    onChange: {
      action: 'onChange',
      description: 'Callback fired when the state is changed.',
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
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack spacing={2}>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Small
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Checkbox size="small" />
          <Checkbox size="small" checked />
          <Checkbox size="small" indeterminate />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Medium (default)
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Checkbox size="medium" />
          <Checkbox size="medium" checked />
          <Checkbox size="medium" indeterminate />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Large
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Checkbox size="large" />
          <Checkbox size="large" checked />
          <Checkbox size="large" indeterminate />
        </Stack>
      </Box>
    </Stack>
  ),
};

export const Colors: Story = {
  render: () => (
    <Stack spacing={2}>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Primary (default)
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Checkbox color="primary" />
          <Checkbox color="primary" checked />
          <Checkbox color="primary" indeterminate />
        </Stack>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Default (black)
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Checkbox color="default" />
          <Checkbox color="default" checked />
          <Checkbox color="default" indeterminate />
        </Stack>
      </Box>
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack spacing={2}>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Unchecked
        </Typography>
        <Checkbox />
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Checked
        </Typography>
        <Checkbox checked />
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Indeterminate
        </Typography>
        <Checkbox indeterminate />
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Disabled (unchecked)
        </Typography>
        <Checkbox disabled />
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Disabled (checked)
        </Typography>
        <Checkbox disabled checked />
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Disabled (indeterminate)
        </Typography>
        <Checkbox disabled indeterminate />
      </Box>
    </Stack>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <Stack spacing={2}>
      <FormControlLabel control={<Checkbox />} label="Unchecked" />
      <FormControlLabel control={<Checkbox checked />} label="Checked" />
      <FormControlLabel control={<Checkbox indeterminate />} label="Indeterminate" />
      <FormControlLabel control={<Checkbox disabled />} label="Disabled" />
      <FormControlLabel control={<Checkbox disabled checked />} label="Disabled & Checked" />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Checkboxes with labels using FormControlLabel component.',
      },
    },
  },
};

export const ControlledCheckbox: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };

    return (
      <Box>
        <FormControlLabel
          control={<Checkbox checked={checked} onChange={handleChange} />}
          label={`Checkbox is ${checked ? 'checked' : 'unchecked'}`}
        />
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a controlled checkbox with React state.',
      },
    },
  },
};

export const CheckboxGroup: Story = {
  render: () => {
    const [checked, setChecked] = React.useState([true, false, false]);

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = [event.target.checked, checked[1], checked[2]];
      setChecked(newChecked);
    };

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = [checked[0], event.target.checked, checked[2]];
      setChecked(newChecked);
    };

    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = [checked[0], checked[1], event.target.checked];
      setChecked(newChecked);
    };

    return (
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={checked[0]} onChange={handleChange1} />}
          label="Option 1"
        />
        <FormControlLabel
          control={<Checkbox checked={checked[1]} onChange={handleChange2} />}
          label="Option 2"
        />
        <FormControlLabel
          control={<Checkbox checked={checked[2]} onChange={handleChange3} />}
          label="Option 3"
        />
      </FormGroup>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple checkboxes in a group, each with independent state.',
      },
    },
  },
};

export const ParentChildCheckboxes: Story = {
  render: () => {
    const [checked, setChecked] = React.useState([true, false]);

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, event.target.checked]);
    };

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([checked[0], event.target.checked]);
    };

    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, checked[1]]);
    };

    const children = (
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
        <FormControlLabel
          control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
          label="Child 1"
        />
        <FormControlLabel
          control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
          label="Child 2"
        />
      </Box>
    );

    return (
      <div>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked[0] && checked[1]}
              indeterminate={checked[0] !== checked[1]}
              onChange={handleChange1}
            />
          }
          label="Parent"
        />
        {children}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Parent checkbox controls two children. Shows indeterminate state when only some children are checked.',
      },
    },
  },
};

export const AllCombinations: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Typography variant="h6">All Size and Color Combinations</Typography>

      {(['small', 'medium', 'large'] as const).map((size) => (
        <Box key={size}>
          <Typography variant="body2" sx={{ mb: 1, fontWeight: 'bold' }}>
            Size: {size}
          </Typography>
          <Stack spacing={1}>
            <Box>
              <Typography variant="caption">Primary</Typography>
              <Stack direction="row" spacing={1}>
                <Checkbox size={size} color="primary" />
                <Checkbox size={size} color="primary" checked />
                <Checkbox size={size} color="primary" indeterminate />
                <Checkbox size={size} color="primary" disabled />
                <Checkbox size={size} color="primary" disabled checked />
              </Stack>
            </Box>
            <Box>
              <Typography variant="caption">Default</Typography>
              <Stack direction="row" spacing={1}>
                <Checkbox size={size} color="default" />
                <Checkbox size={size} color="default" checked />
                <Checkbox size={size} color="default" indeterminate />
                <Checkbox size={size} color="default" disabled />
                <Checkbox size={size} color="default" disabled checked />
              </Stack>
            </Box>
          </Stack>
        </Box>
      ))}
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Comprehensive view of all checkbox size and color combinations with different states.',
      },
    },
  },
};

export const CustomStyling: Story = {
  render: () => (
    <Stack spacing={2}>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Custom Color
        </Typography>
        <Checkbox
          sx={{
            color: 'purple',
            '&.Mui-checked': {
              color: 'purple',
            },
          }}
        />
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Custom Size (using sx)
        </Typography>
        <Checkbox
          sx={{
            '& .MuiSvgIcon-root': {
              fontSize: 32,
            },
          }}
        />
      </Box>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of custom styling using the sx prop.',
      },
    },
  },
};

export const Playground: Story = {
  args: {
    checked: false,
    indeterminate: false,
    size: 'medium',
    color: 'primary',
    disabled: false,
    disableRipple: false,
    required: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to experiment with all Checkbox props.',
      },
    },
  },
};
