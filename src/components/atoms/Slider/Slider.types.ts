/**
 * Slider component type definitions
 */

import type { SliderProps as MuiSliderProps } from '@mui/material/Slider';

/**
 * MRS Slider component props
 * Extends Material-UI SliderProps
 *
 * @example
 * ```tsx
 * <Slider defaultValue={30} />
 * <Slider value={50} onChange={handleChange} />
 * <Slider value={[20, 40]} marks step={10} />
 * <Slider orientation="vertical" />
 * ```
 */
export interface SliderProps extends Omit<MuiSliderProps, 'size' | 'color'> {
  /**
   * The size of the slider.
   * @default 'medium'
   */
  size?: 'small' | 'medium';

  /**
   * The color of the slider.
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';

  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * The value of the slider.
   * For ranged sliders, provide an array with two values.
   */
  value?: number | number[];

  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue?: number | number[];

  /**
   * If `true`, the slider is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Marks indicate predetermined values to which the user can move the slider.
   * If `true` the marks are spaced according the value of the `step` prop.
   * If an array, it should contain objects with `value` and an optional `label` keys.
   * @default false
   */
  marks?: boolean | Array<{ value: number; label?: React.ReactNode }>;

  /**
   * The granularity with which the slider can step through values.
   * @default 1
   */
  step?: number | null;

  /**
   * The minimum allowed value of the slider.
   * Should not be equal to max.
   * @default 0
   */
  min?: number;

  /**
   * The maximum allowed value of the slider.
   * Should not be equal to min.
   * @default 100
   */
  max?: number;

  /**
   * Callback function that is fired when the slider's value changed.
   *
   * @param {Event} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event not a change event.
   * @param {number | number[]} value The new value.
   * @param {number} activeThumb Index of the currently moved thumb.
   */
  onChange?: (event: Event, value: number | number[], activeThumb: number) => void;

  /**
   * Callback function that is fired when the `mouseup` is triggered.
   *
   * @param {React.SyntheticEvent | Event} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {number | number[]} value The new value.
   */
  onChangeCommitted?: (event: React.SyntheticEvent | Event, value: number | number[]) => void;

  /**
   * Controls when the value label is displayed:
   * - `auto` the value label will display when the thumb is hovered or focused.
   * - `on` will display persistently.
   * - `off` will never display.
   * @default 'off'
   */
  valueLabelDisplay?: 'auto' | 'on' | 'off';

  /**
   * The format function the value label's value.
   */
  valueLabelFormat?: string | ((value: number, index: number) => React.ReactNode);

  /**
   * A transformation function, to change the scale of the slider.
   * @default (x) => x
   */
  scale?: (value: number) => number;

  /**
   * The track presentation:
   * - `normal` the track will render a bar representing the slider value.
   * - `inverted` the track will render a bar representing the remaining slider value.
   * - `false` the track will render without a bar.
   * @default 'normal'
   */
  track?: 'normal' | 'inverted' | false;

  /**
   * The name attribute of the input element.
   */
  name?: string;

  /**
   * The id of the input element.
   */
  id?: string;

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component?: React.ElementType;

  /**
   * If `true`, the active thumb doesn't swap when moving pointer over a thumb while dragging another thumb.
   * @default false
   */
  disableSwap?: boolean;

  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current value of the slider.
   * This is important for screen reader users.
   * @param {number} value The thumb label's value to format.
   * @param {number} index The thumb label's index to format.
   */
  getAriaValueText?: (value: number, index: number) => string;

  /**
   * The label of the slider.
   */
  'aria-label'?: string;

  /**
   * The id of the element containing a label for the slider.
   */
  'aria-labelledby'?: string;

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: MuiSliderProps['sx'];
}
