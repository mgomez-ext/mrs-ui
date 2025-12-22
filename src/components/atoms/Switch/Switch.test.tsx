/**
 * Switch component tests
 */

import React from 'react';
import { renderWithTheme, screen, fireEvent } from '../../../../tests/test-utils';
import { Switch } from './Switch';

describe('Switch', () => {
  it('renders with default props', () => {
    renderWithTheme(<Switch data-testid="switch" />);
    const toggle = screen.getByRole('checkbox');
    expect(toggle).toBeInTheDocument();
    expect(toggle).not.toBeChecked();
    expect(toggle).not.toBeDisabled();
  });

  it('renders as checked', () => {
    renderWithTheme(<Switch checked data-testid="switch" />);
    const toggle = screen.getByRole('checkbox');
    expect(toggle).toBeChecked();
  });

  it('renders disabled', () => {
    renderWithTheme(<Switch disabled data-testid="switch" />);
    const toggle = screen.getByRole('checkbox');
    expect(toggle).toBeDisabled();
  });

  it('renders small size', () => {
    const { container } = renderWithTheme(<Switch size="small" />);
    const root = container.querySelector('.MuiSwitch-sizeSmall');
    expect(root).toBeInTheDocument();
  });

  it('renders medium size', () => {
    const { container } = renderWithTheme(<Switch size="medium" />);
    const root = container.querySelector('.MuiSwitch-sizeMedium');
    expect(root).toBeInTheDocument();
  });

  it('renders default color', () => {
    const { container } = renderWithTheme(<Switch color="default" />);
    const root = container.querySelector('.MuiSwitch-colorDefault');
    expect(root).toBeInTheDocument();
  });

  it('renders primary color', () => {
    const { container } = renderWithTheme(<Switch color="primary" />);
    const root = container.querySelector('.MuiSwitch-colorPrimary');
    expect(root).toBeInTheDocument();
  });

  it('fires onChange when toggled', () => {
    const handleChange = jest.fn();
    renderWithTheme(<Switch onChange={handleChange} data-testid="switch" />);
    const toggle = screen.getByRole('checkbox');

    fireEvent.click(toggle);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object), true);
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLButtonElement>();
    renderWithTheme(<Switch ref={ref} />);
    expect(ref.current).toBeInTheDocument();
    expect(ref.current?.tagName).toBe('SPAN');
  });

  it('applies custom sx prop', () => {
    const { container } = renderWithTheme(<Switch sx={{ color: 'red' }} />);
    const root = container.querySelector('.MuiSwitch-root');
    expect(root).toHaveStyle({ color: 'red' });
  });

  it('renders with custom id', () => {
    renderWithTheme(<Switch id="custom-switch" />);
    const toggle = screen.getByRole('checkbox');
    expect(toggle).toHaveAttribute('id', 'custom-switch');
  });

  it('renders with custom value', () => {
    renderWithTheme(<Switch value="custom-value" />);
    const toggle = screen.getByRole('checkbox');
    expect(toggle).toHaveAttribute('value', 'custom-value');
  });

  it('renders as required', () => {
    renderWithTheme(<Switch required />);
    const toggle = screen.getByRole('checkbox');
    expect(toggle).toBeRequired();
  });

  it('applies inputProps correctly', () => {
    renderWithTheme(<Switch inputProps={{ 'aria-label': 'Custom switch' }} />);
    const toggle = screen.getByRole('checkbox');
    expect(toggle).toHaveAttribute('aria-label', 'Custom switch');
  });
});
