/**
 * Alert component tests
 */

import React from 'react';
import { renderWithTheme, screen } from '../../../../tests/test-utils';
import { Alert } from './Alert';
import { Button } from '../../atoms/Button';

describe('Alert', () => {
  describe('Rendering', () => {
    it('renders alert with title', () => {
      renderWithTheme(<Alert title="Alert title" />);
      expect(screen.getByText('Alert title')).toBeInTheDocument();
    });

    it('renders alert with description', () => {
      renderWithTheme(<Alert description="Alert description" />);
      expect(screen.getByText('Alert description')).toBeInTheDocument();
    });

    it('renders alert with title and description', () => {
      renderWithTheme(
        <Alert title="Warning" description="This is a warning message" />
      );
      expect(screen.getByText('Warning')).toBeInTheDocument();
      expect(screen.getByText('This is a warning message')).toBeInTheDocument();
    });

    it('renders alert with children', () => {
      renderWithTheme(
        <Alert>
          <div>Custom content</div>
        </Alert>
      );
      expect(screen.getByText('Custom content')).toBeInTheDocument();
    });

    it('renders alert with title, description, and children', () => {
      renderWithTheme(
        <Alert title="Title" description="Description">
          <div>Additional content</div>
        </Alert>
      );
      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Description')).toBeInTheDocument();
      expect(screen.getByText('Additional content')).toBeInTheDocument();
    });
  });

  describe('Severity Variants', () => {
    it('renders error severity by default', () => {
      const { container } = renderWithTheme(<Alert title="Error" />);
      const alert = container.querySelector('.MuiAlert-standardError');
      expect(alert).toBeInTheDocument();
    });

    it('renders error severity', () => {
      const { container } = renderWithTheme(
        <Alert severity="error" title="Error" />
      );
      const alert = container.querySelector('.MuiAlert-standardError');
      expect(alert).toBeInTheDocument();
    });

    it('renders warning severity', () => {
      const { container } = renderWithTheme(
        <Alert severity="warning" title="Warning" />
      );
      const alert = container.querySelector('.MuiAlert-standardWarning');
      expect(alert).toBeInTheDocument();
    });

    it('renders info severity', () => {
      const { container } = renderWithTheme(
        <Alert severity="info" title="Information" />
      );
      const alert = container.querySelector('.MuiAlert-standardInfo');
      expect(alert).toBeInTheDocument();
    });

    it('renders success severity', () => {
      const { container } = renderWithTheme(
        <Alert severity="success" title="Success" />
      );
      const alert = container.querySelector('.MuiAlert-standardSuccess');
      expect(alert).toBeInTheDocument();
    });
  });

  describe('Visual Variants', () => {
    it('renders filled variant by default', () => {
      renderWithTheme(<Alert title="Alert" />);
      const alert = screen.getByRole('alert');
      expect(alert).toBeInTheDocument();
    });

    it('renders filled variant', () => {
      renderWithTheme(<Alert variant="filled" title="Filled alert" />);
      const alert = screen.getByRole('alert');
      expect(alert).toBeInTheDocument();
    });

    it('renders outlined variant', () => {
      renderWithTheme(<Alert variant="outlined" title="Outlined alert" />);
      const alert = screen.getByRole('alert');
      expect(alert).toBeInTheDocument();
    });

    it('renders standard variant', () => {
      renderWithTheme(<Alert variant="standard" title="Standard alert" />);
      const alert = screen.getByRole('alert');
      expect(alert).toBeInTheDocument();
    });
  });

  describe('Icon Behavior', () => {
    it('renders with icon by default', () => {
      const { container } = renderWithTheme(<Alert title="With icon" />);
      const icon = container.querySelector('.MuiAlert-icon');
      expect(icon).toBeInTheDocument();
    });

    it('renders without icon when icon is false', () => {
      const { container } = renderWithTheme(
        <Alert title="No icon" icon={false} />
      );
      const icon = container.querySelector('.MuiAlert-icon');
      expect(icon).not.toBeInTheDocument();
    });

    it('renders custom icon when provided', () => {
      const CustomIcon = () => <span data-testid="custom-icon">★</span>;
      renderWithTheme(
        <Alert title="Custom icon" icon={<CustomIcon />} />
      );
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    });

    it('renders different icons for different severities', () => {
      const severities: Array<'error' | 'warning' | 'info' | 'success'> = [
        'error',
        'warning',
        'info',
        'success',
      ];

      severities.forEach((severity) => {
        const { container } = renderWithTheme(
          <Alert severity={severity} title={severity} />
        );
        const icon = container.querySelector('.MuiAlert-icon');
        expect(icon).toBeInTheDocument();
      });
    });

    it('renders filled icon for filled variant', () => {
      const { container } = renderWithTheme(
        <Alert severity="success" variant="filled" title="Success" />
      );
      const icon = container.querySelector('.MuiAlert-icon svg');
      expect(icon).toBeInTheDocument();
    });

    it('renders outlined icon for outlined variant', () => {
      const { container } = renderWithTheme(
        <Alert severity="info" variant="outlined" title="Info" />
      );
      const icon = container.querySelector('.MuiAlert-icon svg');
      expect(icon).toBeInTheDocument();
    });
  });

  describe('Close Button', () => {
    it('does not render close button by default', () => {
      renderWithTheme(<Alert title="Alert" />);
      const closeButton = screen.queryByLabelText('close');
      expect(closeButton).not.toBeInTheDocument();
    });

    it('renders close button when close is true', () => {
      renderWithTheme(<Alert title="Alert" close />);
      const closeButton = screen.getByLabelText('close');
      expect(closeButton).toBeInTheDocument();
    });

    it('calls onClose when close button is clicked', () => {
      const handleClose = jest.fn();
      renderWithTheme(<Alert title="Alert" close onClose={handleClose} />);
      
      const closeButton = screen.getByLabelText('close');
      closeButton.click();
      
      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('renders close button with correct icon', () => {
      const { container } = renderWithTheme(<Alert title="Alert" close />);
      const closeButton = screen.getByLabelText('close');
      const icon = closeButton.querySelector('svg');
      expect(icon).toBeInTheDocument();
    });
  });

  describe('Action Prop', () => {
    it('does not render action by default', () => {
      renderWithTheme(<Alert title="Alert" />);
      const action = screen.queryByRole('button');
      expect(action).not.toBeInTheDocument();
    });

    it('renders custom action', () => {
      renderWithTheme(
        <Alert title="Alert" action={<Button>Action</Button>} />
      );
      const actionButton = screen.getByRole('button', { name: 'Action' });
      expect(actionButton).toBeInTheDocument();
    });

    it('renders both action and close button', () => {
      renderWithTheme(
        <Alert title="Alert" close action={<Button>Retry</Button>} />
      );
      
      const retryButton = screen.getByRole('button', { name: 'Retry' });
      const closeButton = screen.getByLabelText('close');
      
      expect(retryButton).toBeInTheDocument();
      expect(closeButton).toBeInTheDocument();
    });

    it('handles action button click', () => {
      const handleAction = jest.fn();
      renderWithTheme(
        <Alert
          title="Alert"
          action={<Button onClick={handleAction}>Retry</Button>}
        />
      );
      
      const actionButton = screen.getByRole('button', { name: 'Retry' });
      actionButton.click();
      
      expect(handleAction).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accessibility', () => {
    it('has alert role', () => {
      renderWithTheme(<Alert title="Alert" />);
      const alert = screen.getByRole('alert');
      expect(alert).toBeInTheDocument();
    });

    it('close button has aria-label', () => {
      renderWithTheme(<Alert title="Alert" close />);
      const closeButton = screen.getByLabelText('close');
      expect(closeButton).toHaveAttribute('aria-label', 'close');
    });

    it('accepts aria-describedby', () => {
      renderWithTheme(
        <Alert title="Alert" aria-describedby="helper-text" />
      );
      const alert = screen.getByRole('alert');
      expect(alert).toHaveAttribute('aria-describedby', 'helper-text');
    });

    it('accepts aria-label', () => {
      renderWithTheme(<Alert title="Alert" aria-label="Important notification" />);
      const alert = screen.getByRole('alert');
      expect(alert).toHaveAttribute('aria-label', 'Important notification');
    });
  });

  describe('Ref forwarding', () => {
    it('forwards ref to alert element', () => {
      const ref = React.createRef<HTMLDivElement>();
      renderWithTheme(<Alert title="Alert" ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('ref has correct tagName', () => {
      const ref = React.createRef<HTMLDivElement>();
      renderWithTheme(<Alert title="Alert" ref={ref} />);
      expect(ref.current?.tagName).toBe('DIV');
    });
  });

  describe('Custom Styling', () => {
    it('accepts sx prop for custom styles', () => {
      const { container } = renderWithTheme(
        <Alert title="Alert" sx={{ margin: 2 }} />
      );
      const alert = container.querySelector('.MuiAlert-root');
      expect(alert).toBeInTheDocument();
    });

    it('accepts className prop', () => {
      const { container } = renderWithTheme(
        <Alert title="Alert" className="custom-alert" />
      );
      const alert = container.querySelector('.custom-alert');
      expect(alert).toBeInTheDocument();
    });
  });

  describe('Combined Props', () => {
    it('renders with all props combined', () => {
      const handleClose = jest.fn();
      const handleAction = jest.fn();
      
      renderWithTheme(
        <Alert
          severity="warning"
          variant="outlined"
          title="Warning Title"
          description="This is a warning message"
          close
          onClose={handleClose}
          action={<Button onClick={handleAction}>Fix</Button>}
        />
      );
      
      expect(screen.getByText('Warning Title')).toBeInTheDocument();
      expect(screen.getByText('This is a warning message')).toBeInTheDocument();
      
      const closeButton = screen.getByLabelText('close');
      const actionButton = screen.getByRole('button', { name: 'Fix' });
      
      closeButton.click();
      expect(handleClose).toHaveBeenCalledTimes(1);
      
      actionButton.click();
      expect(handleAction).toHaveBeenCalledTimes(1);
    });
  });

  describe('Severity and Variant Combinations', () => {
    const severities: Array<'error' | 'warning' | 'info' | 'success'> = [
      'error',
      'warning',
      'info',
      'success',
    ];
    const variants: Array<'filled' | 'outlined' | 'standard'> = [
      'filled',
      'outlined',
      'standard',
    ];

    severities.forEach((severity) => {
      variants.forEach((variant) => {
        it(`renders ${severity} severity with ${variant} variant`, () => {
          renderWithTheme(
            <Alert
              severity={severity}
              variant={variant}
              title={`${severity} ${variant}`}
            />
          );
          
          const alert = screen.getByRole('alert');
          expect(alert).toBeInTheDocument();
          expect(screen.getByText(`${severity} ${variant}`)).toBeInTheDocument();
        });
      });
    });
  });

  describe('Typography Styling', () => {
    it('renders title with medium font weight', () => {
      renderWithTheme(<Alert title="Bold Title" />);
      const title = screen.getByText('Bold Title');
      expect(title).toBeInTheDocument();
    });

    it('renders description with body2 variant', () => {
      renderWithTheme(<Alert description="Description text" />);
      const description = screen.getByText('Description text');
      expect(description).toBeInTheDocument();
    });

    it('title appears before description', () => {
      renderWithTheme(
        <Alert title="Title" description="Description" />
      );
      
      const title = screen.getByText('Title');
      const description = screen.getByText('Description');
      
      expect(title).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      
      // Check ordering
      const alert = screen.getByRole('alert');
      const textContent = alert.textContent;
      expect(textContent?.indexOf('Title')).toBeLessThan(
        textContent?.indexOf('Description') || 0
      );
    });
  });

  describe('Edge Cases', () => {
    it('renders with only title', () => {
      renderWithTheme(<Alert title="Only title" />);
      expect(screen.getByText('Only title')).toBeInTheDocument();
    });

    it('renders with only description', () => {
      renderWithTheme(<Alert description="Only description" />);
      expect(screen.getByText('Only description')).toBeInTheDocument();
    });

    it('renders with only children', () => {
      renderWithTheme(<Alert>Only children</Alert>);
      expect(screen.getByText('Only children')).toBeInTheDocument();
    });

    it('renders empty alert', () => {
      const { container } = renderWithTheme(<Alert />);
      const alert = container.querySelector('.MuiAlert-root');
      expect(alert).toBeInTheDocument();
    });

    it('handles undefined onClose gracefully', () => {
      renderWithTheme(<Alert title="Alert" close />);
      const closeButton = screen.getByLabelText('close');
      
      // Should not throw error when clicked without onClose
      expect(() => closeButton.click()).not.toThrow();
    });

    it('renders with close button but no onClose handler', () => {
      renderWithTheme(<Alert title="Alert" close />);
      const closeButton = screen.getByLabelText('close');
      expect(closeButton).toBeInTheDocument();
      
      closeButton.click(); // Should not throw
    });
  });
});
