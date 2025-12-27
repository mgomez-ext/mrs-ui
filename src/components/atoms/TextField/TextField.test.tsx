/**
 * TextField component tests
 */

import React from 'react';
import { renderWithTheme, screen } from '../../../../tests/test-utils';
import { TextField } from './TextField';
import userEvent from '@testing-library/user-event';

describe('TextField', () => {
  describe('Rendering', () => {
    it('renders text field with label', () => {
      renderWithTheme(<TextField label="Email" />);
      expect(screen.getByLabelText('Email')).toBeInTheDocument();
    });

    it('renders with placeholder', () => {
      renderWithTheme(<TextField placeholder="Enter email" />);
      const input = screen.getByPlaceholderText('Enter email');
      expect(input).toBeInTheDocument();
    });

    it('renders with helper text', () => {
      renderWithTheme(<TextField label="Email" helperText="Enter your email address" />);
      expect(screen.getByText('Enter your email address')).toBeInTheDocument();
    });

    it('renders with default value', () => {
      renderWithTheme(<TextField label="Email" defaultValue="test@example.com" />);
      const input = screen.getByLabelText('Email') as HTMLInputElement;
      expect(input.value).toBe('test@example.com');
    });
  });

  describe('Variants', () => {
    it('renders outlined variant', () => {
      const { container } = renderWithTheme(<TextField variant="outlined" label="Outlined" />);
      const outlinedInput = container.querySelector('.MuiOutlinedInput-root');
      expect(outlinedInput).toBeInTheDocument();
    });

    it('renders filled variant', () => {
      const { container } = renderWithTheme(<TextField variant="filled" label="Filled" />);
      const filledInput = container.querySelector('.MuiFilledInput-root');
      expect(filledInput).toBeInTheDocument();
    });

    it('renders standard variant', () => {
      const { container } = renderWithTheme(<TextField variant="standard" label="Standard" />);
      const standardInput = container.querySelector('.MuiInput-root');
      expect(standardInput).toBeInTheDocument();
    });
  });

  describe('Sizes', () => {
    it('renders small size', () => {
      const { container } = renderWithTheme(<TextField size="small" label="Small" />);
      const input = container.querySelector('.MuiInputBase-sizeSmall');
      expect(input).toBeInTheDocument();
    });

    it('renders medium size', () => {
      renderWithTheme(<TextField size="medium" label="Medium" />);
      const input = screen.getByLabelText('Medium');
      expect(input).toBeInTheDocument();
    });
  });

  describe('States', () => {
    it('renders disabled state', () => {
      renderWithTheme(<TextField label="Email" disabled />);
      const input = screen.getByLabelText('Email');
      expect(input).toBeDisabled();
    });

    it('renders error state', () => {
      const { container } = renderWithTheme(<TextField label="Email" error />);
      const errorInput = container.querySelector('.Mui-error');
      expect(errorInput).toBeInTheDocument();
    });

    it('renders required field', () => {
      renderWithTheme(<TextField label="Email" required />);
      const input = screen.getByLabelText(/Email/);
      expect(input).toBeRequired();
    });

    it('renders with error and helper text', () => {
      renderWithTheme(<TextField label="Email" error helperText="Invalid email" />);
      expect(screen.getByText('Invalid email')).toBeInTheDocument();
    });
  });

  describe('Multiline', () => {
    it('renders multiline textarea', () => {
      renderWithTheme(<TextField label="Description" multiline />);
      const textarea = screen.getByLabelText('Description');
      expect(textarea.tagName).toBe('TEXTAREA');
    });

    it('renders with specified rows', () => {
      renderWithTheme(<TextField label="Description" multiline rows={4} />);
      const textarea = screen.getByLabelText('Description') as HTMLTextAreaElement;
      expect(textarea.rows).toBe(4);
    });
  });

  describe('Colors', () => {
    it('applies primary color', () => {
      const { container } = renderWithTheme(<TextField label="Primary" color="primary" />);
      const input = container.querySelector('.MuiInputBase-root');
      expect(input).toBeInTheDocument();
    });

    it('applies secondary color', () => {
      const { container } = renderWithTheme(<TextField label="Secondary" color="secondary" />);
      const input = container.querySelector('.MuiInputBase-root');
      expect(input).toBeInTheDocument();
    });

    it('applies error color', () => {
      const { container } = renderWithTheme(<TextField label="Error" color="error" />);
      const input = container.querySelector('.MuiInputBase-root');
      expect(input).toBeInTheDocument();
    });
  });

  describe('Types', () => {
    it('renders password type', () => {
      renderWithTheme(<TextField label="Password" type="password" />);
      const input = screen.getByLabelText('Password') as HTMLInputElement;
      expect(input.type).toBe('password');
    });

    it('renders email type', () => {
      renderWithTheme(<TextField label="Email" type="email" />);
      const input = screen.getByLabelText('Email') as HTMLInputElement;
      expect(input.type).toBe('email');
    });

    it('renders number type', () => {
      renderWithTheme(<TextField label="Age" type="number" />);
      const input = screen.getByLabelText('Age') as HTMLInputElement;
      expect(input.type).toBe('number');
    });
  });

  describe('Full Width', () => {
    it('renders full width', () => {
      const { container } = renderWithTheme(<TextField label="Email" fullWidth />);
      const textField = container.querySelector('.MuiTextField-root');
      expect(textField).toHaveClass('MuiFormControl-fullWidth');
    });

    it('renders without full width by default', () => {
      const { container } = renderWithTheme(<TextField label="Email" />);
      const textField = container.querySelector('.MuiTextField-root');
      expect(textField).not.toHaveClass('MuiFormControl-fullWidth');
    });
  });

  describe('Interactions', () => {
    it('calls onChange when value changes', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      renderWithTheme(<TextField label="Email" onChange={handleChange} />);

      const input = screen.getByLabelText('Email');
      await user.type(input, 'test');

      expect(handleChange).toHaveBeenCalled();
    });

    it('calls onFocus when input is focused', async () => {
      const user = userEvent.setup();
      const handleFocus = jest.fn();
      renderWithTheme(<TextField label="Email" onFocus={handleFocus} />);

      const input = screen.getByLabelText('Email');
      await user.click(input);

      expect(handleFocus).toHaveBeenCalledTimes(1);
    });

    it('calls onBlur when input loses focus', async () => {
      const user = userEvent.setup();
      const handleBlur = jest.fn();
      renderWithTheme(<TextField label="Email" onBlur={handleBlur} />);

      const input = screen.getByLabelText('Email');
      await user.click(input);
      await user.tab();

      expect(handleBlur).toHaveBeenCalledTimes(1);
    });

    it('updates value on user input', async () => {
      const user = userEvent.setup();
      renderWithTheme(<TextField label="Email" />);

      const input = screen.getByLabelText('Email') as HTMLInputElement;
      await user.type(input, 'test@example.com');

      expect(input.value).toBe('test@example.com');
    });
  });

  describe('Name Attribute', () => {
    it('renders with name attribute', () => {
      renderWithTheme(<TextField label="Email" name="email" />);
      const input = screen.getByLabelText('Email') as HTMLInputElement;
      expect(input.name).toBe('email');
    });
  });

  describe('AutoFocus', () => {
    it('autofocuses input when autoFocus is true', () => {
      renderWithTheme(<TextField label="Email" autoFocus />);
      const input = screen.getByLabelText('Email');
      expect(input).toHaveFocus();
    });
  });

  describe('Ref', () => {
    it('forwards ref to the root element', () => {
      const ref = React.createRef<HTMLDivElement>();
      renderWithTheme(<TextField ref={ref} label="Email" />);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });
});
