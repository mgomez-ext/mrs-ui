/**
 * Select component tests
 */

import React from 'react';
import { renderWithTheme, screen } from '../../../../tests/test-utils';
import { Select } from './Select';
import { MenuItem } from '../MenuItem';
import { FormControl, InputLabel } from '@mui/material';
import userEvent from '@testing-library/user-event';

describe('Select', () => {
  describe('Rendering', () => {
    it('renders select with menu items', () => {
      renderWithTheme(
        <Select value="option1">
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
        </Select>
      );
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('renders with label', () => {
      renderWithTheme(
        <FormControl>
          <InputLabel id="test-label">Test Label</InputLabel>
          <Select labelId="test-label" label="Test Label" value="">
            <MenuItem value="option1">Option 1</MenuItem>
          </Select>
        </FormControl>
      );
      expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    });

    it('renders with default value', () => {
      renderWithTheme(
        <Select defaultValue="option1">
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
        </Select>
      );
      expect(screen.getByRole('combobox')).toHaveTextContent('Option 1');
    });
  });

  describe('Variants', () => {
    it('renders outlined variant', () => {
      const { container } = renderWithTheme(
        <Select variant="outlined" value="option1">
          <MenuItem value="option1">Option 1</MenuItem>
        </Select>
      );
      const select = container.querySelector('.MuiOutlinedInput-root');
      expect(select).toBeInTheDocument();
    });

    it('renders filled variant', () => {
      const { container } = renderWithTheme(
        <Select variant="filled" value="option1">
          <MenuItem value="option1">Option 1</MenuItem>
        </Select>
      );
      const select = container.querySelector('.MuiFilledInput-root');
      expect(select).toBeInTheDocument();
    });

    it('renders standard variant', () => {
      const { container } = renderWithTheme(
        <Select variant="standard" value="option1">
          <MenuItem value="option1">Option 1</MenuItem>
        </Select>
      );
      const select = container.querySelector('.MuiInput-root');
      expect(select).toBeInTheDocument();
    });
  });

  describe('Sizes', () => {
    it('renders small size', () => {
      const { container } = renderWithTheme(
        <Select size="small" value="option1">
          <MenuItem value="option1">Option 1</MenuItem>
        </Select>
      );
      const select = container.querySelector('.MuiInputBase-sizeSmall');
      expect(select).toBeInTheDocument();
    });

    it('renders medium size', () => {
      renderWithTheme(
        <Select size="medium" value="option1">
          <MenuItem value="option1">Option 1</MenuItem>
        </Select>
      );
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });
  });

  describe('States', () => {
    it('renders disabled state', () => {
      const { container } = renderWithTheme(
        <Select disabled value="option1">
          <MenuItem value="option1">Option 1</MenuItem>
        </Select>
      );
      const select = container.querySelector('.Mui-disabled');
      expect(select).toBeInTheDocument();
    });

    it('renders error state', () => {
      const { container } = renderWithTheme(
        <Select error value="option1">
          <MenuItem value="option1">Option 1</MenuItem>
        </Select>
      );
      const select = container.querySelector('.Mui-error');
      expect(select).toBeInTheDocument();
    });

    it('renders required field', () => {
      renderWithTheme(
        <Select required value="option1">
          <MenuItem value="option1">Option 1</MenuItem>
        </Select>
      );
      const select = screen.getByRole('combobox');
      expect(select).toBeRequired();
    });
  });

  describe('Multiple Selection', () => {
    it('renders multiple select', () => {
      renderWithTheme(
        <Select multiple value={['option1']}>
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
        </Select>
      );
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('handles multiple values', () => {
      renderWithTheme(
        <Select multiple value={['option1', 'option2']}>
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
      );
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });
  });

  describe('Full Width', () => {
    it('renders full width', () => {
      const { container } = renderWithTheme(
        <Select fullWidth value="option1">
          <MenuItem value="option1">Option 1</MenuItem>
        </Select>
      );
      const select = container.querySelector('.MuiSelect-root');
      expect(select).toBeInTheDocument();
    });
  });

  describe('Auto Width', () => {
    it('renders auto width', () => {
      renderWithTheme(
        <Select autoWidth value="option1">
          <MenuItem value="option1">Option 1</MenuItem>
        </Select>
      );
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    it('calls onChange when value changes', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      renderWithTheme(
        <Select value="" onChange={handleChange}>
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
        </Select>
      );

      const select = screen.getByRole('combobox');
      await user.click(select);

      const option = await screen.findByText('Option 1');
      await user.click(option);

      expect(handleChange).toHaveBeenCalled();
    });

    it('opens menu on click', async () => {
      const user = userEvent.setup();
      renderWithTheme(
        <Select value="">
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
        </Select>
      );

      const select = screen.getByRole('combobox');
      await user.click(select);

      expect(await screen.findByRole('listbox')).toBeInTheDocument();
    });
  });

  describe('Name Attribute', () => {
    it('renders with name attribute', () => {
      const { container } = renderWithTheme(
        <Select name="test-select" value="option1">
          <MenuItem value="option1">Option 1</MenuItem>
        </Select>
      );
      const input = container.querySelector('input[name="test-select"]');
      expect(input).toBeInTheDocument();
    });
  });

  describe('Ref', () => {
    it('forwards ref to the root element', () => {
      const ref = React.createRef<any>();
      renderWithTheme(
        <Select ref={ref} value="option1">
          <MenuItem value="option1">Option 1</MenuItem>
        </Select>
      );
      expect(ref.current).toBeTruthy();
    });
  });
});
