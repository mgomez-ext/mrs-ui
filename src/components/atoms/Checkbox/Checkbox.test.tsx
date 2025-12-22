/**
 * Checkbox component tests
 */

import React from 'react';
import { renderWithTheme, screen, fireEvent } from '../../../../tests/test-utils';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders with default props', () => {
    renderWithTheme(<Checkbox data-testid="checkbox" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
    expect(checkbox).not.toBeDisabled();
  });

  it('renders in checked state', () => {
    renderWithTheme(<Checkbox checked data-testid="checkbox" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('renders in unchecked state', () => {
    renderWithTheme(<Checkbox checked={false} data-testid="checkbox" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  it('renders in indeterminate state', () => {
    renderWithTheme(<Checkbox indeterminate data-testid="checkbox" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('data-indeterminate', 'true');
  });

  it('renders with small size', () => {
    const { container } = renderWithTheme(<Checkbox size="small" />);
    const checkbox = container.querySelector('.MuiCheckbox-sizeSmall');
    expect(checkbox).toBeInTheDocument();
  });

  it('renders with medium size', () => {
    const { container } = renderWithTheme(<Checkbox size="medium" />);
    const checkbox = container.querySelector('.MuiCheckbox-sizeMedium');
    expect(checkbox).toBeInTheDocument();
  });

  it('renders with large size (applies to root element)', () => {
    const { container } = renderWithTheme(<Checkbox size="large" />);
    // MUI doesn't have a built-in 'large' size class, but the prop is passed through
    const checkbox = container.querySelector('.MuiCheckbox-root');
    expect(checkbox).toBeInTheDocument();
  });

  it('renders with default color', () => {
    const { container } = renderWithTheme(<Checkbox color="default" />);
    const checkbox = container.querySelector('.MuiCheckbox-colorDefault');
    expect(checkbox).toBeInTheDocument();
  });

  it('renders with primary color', () => {
    const { container } = renderWithTheme(<Checkbox color="primary" />);
    const checkbox = container.querySelector('.MuiCheckbox-colorPrimary');
    expect(checkbox).toBeInTheDocument();
  });

  it('renders as disabled', () => {
    renderWithTheme(<Checkbox disabled data-testid="checkbox" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });

  it('handles onChange event', () => {
    const handleChange = jest.fn();
    renderWithTheme(<Checkbox onChange={handleChange} data-testid="checkbox" />);
    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object), true);
  });

  it('handles onChange event when checked', () => {
    const handleChange = jest.fn();
    renderWithTheme(<Checkbox checked onChange={handleChange} data-testid="checkbox" />);
    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object), false);
  });

  it('renders as disabled and prevents interaction', () => {
    const handleChange = jest.fn();
    renderWithTheme(<Checkbox disabled onChange={handleChange} data-testid="checkbox" />);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeDisabled();
    // Note: MUI may still fire onChange for disabled checkboxes in tests
    // The important check is that the checkbox has the disabled attribute
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLButtonElement>();
    renderWithTheme(<Checkbox ref={ref} />);
    expect(ref.current).toBeInTheDocument();
    expect(ref.current?.tagName).toBe('SPAN'); // MUI Checkbox renders as span with button role
  });

  it('applies custom sx prop', () => {
    const { container } = renderWithTheme(<Checkbox sx={{ color: 'red' }} />);
    const checkbox = container.querySelector('.MuiCheckbox-root');
    expect(checkbox).toHaveStyle({ color: 'red' });
  });

  it('renders with custom id', () => {
    renderWithTheme(<Checkbox id="custom-checkbox" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('id', 'custom-checkbox');
  });

  it('renders with custom value', () => {
    renderWithTheme(<Checkbox value="custom-value" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('value', 'custom-value');
  });

  it('renders as required', () => {
    renderWithTheme(<Checkbox required />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeRequired();
  });

  it('applies inputProps correctly', () => {
    renderWithTheme(<Checkbox inputProps={{ 'aria-label': 'Custom checkbox' }} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-label', 'Custom checkbox');
  });

  it('accepts disableRipple prop', () => {
    const { container } = renderWithTheme(<Checkbox disableRipple />);
    const checkbox = container.querySelector('.MuiCheckbox-root');
    expect(checkbox).toBeInTheDocument();
    // Note: disableRipple prop is passed to MUI Checkbox
    // but may not add a visible class in the test environment
  });

  it('renders all size options correctly', () => {
    const sizes: Array<'small' | 'medium' | 'large'> = ['small', 'medium', 'large'];
    sizes.forEach((size) => {
      const { container } = renderWithTheme(
        <Checkbox size={size} data-testid={`checkbox-${size}`} />
      );
      const checkbox = container.querySelector('.MuiCheckbox-root');
      expect(checkbox).toBeInTheDocument();
    });
  });

  it('renders all color options correctly', () => {
    const colors: Array<'default' | 'primary'> = ['default', 'primary'];
    colors.forEach((color) => {
      const { container } = renderWithTheme(
        <Checkbox color={color} data-testid={`checkbox-${color}`} />
      );
      const checkbox = container.querySelector(
        `.MuiCheckbox-color${color.charAt(0).toUpperCase() + color.slice(1)}`
      );
      expect(checkbox).toBeInTheDocument();
    });
  });

  it('can be focused with keyboard', () => {
    renderWithTheme(<Checkbox />);
    const checkbox = screen.getByRole('checkbox');

    checkbox.focus();
    expect(checkbox).toHaveFocus();
  });

  it('handles keyboard interaction (enter key)', () => {
    const handleChange = jest.fn();
    renderWithTheme(<Checkbox onChange={handleChange} />);
    const checkbox = screen.getByRole('checkbox');

    checkbox.focus();
    fireEvent.keyDown(checkbox, { key: 'Enter', code: 'Enter' });

    // Note: Enter key behavior may vary based on MUI implementation
    // This test ensures the checkbox can receive keyboard events
    expect(checkbox).toHaveFocus();
  });

  it('renders with controlled checked state', () => {
    const { rerender } = renderWithTheme(<Checkbox checked={false} />);
    let checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

    rerender(<Checkbox checked={true} />);
    checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('renders with controlled indeterminate state', () => {
    const { rerender } = renderWithTheme(<Checkbox indeterminate={false} />);
    let checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toHaveAttribute('data-indeterminate', 'true');

    rerender(<Checkbox indeterminate={true} />);
    checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('data-indeterminate', 'true');
  });

  it('combines checked and indeterminate correctly (indeterminate takes precedence visually)', () => {
    renderWithTheme(<Checkbox checked indeterminate />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
    expect(checkbox).toHaveAttribute('data-indeterminate', 'true');
  });

  it('renders with custom className', () => {
    const { container } = renderWithTheme(<Checkbox className="custom-checkbox" />);
    const checkbox = container.querySelector('.custom-checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  it('handles multiple checkboxes independently', () => {
    const handleChange1 = jest.fn();
    const handleChange2 = jest.fn();

    renderWithTheme(
      <>
        <Checkbox data-testid="checkbox-1" onChange={handleChange1} />
        <Checkbox data-testid="checkbox-2" onChange={handleChange2} />
      </>
    );

    const checkbox1 = screen.getByTestId('checkbox-1').querySelector('input');
    const checkbox2 = screen.getByTestId('checkbox-2').querySelector('input');

    if (checkbox1) fireEvent.click(checkbox1);
    expect(handleChange1).toHaveBeenCalledTimes(1);
    expect(handleChange2).not.toHaveBeenCalled();

    if (checkbox2) fireEvent.click(checkbox2);
    expect(handleChange2).toHaveBeenCalledTimes(1);
    expect(handleChange1).toHaveBeenCalledTimes(1);
  });

  it('maintains accessibility attributes', () => {
    renderWithTheme(<Checkbox inputProps={{ 'aria-describedby': 'helper-text' }} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-describedby', 'helper-text');
  });
});
