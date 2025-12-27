/**
 * Box component tests
 */

import React from 'react';
import { renderWithTheme, screen } from '../../../../tests/test-utils';
import { Box } from './Box';

describe('Box', () => {
  describe('Rendering', () => {
    it('renders box with content', () => {
      renderWithTheme(<Box>Box Content</Box>);
      expect(screen.getByText('Box Content')).toBeInTheDocument();
    });

    it('renders as div by default', () => {
      const { container } = renderWithTheme(<Box>Content</Box>);
      const box = container.firstChild;
      expect(box?.nodeName).toBe('DIV');
    });

    it('renders with children', () => {
      renderWithTheme(
        <Box>
          <span>Child 1</span>
          <span>Child 2</span>
        </Box>
      );
      expect(screen.getByText('Child 1')).toBeInTheDocument();
      expect(screen.getByText('Child 2')).toBeInTheDocument();
    });
  });

  describe('Component Prop', () => {
    it('renders as section when component="section"', () => {
      const { container } = renderWithTheme(<Box component="section">Content</Box>);
      const box = container.firstChild;
      expect(box?.nodeName).toBe('SECTION');
    });

    it('renders as article when component="article"', () => {
      const { container } = renderWithTheme(<Box component="article">Content</Box>);
      const box = container.firstChild;
      expect(box?.nodeName).toBe('ARTICLE');
    });

    it('renders as span when component="span"', () => {
      const { container } = renderWithTheme(<Box component="span">Content</Box>);
      const box = container.firstChild;
      expect(box?.nodeName).toBe('SPAN');
    });
  });

  describe('SX Prop', () => {
    it('applies sx styles', () => {
      const { container } = renderWithTheme(
        <Box sx={{ padding: 2, backgroundColor: 'primary.main' }}>Content</Box>
      );
      const box = container.firstChild as HTMLElement;
      expect(box).toBeInTheDocument();
    });

    it('applies multiple sx properties', () => {
      const { container } = renderWithTheme(
        <Box sx={{ margin: 1, padding: 2, display: 'flex' }}>Content</Box>
      );
      const box = container.firstChild as HTMLElement;
      expect(box).toHaveStyle({ display: 'flex' });
    });
  });

  describe('Ref', () => {
    it('forwards ref to the root element', () => {
      const ref = React.createRef<HTMLDivElement>();
      renderWithTheme(<Box ref={ref}>Content</Box>);
      expect(ref.current).toBeTruthy();
      expect(ref.current?.nodeName).toBe('DIV');
    });
  });

  describe('Nested Boxes', () => {
    it('renders nested boxes', () => {
      renderWithTheme(
        <Box>
          <Box>Nested Content</Box>
        </Box>
      );
      expect(screen.getByText('Nested Content')).toBeInTheDocument();
    });
  });
});
