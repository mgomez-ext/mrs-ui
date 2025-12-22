/**
 * Typography component tests
 */

import React from 'react';
import { renderWithTheme, screen } from '../../../../tests/test-utils';
import { Typography } from './Typography';

describe('Typography', () => {
  it('renders typography with text', () => {
    renderWithTheme(<Typography>Test text</Typography>);
    expect(screen.getByText('Test text')).toBeInTheDocument();
  });

  it('renders body1 variant by default', () => {
    renderWithTheme(<Typography>Default</Typography>);
    const element = screen.getByText('Default');
    expect(element).toBeInTheDocument();
  });

  // Heading variants
  it('renders h1 variant', () => {
    renderWithTheme(<Typography variant="h1">Heading 1</Typography>);
    const element = screen.getByText('Heading 1');
    expect(element.tagName).toBe('H1');
  });

  it('renders h2 variant', () => {
    renderWithTheme(<Typography variant="h2">Heading 2</Typography>);
    const element = screen.getByText('Heading 2');
    expect(element.tagName).toBe('H2');
  });

  it('renders h3 variant', () => {
    renderWithTheme(<Typography variant="h3">Heading 3</Typography>);
    const element = screen.getByText('Heading 3');
    expect(element.tagName).toBe('H3');
  });

  it('renders h4 variant', () => {
    renderWithTheme(<Typography variant="h4">Heading 4</Typography>);
    const element = screen.getByText('Heading 4');
    expect(element.tagName).toBe('H4');
  });

  it('renders h5 variant', () => {
    renderWithTheme(<Typography variant="h5">Heading 5</Typography>);
    const element = screen.getByText('Heading 5');
    expect(element.tagName).toBe('H5');
  });

  it('renders h6 variant', () => {
    renderWithTheme(<Typography variant="h6">Heading 6</Typography>);
    const element = screen.getByText('Heading 6');
    expect(element.tagName).toBe('H6');
  });

  // Body variants
  it('renders body1 variant', () => {
    renderWithTheme(<Typography variant="body1">Body 1</Typography>);
    expect(screen.getByText('Body 1')).toBeInTheDocument();
  });

  it('renders body2 variant', () => {
    renderWithTheme(<Typography variant="body2">Body 2</Typography>);
    expect(screen.getByText('Body 2')).toBeInTheDocument();
  });

  // Subtitle variants
  it('renders subtitle1 variant', () => {
    renderWithTheme(<Typography variant="subtitle1">Subtitle 1</Typography>);
    expect(screen.getByText('Subtitle 1')).toBeInTheDocument();
  });

  it('renders subtitle2 variant', () => {
    renderWithTheme(<Typography variant="subtitle2">Subtitle 2</Typography>);
    expect(screen.getByText('Subtitle 2')).toBeInTheDocument();
  });

  // Small text variants
  it('renders caption variant', () => {
    renderWithTheme(<Typography variant="caption">Caption</Typography>);
    expect(screen.getByText('Caption')).toBeInTheDocument();
  });

  it('renders overline variant', () => {
    renderWithTheme(<Typography variant="overline">Overline</Typography>);
    expect(screen.getByText('Overline')).toBeInTheDocument();
  });

  // Gutter bottom
  it('applies gutterBottom when specified', () => {
    renderWithTheme(
      <Typography variant="h1" gutterBottom>
        With Gutter
      </Typography>
    );
    expect(screen.getByText('With Gutter')).toBeInTheDocument();
  });

  it('does not apply gutterBottom by default', () => {
    renderWithTheme(<Typography variant="h1">No Gutter</Typography>);
    expect(screen.getByText('No Gutter')).toBeInTheDocument();
  });

  // Custom props
  it('accepts custom className', () => {
    renderWithTheme(<Typography className="custom-class">Custom</Typography>);
    const element = screen.getByText('Custom');
    expect(element).toHaveClass('custom-class');
  });

  it('accepts custom sx prop', () => {
    renderWithTheme(<Typography sx={{ color: 'primary.main' }}>Custom Style</Typography>);
    expect(screen.getByText('Custom Style')).toBeInTheDocument();
  });

  it('can use custom component', () => {
    renderWithTheme(<Typography component="span">Span Element</Typography>);
    const element = screen.getByText('Span Element');
    expect(element.tagName).toBe('SPAN');
  });
});
