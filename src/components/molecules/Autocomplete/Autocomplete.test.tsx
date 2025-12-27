/**
 * Autocomplete component tests
 */

import React from 'react';
import { render, screen, waitFor } from '../../../../tests/test-utils';
import userEvent from '@testing-library/user-event';
import { Autocomplete } from './Autocomplete';

const options = ['Option 1', 'Option 2', 'Option 3'];

describe('Autocomplete', () => {
  it('renders with default props', () => {
    render(<Autocomplete options={options} />);
    const input = screen.getByRole('combobox');
    expect(input).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Autocomplete options={options} label="Select option" />);
    expect(screen.getByLabelText('Select option')).toBeInTheDocument();
  });

  it('renders with placeholder', () => {
    render(<Autocomplete options={options} placeholder="Choose an option" />);
    const input = screen.getByRole('combobox');
    expect(input).toHaveAttribute('placeholder', 'Choose an option');
  });

  it('renders with default placeholder when not provided', () => {
    render(<Autocomplete options={options} />);
    const input = screen.getByRole('combobox');
    expect(input).toHaveAttribute('placeholder', 'Select option');
  });

  it('renders with medium size by default', () => {
    const { container } = render(<Autocomplete options={options} />);
    const input = container.querySelector('.MuiInputBase-root');
    expect(input).toBeInTheDocument();
    expect(input).not.toHaveClass('MuiInputBase-sizeSmall');
  });

  it('renders with small size', () => {
    const { container } = render(<Autocomplete options={options} size="small" />);
    const input = container.querySelector('.MuiInputBase-sizeSmall');
    expect(input).toBeInTheDocument();
  });

  it('opens dropdown when clicked', async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={options} label="Select" />);

    const input = screen.getByRole('combobox');
    await user.click(input);

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });
  });

  it('displays all options when opened', async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={options} label="Select" />);

    const input = screen.getByRole('combobox');
    await user.click(input);

    await waitFor(() => {
      options.forEach((option) => {
        expect(screen.getByText(option)).toBeInTheDocument();
      });
    });
  });

  it('selects an option when clicked', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(<Autocomplete options={options} label="Select" onChange={handleChange} />);

    const input = screen.getByRole('combobox');
    await user.click(input);

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    const option = screen.getByText('Option 1');
    await user.click(option);

    await waitFor(() => {
      expect(handleChange).toHaveBeenCalled();
    });
  });

  it('renders in multiple mode', () => {
    render(<Autocomplete options={options} multiple label="Select multiple" />);
    const input = screen.getByRole('combobox');
    expect(input).toBeInTheDocument();
  });

  it('displays chips for selected values in multiple mode', async () => {
    const _user = userEvent.setup();
    render(
      <Autocomplete
        options={options}
        multiple
        label="Select multiple"
        defaultValue={['Option 1', 'Option 2']}
      />
    );

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.getByText('Option 2')).toBeInTheDocument();
    });
  });

  it('renders with error state', () => {
    render(
      <Autocomplete options={options} label="Select" error helperText="This field is required" />
    );

    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('renders with helper text', () => {
    render(<Autocomplete options={options} label="Select" helperText="Choose your option" />);

    expect(screen.getByText('Choose your option')).toBeInTheDocument();
  });

  it('renders as required', () => {
    render(<Autocomplete options={options} label="Select" required />);
    const input = screen.getByRole('combobox');
    expect(input).toHaveAttribute('required');
  });

  it('renders as disabled', () => {
    render(<Autocomplete options={options} label="Select" disabled />);
    const input = screen.getByRole('combobox');
    expect(input).toBeDisabled();
  });

  it('renders as read-only', () => {
    render(<Autocomplete options={options} label="Select" readOnly />);
    const input = screen.getByRole('combobox');
    expect(input).toHaveAttribute('readonly');
  });

  it('renders without clear button when disableClearable is true', () => {
    const { container } = render(
      <Autocomplete options={options} label="Select" disableClearable defaultValue="Option 1" />
    );

    const clearButton = container.querySelector('.MuiAutocomplete-clearIndicator');
    expect(clearButton).not.toBeInTheDocument();
  });

  it('renders with clear button by default', () => {
    const { container } = render(
      <Autocomplete options={options} label="Select" defaultValue="Option 1" />
    );

    const clearButton = container.querySelector('.MuiAutocomplete-clearIndicator');
    expect(clearButton).toBeInTheDocument();
  });

  it('filters options based on input', async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={options} label="Select" />);

    const input = screen.getByRole('combobox');
    await user.type(input, 'Option 1');

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument();
      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.queryByText('Option 2')).not.toBeInTheDocument();
      expect(screen.queryByText('Option 3')).not.toBeInTheDocument();
    });
  });

  it('supports free solo mode', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(<Autocomplete options={options} label="Select" freeSolo onChange={handleChange} />);

    const input = screen.getByRole('combobox');
    await user.type(input, 'Custom value');

    expect(input).toHaveValue('Custom value');
  });

  it('renders with full width', () => {
    const { container } = render(<Autocomplete options={options} label="Select" fullWidth />);

    const autocomplete = container.querySelector('.MuiAutocomplete-root');
    expect(autocomplete).toHaveClass('MuiAutocomplete-fullWidth');
  });

  it('applies custom sx prop', () => {
    const { container } = render(
      <Autocomplete options={options} label="Select" sx={{ backgroundColor: 'red' }} />
    );

    const autocomplete = container.querySelector('.MuiAutocomplete-root');
    expect(autocomplete).toHaveStyle({ backgroundColor: 'red' });
  });

  it('calls onChange when selection changes', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(<Autocomplete options={options} label="Select" onChange={handleChange} />);

    const input = screen.getByRole('combobox');
    await user.click(input);

    await waitFor(() => {
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    const option = screen.getByText('Option 2');
    await user.click(option);

    await waitFor(() => {
      expect(handleChange).toHaveBeenCalled();
      const callArgs = handleChange.mock.calls[0];
      expect(callArgs[1]).toBe('Option 2');
    });
  });

  it('supports controlled value', () => {
    const { rerender } = render(<Autocomplete options={options} label="Select" value="Option 1" />);

    expect(screen.getByRole('combobox')).toHaveValue('Option 1');

    rerender(<Autocomplete options={options} label="Select" value="Option 2" />);

    expect(screen.getByRole('combobox')).toHaveValue('Option 2');
  });

  it('supports default value', () => {
    render(<Autocomplete options={options} label="Select" defaultValue="Option 1" />);

    expect(screen.getByRole('combobox')).toHaveValue('Option 1');
  });

  it('removes chip when delete icon is clicked in multiple mode', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(
      <Autocomplete
        options={options}
        multiple
        label="Select multiple"
        defaultValue={['Option 1', 'Option 2']}
        onChange={handleChange}
      />
    );

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument();
    });

    const deleteButtons = screen.getAllByTestId('CancelIcon');
    await user.click(deleteButtons[0]);

    await waitFor(() => {
      expect(handleChange).toHaveBeenCalled();
    });
  });
});
