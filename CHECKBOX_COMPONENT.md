# Checkbox Component Documentation

## Overview

The **Checkbox** component is an atom component in the MRS Design System that allows users to select one or more items from a set. It provides a simple and accessible way to enable multiple selections in forms and lists.

## Implementation Details

### Location
- **Component**: `src/components/atoms/Checkbox/`
- **Types**: `Checkbox.types.ts`
- **Tests**: `Checkbox.test.tsx`
- **Stories**: `Checkbox.stories.tsx`

### Features

#### Sizes
- **Small** - Compact size (20px) for dense interfaces
- **Medium** (default) - Standard size (24px) for most use cases
- **Large** - Emphasized size (28px) for prominent selections

#### Colors
- **Primary** (default) - Primary theme color (teal/cyan)
- **Default** - Standard black color

#### States
- **Unchecked** - Default state, not selected
- **Checked** - Selected state
- **Indeterminate** - Partially selected state (useful for parent-child relationships)
- **Disabled** - Non-interactive state (can be combined with checked/unchecked)

#### Additional Props
- **checked** - Controlled checked state
- **indeterminate** - Shows mixed/partial selection
- **disabled** - Disables the checkbox
- **disableRipple** - Removes ripple effect
- **required** - Marks as required field
- **onChange** - Callback for state changes
- **sx** - Custom styling via MUI's sx prop

## Usage

### Basic Usage

```typescript
import { Checkbox } from '@mrs/ui';

function MyComponent() {
  return <Checkbox />;
}
```

### Controlled Checkbox

```typescript
import { Checkbox } from '@mrs/ui';
import { useState } from 'react';

function MyComponent() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox 
      checked={checked} 
      onChange={handleChange} 
    />
  );
}
```

### With Label

```typescript
import { Checkbox, FormControlLabel } from '@mrs/ui';

function MyComponent() {
  return (
    <FormControlLabel 
      control={<Checkbox />} 
      label="Accept terms and conditions" 
    />
  );
}
```

### Different Sizes

```typescript
// Small size
<Checkbox size="small" />

// Medium size (default)
<Checkbox size="medium" />

// Large size
<Checkbox size="large" />
```

### Different Colors

```typescript
// Primary color (default)
<Checkbox color="primary" />

// Default color (black)
<Checkbox color="default" />
```

### Indeterminate State

```typescript
// Useful for "select all" checkboxes
<Checkbox indeterminate />

// Combined with checked
<Checkbox 
  checked={someChildrenChecked} 
  indeterminate={notAllChildrenChecked} 
/>
```

### Disabled State

```typescript
// Disabled unchecked
<Checkbox disabled />

// Disabled checked
<Checkbox disabled checked />

// Disabled indeterminate
<Checkbox disabled indeterminate />
```

### Checkbox Group

```typescript
import { Checkbox, FormGroup, FormControlLabel } from '@mrs/ui';
import { useState } from 'react';

function CheckboxGroup() {
  const [checked, setChecked] = useState([false, false, false]);

  const handleChange = (index: number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newChecked = [...checked];
    newChecked[index] = event.target.checked;
    setChecked(newChecked);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox checked={checked[0]} onChange={handleChange(0)} />}
        label="Option 1"
      />
      <FormControlLabel
        control={<Checkbox checked={checked[1]} onChange={handleChange(1)} />}
        label="Option 2"
      />
      <FormControlLabel
        control={<Checkbox checked={checked[2]} onChange={handleChange(2)} />}
        label="Option 3"
      />
    </FormGroup>
  );
}
```

### Parent-Child Checkboxes

