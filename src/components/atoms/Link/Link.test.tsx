/**
 * Link component tests
 */

import React from 'react';
import { renderWithTheme, screen } from '../../../../tests/test-utils';
import { Link } from './Link';
import userEvent from '@testing-library/user-event';

describe('Link', () => {
  describe('Rendering', () => {
    it('renders link with text', () => {
      renderWithTheme(<Link href="https://example.com">Click here</Link>);
      expect(screen.getByText('Click here')).toBeInTheDocument();
    });

    it('renders with href attribute', () => {
      renderWithTheme(<Link href="https://example.com">Link</Link>);
      const link = screen.getByText('Link');
      expect(link).toHaveAttribute('href', 'https://example.com');
    });

    it('renders as anchor element by default', () => {
      renderWithTheme(<Link href="#">Link</Link>);
      const link = screen.getByText('Link');
      expect(link.tagName).toBe('A');
    });
  });

  describe('Colors', () => {
    it('renders with primary color', () => {
      renderWithTheme(
        <Link href="#" color="primary">
          Primary
        </Link>
      );
      const link = screen.getByText('Primary');
      expect(link).toBeInTheDocument();
    });

    it('renders with secondary color', () => {
      renderWithTheme(
        <Link href="#" color="secondary">
          Secondary
        </Link>
      );
      const link = screen.getByText('Secondary');
      expect(link).toBeInTheDocument();
    });

    it('renders with error color', () => {
      renderWithTheme(
        <Link href="#" color="error">
          Error
        </Link>
      );
      const link = screen.getByText('Error');
      expect(link).toBeInTheDocument();
    });
  });

  describe('Underline', () => {
    it('renders with hover underline by default', () => {
      const { container } = renderWithTheme(<Link href="#">Link</Link>);
      const link = container.querySelector('.MuiLink-root');
      expect(link).toHaveClass('MuiLink-underlineHover');
    });

    it('renders with no underline', () => {
      const { container } = renderWithTheme(
        <Link href="#" underline="none">
          Link
        </Link>
      );
      const link = container.querySelector('.MuiLink-root');
      expect(link).toHaveClass('MuiLink-underlineNone');
    });

    it('renders with always underline', () => {
      const { container } = renderWithTheme(
        <Link href="#" underline="always">
          Link
        </Link>
      );
      const link = container.querySelector('.MuiLink-root');
      expect(link).toHaveClass('MuiLink-underlineAlways');
    });
  });

  describe('Typography Variants', () => {
    it('renders with body1 variant by default', () => {
      const { container } = renderWithTheme(<Link href="#">Link</Link>);
      const link = container.querySelector('.MuiLink-root');
      expect(link).toHaveClass('MuiTypography-body1');
    });

    it('renders with h1 variant', () => {
      const { container } = renderWithTheme(
        <Link href="#" variant="h1">
          Heading Link
        </Link>
      );
      const link = container.querySelector('.MuiLink-root');
      expect(link).toHaveClass('MuiTypography-h1');
    });

    it('renders with button variant', () => {
      const { container } = renderWithTheme(
        <Link href="#" variant="button">
          Button Link
        </Link>
      );
      const link = container.querySelector('.MuiLink-root');
      expect(link).toHaveClass('MuiTypography-button');
    });
  });

  describe('Target and Rel', () => {
    it('renders with target="_blank"', () => {
      renderWithTheme(
        <Link href="https://example.com" target="_blank">
          External
        </Link>
      );
      const link = screen.getByText('External');
      expect(link).toHaveAttribute('target', '_blank');
    });

    it('renders with rel attribute', () => {
      renderWithTheme(
        <Link href="https://example.com" rel="noopener noreferrer">
          External
        </Link>
      );
      const link = screen.getByText('External');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('renders external link with both target and rel', () => {
      renderWithTheme(
        <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
          External
        </Link>
      );
      const link = screen.getByText('External');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('Interactions', () => {
    it('calls onClick when clicked', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn((e) => e.preventDefault());
      renderWithTheme(
        <Link href="#" onClick={handleClick}>
          Click me
        </Link>
      );

      const link = screen.getByText('Click me');
      await user.click(link);

      expect(handleClick).toHaveBeenCalled();
    });

    it('navigates on click (default behavior)', () => {
      renderWithTheme(<Link href="#test">Navigate</Link>);
      const link = screen.getByText('Navigate');
      expect(link).toHaveAttribute('href', '#test');
    });
  });

  describe('Component Prop', () => {
    it('renders as button when component="button"', () => {
      renderWithTheme(
        <Link component="button" onClick={() => {}}>
          Button Link
        </Link>
      );
      const link = screen.getByText('Button Link');
      expect(link.tagName).toBe('BUTTON');
    });

    it('renders as span when component="span"', () => {
      renderWithTheme(<Link component="span">Span Link</Link>);
      const link = screen.getByText('Span Link');
      expect(link.tagName).toBe('SPAN');
    });
  });

  describe('Accessibility', () => {
    it('has role="link" by default', () => {
      renderWithTheme(<Link href="#">Accessible Link</Link>);
      const link = screen.getByRole('link');
      expect(link).toBeInTheDocument();
    });

    it('is keyboard accessible', async () => {
      const _user = userEvent.setup();
      const handleClick = jest.fn((e) => e.preventDefault());
      renderWithTheme(
        <Link href="#" onClick={handleClick}>
          Keyboard Link
        </Link>
      );

      const link = screen.getByText('Keyboard Link');
      link.focus();
      expect(link).toHaveFocus();
    });
  });

  describe('Ref', () => {
    it('forwards ref to the anchor element', () => {
      const ref = React.createRef<HTMLAnchorElement>();
      renderWithTheme(
        <Link ref={ref} href="#">
          Link
        </Link>
      );
      expect(ref.current).toBeTruthy();
      expect(ref.current?.tagName).toBe('A');
    });
  });
});
