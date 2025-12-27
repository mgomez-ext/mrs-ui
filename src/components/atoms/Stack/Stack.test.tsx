/**
 * Stack component tests
 */

import React from 'react';
import { renderWithTheme, screen } from '../../../../tests/test-utils';
import { Stack } from './Stack';
import { Divider } from '../Divider';

describe('Stack', () => {
  describe('Rendering', () => {
    it('renders stack with children', () => {
      renderWithTheme(
        <Stack>
          <div>Item 1</div>
          <div>Item 2</div>
        </Stack>
      );
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
    });

    it('renders with multiple children', () => {
      renderWithTheme(
        <Stack>
          <span>Child 1</span>
          <span>Child 2</span>
          <span>Child 3</span>
        </Stack>
      );
      expect(screen.getByText('Child 1')).toBeInTheDocument();
      expect(screen.getByText('Child 2')).toBeInTheDocument();
      expect(screen.getByText('Child 3')).toBeInTheDocument();
    });
  });

  describe('Direction', () => {
    it('renders in column direction by default', () => {
      const { container } = renderWithTheme(
        <Stack>
          <div>Item</div>
        </Stack>
      );
      const stack = container.firstChild as HTMLElement;
      expect(stack).toHaveStyle({ flexDirection: 'column' });
    });

    it('renders in row direction', () => {
      const { container } = renderWithTheme(
        <Stack direction="row">
          <div>Item</div>
        </Stack>
      );
      const stack = container.firstChild as HTMLElement;
      expect(stack).toHaveStyle({ flexDirection: 'row' });
    });

    it('renders in row-reverse direction', () => {
      const { container } = renderWithTheme(
        <Stack direction="row-reverse">
          <div>Item</div>
        </Stack>
      );
      const stack = container.firstChild as HTMLElement;
      expect(stack).toHaveStyle({ flexDirection: 'row-reverse' });
    });

    it('renders in column-reverse direction', () => {
      const { container } = renderWithTheme(
        <Stack direction="column-reverse">
          <div>Item</div>
        </Stack>
      );
      const stack = container.firstChild as HTMLElement;
      expect(stack).toHaveStyle({ flexDirection: 'column-reverse' });
    });
  });

  describe('Spacing', () => {
    it('renders with spacing', () => {
      renderWithTheme(
        <Stack spacing={2}>
          <div>Item 1</div>
          <div>Item 2</div>
        </Stack>
      );
      expect(screen.getByText('Item 1')).toBeInTheDocument();
    });

    it('renders with no spacing by default', () => {
      renderWithTheme(
        <Stack>
          <div>Item 1</div>
          <div>Item 2</div>
        </Stack>
      );
      expect(screen.getByText('Item 1')).toBeInTheDocument();
    });
  });

  describe('Divider', () => {
    it('renders with divider', () => {
      const { container } = renderWithTheme(
        <Stack divider={<Divider />}>
          <div>Item 1</div>
          <div>Item 2</div>
        </Stack>
      );
      const dividers = container.querySelectorAll('.MuiDivider-root');
      expect(dividers.length).toBeGreaterThan(0);
    });
  });

  describe('Component Prop', () => {
    it('renders as div by default', () => {
      const { container } = renderWithTheme(
        <Stack>
          <div>Content</div>
        </Stack>
      );
      const stack = container.firstChild;
      expect(stack?.nodeName).toBe('DIV');
    });

    it('renders as section when component="section"', () => {
      const { container } = renderWithTheme(
        <Stack component="section">
          <div>Content</div>
        </Stack>
      );
      const stack = container.firstChild;
      expect(stack?.nodeName).toBe('SECTION');
    });
  });

  describe('Ref', () => {
    it('forwards ref to the root element', () => {
      const ref = React.createRef<HTMLDivElement>();
      renderWithTheme(
        <Stack ref={ref}>
          <div>Content</div>
        </Stack>
      );
      expect(ref.current).toBeTruthy();
    });
  });
});