```typescript
import { Checkbox, FormControlLabel, Box } from '@mrs/ui';
import { useState } from 'react';

function ParentChildCheckboxes() {
  const [children, setChildren] = useState([true, false]);

  const handleParentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChildren([event.target.checked, event.target.checked]);
  };

  const handleChildChange = (index: number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newChildren = [...children];
    newChildren[index] = event.target.checked;
    setChildren(newChildren);
  };

  const allChecked = children.every(Boolean);
  const someChecked = children.some(Boolean);
  const isIndeterminate = someChecked && !allChecked;

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={allChecked}
            indeterminate={isIndeterminate}
            onChange={handleParentChange}
          />
        }
        label="Select All"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
        <FormControlLabel
          control={
            <Checkbox 
              checked={children[0]} 
              onChange={handleChildChange(0)} 
            />
          }
          label="Child 1"
        />
        <FormControlLabel
          control={
            <Checkbox 
              checked={children[1]} 
              onChange={handleChildChange(1)} 
            />
          }
          label="Child 2"
        />
      </Box>
    </div>
  );
}
```

### Custom Styling

```typescript
// Custom color
<Checkbox
  sx={{
    color: 'purple',
    '&.Mui-checked': {
      color: 'purple',
    },
  }}
/>

// Custom size
<Checkbox
  sx={{
    '& .MuiSvgIcon-root': {
      fontSize: 32,
    },
  }}
/>
```

## TypeScript Props

```typescript
export interface CheckboxProps extends Omit<MuiCheckboxProps, 'size' | 'color'> {
  /**
   * If `true`, the component is checked.
   */
  checked?: boolean;

  /**
   * If `true`, the component appears indeterminate.
   * @default false
   */
  indeterminate?: boolean;

  /**
   * The size of the component.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * The color of the component.
   * @default 'primary'
   */
  color?: 'default' | 'primary';

  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple?: boolean;

  /**
   * The id of the input element.
   */
  id?: string;

  /**
   * Attributes applied to the input element.
   */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;

  /**
   * Props applied to the input element.
   */
  inputRef?: React.Ref<HTMLInputElement>;

  /**
   * Callback fired when the state is changed.
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;

  /**
   * If `true`, the input element is required.
   * @default false
   */
  required?: boolean;

  /**
   * The value of the component.
   */
  value?: unknown;

  /**
   * The system prop that allows defining system overrides.
   */
  sx?: MuiCheckboxProps['sx'];
}
```

## Verification Results

### Tests: ✅ 30/30 Passing

All tests successfully verify:
- **Rendering**: Default props, checked, unchecked, indeterminate states
- **Sizes**: All sizes (small, medium, large)
- **Colors**: All colors (default, primary)
- **States**: Disabled, controlled states
- **Interactions**: onChange events, keyboard focus
- **Props**: Custom id, value, required, inputProps
- **Ref**: Forwarding ref to underlying element
- **Styling**: Custom sx prop
- **Accessibility**: Proper ARIA attributes

### Test Coverage

```
Checkbox
  ✓ renders with default props
  ✓ renders in checked state
  ✓ renders in unchecked state
  ✓ renders in indeterminate state
  ✓ renders with small size
  ✓ renders with medium size
  ✓ renders with large size
  ✓ renders with default color
  ✓ renders with primary color
  ✓ renders as disabled
  ✓ handles onChange event
  ✓ handles onChange event when checked
  ✓ renders as disabled and prevents interaction
  ✓ forwards ref correctly
  ✓ applies custom sx prop
  ✓ renders with custom id
  ✓ renders with custom value
  ✓ renders as required
  ✓ applies inputProps correctly
  ✓ accepts disableRipple prop
  ✓ renders all size options correctly
  ✓ renders all color options correctly
  ✓ can be focused with keyboard
  ✓ handles keyboard interaction (enter key)
  ✓ renders with controlled checked state
  ✓ renders with controlled indeterminate state
  ✓ combines checked and indeterminate correctly
  ✓ renders with custom className
  ✓ handles multiple checkboxes independently
  ✓ maintains accessibility attributes
```

## Storybook Stories

The following stories are available in Storybook:

1. **Default** - Basic unchecked checkbox
2. **Checked** - Checked checkbox
3. **Indeterminate** - Indeterminate state checkbox
4. **Sizes** - All size options
5. **Colors** - All color options
6. **States** - All possible states (unchecked, checked, indeterminate, disabled combinations)
7. **WithLabels** - Checkboxes with labels using FormControlLabel
8. **ControlledCheckbox** - Controlled checkbox with React state
9. **CheckboxGroup** - Multiple checkboxes in a group
10. **ParentChildCheckboxes** - Parent checkbox with indeterminate state
11. **AllCombinations** - Comprehensive view of all combinations
12. **CustomStyling** - Custom styling examples
13. **Playground** - Interactive experimentation

