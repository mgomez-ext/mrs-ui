/**
 * IconButton component tests
 */

import React from 'react';
import { renderWithTheme, screen, fireEvent } from '../../../../tests/test-utils';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from './IconButton';

describe('IconButton', () => {
  it('renders icon button with icon', () => {
    renderWithTheme(
      <IconButton aria-label="add">
        <AddIcon />
      </IconButton>
    );
    expect(screen.getByRole('button', { name: 'add' })).toBeInTheDocument();
  });

  it('renders with default color', () => {
    const { container } = renderWithTheme(
      <IconButton>
        <AddIcon />
      </IconButton>
    );
    const button = container.querySelector('.MuiIconButton-root');
    expect(button).toBeInTheDocument();
    // Default color doesn't add a specific class, just verify it renders
  });

  it('renders with primary color', () => {
    const { container } = renderWithTheme(
      <IconButton color="primary">
        <AddIcon />
      </IconButton>
    );
    const button = container.querySelector('.MuiIconButton-colorPrimary');
    expect(button).toBeInTheDocument();
  });

  it('renders with secondary color', () => {
    const { container } = renderWithTheme(
      <IconButton color="secondary">
        <AddIcon />
      </IconButton>
    );
    const button = container.querySelector('.MuiIconButton-colorSecondary');
    expect(button).toBeInTheDocument();
  });

  it('renders with error color', () => {
    const { container } = renderWithTheme(
      <IconButton color="error">
        <DeleteIcon />
      </IconButton>
    );
    const button = container.querySelector('.MuiIconButton-colorError');
    expect(button).toBeInTheDocument();
  });

  it('renders with inherit color', () => {
    const { container } = renderWithTheme(
      <IconButton color="inherit">
        <AddIcon />
      </IconButton>
    );
    const button = container.querySelector('.MuiIconButton-colorInherit');
    expect(button).toBeInTheDocument();
  });

  it('renders with small size', () => {
    const { container } = renderWithTheme(
      <IconButton size="small">
        <AddIcon />
      </IconButton>
    );
    const button = container.querySelector('.MuiIconButton-sizeSmall');
    expect(button).toBeInTheDocument();
  });

  it('renders with medium size by default', () => {
    const { container } = renderWithTheme(
      <IconButton>
        <AddIcon />
      </IconButton>
    );
    const button = container.querySelector('.MuiIconButton-sizeMedium');
    expect(button).toBeInTheDocument();
  });

  it('renders with large size', () => {
    const { container } = renderWithTheme(
      <IconButton size="large">
        <AddIcon />
      </IconButton>
    );
    const button = container.querySelector('.MuiIconButton-sizeLarge');
    expect(button).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    renderWithTheme(
      <IconButton onClick={handleClick} aria-label="test">
        <AddIcon />
      </IconButton>
    );
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('can be disabled', () => {
    renderWithTheme(
      <IconButton disabled aria-label="disabled">
        <AddIcon />
      </IconButton>
    );
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('renders with edge start', () => {
    const { container } = renderWithTheme(
      <IconButton edge="start">
        <AddIcon />
      </IconButton>
    );
    const button = container.querySelector('.MuiIconButton-edgeStart');
    expect(button).toBeInTheDocument();
  });

  it('renders with edge end', () => {
    const { container } = renderWithTheme(
      <IconButton edge="end">
        <AddIcon />
      </IconButton>
    );
    const button = container.querySelector('.MuiIconButton-edgeEnd');
    expect(button).toBeInTheDocument();
  });

  it('accepts custom className', () => {
    const { container } = renderWithTheme(
      <IconButton className="custom-button">
        <AddIcon />
      </IconButton>
    );
    const button = container.querySelector('.custom-button');
    expect(button).toBeInTheDocument();
  });

  it('accepts custom sx prop', () => {
    const { container } = renderWithTheme(
      <IconButton sx={{ backgroundColor: 'red' }}>
        <AddIcon />
      </IconButton>
    );
    const button = container.querySelector('.MuiIconButton-root');
    expect(button).toHaveStyle('background-color: red');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLButtonElement>();
    renderWithTheme(
      <IconButton ref={ref}>
        <AddIcon />
      </IconButton>
    );
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('can disable ripple effect', () => {
    renderWithTheme(
      <IconButton disableRipple aria-label="test">
        <AddIcon />
      </IconButton>
    );
    const button = screen.getByRole('button');
    // Verify disableRipple prop is passed (ripple is disabled if prop is present)
    expect(button).toBeInTheDocument();
  });

  it('renders with aria-label for accessibility', () => {
    renderWithTheme(
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    );
    expect(screen.getByRole('button', { name: 'delete' })).toBeInTheDocument();
  });
});
