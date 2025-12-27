/**
 * Link component stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';
import { Typography } from '../Typography';

const meta: Meta<typeof Link> = {
  title: 'Atoms/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'inherit', 'textPrimary', 'textSecondary'],
      description: 'The color of the link',
    },
    underline: {
      control: 'select',
      options: ['none', 'hover', 'always'],
      description: 'Controls when the link should have an underline',
    },
    variant: {
      control: 'select',
      options: ['body1', 'body2', 'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit', 'overline', 'subtitle1', 'subtitle2'],
      description: 'Applies the theme typography styles',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

/**
 * Basic link
 */
export const Basic: Story = {
  args: {
    href: 'https://example.com',
    children: 'Click here',
  },
};

/**
 * Link with primary color
 */
export const Primary: Story = {
  args: {
    href: 'https://example.com',
    color: 'primary',
    children: 'Primary Link',
  },
};

/**
 * Link with secondary color
 */
export const Secondary: Story = {
  args: {
    href: 'https://example.com',
    color: 'secondary',
    children: 'Secondary Link',
  },
};

/**
 * Underline variants
 */
export const UnderlineVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Link href="#" underline="none">
        No underline
      </Link>
      <Link href="#" underline="hover">
        Underline on hover (default)
      </Link>
      <Link href="#" underline="always">
        Always underlined
      </Link>
    </div>
  ),
};

/**
 * All colors
 */
export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Link href="#" color="primary">Primary</Link>
      <Link href="#" color="secondary">Secondary</Link>
      <Link href="#" color="error">Error</Link>
      <Link href="#" color="warning">Warning</Link>
      <Link href="#" color="info">Info</Link>
      <Link href="#" color="success">Success</Link>
      <Link href="#" color="inherit">Inherit</Link>
      <Link href="#" color="textPrimary">Text Primary</Link>
      <Link href="#" color="textSecondary">Text Secondary</Link>
    </div>
  ),
};

/**
 * Typography variants
 */
export const TypographyVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Link href="#" variant="h1">Heading 1 Link</Link>
      <Link href="#" variant="h2">Heading 2 Link</Link>
      <Link href="#" variant="h3">Heading 3 Link</Link>
      <Link href="#" variant="body1">Body 1 Link (default)</Link>
      <Link href="#" variant="body2">Body 2 Link</Link>
      <Link href="#" variant="caption">Caption Link</Link>
      <Link href="#" variant="button">Button Link</Link>
    </div>
  ),
};

/**
 * External link (opens in new tab)
 */
export const ExternalLink: Story = {
  args: {
    href: 'https://example.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: 'Open in new tab',
  },
};

/**
 * Link in text
 */
export const InlineLink: Story = {
  render: () => (
    <Typography variant="body1">
      This is a paragraph with an{' '}
      <Link href="#" color="primary">
        inline link
      </Link>{' '}
      that inherits the text styling.
    </Typography>
  ),
};

/**
 * Link with onClick handler
 */
export const WithOnClick: Story = {
  render: () => (
    <Link
      href="#"
      onClick={(e) => {
        e.preventDefault();
        alert('Link clicked!');
      }}
    >
      Click me (prevents default)
    </Link>
  ),
};

/**
 * Disabled appearance (using button element)
 */
export const DisabledAppearance: Story = {
  render: () => (
    <Link
      component="button"
      disabled
      sx={{
        color: 'text.disabled',
        cursor: 'not-allowed',
        pointerEvents: 'none',
      }}
    >
      Disabled Link
    </Link>
  ),
};

/**
 * Link as button
 */
export const AsButton: Story = {
  render: () => (
    <Link
      component="button"
      variant="button"
      onClick={() => alert('Button link clicked!')}
      sx={{
        border: 'none',
        background: 'none',
      }}
    >
      Link as Button
    </Link>
  ),
};

/**
 * Navigation links
 */
export const NavigationLinks: Story = {
  render: () => (
    <nav style={{ display: 'flex', gap: '24px' }}>
      <Link href="#" underline="hover">Home</Link>
      <Link href="#" underline="hover">About</Link>
      <Link href="#" underline="hover">Services</Link>
      <Link href="#" underline="hover">Contact</Link>
    </nav>
  ),
};

/**
 * Links in a list
 */
export const InList: Story = {
  render: () => (
    <ul>
      <li>
        <Link href="#" color="primary">Documentation</Link>
      </li>
      <li>
        <Link href="#" color="primary">API Reference</Link>
      </li>
      <li>
        <Link href="#" color="primary">Examples</Link>
      </li>
      <li>
        <Link href="#" color="primary">GitHub Repository</Link>
      </li>
    </ul>
  ),
};

/**
 * Breadcrumb links
 */
export const Breadcrumbs: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Link href="#" color="inherit" underline="hover">Home</Link>
      <span>/</span>
      <Link href="#" color="inherit" underline="hover">Products</Link>
      <span>/</span>
      <Link href="#" color="inherit" underline="hover">Category</Link>
      <span>/</span>
      <Typography variant="body1" component="span">Current Page</Typography>
    </div>
  ),
};

/**
 * Footer links
 */
export const FooterLinks: Story = {
  render: () => (
    <footer style={{ display: 'flex', gap: '32px', padding: '24px', backgroundColor: '#f5f5f5' }}>
      <div>
        <Typography variant="h6" gutterBottom>Company</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="#" color="textPrimary" underline="hover">About Us</Link>
          <Link href="#" color="textPrimary" underline="hover">Careers</Link>
          <Link href="#" color="textPrimary" underline="hover">Press</Link>
        </div>
      </div>
      <div>
        <Typography variant="h6" gutterBottom>Support</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Link href="#" color="textPrimary" underline="hover">Help Center</Link>
          <Link href="#" color="textPrimary" underline="hover">Contact Us</Link>
          <Link href="#" color="textPrimary" underline="hover">FAQ</Link>
        </div>
      </div>
    </footer>
  ),
};

/**
 * Custom styled link
 */
export const CustomStyled: Story = {
  render: () => (
    <Link
      href="#"
      sx={{
        fontSize: '20px',
        fontWeight: 600,
        textDecoration: 'none',
        color: 'primary.main',
        '&:hover': {
          textDecoration: 'underline',
          color: 'primary.dark',
        },
      }}
    >
      Custom Styled Link
    </Link>
  ),
};
