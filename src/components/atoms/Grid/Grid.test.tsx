/**
 * Grid component tests
 */

import React from 'react';
import { renderWithTheme, screen } from '../../../../tests/test-utils';
import { Grid } from './Grid';

describe('Grid', () => {
  describe('Rendering', () => {
    it('renders grid with children', () => {
      renderWithTheme(
        <Grid container>
          <Grid xs={12}>Content</Grid>
        </Grid>
      );
      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('renders multiple grid items', () => {
      renderWithTheme(
        <Grid container>
          <Grid xs={6}>Item 1</Grid>
          <Grid xs={6}>Item 2</Grid>
        </Grid>
      );
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
    });
  });

  describe('Container', () => {
    it('renders as container', () => {
      const { container } = renderWithTheme(
        <Grid container>
          <Grid xs={12}>Content</Grid>
        </Grid>
      );
      const grid = container.querySelector('.MuiGrid2-container');
      expect(grid).toBeInTheDocument();
    });
  });

  describe('Grid Sizes', () => {
    it('renders with xs size', () => {
      renderWithTheme(
        <Grid container>
          <Grid xs={12}>Full width</Grid>
        </Grid>
      );
      expect(screen.getByText('Full width')).toBeInTheDocument();
    });

    it('renders with responsive sizes', () => {
      renderWithTheme(
        <Grid container>
          <Grid xs={12} sm={6} md={4}>
            Responsive
          </Grid>
        </Grid>
      );
      expect(screen.getByText('Responsive')).toBeInTheDocument();
    });

    it('renders with auto size', () => {
      renderWithTheme(
        <Grid container>
          <Grid xs="auto">Auto width</Grid>
        </Grid>
      );
      expect(screen.getByText('Auto width')).toBeInTheDocument();
    });
  });

  describe('Spacing', () => {
    it('renders with spacing', () => {
      renderWithTheme(
        <Grid container spacing={2}>
          <Grid xs={6}>Item 1</Grid>
          <Grid xs={6}>Item 2</Grid>
        </Grid>
      );
      expect(screen.getByText('Item 1')).toBeInTheDocument();
    });

    it('renders with column and row spacing', () => {
      renderWithTheme(
        <Grid container columnSpacing={2} rowSpacing={1}>
          <Grid xs={6}>Item 1</Grid>
          <Grid xs={6}>Item 2</Grid>
        </Grid>
      );
      expect(screen.getByText('Item 1')).toBeInTheDocument();
    });
  });

  describe('Nested Grids', () => {
    it('renders nested grid containers', () => {
      renderWithTheme(
        <Grid container>
          <Grid xs={12}>
            <Grid container>
              <Grid xs={6}>Nested Item</Grid>
            </Grid>
          </Grid>
        </Grid>
      );
      expect(screen.getByText('Nested Item')).toBeInTheDocument();
    });
  });

  describe('Component Prop', () => {
    it('renders as div by default', () => {
      const { container } = renderWithTheme(
        <Grid container>
          <Grid xs={12}>Content</Grid>
        </Grid>
      );
      const grid = container.firstChild;
      expect(grid?.nodeName).toBe('DIV');
    });

    it('renders as section when component="section"', () => {
      const { container } = renderWithTheme(
        <Grid component="section" container>
          <Grid xs={12}>Content</Grid>
        </Grid>
      );
      const grid = container.firstChild;
      expect(grid?.nodeName).toBe('SECTION');
    });
  });

  describe('Ref', () => {
    it('forwards ref to the root element', () => {
      const ref = React.createRef<HTMLDivElement>();
      renderWithTheme(
        <Grid ref={ref} container>
          <Grid xs={12}>Content</Grid>
        </Grid>
      );
      expect(ref.current).toBeTruthy();
    });
  });
});
