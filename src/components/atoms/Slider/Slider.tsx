/**
 * Slider Component
 *
 * Slider component for the MRS Design System.
 * Wraps Material-UI Slider with custom theme tokens.
 *
 * @figma https://www.figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0?node-id=6562-39045&m=dev
 * @see {@link https://mui.com/material-ui/react-slider/}
 */

import React from 'react';
import MuiSlider from '@mui/material/Slider';
import { SliderProps } from './Slider.types';

/**
 * Slider component
 *
 * Sliders allow users to make selections from a range of values.
 * Sliders reflect a range of values along a bar, from which users may select a single value.
 * They are ideal for adjusting settings such as volume, brightness, or applying image filters.
 *
 * @param props - Slider component props
 * @returns Slider component
 */
export const Slider = React.forwardRef<HTMLSpanElement, SliderProps>(
  (
    {
      size = 'medium',
      color = 'primary',
      orientation = 'horizontal',
      disabled = false,
      marks = false,
      step = 1,
      min = 0,
      max = 100,
      valueLabelDisplay = 'off',
      track = 'normal',
      disableSwap = false,
      value,
      defaultValue,
      onChange,
      onChangeCommitted,
      valueLabelFormat,
      scale,
      getAriaValueText,
      name,
      id,
      component,
      sx,
      ...restProps
    },
    ref
  ) => {
    return (
      <MuiSlider
        ref={ref}
        size={size}
        color={color}
        orientation={orientation}
        disabled={disabled}
        marks={marks}
        step={step}
        min={min}
        max={max}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        onChangeCommitted={onChangeCommitted}
        valueLabelDisplay={valueLabelDisplay}
        valueLabelFormat={valueLabelFormat}
        track={track}
        disableSwap={disableSwap}
        scale={scale}
        getAriaValueText={getAriaValueText}
        name={name}
        id={id}
        {...(component && { component })}
        sx={sx}
        {...restProps}
      />
    );
  }
);

Slider.displayName = 'Slider';