## Design System Integration

### Atomic Design Classification
- **Level**: Atom
- **Category**: Form Control
- **Purpose**: Enable single or multiple selections

### Theme Integration
- Inherits all theme colors from MUI theme
- Uses theme spacing and sizing
- Applies theme transitions and animations
- Follows theme breakpoints for responsive behavior

### Figma Design Reference
- **Figma Link**: [MRS - Material UI v.7.2.0 - Checkbox](https://www.figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0?node-id=6543-43052&m=dev)
- All sizes, colors, and states match Figma specifications

## Accessibility

### ARIA Support
- Uses `role="checkbox"` for the input element
- Supports `aria-label` and `aria-labelledby` via inputProps
- Properly indicates checked state with `aria-checked`
- Indeterminate state indicated with `data-indeterminate` attribute
- Disabled state properly announced
- Required state supported

### Keyboard Navigation
- **Tab**: Navigate to/from checkbox
- **Space**: Toggle checkbox state
- **Enter**: May toggle in some contexts (form submission)

### Screen Reader Support
- Announces current state (checked/unchecked/indeterminate)
- Announces disabled state
- Works with FormControlLabel for proper labeling
- Supports custom aria attributes via inputProps

### Best Practices
1. Always provide a visible label (use FormControlLabel)
2. Use `indeterminate` for parent-child relationships
3. Ensure sufficient color contrast
4. Don't rely solely on color to convey state
5. Provide clear feedback for state changes
6. Use required attribute for required fields
7. Group related checkboxes with FormGroup

## Best Practices

### Do's ✅
- Use checkboxes for multiple selections
- Provide clear, concise labels
- Use indeterminate state for parent-child relationships
- Group related checkboxes together
- Indicate required fields clearly
- Use controlled components for form validation
- Provide immediate feedback on state changes

### Don'ts ❌
- Don't use checkboxes for mutually exclusive options (use Radio instead)
- Don't use only color to indicate state
- Don't create overly long checkbox lists (consider search/filter)
- Don't forget to handle onChange events
- Don't use checkboxes without labels
- Don't disable checkboxes without explanation

## Common Use Cases

1. **Form Selections**: Multiple option selection in forms
2. **Settings Panels**: Enable/disable features or preferences
3. **List Selections**: Select multiple items from a list
4. **Bulk Actions**: Select all/multiple items for batch operations
5. **Filters**: Apply multiple filter criteria
6. **Terms Acceptance**: Accept terms, conditions, or agreements
7. **Permissions**: Enable/disable user permissions
8. **Parent-Child Relationships**: Select all with indeterminate state

## Browser Support

The Checkbox component is fully supported in:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Related Components

- **Radio** - For mutually exclusive single selections
- **Switch** - For on/off toggle states
- **FormControlLabel** - For adding labels to checkboxes
- **FormGroup** - For grouping related checkboxes
- **Button** - For action-based selections
- **Select/Autocomplete** - For single/multiple selections from large lists

## Migration Notes

When migrating from other checkbox implementations:

1. **Props Mapping**:
   - `checked` → `checked`
   - `onChange` → `onChange`
   - `disabled` → `disabled`
   - `value` → `value`

2. **State Management**:
   - Use controlled components with `checked` and `onChange`
   - Handle indeterminate state separately

3. **Styling**:
   - Use `sx` prop instead of inline styles
   - Leverage theme tokens for consistency

4. **Accessibility**:
   - Ensure all checkboxes have labels
   - Use `inputProps` for additional ARIA attributes

## Version History

- **v0.1.0** - Initial implementation with all sizes, colors, and states

---

**Status**: ✅ Complete | **Tests**: 30 passing | **Stories**: 13 | **Figma**: Synchronized

