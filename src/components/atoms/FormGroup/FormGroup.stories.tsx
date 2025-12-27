/**
 * FormGroup component stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { FormGroup } from './FormGroup';
import { FormControlLabel } from '../FormControlLabel';
import { Checkbox } from '../Checkbox';
import { FormControl, FormLabel, FormHelperText } from '@mui/material';
import { useState } from 'react';

const meta: Meta<typeof FormGroup> = {
  title: 'Atoms/FormGroup',
  component: FormGroup,
  tags: ['autodocs'],
  argTypes: {
    row: {
      control: 'boolean',
      description: 'Display group of elements in a compact row',
    },
  },
};

export default meta;
type Story = StoryObj<typeof FormGroup>;

/**
 * Basic checkbox group
 */
export const Basic: Story = {
  render: () => (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Option 1" />
      <FormControlLabel control={<Checkbox />} label="Option 2" />
      <FormControlLabel control={<Checkbox />} label="Option 3" />
    </FormGroup>
  ),
};

/**
 * With label and helper text
 */
export const WithLabel: Story = {
  render: () => {
    const [state, setState] = useState({
      gilad: true,
      jason: false,
      antoine: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setState({
        ...state,
        [event.target.name]: event.target.checked,
      });
    };

    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={state.gilad} onChange={handleChange} name="gilad" />}
            label="Gilad Gray"
          />
          <FormControlLabel
            control={<Checkbox checked={state.jason} onChange={handleChange} name="jason" />}
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox checked={state.antoine} onChange={handleChange} name="antoine" />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>Select team members</FormHelperText>
      </FormControl>
    );
  },
};

/**
 * Row layout
 */
export const Row: Story = {
  render: () => (
    <FormControl component="fieldset">
      <FormLabel component="legend">Select options</FormLabel>
      <FormGroup row>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Option 1" />
        <FormControlLabel control={<Checkbox />} label="Option 2" />
        <FormControlLabel control={<Checkbox />} label="Option 3" />
        <FormControlLabel control={<Checkbox />} label="Option 4" />
      </FormGroup>
    </FormControl>
  ),
};

/**
 * With disabled options
 */
export const WithDisabledOptions: Story = {
  render: () => (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Available Option 1" />
      <FormControlLabel control={<Checkbox />} label="Available Option 2" />
      <FormControlLabel control={<Checkbox />} label="Disabled Option" disabled />
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Disabled Checked"
        disabled
      />
    </FormGroup>
  ),
};

/**
 * Error state
 */
export const Error: Story = {
  render: () => {
    const [state, setState] = useState({
      option1: false,
      option2: false,
      option3: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setState({
        ...state,
        [event.target.name]: event.target.checked,
      });
    };

    const error = !state.option1 && !state.option2 && !state.option3;

    return (
      <FormControl error={error} component="fieldset">
        <FormLabel component="legend">Pick at least one</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={state.option1} onChange={handleChange} name="option1" />}
            label="Option 1"
          />
          <FormControlLabel
            control={<Checkbox checked={state.option2} onChange={handleChange} name="option2" />}
            label="Option 2"
          />
          <FormControlLabel
            control={<Checkbox checked={state.option3} onChange={handleChange} name="option3" />}
            label="Option 3"
          />
        </FormGroup>
        <FormHelperText>{error ? 'You must select at least one option' : ' '}</FormHelperText>
      </FormControl>
    );
  },
};

/**
 * Indeterminate checkbox
 */
export const WithIndeterminate: Story = {
  render: () => {
    const [checked, setChecked] = useState([true, false]);

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, event.target.checked]);
    };

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, checked[1]]);
    };

    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([checked[0], event.target.checked]);
    };

    const children = (
      <FormGroup sx={{ marginLeft: 3 }}>
        <FormControlLabel
          control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
          label="Child 1"
        />
        <FormControlLabel
          control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
          label="Child 2"
        />
      </FormGroup>
    );

    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Select children</FormLabel>
        <FormControlLabel
          label="Parent"
          control={
            <Checkbox
              checked={checked[0] && checked[1]}
              indeterminate={checked[0] !== checked[1]}
              onChange={handleChange1}
            />
          }
        />
        {children}
      </FormControl>
    );
  },
};

/**
 * Column vs Row comparison
 */
export const ColumnVsRow: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '48px' }}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Column Layout</FormLabel>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Option 1" />
          <FormControlLabel control={<Checkbox />} label="Option 2" />
          <FormControlLabel control={<Checkbox />} label="Option 3" />
        </FormGroup>
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel component="legend">Row Layout</FormLabel>
        <FormGroup row>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Option 1" />
          <FormControlLabel control={<Checkbox />} label="Option 2" />
          <FormControlLabel control={<Checkbox />} label="Option 3" />
        </FormGroup>
      </FormControl>
    </div>
  ),
};
