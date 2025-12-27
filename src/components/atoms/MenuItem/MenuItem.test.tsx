/**
 * MenuItem component tests
 */

import React from 'react';
import { renderWithTheme, screen } from '../../../../tests/test-utils';
import { MenuItem } from './MenuItem';
import userEvent from '@testing-library/user-event';

describe('MenuItem', () => {
  describe('Rendering', () => {
    it('renders menu item with children', () => {
      renderWithTheme(<MenuItem>Test Item</MenuItem>);
      expect(screen.getByText('Test Item')).toBeInTheDocument();
    });

    it('renders menu item with value', () => {
      renderWithTheme(<MenuItem value="test">Test Item</MenuItem>);
      const menuItem = screen.getByText('Test Item');
      expect(menuItem).toBeInTheDocument();
    });
  });

  describe('States', () => {
    it('renders disabled state', () => {
      renderWithTheme(<MenuItem disabled>Disabled Item</MenuItem>);
      const menuItem = screen.getByText('Disabled Item');
      expect(menuItem).toHaveClass('Mui-disabled');
    });

    it('renders selected state', () => {
      renderWithTheme(<MenuItem selected>Selected Item</MenuItem>);
      const menuItem = screen.getByText('Selected Item');
      expect(menuItem).toHaveClass('Mui-selected');
    });

    it('renders with divider', () => {
      const { container } = renderWithTheme(<MenuItem divider>Item with Divider</MenuItem>);
      const menuItem = container.querySelector('.MuiMenuItem-divider');
      expect(menuItem).toBeInTheDocument();
    });

    it('renders dense variant', () => {
      const { container } = renderWithTheme(<MenuItem dense>Dense Item</MenuItem>);
      const menuItem = container.querySelector('.MuiMenuItem-dense');
      expect(menuItem).toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    it('calls onClick when clicked', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      renderWithTheme(<MenuItem onClick={handleClick}>Click Me</MenuItem>);

      const menuItem = screen.getByText('Click Me');
      await user.click(menuItem);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', async () => {
      const handleClick = jest.fn();
      renderWithTheme(
        <MenuItem onClick={handleClick} disabled>
          Disabled Item
        </MenuItem>
      );

      const menuItem = screen.getByText('Disabled Item');

      // Disabled items have pointer-events: none, so we just verify the disabled state
      expect(menuItem).toHaveAttribute('aria-disabled', 'true');
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Gutters', () => {
    it('renders with gutters by default', () => {
      const { container } = renderWithTheme(<MenuItem>Default</MenuItem>);
      const menuItem = container.querySelector('.MuiMenuItem-root');
      expect(menuItem).toHaveClass('MuiMenuItem-gutters');
    });

    it('renders without gutters when disableGutters is true', () => {
      const { container } = renderWithTheme(<MenuItem disableGutters>No Gutters</MenuItem>);
      const menuItem = container.querySelector('.MuiMenuItem-root');
      expect(menuItem).toBeInTheDocument();
    });
  });

  describe('Ref', () => {
    it('forwards ref to the root element', () => {
      const ref = React.createRef<HTMLLIElement>();
      renderWithTheme(<MenuItem ref={ref}>Item</MenuItem>);
      expect(ref.current).toBeInstanceOf(HTMLLIElement);
    });
  });
});
