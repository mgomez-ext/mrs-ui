/**
 * RadioGroup component tests
 */

import React from 'react';
import { renderWithTheme, screen } from '../../../../tests/test-utils';
import { RadioGroup } from './RadioGroup';
import { Radio } from '../Radio';
import { FormControlLabel } from '../FormControlLabel';
import userEvent from '@testing-library/user-event';

describe('RadioGroup', () => {
  describe('Rendering', () => {
    it('renders radio group with options', () => {
      renderWithTheme(
        <RadioGroup value="option1">
          <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
          <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
        </RadioGroup>
      );
      expect(screen.getByRole('radiogroup')).toBeInTheDocument();
    });

    it('renders with default value', () => {
      renderWithTheme(
        <RadioGroup defaultValue="option2">
          <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
          <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
        </RadioGroup>
      );
      const option2 = screen.getByLabelText('Option 2');
      expect(option2).toBeChecked();
    });
  });

  describe('Layout', () => {
    it('renders in column layout by default', () => {
      const { container } = renderWithTheme(
        <RadioGroup value="option1">
          <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
        </RadioGroup>
      );
      const radioGroup = container.querySelector('.MuiFormGroup-root');
      expect(radioGroup).not.toHaveClass('MuiFormGroup-row');
    });

    it('renders in row layout when row prop is true', () => {
      const { container } = renderWithTheme(
        <RadioGroup row value="option1">
          <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
        </RadioGroup>
      );
      const radioGroup = container.querySelector('.MuiFormGroup-root');
      expect(radioGroup).toHaveClass('MuiFormGroup-row');
    });
  });

  describe('Interactions', () => {
    it('calls onChange when selection changes', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      renderWithTheme(
        <RadioGroup value="option1" onChange={handleChange}>
          <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
          <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
        </RadioGroup>
      );

      const option2 = screen.getByLabelText('Option 2');
      await user.click(option2);

      expect(handleChange).toHaveBeenCalled();
    });

    it('updates selected value on click', async () => {
      const user = userEvent.setup();
      renderWithTheme(
        <RadioGroup defaultValue="option1">
          <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
          <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
        </RadioGroup>
      );

      const option1 = screen.getByLabelText('Option 1');
      const option2 = screen.getByLabelText('Option 2');

      expect(option1).toBeChecked();
      expect(option2).not.toBeChecked();

      await user.click(option2);

      expect(option1).not.toBeChecked();
      expect(option2).toBeChecked();
    });
  });

  describe('Name Attribute', () => {
    it('applies name to all radio buttons', () => {
      renderWithTheme(
        <RadioGroup name="test-group" value="option1">
          <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
          <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
        </RadioGroup>
      );

      const radios = screen.getAllByRole('radio');
      radios.forEach((radio) => {
        expect(radio).toHaveAttribute('name', 'test-group');
      });
    });
  });

  describe('Ref', () => {
    it('forwards ref to the root element', () => {
      const ref = React.createRef<HTMLDivElement>();
      renderWithTheme(
        <RadioGroup ref={ref} value="option1">
          <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
        </RadioGroup>
      );
      expect(ref.current).toBeTruthy();
    });
  });
});
