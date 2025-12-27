/**
 * TextField component stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';
import SearchIcon from '@mui/icons-material/Search';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { InputAdornment, IconButton } from '@mui/material';
import { useState } from 'react';

const meta: Meta<typeof TextField> = {
  title: 'Atoms/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
      description: 'The variant of the text field',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'],
      description: 'The color of the text field',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'The size of the text field',
    },
    label: {
      control: 'text',
      description: 'The label content',
    },
    placeholder: {
      control: 'text',
      description: 'The placeholder text',
    },
    helperText: {
      control: 'text',
      description: 'The helper text content',
    },
    error: {
      control: 'boolean',
      description: 'If true, the text field will indicate an error',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the text field will be disabled',
    },
    required: {
      control: 'boolean',
      description: 'If true, the input element will be required',
    },
    fullWidth: {
      control: 'boolean',
      description: 'If true, the text field will take up the full width',
    },
    multiline: {
      control: 'boolean',
      description: 'If true, a textarea element will be rendered',
    },
    rows: {
      control: 'number',
      description: 'Number of rows (multiline only)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

/**
 * Default outlined text field
 */
export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
  },
};

/**
 * Outlined variant (default)
 */
export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Outlined',
    placeholder: 'Enter text',
  },
};

/**
 * Filled variant
 */
export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Filled',
    placeholder: 'Enter text',
  },
};

/**
 * Standard variant
 */
export const Standard: Story = {
  args: {
    variant: 'standard',
    label: 'Standard',
    placeholder: 'Enter text',
  },
};

/**
 * Small size
 */
export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small TextField',
    placeholder: 'Small size',
  },
};

/**
 * Medium size (default)
 */
export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Medium TextField',
    placeholder: 'Medium size',
  },
};

/**
 * With helper text
 */
export const WithHelperText: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    helperText: 'We will never share your email',
  },
};

/**
 * Required field
 */
export const Required: Story = {
  args: {
    label: 'Username',
    required: true,
    helperText: 'This field is required',
  },
};

/**
 * Error state
 */
export const Error: Story = {
  args: {
    label: 'Email',
    error: true,
    helperText: 'Please enter a valid email address',
    defaultValue: 'invalid-email',
  },
};

/**
 * Disabled state
 */
export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
    defaultValue: 'Disabled value',
  },
};

/**
 * Full width
 */
export const FullWidth: Story = {
  args: {
    label: 'Full Width',
    fullWidth: true,
    placeholder: 'This field takes full width',
  },
};

/**
 * Multiline textarea
 */
export const Multiline: Story = {
  args: {
    label: 'Description',
    multiline: true,
    rows: 4,
    placeholder: 'Enter your description here',
  },
};

/**
 * Multiline with auto-resize
 */
export const MultilineAutoResize: Story = {
  args: {
    label: 'Comments',
    multiline: true,
    minRows: 2,
    maxRows: 6,
    placeholder: 'Type here and watch it grow',
  },
};

/**
 * Password field
 */
export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
  },
};

/**
 * Password field with toggle visibility
 */
export const PasswordWithToggle: Story = {
  render: () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <TextField
        label="Password"
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter your password"
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    );
  },
};

/**
 * With start adornment (icon)
 */
export const WithStartAdornment: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    slotProps: {
      input: {
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      },
    },
  },
};

/**
 * Number input
 */
export const Number: Story = {
  args: {
    label: 'Age',
    type: 'number',
    placeholder: 'Enter your age',
  },
};

/**
 * Email input
 */
export const Email: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'user@example.com',
    helperText: 'We will send a verification email',
  },
};

/**
 * URL input
 */
export const URL: Story = {
  args: {
    label: 'Website',
    type: 'url',
    placeholder: 'https://example.com',
  },
};

/**
 * Date input
 */
export const Date: Story = {
  args: {
    label: 'Birth Date',
    type: 'date',
    slotProps: {
      inputLabel: {
        shrink: true,
      },
    },
  },
};

/**
 * Primary color
 */
export const ColorPrimary: Story = {
  args: {
    label: 'Primary',
    color: 'primary',
    defaultValue: 'Primary color',
  },
};

/**
 * Secondary color
 */
export const ColorSecondary: Story = {
  args: {
    label: 'Secondary',
    color: 'secondary',
    defaultValue: 'Secondary color',
  },
};

/**
 * Success color
 */
export const ColorSuccess: Story = {
  args: {
    label: 'Success',
    color: 'success',
    defaultValue: 'Success color',
    helperText: 'This looks good!',
  },
};

/**
 * Error color
 */
export const ColorError: Story = {
  args: {
    label: 'Error',
    color: 'error',
    error: true,
    defaultValue: 'Error color',
    helperText: 'Something went wrong',
  },
};

/**
 * Warning color
 */
export const ColorWarning: Story = {
  args: {
    label: 'Warning',
    color: 'warning',
    defaultValue: 'Warning color',
    helperText: 'Please be careful',
  },
};

/**
 * Info color
 */
export const ColorInfo: Story = {
  args: {
    label: 'Info',
    color: 'info',
    defaultValue: 'Info color',
    helperText: 'Just so you know',
  },
};

/**
 * All variants comparison
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <TextField variant="outlined" label="Outlined" placeholder="Outlined variant" />
      <TextField variant="filled" label="Filled" placeholder="Filled variant" />
      <TextField variant="standard" label="Standard" placeholder="Standard variant" />
    </div>
  ),
};

/**
 * All sizes comparison
 */
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <TextField size="small" label="Small" placeholder="Small size" />
      <TextField size="medium" label="Medium" placeholder="Medium size" />
    </div>
  ),
};

/**
 * All states comparison
 */
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <TextField label="Default" placeholder="Default state" />
      <TextField label="Filled" defaultValue="Some text" />
      <TextField label="Disabled" disabled defaultValue="Disabled" />
      <TextField label="Error" error helperText="Error message" defaultValue="Invalid" />
      <TextField label="Required" required helperText="Required field" />
    </div>
  ),
};
