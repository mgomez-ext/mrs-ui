/**
 * Autocomplete Component
 *
 * Autocomplete component for the MRS Design System.
 * Wraps Material-UI Autocomplete with custom theme tokens.
 *
 * @figma https://figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0?node-id=6570:49856
 * @see {@link https://mui.com/material-ui/react-autocomplete/}
 */

import React from 'react';
import MuiAutocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { AutocompleteProps } from './Autocomplete.types';
import { Chip } from '../../atoms/Chip';

/**
 * Autocomplete component
 *
 * The autocomplete is a normal text input enhanced by a panel of suggested options.
 * Supports both single and multiple selection modes.
 *
 * @param props - Autocomplete component props
 * @returns Autocomplete component
 */
export const Autocomplete = <
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
>(
  props: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>
): React.ReactElement => {
  const {
    options,
    label,
    placeholder = 'Select option',
    error = false,
    helperText,
    required = false,
    disabled = false,
    readOnly = false,
    size = 'medium',
    multiple = false as Multiple,
    disableClearable = false as DisableClearable,
    freeSolo = false as FreeSolo,
    fullWidth = false,
    sx,
    ...restProps
  } = props;

  return (
    <MuiAutocomplete
      {...(restProps as any)}
      options={options}
      multiple={multiple}
      disableClearable={disableClearable}
      freeSolo={freeSolo}
      disabled={disabled}
      readOnly={readOnly}
      fullWidth={fullWidth}
      size={size}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder={placeholder}
          error={error}
          helperText={helperText}
          required={required}
          variant="outlined"
        />
      )}
      renderTags={(value: T[], getTagProps) =>
        value.map((option: T, index: number) => {
          const { key, ...tagProps } = getTagProps({ index });
          return <Chip key={key} label={String(option)} size="small" {...tagProps} />;
        })
      }
      sx={{
        ...sx,
      }}
    />
  );
};

Autocomplete.displayName = 'Autocomplete';
