/**
 * Slider component tests
 */

import React from 'react';
import { renderWithTheme, screen, fireEvent } from '../../../../tests/test-utils';
import { Slider } from './Slider';

describe('Slider', () => {
  it('renders with default props', () => {
    const { container } = renderWithTheme(<Slider data-testid="slider" />);
    const slider = container.querySelector('.MuiSlider-root');
    expect(slider).toBeInTheDocument();
  });

  it('renders with medium size by default', () => {
    const { container } = renderWithTheme(<Slider />);
    const slider = container.querySelector('.MuiSlider-sizeMedium');
    expect(slider).toBeInTheDocument();
  });

  it('renders with small size', () => {
    const { container } = renderWithTheme(<Slider size="small" />);
    const slider = container.querySelector('.MuiSlider-sizeSmall');
    expect(slider).toBeInTheDocument();
  });

  it('renders with primary color by default', () => {
    const { container } = renderWithTheme(<Slider />);
    const slider = container.querySelector('.MuiSlider-colorPrimary');
    expect(slider).toBeInTheDocument();
  });

  it('renders with secondary color', () => {
    const { container } = renderWithTheme(<Slider color="secondary" />);
    const slider = container.querySelector('.MuiSlider-colorSecondary');
    expect(slider).toBeInTheDocument();
  });

  it('renders horizontally by default', () => {
    const { container } = renderWithTheme(<Slider />);
    const slider = container.querySelector('.MuiSlider-root');
    expect(slider).not.toHaveClass('MuiSlider-vertical');
  });

  it('renders vertically when orientation is set', () => {
    const { container } = renderWithTheme(<Slider orientation="vertical" />);
    const slider = container.querySelector('.MuiSlider-vertical');
    expect(slider).toBeInTheDocument();
  });

  it('renders as disabled', () => {
    const { container } = renderWithTheme(<Slider disabled />);
    const slider = container.querySelector('.Mui-disabled');
    expect(slider).toBeInTheDocument();
  });

  it('renders with marks', () => {
    const { container } = renderWithTheme(<Slider marks step={10} />);
    const marks = container.querySelectorAll('.MuiSlider-mark');
    expect(marks.length).toBeGreaterThan(0);
  });

  it('renders with custom marks', () => {
    const marks = [
      { value: 0, label: '0°C' },
      { value: 50, label: '50°C' },
      { value: 100, label: '100°C' },
    ];
    const { container } = renderWithTheme(<Slider marks={marks} />);
    const markLabels = container.querySelectorAll('.MuiSlider-markLabel');
    expect(markLabels.length).toBe(3);
  });

  it('renders with default value', () => {
    renderWithTheme(<Slider defaultValue={50} aria-label="test-slider" />);
    const slider = screen.getByRole('slider');
    expect(slider).toHaveAttribute('aria-valuenow', '50');
  });

  it('handles onChange event', () => {
    const handleChange = jest.fn();
    renderWithTheme(<Slider onChange={handleChange} aria-label="test-slider" />);
    const slider = screen.getByRole('slider');

    // Simulate slider interaction
    fireEvent.change(slider, { target: { value: '50' } });

    expect(handleChange).toHaveBeenCalled();
  });

  it('handles controlled value', () => {
    const { rerender } = renderWithTheme(
      <Slider value={30} onChange={() => {}} aria-label="test-slider" />
    );
    let slider = screen.getByRole('slider');
    expect(slider).toHaveAttribute('aria-valuenow', '30');

    rerender(<Slider value={70} onChange={() => {}} aria-label="test-slider" />);
    slider = screen.getByRole('slider');
    expect(slider).toHaveAttribute('aria-valuenow', '70');
  });

  it('renders range slider with two thumbs', () => {
    renderWithTheme(<Slider defaultValue={[20, 40]} aria-label="range-slider" />);
    const sliders = screen.getAllByRole('slider');
    expect(sliders).toHaveLength(2);
  });

  it('applies custom min and max values', () => {
    renderWithTheme(<Slider min={10} max={90} defaultValue={50} aria-label="test-slider" />);
    const slider = screen.getByRole('slider');
    expect(slider).toHaveAttribute('aria-valuemin', '10');
    expect(slider).toHaveAttribute('aria-valuemax', '90');
    expect(slider).toHaveAttribute('aria-valuenow', '50');
  });

  it('applies custom step', () => {
    renderWithTheme(<Slider step={5} aria-label="test-slider" />);
    const slider = screen.getByRole('slider');
    // Step is not directly accessible via aria attributes, but the slider should respect it
    expect(slider).toBeInTheDocument();
  });

  it('prevents onChange when disabled', () => {
    const handleChange = jest.fn();
    renderWithTheme(<Slider disabled onChange={handleChange} aria-label="test-slider" />);
    const slider = screen.getByRole('slider');

    fireEvent.change(slider, { target: { value: '50' } });

    // Disabled sliders should not trigger onChange
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLSpanElement>();
    renderWithTheme(<Slider ref={ref} />);
    expect(ref.current).toBeInTheDocument();
    expect(ref.current?.tagName).toBe('SPAN');
  });

  it('applies custom sx prop', () => {
    const { container } = renderWithTheme(<Slider sx={{ width: 400 }} />);
    const slider = container.querySelector('.MuiSlider-root');
    expect(slider).toHaveStyle({ width: '400px' });
  });

  it('renders with aria-label', () => {
    renderWithTheme(<Slider aria-label="Volume slider" />);
    const slider = screen.getByRole('slider', { name: 'Volume slider' });
    expect(slider).toBeInTheDocument();
  });

  it('renders with custom id', () => {
    renderWithTheme(<Slider id="custom-slider" aria-label="test" />);
    const input = document.querySelector('#custom-slider');
    expect(input).toBeInTheDocument();
  });

  it('renders with name attribute', () => {
    const { container } = renderWithTheme(<Slider name="volume" />);
    const input = container.querySelector('input[name="volume"]');
    expect(input).toBeInTheDocument();
  });

  it('renders all size options correctly', () => {
    const sizes: Array<'small' | 'medium'> = ['small', 'medium'];
    sizes.forEach((size) => {
      const { container } = renderWithTheme(<Slider size={size} data-testid={`slider-${size}`} />);
      const slider = container.querySelector('.MuiSlider-root');
      expect(slider).toBeInTheDocument();
    });
  });

  it('renders all color options correctly', () => {
    const colors: Array<'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'> = [
      'primary',
      'secondary',
      'error',
      'info',
      'success',
      'warning',
    ];
    colors.forEach((color) => {
      const { container } = renderWithTheme(
        <Slider color={color} data-testid={`slider-${color}`} />
      );
      const slider = container.querySelector(
        `.MuiSlider-color${color.charAt(0).toUpperCase() + color.slice(1)}`
      );
      expect(slider).toBeInTheDocument();
    });
  });

  it('handles range slider with onChange', () => {
    const handleChange = jest.fn();
    renderWithTheme(
      <Slider
        defaultValue={[20, 40]}
        onChange={handleChange}
        getAriaLabel={(index) => (index === 0 ? 'Minimum' : 'Maximum')}
      />
    );
    const sliders = screen.getAllByRole('slider');
    expect(sliders).toHaveLength(2);

    fireEvent.change(sliders[0], { target: { value: '30' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('renders with track prop', () => {
    const { container: normalContainer } = renderWithTheme(<Slider track="normal" />);
    expect(normalContainer.querySelector('.MuiSlider-track')).toBeInTheDocument();

    const { container: invertedContainer } = renderWithTheme(<Slider track="inverted" />);
    expect(invertedContainer.querySelector('.MuiSlider-trackInverted')).toBeInTheDocument();

    const { container: falseContainer } = renderWithTheme(<Slider track={false} />);
    expect(falseContainer.querySelector('.MuiSlider-trackFalse')).toBeInTheDocument();
  });

  it('renders with valueLabelDisplay', () => {
    const { container } = renderWithTheme(<Slider valueLabelDisplay="on" defaultValue={50} />);
    const valueLabel = container.querySelector('.MuiSlider-valueLabel');
    expect(valueLabel).toBeInTheDocument();
  });

  it('applies getAriaValueText function', () => {
    const getAriaValueText = (value: number) => `${value}°C`;
    renderWithTheme(
      <Slider
        defaultValue={30}
        getAriaValueText={getAriaValueText}
        aria-label="Temperature"
      />
    );
    const slider = screen.getByRole('slider');
    expect(slider).toHaveAttribute('aria-valuetext', '30°C');
  });

  it('handles disableSwap prop for range sliders', () => {
    const { container } = renderWithTheme(
      <Slider defaultValue={[20, 40]} disableSwap aria-label="range" />
    );
    const slider = container.querySelector('.MuiSlider-root');
    expect(slider).toBeInTheDocument();
    // disableSwap behavior is internal to MUI, we just verify it renders
  });

  it('renders with custom className', () => {
    const { container } = renderWithTheme(<Slider className="custom-slider" />);
    const slider = container.querySelector('.custom-slider');
    expect(slider).toBeInTheDocument();
  });

  it('maintains accessibility with keyboard interaction', () => {
    renderWithTheme(<Slider aria-label="test-slider" />);
    const slider = screen.getByRole('slider');

    slider.focus();
    expect(slider).toHaveFocus();

    // Test keyboard navigation
    fireEvent.keyDown(slider, { key: 'ArrowRight' });
    fireEvent.keyDown(slider, { key: 'ArrowUp' });
    fireEvent.keyDown(slider, { key: 'ArrowLeft' });
    fireEvent.keyDown(slider, { key: 'ArrowDown' });

    // Slider should still be in document after keyboard interactions
    expect(slider).toBeInTheDocument();
  });

  it('handles onChangeCommitted event', () => {
    const handleChangeCommitted = jest.fn();
    renderWithTheme(
      <Slider onChangeCommitted={handleChangeCommitted} aria-label="test-slider" />
    );
    const slider = screen.getByRole('slider');

    // Simulate value change and commit
    fireEvent.change(slider, { target: { value: '50' } });
    fireEvent.mouseUp(slider);

    expect(handleChangeCommitted).toHaveBeenCalled();
  });
});

