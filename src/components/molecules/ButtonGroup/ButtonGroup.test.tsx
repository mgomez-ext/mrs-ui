/**
 * ButtonGroup component tests
 */

import React from 'react';
import { render, screen } from '../../../../tests/test-utils';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../../atoms/Button';

describe('ButtonGroup', () => {
  it('renders with children buttons', () => {
    render(
      <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    );

    expect(screen.getByText('One')).toBeInTheDocument();
    expect(screen.getByText('Two')).toBeInTheDocument();
    expect(screen.getByText('Three')).toBeInTheDocument();
  });

  it('renders with default props (contained variant, primary color, horizontal)', () => {
    const { container } = render(
      <ButtonGroup data-testid="button-group">
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    );

    const buttonGroup = container.querySelector('.MuiButtonGroup-root');
    expect(buttonGroup).toBeInTheDocument();
    expect(buttonGroup).toHaveClass('MuiButtonGroup-contained');
    expect(buttonGroup).toHaveClass('MuiButtonGroup-horizontal');
  });

  it('renders with contained variant', () => {
    const { container } = render(
      <ButtonGroup variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    );

    const buttonGroup = container.querySelector('.MuiButtonGroup-contained');
    expect(buttonGroup).toBeInTheDocument();
  });

  it('renders with outlined variant', () => {
    const { container } = render(
      <ButtonGroup variant="outlined">
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    );

    const buttonGroup = container.querySelector('.MuiButtonGroup-outlined');
    expect(buttonGroup).toBeInTheDocument();
  });

  it('renders with text variant', () => {
    const { container } = render(
      <ButtonGroup variant="text">
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    );

    const buttonGroup = container.querySelector('.MuiButtonGroup-text');
    expect(buttonGroup).toBeInTheDocument();
  });

  it('renders with primary color', () => {
    const { container } = render(
      <ButtonGroup color="primary">
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    );

    const buttonGroup = container.querySelector('.MuiButtonGroup-root');
    expect(buttonGroup).toBeInTheDocument();
  });

  it('renders with secondary color', () => {
    const { container } = render(
      <ButtonGroup color="secondary">
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    );

    const buttonGroup = container.querySelector('.MuiButtonGroup-root');
    expect(buttonGroup).toBeInTheDocument();
  });

  it('renders with error color', () => {
    const { container } = render(
      <ButtonGroup color="error">
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    );

    const buttonGroup = container.querySelector('.MuiButtonGroup-root');
    expect(buttonGroup).toBeInTheDocument();
  });

  it('renders with inherit color', () => {
    const { container } = render(
      <ButtonGroup color="inherit">
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    );

    const buttonGroup = container.querySelector('.MuiButtonGroup-root');
    expect(buttonGroup).toBeInTheDocument();
  });

  it('renders with horizontal orientation', () => {
    const { container } = render(
      <ButtonGroup orientation="horizontal">
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    );

    const buttonGroup = container.querySelector('.MuiButtonGroup-horizontal');
    expect(buttonGroup).toBeInTheDocument();
  });

  it('renders with vertical orientation', () => {
    const { container } = render(
      <ButtonGroup orientation="vertical">
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    );

    const buttonGroup = container.querySelector('.MuiButtonGroup-vertical');
    expect(buttonGroup).toBeInTheDocument();
  });

  it('renders with small size', () => {
    render(
      <ButtonGroup size="small">
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    );

    const buttons = screen.getAllByRole('button');
    buttons.forEach((button) => {
      expect(button).toHaveClass('MuiButton-sizeSmall');
    });
  });

  it('renders with medium size', () => {
    render(
      <ButtonGroup size="medium">
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    );

    const buttons = screen.getAllByRole('button');
    buttons.forEach((button) => {
      expect(button).toHaveClass('MuiButton-sizeMedium');
    });
  });

  it('renders with large size', () => {
    render(
      <ButtonGroup size="large">
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    );

    const buttons = screen.getAllByRole('button');
    buttons.forEach((button) => {
      expect(button).toHaveClass('MuiButton-sizeLarge');
    });
  });

  it('renders as disabled', () => {
    render(
      <ButtonGroup disabled>
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    );

    const buttons = screen.getAllByRole('button');
    buttons.forEach((button) => {
      expect(button).toBeDisabled();
    });
  });

  it('renders with disableElevation', () => {
    const { container } = render(
      <ButtonGroup variant="contained" disableElevation>
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    );

    const buttonGroup = container.querySelector('.MuiButtonGroup-disableElevation');
    expect(buttonGroup).toBeInTheDocument();
  });

  it('renders with fullWidth', () => {
    const { container } = render(
      <ButtonGroup fullWidth>
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    );

    const buttonGroup = container.querySelector('.MuiButtonGroup-fullWidth');
    expect(buttonGroup).toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <ButtonGroup ref={ref}>
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    );

    expect(ref.current).toBeInTheDocument();
    expect(ref.current).toHaveClass('MuiButtonGroup-root');
  });

  it('applies custom sx prop', () => {
    const { container } = render(
      <ButtonGroup sx={{ backgroundColor: 'red' }}>
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    );

    const buttonGroup = container.querySelector('.MuiButtonGroup-root');
    expect(buttonGroup).toHaveStyle({ backgroundColor: 'red' });
  });

  it('renders all variant and color combinations', () => {
    const variants = ['contained', 'outlined', 'text'] as const;
    const colors = ['primary', 'secondary', 'error', 'inherit'] as const;

    variants.forEach((variant) => {
      colors.forEach((color) => {
        const { container } = render(
          <ButtonGroup variant={variant} color={color}>
            <Button>One</Button>
            <Button>Two</Button>
          </ButtonGroup>
        );

        const buttonGroup = container.querySelector('.MuiButtonGroup-root');
        expect(buttonGroup).toBeInTheDocument();
        expect(buttonGroup).toHaveClass(`MuiButtonGroup-${variant}`);
      });
    });
  });

  it('renders with multiple buttons', () => {
    render(
      <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
        <Button>Four</Button>
        <Button>Five</Button>
      </ButtonGroup>
    );

    expect(screen.getByText('One')).toBeInTheDocument();
    expect(screen.getByText('Two')).toBeInTheDocument();
    expect(screen.getByText('Three')).toBeInTheDocument();
    expect(screen.getByText('Four')).toBeInTheDocument();
    expect(screen.getByText('Five')).toBeInTheDocument();
  });

  it('handles click events on buttons', () => {
    const handleClick1 = jest.fn();
    const handleClick2 = jest.fn();

    render(
      <ButtonGroup>
        <Button onClick={handleClick1}>One</Button>
        <Button onClick={handleClick2}>Two</Button>
      </ButtonGroup>
    );

    screen.getByText('One').click();
    screen.getByText('Two').click();

    expect(handleClick1).toHaveBeenCalledTimes(1);
    expect(handleClick2).toHaveBeenCalledTimes(1);
  });

  it('renders vertical group with multiple buttons', () => {
    const { container } = render(
      <ButtonGroup orientation="vertical">
        <Button>Top</Button>
        <Button>Middle</Button>
        <Button>Bottom</Button>
      </ButtonGroup>
    );

    const buttonGroup = container.querySelector('.MuiButtonGroup-vertical');
    expect(buttonGroup).toBeInTheDocument();
    expect(screen.getByText('Top')).toBeInTheDocument();
    expect(screen.getByText('Middle')).toBeInTheDocument();
    expect(screen.getByText('Bottom')).toBeInTheDocument();
  });

  it('applies aria-label to group', () => {
    render(
      <ButtonGroup aria-label="button group">
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    );

    const buttonGroup = screen.getByRole('group');
    expect(buttonGroup).toHaveAttribute('aria-label', 'button group');
  });
});
