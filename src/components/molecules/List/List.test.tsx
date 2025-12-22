/**
 * List component tests
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '../../../tests/test-utils';
import { List } from './List';
import { ListItem } from '../ListItem';
import { ListItemText, ListSubheader } from '@mui/material';

describe('List', () => {
  describe('Rendering', () => {
    it('should render successfully', () => {
      render(
        <List>
          <ListItem>
            <ListItemText primary="Item 1" />
          </ListItem>
        </List>
      );
      expect(screen.getByText('Item 1')).toBeInTheDocument();
    });

    it('should render multiple items', () => {
      render(
        <List>
          <ListItem>
            <ListItemText primary="Item 1" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Item 2" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Item 3" />
          </ListItem>
        </List>
      );

      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
      expect(screen.getByText('Item 3')).toBeInTheDocument();
    });

    it('should render with subheader', () => {
      render(
        <List
          subheader={
            <ListSubheader component="div" id="list-subheader">
              Settings
            </ListSubheader>
          }
        >
          <ListItem>
            <ListItemText primary="Item 1" />
          </ListItem>
        </List>
      );

      expect(screen.getByText('Settings')).toBeInTheDocument();
      expect(screen.getByText('Item 1')).toBeInTheDocument();
    });
  });

  describe('Props', () => {
    it('should apply dense prop', () => {
      const { container } = render(
        <List dense>
          <ListItem>
            <ListItemText primary="Item 1" />
          </ListItem>
        </List>
      );

      const listElement = container.querySelector('.MuiList-dense');
      expect(listElement).toBeInTheDocument();
    });

    it('should apply disablePadding prop', () => {
      const { container } = render(
        <List disablePadding>
          <ListItem>
            <ListItemText primary="Item 1" />
          </ListItem>
        </List>
      );

      const listElement = container.querySelector('.MuiList-root');
      expect(listElement).toBeInTheDocument();
      expect(listElement).not.toHaveClass('MuiList-padding');
    });

    it('should render as ordered list when component prop is "ol"', () => {
      const { container } = render(
        <List component="ol">
          <ListItem>
            <ListItemText primary="Item 1" />
          </ListItem>
        </List>
      );

      const olElement = container.querySelector('ol');
      expect(olElement).toBeInTheDocument();
    });

    it('should apply custom sx prop', () => {
      const { container } = render(
        <List sx={{ backgroundColor: 'primary.main' }}>
          <ListItem>
            <ListItemText primary="Item 1" />
          </ListItem>
        </List>
      );

      const listElement = container.querySelector('.MuiList-root');
      expect(listElement).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should render as ul by default', () => {
      const { container } = render(
        <List>
          <ListItem>
            <ListItemText primary="Item 1" />
          </ListItem>
        </List>
      );

      const ulElement = container.querySelector('ul');
      expect(ulElement).toBeInTheDocument();
    });

    it('should support aria attributes', () => {
      render(
        <List aria-label="test list">
          <ListItem>
            <ListItemText primary="Item 1" />
          </ListItem>
        </List>
      );

      const listElement = screen.getByLabelText('test list');
      expect(listElement).toBeInTheDocument();
    });
  });

  describe('Children Composition', () => {
    it('should render children correctly', () => {
      render(
        <List>
          <ListItem>
            <ListItemText primary="Item 1" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Item 2" />
          </ListItem>
        </List>
      );

      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
    });
  });
});

