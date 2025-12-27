/**
 * FormControlLabel component tests
 */

import React from 'react';
import { renderWithTheme, screen } from '../../../../tests/test-utils';
import { FormControlLabel } from './FormControlLabel';
import { Checkbox } from '../Checkbox';
import { Radio } from '../Radio';
import { Switch } from '../Switch';
import userEvent from '@testing-library/user-event';

describe('FormControlLabel', () => {
  describe('Rendering', () => {
    it('renders with checkbox control', () => {
      renderWithTheme(<FormControlLabel control={<Checkbox />} label="Test Label" />);
      expect(screen.getByText('Test Label')).toBeInTheDocument();
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('renders with radio control', () => {
      renderWithTheme(<FormControlLabel control={<Radio />} label="Test Label" />);
      expect(screen.getByText('Test Label')).toBeInTheDocument();
      expect(screen.getByRole('radio')).toBeInTheDocument();
    });

    it('renders with switch control', () => {
      renderWithTheme(<FormControlLabel control={<Switch />} label="Test Label" />);
      expect(screen.getByText('Test Label')).toBeInTheDocument();
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });
  });

  describe('Label Placement', () => {
    it('renders label at end by default', () => {
      const { container } = renderWithTheme(
        <FormControlLabel control={<Checkbox />} label="End Label" />
      );
      const label = container.querySelector('.MuiFormControlLabel-root');
      expect(label).not.toHaveClass('MuiFormControlLabel-labelPlacementStart');
    });

    it('renders label at start', () => {
      const { container } = renderWithTheme(
        <FormControlLabel control={<Checkbox />} label="Start Label" labelPlacement="start" />
      );
      const label = container.querySelector('.MuiFormControlLabel-labelPlacementStart');
      expect(label).toBeInTheDocument();
    });

    it('renders label at top', () => {
      const { container } = renderWithTheme(
        <FormControlLabel control={<Checkbox />} label="Top Label" labelPlacement="top" />
      );
      const label = container.querySelector('.MuiFormControlLabel-labelPlacementTop');
      expect(label).toBeInTheDocument();
    });

    it('renders label at bottom', () => {
      const { container } = renderWithTheme(
        <FormControlLabel control={<Checkbox />} label="Bottom Label" labelPlacement="bottom" />
      );
      const label = container.querySelector('.MuiFormControlLabel-labelPlacementBottom');
      expect(label).toBeInTheDocument();
    });
  });

  describe('States', () => {
    it('renders disabled state', () => {
      renderWithTheme(<FormControlLabel control={<Checkbox />} label="Disabled" disabled />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeDisabled();
    });

    it('renders required field', () => {
      const { container } = renderWithTheme(
        <FormControlLabel control={<Checkbox />} label="Required" required />
      );
      const label = container.querySelector('.MuiFormControlLabel-asterisk');
      expect(label).toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    it('toggles checkbox on label click', async () => {
      const user = userEvent.setup();
      renderWithTheme(<FormControlLabel control={<Checkbox />} label="Click Me" />);

      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeChecked();

      const label = screen.getByText('Click Me');
      await user.click(label);

      expect(checkbox).toBeChecked();
    });

    it('calls onChange when control changes', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      renderWithTheme(
        <FormControlLabel control={<Checkbox onChange={handleChange} />} label="Test" />
      );

      const checkbox = screen.getByRole('checkbox');
      await user.click(checkbox);

      expect(handleChange).toHaveBeenCalled();
    });

    it('does not toggle when disabled', async () => {
      const user = userEvent.setup();
      renderWithTheme(<FormControlLabel control={<Checkbox />} label="Disabled" disabled />);

      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeDisabled();

      await user.click(checkbox).catch(() => {
        // Expected to fail
      });

      expect(checkbox).not.toBeChecked();
    });
  });

  describe('Value', () => {
    it('passes value to control', () => {
      const { container } = renderWithTheme(
        <FormControlLabel control={<Radio />} label="Test" value="test-value" />
      );
      const radio = container.querySelector('input[type="radio"]');
      expect(radio).toHaveAttribute('value', 'test-value');
    });
  });

  describe('Ref', () => {
    it('forwards ref to the root element', () => {
      const ref = React.createRef<HTMLLabelElement>();
      renderWithTheme(<FormControlLabel ref={ref} control={<Checkbox />} label="Test" />);
      expect(ref.current).toBeTruthy();
    });
  });
});
