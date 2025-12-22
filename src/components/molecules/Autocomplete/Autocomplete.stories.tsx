/**
 * Autocomplete component stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack } from '@mui/material';
import { Autocomplete } from './Autocomplete';
import { Typography } from '../../atoms/Typography';

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

const meta: Meta<typeof Autocomplete> = {
  title: 'Molecules/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
      description: 'Array of options to display',
    },
    label: {
      control: 'text',
      description: 'Label for the input field',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'The size of the component',
    },
    multiple: {
      control: 'boolean',
      description: 'If true, user can select multiple values',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the component is disabled',
    },
    error: {
      control: 'boolean',
      description: 'If true, the component is in error state',
    },
    required: {
      control: 'boolean',
      description: 'If true, the component is required',
    },
    fullWidth: {
      control: 'boolean',
      description: 'If true, takes full width of container',
    },
  },
  args: {
    options,
    label: 'Select option',
    placeholder: 'Select option',
    size: 'medium',
    multiple: false,
    disabled: false,
    error: false,
    required: false,
    fullWidth: false,
  },
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

/**
 * Default autocomplete with single selection
 */
export const Default: Story = {
  args: {},
};

/**
 * Single value selection modes
 */
export const SingleValue: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Single Value - Closed
        </Typography>
        <Autocomplete
          options={options}
          label="Option"
          placeholder="Select option"
          sx={{ width: 300 }}
        />
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Single Value - With Default Value
        </Typography>
        <Autocomplete
          options={options}
          label="Option"
          defaultValue="Option 1"
          sx={{ width: 300 }}
        />
      </Box>
    </Stack>
  ),
};

/**
 * Multiple value selection with chips
 */
export const MultipleValues: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Multiple Values - Empty
        </Typography>
        <Autocomplete
          multiple
          options={options}
          label="Options"
          placeholder="Select options"
          sx={{ width: 300 }}
        />
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Multiple Values - With Chips
        </Typography>
        <Autocomplete
          multiple
          options={options}
          label="Options"
          placeholder="Select options"
          defaultValue={['Option 1', 'Option 2']}
          sx={{ width: 300 }}
        />
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Multiple Values - Many Chips
        </Typography>
        <Autocomplete
          multiple
          options={options}
          label="Options"
          placeholder="Select options"
          defaultValue={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
          sx={{ width: 300 }}
        />
      </Box>
    </Stack>
  ),
};

/**
 * Different sizes
 */
export const Sizes: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Medium Size (default)
        </Typography>
        <Autocomplete options={options} label="Select option" size="medium" sx={{ width: 300 }} />
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Small Size
        </Typography>
        <Autocomplete options={options} label="Select option" size="small" sx={{ width: 300 }} />
      </Box>
    </Stack>
  ),
};

/**
 * States and variations
 */
export const States: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Enabled (default)
        </Typography>
        <Autocomplete options={options} label="Select option" sx={{ width: 300 }} />
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          With Value
        </Typography>
        <Autocomplete
          options={options}
          label="Select option"
          defaultValue="Option 1"
          sx={{ width: 300 }}
        />
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Disabled
        </Typography>
        <Autocomplete
          options={options}
          label="Select option"
          defaultValue="Option 1"
          disabled
          sx={{ width: 300 }}
        />
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Read-only
        </Typography>
        <Autocomplete
          options={options}
          label="Select option"
          defaultValue="Option 1"
          readOnly
          sx={{ width: 300 }}
        />
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Error
        </Typography>
        <Autocomplete
          options={options}
          label="Select option"
          error
          helperText="This field is required"
          sx={{ width: 300 }}
        />
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Required
        </Typography>
        <Autocomplete options={options} label="Select option" required sx={{ width: 300 }} />
      </Box>
    </Stack>
  ),
};

/**
 * With helper text
 */
export const WithHelperText: Story = {
  render: () => (
    <Stack spacing={3}>
      <Autocomplete
        options={options}
        label="Select option"
        helperText="Choose your preferred option"
        sx={{ width: 300 }}
      />
      <Autocomplete
        options={options}
        label="Select option"
        error
        helperText="This field is required"
        sx={{ width: 300 }}
      />
    </Stack>
  ),
};

/**
 * Clearable options
 */
