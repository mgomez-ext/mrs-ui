/**
 * Slider component stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Box, Typography } from '@mui/material';
import { Slider } from './Slider';
import React from 'react';

const meta: Meta<typeof Slider> = {
  title: 'Atoms/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'The size of the slider.',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
      description: 'The color of the slider.',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The component orientation.',
    },
    disabled: {
      control: 'boolean',
      description: 'If `true`, the slider is disabled.',
    },
    marks: {
      control: 'boolean',
      description: 'If `true`, marks are displayed.',
    },
    step: {
      control: 'number',
      description: 'The granularity with which the slider can step through values.',
    },
    min: {
      control: 'number',
      description: 'The minimum allowed value of the slider.',
    },
    max: {
      control: 'number',
      description: 'The maximum allowed value of the slider.',
    },
    valueLabelDisplay: {
      control: 'select',
      options: ['auto', 'on', 'off'],
      description: 'Controls when the value label is displayed.',
    },
    track: {
      control: 'select',
      options: ['normal', 'inverted', false],
      description: 'The track presentation.',
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
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    defaultValue: 30,
  },
  render: (args) => (
    <Box sx={{ width: 300 }}>
      <Slider {...args} />
    </Box>
  ),
};

export const ContinuousSlider: Story = {
  render: () => (
    <Box sx={{ width: 300 }}>
      <Typography variant="body2" gutterBottom>
        Continuous Slider
      </Typography>
      <Slider defaultValue={30} aria-label="Default" />
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A continuous slider allows users to select a value along a subjective range.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 300 }}>
      <Box>
        <Typography variant="body2" gutterBottom>
          Small
        </Typography>
        <Slider size="small" defaultValue={30} aria-label="Small" />
      </Box>
      <Box>
        <Typography variant="body2" gutterBottom>
          Medium (default)
        </Typography>
        <Slider size="medium" defaultValue={50} aria-label="Medium" />
      </Box>
    </Stack>
  ),
};

export const WithMarks: Story = {
  render: () => (
    <Box sx={{ width: 300 }}>
      <Typography variant="body2" gutterBottom>
        Discrete slider with marks
      </Typography>
      <Slider
        defaultValue={30}
        step={10}
        marks
        min={0}
        max={100}
        valueLabelDisplay="auto"
        aria-label="Discrete"
      />
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Discrete sliders can be adjusted to a specific value by referencing its value indicator.',
      },
    },
  },
};

export const CustomMarks: Story = {
  render: () => {
    const marks = [
      { value: 0, label: '0°C' },
      { value: 20, label: '20°C' },
      { value: 37, label: '37°C' },
      { value: 100, label: '100°C' },
    ];

    return (
      <Box sx={{ width: 300 }}>
        <Typography variant="body2" gutterBottom>
          Custom marks
        </Typography>
        <Slider
          defaultValue={20}
          step={10}
          marks={marks}
          valueLabelDisplay="auto"
          aria-label="Custom marks"
        />
      </Box>
    );
  },
};

export const RangeSlider: Story = {
  render: () => {
    const [value, setValue] = React.useState<number[]>([20, 40]);

    const handleChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number[]);
    };

    return (
      <Box sx={{ width: 300 }}>
        <Typography variant="body2" gutterBottom>
          Range Slider
        </Typography>
        <Slider value={value} onChange={handleChange} valueLabelDisplay="auto" aria-label="Range" />
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'The slider can be used to set the start and end of a range by supplying an array of values.',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 300 }}>
      <Box>
        <Typography variant="body2" gutterBottom>
          Enabled
        </Typography>
        <Slider defaultValue={30} />
      </Box>
      <Box>
        <Typography variant="body2" gutterBottom>
          Disabled
        </Typography>
        <Slider defaultValue={30} disabled />
      </Box>
    </Stack>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Stack direction="row" spacing={3} sx={{ height: 300 }}>
      <Box>
        <Typography variant="body2" gutterBottom>
          Continuous
        </Typography>
        <Slider
          orientation="vertical"
          defaultValue={30}
          valueLabelDisplay="auto"
          aria-label="Vertical"
        />
      </Box>
      <Box>
        <Typography variant="body2" gutterBottom>
          With marks
        </Typography>
        <Slider
          orientation="vertical"
          defaultValue={30}
          marks
          step={10}
          valueLabelDisplay="auto"
          aria-label="Vertical with marks"
        />
      </Box>
      <Box>
        <Typography variant="body2" gutterBottom>
          Range
        </Typography>
        <Slider
          orientation="vertical"
          defaultValue={[20, 40]}
          valueLabelDisplay="auto"
          aria-label="Vertical range"
        />
      </Box>
      <Box>
        <Typography variant="body2" gutterBottom>
          Disabled
        </Typography>
        <Slider orientation="vertical" defaultValue={30} disabled aria-label="Disabled vertical" />
      </Box>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Set the orientation prop to "vertical" to create vertical sliders. The thumb will track vertical movement instead of horizontal movement.',
      },
    },
  },
};

export const AllHorizontalVariants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%', p: 3 }}>
      <Typography variant="h6">All Horizontal Slider Variants</Typography>

      {/* Medium Size */}
      <Box>
        <Typography variant="body1" sx={{ mb: 2, fontWeight: 'bold' }}>
          Size: Medium
        </Typography>
        <Stack spacing={2}>
          <Box sx={{ width: 300 }}>
            <Typography variant="caption">Continuous - Enabled</Typography>
            <Slider size="medium" defaultValue={30} />
          </Box>
          <Box sx={{ width: 300 }}>
            <Typography variant="caption">Continuous - Disabled</Typography>
            <Slider size="medium" defaultValue={30} disabled />
          </Box>
          <Box sx={{ width: 300 }}>
            <Typography variant="caption">With Marks - Enabled</Typography>
            <Slider size="medium" defaultValue={30} marks step={10} />
          </Box>
          <Box sx={{ width: 300 }}>
            <Typography variant="caption">With Marks - Disabled</Typography>
            <Slider size="medium" defaultValue={30} marks step={10} disabled />
          </Box>
          <Box sx={{ width: 300 }}>
            <Typography variant="caption">Range - Enabled</Typography>
            <Slider size="medium" defaultValue={[20, 40]} />
          </Box>
          <Box sx={{ width: 300 }}>
            <Typography variant="caption">Range - Disabled</Typography>
            <Slider size="medium" defaultValue={[20, 40]} disabled />
          </Box>
        </Stack>
      </Box>

      {/* Small Size */}
      <Box>
        <Typography variant="body1" sx={{ mb: 2, fontWeight: 'bold' }}>
          Size: Small
        </Typography>
        <Stack spacing={2}>
          <Box sx={{ width: 300 }}>
            <Typography variant="caption">Continuous - Enabled</Typography>
            <Slider size="small" defaultValue={30} />
          </Box>
          <Box sx={{ width: 300 }}>
            <Typography variant="caption">Continuous - Disabled</Typography>
            <Slider size="small" defaultValue={30} disabled />
          </Box>
          <Box sx={{ width: 300 }}>
            <Typography variant="caption">With Marks - Enabled</Typography>
            <Slider size="small" defaultValue={30} marks step={10} />
          </Box>
          <Box sx={{ width: 300 }}>
            <Typography variant="caption">With Marks - Disabled</Typography>
            <Slider size="small" defaultValue={30} marks step={10} disabled />
          </Box>
          <Box sx={{ width: 300 }}>
            <Typography variant="caption">Range - Enabled</Typography>
            <Slider size="small" defaultValue={[20, 40]} />
          </Box>
          <Box sx={{ width: 300 }}>
            <Typography variant="caption">Range - Disabled</Typography>
            <Slider size="small" defaultValue={[20, 40]} disabled />
          </Box>
        </Stack>
      </Box>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Comprehensive view of all horizontal slider size and variant combinations with different states.',
      },
    },
  },
};

