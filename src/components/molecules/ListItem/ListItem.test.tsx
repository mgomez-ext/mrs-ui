/**
 * ListItem component tests
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '../../../tests/test-utils';
import userEvent from '@testing-library/user-event';
import { ListItem } from './ListItem';
import { List } from '../List';
import { ListItemText, ListItemIcon } from '@mui/material';

describe('ListItem', () => {
  describe('Rendering', () => {
    it('should render successfully', () => {
      render(
        <List>
          <ListItem>
            <ListItemText primary="Test Item" />
          </ListItem>
        </List>
      );
      expect(screen.getByText('Test Item')).toBeInTheDocument();
    });

    it('should render with icon', () => {
      render(
        <List>
          <ListItem>
            <ListItemIcon>
              <span data-testid="test-icon">Icon</span>
            </ListItemIcon>
            <ListItemText primary="Test Item" />
          </ListItem>
        </List>
      );

      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
      expect(screen.getByText('Test Item')).toBeInTheDocument();
    });

    it('should render with secondary text', () => {
      render(
        <List>
          <ListItem>
            <ListItemText primary="Primary Text" secondary="Secondary Text" />
          </ListItem>
        </List>
      );

      expect(screen.getByText('Primary Text')).toBeInTheDocument();
      expect(screen.getByText('Secondary Text')).toBeInTheDocument();
    });

    it('should render with secondary action', () => {
      render(
        <List>
          <ListItem
            secondaryAction={
              <button data-testid="action-button">Action</button>
            }
          >
            <ListItemText primary="Test Item" />
          </ListItem>
        </List>
      );

      expect(screen.getByTestId('action-button')).toBeInTheDocument();
    });
  });

  describe('Props', () => {
    it('should apply dense prop', () => {
      const { container } = render(
        <List>
          <ListItem dense>
            <ListItemText primary="Test Item" />
          </ListItem>
        </List>
      );

      const listItemElement = container.querySelector('.MuiListItem-dense');
      expect(listItemElement).toBeInTheDocument();
    });

    it('should apply disableGutters prop', () => {
      const { container } = render(
        <List>
          <ListItem disableGutters>
            <ListItemText primary="Test Item" />
          </ListItem>
        </List>
      );

      const listItemElement = container.querySelector('.MuiListItem-root');
      expect(listItemElement).toBeInTheDocument();
      expect(listItemElement).not.toHaveClass('MuiListItem-gutters');
    });

    it('should apply divider prop', () => {
      const { container } = render(
        <List>
          <ListItem divider>
            <ListItemText primary="Test Item" />
          </ListItem>
        </List>
      );

      const listItemElement = container.querySelector('.MuiListItem-divider');
      expect(listItemElement).toBeInTheDocument();
    });

    it('should apply disablePadding prop', () => {
      const { container } = render(
        <List>
          <ListItem disablePadding>
            <ListItemText primary="Test Item" />
          </ListItem>
        </List>
      );

      const listItemElement = container.querySelector('.MuiListItem-root');
      expect(listItemElement).toBeInTheDocument();
      expect(listItemElement).not.toHaveClass('MuiListItem-padding');
    });

    it('should apply custom sx prop', () => {
      const { container } = render(
        <List>
          <ListItem sx={{ backgroundColor: 'primary.main' }}>
            <ListItemText primary="Test Item" />
          </ListItem>
        </List>
      );

      const listItemElement = container.querySelector('.MuiListItem-root');
      expect(listItemElement).toBeInTheDocument();
    });
  });

  describe('Button Variant', () => {
    it('should render as button when button prop is true', () => {
      const { container } = render(
        <List>
          <ListItem button>
            <ListItemText primary="Test Item" />
          </ListItem>
        </List>
      );

      const buttonElement = container.querySelector('.MuiListItemButton-root');
      expect(buttonElement).toBeInTheDocument();
    });

    it('should handle click when button prop is true', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <List>
          <ListItem button onClick={handleClick}>
            <ListItemText primary="Test Item" />
          </ListItem>
        </List>
      );

      const buttonElement = screen.getByText('Test Item').closest('.MuiListItemButton-root');
      expect(buttonElement).toBeInTheDocument();

      if (buttonElement) {
        await user.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
      }
    });

    it('should apply selected state when button is true', () => {
      const { container } = render(
        <List>
          <ListItem button selected>
            <ListItemText primary="Test Item" />
          </ListItem>
        </List>
      );

      const selectedElement = container.querySelector('.Mui-selected');
      expect(selectedElement).toBeInTheDocument();
    });

    it('should apply disabled state when button is true', () => {
      const { container } = render(
        <List>
          <ListItem button disabled>
            <ListItemText primary="Test Item" />
          </ListItem>
        </List>
      );

      const disabledElement = container.querySelector('.Mui-disabled');
      expect(disabledElement).toBeInTheDocument();
    });

    it('should not handle click when disabled', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <List>
          <ListItem button disabled onClick={handleClick}>
            <ListItemText primary="Test Item" />
          </ListItem>
        </List>
      );

      const buttonElement = screen.getByText('Test Item').closest('.MuiListItemButton-root');
      
      if (buttonElement) {
        await user.click(buttonElement);
        expect(handleClick).not.toHaveBeenCalled();
      }
    });
  });

  describe('Accessibility', () => {
    it('should render as li element', () => {
      const { container } = render(
        <List>
          <ListItem>
            <ListItemText primary="Test Item" />
          </ListItem>
        </List>
      );

      const liElement = container.querySelector('li');
      expect(liElement).toBeInTheDocument();
    });

    it('should support aria attributes', () => {
      render(
        <List>
          <ListItem aria-label="test item">
            <ListItemText primary="Test Item" />
          </ListItem>
        </List>
      );

      const itemElement = screen.getByLabelText('test item');
      expect(itemElement).toBeInTheDocument();
    });

    it('should support autoFocus when button is true', () => {
      const { container } = render(
        <List>
          <ListItem button autoFocus>
            <ListItemText primary="Test Item" />
          </ListItem>
        </List>
      );

      const buttonElement = container.querySelector('.MuiListItemButton-root');
      expect(buttonElement).toHaveFocus();
    });
  });

  describe('Children Composition', () => {
    it('should render complex children composition', () => {
      render(
        <List>
          <ListItem
            secondaryAction={
              <button data-testid="action-button">Action</button>
            }
          >
            <ListItemIcon>
              <span data-testid="test-icon">Icon</span>
            </ListItemIcon>
            <ListItemText primary="Primary" secondary="Secondary" />
          </ListItem>
        </List>
      );

      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
      expect(screen.getByText('Primary')).toBeInTheDocument();
      expect(screen.getByText('Secondary')).toBeInTheDocument();
      expect(screen.getByTestId('action-button')).toBeInTheDocument();
    });
  });
});

