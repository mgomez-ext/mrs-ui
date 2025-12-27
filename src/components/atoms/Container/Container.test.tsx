/**
 * Container component tests
 */

import React from 'react';
import { renderWithTheme, screen } from '../../../../tests/test-utils';
import { Container } from './Container';

describe('Container', () => {
  describe('Rendering', () => {
    it('renders container with content', () => {
      renderWithTheme(<Container>Container Content</Container>);
      expect(screen.getByText('Container Content')).toBeInTheDocument();
    });

    it('renders with children', () => {
      renderWithTheme(
        <Container>
          <div>Child 1</div>
          <div>Child 2</div>
        </Container>
      );
      expect(screen.getByText('Child 1')).toBeInTheDocument();
      expect(screen.getByText('Child 2')).toBeInTheDocument();
    });
  });

  describe('Max Width', () => {
    it('renders with lg maxWidth by default', () => {
      const { container } = renderWithTheme(<Container>Content</Container>);
      const containerEl = container.querySelector('.MuiContainer-root');
      expect(containerEl).toHaveClass('MuiContainer-maxWidthLg');
    });

    it('renders with xs maxWidth', () => {
      const { container } = renderWithTheme(<Container maxWidth="xs">Content</Container>);
      const containerEl = container.querySelector('.MuiContainer-root');
      expect(containerEl).toHaveClass('MuiContainer-maxWidthXs');
    });

    it('renders with sm maxWidth', () => {
      const { container } = renderWithTheme(<Container maxWidth="sm">Content</Container>);
      const containerEl = container.querySelector('.MuiContainer-root');
      expect(containerEl).toHaveClass('MuiContainer-maxWidthSm');
    });

    it('renders with md maxWidth', () => {
      const { container } = renderWithTheme(<Container maxWidth="md">Content</Container>);
      const containerEl = container.querySelector('.MuiContainer-root');
      expect(containerEl).toHaveClass('MuiContainer-maxWidthMd');
    });

    it('renders with xl maxWidth', () => {
      const { container } = renderWithTheme(<Container maxWidth="xl">Content</Container>);
      const containerEl = container.querySelector('.MuiContainer-root');
      expect(containerEl).toHaveClass('MuiContainer-maxWidthXl');
    });

    it('renders fluid when maxWidth is false', () => {
      const { container } = renderWithTheme(<Container maxWidth={false}>Content</Container>);
      const containerEl = container.querySelector('.MuiContainer-root');
      expect(containerEl).not.toHaveClass('MuiContainer-maxWidthLg');
    });
  });

  describe('Gutters', () => {
    it('renders with gutters by default', () => {
      const { container } = renderWithTheme(<Container>Content</Container>);
      const containerEl = container.querySelector('.MuiContainer-root');
      expect(containerEl).not.toHaveClass('MuiContainer-disableGutters');
    });

    it('renders without gutters when disableGutters is true', () => {
      const { container } = renderWithTheme(<Container disableGutters>Content</Container>);
      const containerEl = container.querySelector('.MuiContainer-root');
      expect(containerEl).toHaveClass('MuiContainer-disableGutters');
    });
  });

  describe('Fixed', () => {
    it('renders as fixed when fixed prop is true', () => {
      const { container } = renderWithTheme(<Container fixed>Content</Container>);
      const containerEl = container.querySelector('.MuiContainer-root');
      expect(containerEl).toHaveClass('MuiContainer-fixed');
    });
  });

  describe('Component Prop', () => {
    it('renders as div by default', () => {
      const { container } = renderWithTheme(<Container>Content</Container>);
      const containerEl = container.firstChild;
      expect(containerEl?.nodeName).toBe('DIV');
    });

    it('renders as section when component="section"', () => {
      const { container } = renderWithTheme(<Container component="section">Content</Container>);
      const containerEl = container.firstChild;
      expect(containerEl?.nodeName).toBe('SECTION');
    });

    it('renders as main when component="main"', () => {
      const { container } = renderWithTheme(<Container component="main">Content</Container>);
      const containerEl = container.firstChild;
      expect(containerEl?.nodeName).toBe('MAIN');
    });
  });

  describe('Ref', () => {
    it('forwards ref to the root element', () => {
      const ref = React.createRef<HTMLDivElement>();
      renderWithTheme(<Container ref={ref}>Content</Container>);
      expect(ref.current).toBeTruthy();
      expect(ref.current?.nodeName).toBe('DIV');
    });
  });
});