export const AllVerticalVariants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, p: 3 }}>
      <Typography variant="h6">All Vertical Slider Variants</Typography>

      {/* Medium Size */}
      <Box>
        <Typography variant="body1" sx={{ mb: 2, fontWeight: 'bold' }}>
          Size: Medium
        </Typography>
        <Stack direction="row" spacing={3} sx={{ height: 300 }}>
          <Box>
            <Typography variant="caption">Continuous</Typography>
            <Slider size="medium" orientation="vertical" defaultValue={30} />
          </Box>
          <Box>
            <Typography variant="caption">Continuous (Disabled)</Typography>
            <Slider size="medium" orientation="vertical" defaultValue={30} disabled />
          </Box>
          <Box>
            <Typography variant="caption">With Marks</Typography>
            <Slider size="medium" orientation="vertical" defaultValue={30} marks step={10} />
          </Box>
          <Box>
            <Typography variant="caption">Marks (Disabled)</Typography>
            <Slider
              size="medium"
              orientation="vertical"
              defaultValue={30}
              marks
              step={10}
              disabled
            />
          </Box>
          <Box>
            <Typography variant="caption">Range</Typography>
            <Slider size="medium" orientation="vertical" defaultValue={[20, 40]} />
          </Box>
          <Box>
            <Typography variant="caption">Range (Disabled)</Typography>
            <Slider size="medium" orientation="vertical" defaultValue={[20, 40]} disabled />
          </Box>
        </Stack>
      </Box>

      {/* Small Size */}
      <Box>
        <Typography variant="body1" sx={{ mb: 2, fontWeight: 'bold' }}>
          Size: Small
        </Typography>
        <Stack direction="row" spacing={3} sx={{ height: 300 }}>
          <Box>
            <Typography variant="caption">Continuous</Typography>
            <Slider size="small" orientation="vertical" defaultValue={30} />
          </Box>
          <Box>
            <Typography variant="caption">Continuous (Disabled)</Typography>
            <Slider size="small" orientation="vertical" defaultValue={30} disabled />
          </Box>
          <Box>
            <Typography variant="caption">With Marks</Typography>
            <Slider size="small" orientation="vertical" defaultValue={30} marks step={10} />
          </Box>
          <Box>
            <Typography variant="caption">Marks (Disabled)</Typography>
            <Slider
              size="small"
              orientation="vertical"
              defaultValue={30}
              marks
              step={10}
              disabled
            />
          </Box>
          <Box>
            <Typography variant="caption">Range</Typography>
            <Slider size="small" orientation="vertical" defaultValue={[20, 40]} />
          </Box>
          <Box>
            <Typography variant="caption">Range (Disabled)</Typography>
            <Slider size="small" orientation="vertical" defaultValue={[20, 40]} disabled />
          </Box>
        </Stack>
      </Box>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Comprehensive view of all vertical slider size and variant combinations with different states.',
      },
    },
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState<number>(30);

    const handleChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number);
    };

    return (
      <Box sx={{ width: 300 }}>
        <Typography variant="body2" gutterBottom>
          Controlled Slider: {value}
        </Typography>
        <Slider value={value} onChange={handleChange} aria-label="Controlled" />
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a controlled slider with React state.',
      },
    },
  },
};

export const WithValueLabel: Story = {
  render: () => (
    <Stack spacing={3} sx={{ width: 300 }}>
      <Box>
        <Typography variant="body2" gutterBottom>
          Value label auto (on hover)
        </Typography>
        <Slider defaultValue={30} valueLabelDisplay="auto" />
      </Box>
      <Box>
        <Typography variant="body2" gutterBottom>
          Value label always on
        </Typography>
        <Slider defaultValue={50} valueLabelDisplay="on" />
      </Box>
    </Stack>
  ),
};

export const Playground: Story = {
  args: {
    size: 'medium',
    color: 'primary',
    orientation: 'horizontal',
    defaultValue: 30,
    disabled: false,
    marks: false,
    step: 1,
    min: 0,
    max: 100,
    valueLabelDisplay: 'off',
    track: 'normal',
  },
  render: (args) => (
    <Box
      sx={{
        width: args.orientation === 'vertical' ? 'auto' : 300,
        height: args.orientation === 'vertical' ? 300 : 'auto',
      }}
    >
      <Slider {...args} />
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to experiment with all Slider props.',
      },
    },
  },
};
