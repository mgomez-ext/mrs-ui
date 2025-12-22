/**
 * Button component stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
      description: 'The variant of the button',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'],
      description: 'The color of the button',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button takes full width',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * Primary contained button
 */
export const Primary: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    children: 'Primary Button',
  },
};

/**
 * Secondary contained button
 */
export const Secondary: Story = {
  args: {
    variant: 'contained',
    color: 'secondary',
    children: 'Secondary Button',
  },
};

/**
 * Outlined button
 */
export const Outlined: Story = {
  args: {
    variant: 'outlined',
    color: 'primary',
    children: 'Outlined Button',
  },
};

/**
 * Text button
 */
export const Text: Story = {
  args: {
    variant: 'text',
    color: 'primary',
    children: 'Text Button',
  },
};

/**
 * Small button
 */
export const Small: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    size: 'small',
    children: 'Small Button',
  },
};

/**
 * Medium button (default)
 */
export const Medium: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    children: 'Medium Button',
  },
};

/**
 * Large button
 */
export const Large: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    size: 'large',
    children: 'Large Button',
  },
};

/**
 * Disabled button
 */
export const Disabled: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    disabled: true,
    children: 'Disabled Button',
  },
};

/**
 * Full width button
 */
export const FullWidth: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    fullWidth: true,
    children: 'Full Width Button',
  },
};

/**
 * Error button
 */
export const Error: Story = {
  args: {
    variant: 'contained',
    color: 'error',
    children: 'Error Button',
  },
};

/**
 * Warning button
 */
export const Warning: Story = {
  args: {
    variant: 'contained',
    color: 'warning',
    children: 'Warning Button',
  },
};

/**
 * Info button
 */
export const Info: Story = {
  args: {
    variant: 'contained',
    color: 'info',
    children: 'Info Button',
  },
};

/**
 * Success button
 */
export const Success: Story = {
  args: {
    variant: 'contained',
    color: 'success',
    children: 'Success Button',
  },
};