export const Clearable: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          With Clear Button (default)
        </Typography>
        <Autocomplete
          options={options}
          label="Select option"
          defaultValue="Option 1"
          sx={{ width: 300 }}
        />
      </Box>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Without Clear Button
        </Typography>
        <Autocomplete
          options={options}
          label="Select option"
          defaultValue="Option 1"
          disableClearable
          sx={{ width: 300 }}
        />
      </Box>
    </Stack>
  ),
};

/**
 * Free solo mode (allows custom input)
 */
export const FreeSolo: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Free Solo - Type custom value
        </Typography>
        <Autocomplete
          options={options}
          label="Enter or select option"
          freeSolo
          sx={{ width: 300 }}
        />
      </Box>
    </Stack>
  ),
};

/**
 * Full width autocomplete
 */
export const FullWidth: Story = {
  render: () => (
    <Box sx={{ width: '100%' }}>
      <Typography variant="body2" sx={{ mb: 1 }}>
        Full Width
      </Typography>
      <Autocomplete options={options} label="Select option" fullWidth />
    </Box>
  ),
};

/**
 * Real-world examples
 */
export const RealWorldExamples: Story = {
  render: () => (
    <Box sx={{ p: 4 }}>
      <Stack spacing={4}>
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Country Selector
          </Typography>
          <Autocomplete
            options={[
              'United States',
              'United Kingdom',
              'Canada',
              'Australia',
              'Germany',
              'France',
              'Spain',
              'Italy',
            ]}
            label="Country"
            placeholder="Select your country"
            sx={{ maxWidth: 400 }}
          />
        </Box>

        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Tags/Categories (Multiple Selection)
          </Typography>
          <Autocomplete
            multiple
            options={[
              'React',
              'TypeScript',
              'JavaScript',
              'Node.js',
              'Python',
              'CSS',
              'HTML',
              'GraphQL',
            ]}
            label="Skills"
            placeholder="Select your skills"
            defaultValue={['React', 'TypeScript']}
            sx={{ maxWidth: 600 }}
          />
        </Box>

        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Search with Free Solo
          </Typography>
          <Autocomplete
            freeSolo
            options={['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape']}
            label="Search fruits"
            placeholder="Type or select a fruit"
            helperText="You can type a custom value or select from the list"
            sx={{ maxWidth: 400 }}
          />
        </Box>

        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Required Field with Error
          </Typography>
          <Autocomplete
            options={['Option 1', 'Option 2', 'Option 3']}
            label="Required field"
            placeholder="Please select an option"
            required
            error
            helperText="This field is required"
            sx={{ maxWidth: 400 }}
          />
        </Box>

        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Email Recipients (Multiple, Small)
          </Typography>
          <Autocomplete
            multiple
            size="small"
            options={[
              'john@example.com',
              'jane@example.com',
              'bob@example.com',
              'alice@example.com',
            ]}
            label="To"
            placeholder="Add recipients"
            freeSolo
            sx={{ maxWidth: 600 }}
          />
        </Box>
      </Stack>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * Comparison showcase
 */
export const Comparison: Story = {
  render: () => (
    <Box sx={{ p: 4 }}>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Single vs Multiple Selection
      </Typography>
      <Stack direction="row" spacing={4} flexWrap="wrap">
        <Box sx={{ flex: '1 1 300px', minWidth: 300 }}>
          <Typography variant="subtitle2" sx={{ mb: 2 }}>
            Single Selection
          </Typography>
          <Stack spacing={2}>
            <Autocomplete options={options} label="Option" placeholder="Select one" />
            <Autocomplete
              options={options}
              label="Option"
              placeholder="Select one"
              defaultValue="Option 1"
            />
          </Stack>
        </Box>

        <Box sx={{ flex: '1 1 300px', minWidth: 300 }}>
          <Typography variant="subtitle2" sx={{ mb: 2 }}>
            Multiple Selection
          </Typography>
          <Stack spacing={2}>
            <Autocomplete
              multiple
              options={options}
              label="Options"
              placeholder="Select multiple"
            />
            <Autocomplete
              multiple
              options={options}
              label="Options"
              placeholder="Select multiple"
              defaultValue={['Option 1', 'Option 2']}
            />
          </Stack>
        </Box>
      </Stack>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
