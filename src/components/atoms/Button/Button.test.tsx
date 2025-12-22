/**
 * Button component tests
 */

import React from 'react';
import { renderWithTheme, screen } from '../../../../tests/test-utils';
import { Button } from './Button';

describe('Button', () => {
  it('renders button with text', () => {
    renderWithTheme(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('renders contained variant', () => {
    renderWithTheme(<Button variant="contained">Contained</Button>);
    const button = screen.getByText('Contained');
    expect(button).toBeInTheDocument();
  });

  it('renders outlined variant', () => {
    renderWithTheme(<Button variant="outlined">Outlined</Button>);
    const button = screen.getByText('Outlined');
    expect(button).toBeInTheDocument();
  });

  it('renders text variant', () => {
    renderWithTheme(<Button variant="text">Text</Button>);
    const button = screen.getByText('Text');
    expect(button).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    renderWithTheme(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByText('Click me');
    button.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('can be disabled', () => {
    renderWithTheme(<Button disabled>Disabled</Button>);
    const button = screen.getByText('Disabled');
    expect(button).toBeDisabled();
  });
});
