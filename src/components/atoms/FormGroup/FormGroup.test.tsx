/**
 * FormGroup component tests
 */

import React from 'react';
import { renderWithTheme, screen } from '../../../../tests/test-utils';
import { FormGroup } from './FormGroup';
import { FormControlLabel } from '../FormControlLabel';
import { Checkbox } from '../Checkbox';
import userEvent from '@testing-library/user-event';

describe('FormGroup', () => {
  describe('Rendering', () => {
    it('renders form group with checkboxes', () => {
      renderWithTheme(
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Option 1" />
          <FormControlLabel control={<Checkbox />} label="Option 2" />
        </FormGroup>
      );
      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.getByText('Option 2')).toBeInTheDocument();
    });

    it('renders multiple checkboxes', () => {
      renderWithTheme(
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Option 1" />
          <FormControlLabel control={<Checkbox />} label="Option 2" />
          <FormControlLabel control={<Checkbox />} label="Option 3" />
        </FormGroup>
      );
      const checkboxes = screen.getAllByRole('checkbox');
      expect(checkboxes).toHaveLength(3);
    });
  });

  describe('Layout', () => {
    it('renders in column layout by default', () => {
      const { container } = renderWithTheme(
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Option 1" />
        </FormGroup>
      );
      const formGroup = container.querySelector('.MuiFormGroup-root');
      expect(formGroup).not.toHaveClass('MuiFormGroup-row');
    });

    it('renders in row layout when row prop is true', () => {
      const { container } = renderWithTheme(
        <FormGroup row>
          <FormControlLabel control={<Checkbox />} label="Option 1" />
        </FormGroup>
      );
      const formGroup = container.querySelector('.MuiFormGroup-root');
      expect(formGroup).toHaveClass('MuiFormGroup-row');
    });
  });

  describe('Interactions', () => {
    it('allows multiple selections', async () => {
      const user = userEvent.setup();
      renderWithTheme(
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Option 1" />
          <FormControlLabel control={<Checkbox />} label="Option 2" />
          <FormControlLabel control={<Checkbox />} label="Option 3" />
        </FormGroup>
      );

      const checkbox1 = screen.getByLabelText('Option 1');
      const checkbox2 = screen.getByLabelText('Option 2');
      const checkbox3 = screen.getByLabelText('Option 3');

      await user.click(checkbox1);
      await user.click(checkbox2);

      expect(checkbox1).toBeChecked();
      expect(checkbox2).toBeChecked();
      expect(checkbox3).not.toBeChecked();
    });

    it('can toggle selections', async () => {
      const user = userEvent.setup();
      renderWithTheme(
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Option 1" />
          <FormControlLabel control={<Checkbox />} label="Option 2" />
        </FormGroup>
      );

      const checkbox1 = screen.getByLabelText('Option 1');

      await user.click(checkbox1);
      expect(checkbox1).toBeChecked();

      await user.click(checkbox1);
      expect(checkbox1).not.toBeChecked();
    });
  });

  describe('Disabled State', () => {
    it('renders with disabled options', () => {
      renderWithTheme(
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Enabled" />
          <FormControlLabel control={<Checkbox />} label="Disabled" disabled />
        </FormGroup>
      );

      const enabled = screen.getByLabelText('Enabled');
      const disabled = screen.getByLabelText('Disabled');

      expect(enabled).not.toBeDisabled();
      expect(disabled).toBeDisabled();
    });
  });

  describe('Default Values', () => {
    it('renders with default checked values', () => {
      renderWithTheme(
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Checked by default" />
          <FormControlLabel control={<Checkbox />} label="Unchecked" />
        </FormGroup>
      );

      const checkedBox = screen.getByLabelText('Checked by default');
      const uncheckedBox = screen.getByLabelText('Unchecked');

      expect(checkedBox).toBeChecked();
      expect(uncheckedBox).not.toBeChecked();
    });
  });

  describe('Ref', () => {
    it('forwards ref to the root element', () => {
      const ref = React.createRef<HTMLDivElement>();
      renderWithTheme(
        <FormGroup ref={ref}>
          <FormControlLabel control={<Checkbox />} label="Option 1" />
        </FormGroup>
      );
      expect(ref.current).toBeTruthy();
    });
  });
});
