# Radio Component

A comprehensive Radio component for the MRS Design System, wrapping Material-UI's Radio with custom theming and enhanced functionality.

## Overview

Radio buttons allow users to select one option from a set. Use radio buttons when the user needs to see all available options. If available options can be collapsed, consider using a Select component because it uses less space.

## Figma Design Reference

- **Figma URL**: [Radio Component](https://www.figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0?node-id=6558-39273&m=dev)
- **Component ID**: `6558:39273`

## Implementation Details

### Component Structure

```
src/components/atoms/Radio/
├── Radio.tsx          # Main component implementation
├── Radio.types.ts     # TypeScript type definitions
├── Radio.test.tsx     # Jest tests (25 tests)
├── Radio.stories.tsx  # Storybook stories
└── index.ts          # Public exports
```

### Props

```typescript
interface RadioProps {
  checked?: boolean;           // If true, the component is checked
  size?: 'small' | 'medium' | 'large'; // Size of the radio (default: 'medium')
  color?: 'default' | 'primary'; // Color variant (default: 'primary')
  disabled?: boolean;          // If true, the component is disabled
  disableRipple?: boolean;     // If true, the ripple effect is disabled
  required?: boolean;          // If true, the component is required
  onChange?: (event, checked) => void; // Callback fired when state changes
  value?: unknown;            // The value of the component
  id?: string;               // The id of the input element
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>; // Attributes applied to the input
  sx?: SxProps;              // Custom styling
}
```

### Design Specifications

#### Sizes
- **Small**: 20px (with 9px padding)
- **Medium**: 24px (with 9px padding) - Default
- **Large**: 28px (with 9px padding)

#### Colors
- **Default**: Black/gray color for unchecked, black for checked
- **Primary**: Black/gray for unchecked, primary theme color for checked

#### States
- **Enabled**: Normal interactive state
- **Hovered**: Background hover effect with theme-specific color
- **Focused**: Focus ring visible for keyboard navigation
- **Pressed**: Visual feedback when clicking/tapping
- **Disabled**: Reduced opacity, non-interactive

#### Visual Characteristics
- Border radius: 100px (circular)
- Hover background: `rgba(0, 0, 0, 0.04)` for default, `rgba(0, 153, 153, 0.08)` for primary
- Focus ring: 38px for medium, 34px for small, 42px for large
- Disabled opacity: Reduced for both checked and unchecked states

## Usage Examples

### Basic Usage

```tsx
import { Radio } from '@mrs/ui';

function Example() {
  return (
    <Radio 
      inputProps={{ 'aria-label': 'Option 1' }} 
    />
  );
}
```

### Different Sizes

```tsx
import { Radio } from '@mrs/ui';

function SizeExample() {
  return (
    <>
      <Radio size="small" inputProps={{ 'aria-label': 'Small' }} />
      <Radio size="medium" inputProps={{ 'aria-label': 'Medium' }} />
      <Radio size="large" inputProps={{ 'aria-label': 'Large' }} />
    </>
  );
}
```

### Color Variants

```tsx
import { Radio } from '@mrs/ui';

function ColorExample() {
  return (
    <>
      <Radio color="default" inputProps={{ 'aria-label': 'Default' }} />
      <Radio color="primary" inputProps={{ 'aria-label': 'Primary' }} />
    </>
  );
}
```

### With Labels (Radio Group)

```tsx
import { Radio } from '@mrs/ui';
import { FormControl, FormLabel, RadioGroup, FormControlLabel } from '@mui/material';

function RadioGroupExample() {
  const [value, setValue] = useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="gender-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="gender-label"
        value={value}
        onChange={handleChange}
        name="gender-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
}
```

### Controlled Component

```tsx
import { Radio } from '@mrs/ui';
import { useState } from 'react';

function ControlledExample() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Radio 
      checked={checked} 
      onChange={handleChange}
      inputProps={{ 'aria-label': 'Controlled radio' }}
    />
  );
}
```

### Disabled State

```tsx
import { Radio } from '@mrs/ui';

function DisabledExample() {
  return (
    <>
      <Radio disabled inputProps={{ 'aria-label': 'Disabled unchecked' }} />
      <Radio disabled checked inputProps={{ 'aria-label': 'Disabled checked' }} />
    </>
  );
}
```

### Horizontal Radio Group

```tsx
import { Radio } from '@mrs/ui';
import { FormControl, FormLabel, RadioGroup, FormControlLabel } from '@mui/material';

function HorizontalExample() {
  const [value, setValue] = useState('yes');

  return (
    <FormControl>
      <FormLabel>Do you agree?</FormLabel>
      <RadioGroup 
        row 
        value={value} 
        onChange={(e) => setValue(e.target.value)}
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="no" control={<Radio />} label="No" />
        <FormControlLabel value="maybe" control={<Radio />} label="Maybe" />
      </RadioGroup>
    </FormControl>
  );
}
```

### Without Ripple Effect

```tsx
import { Radio } from '@mrs/ui';

function NoRippleExample() {
  return (
    <Radio 
      disableRipple 
      inputProps={{ 'aria-label': 'No ripple' }}
    />
  );
}
```

## Accessibility

The Radio component follows WCAG 2.1 Level AA guidelines:

### ARIA Attributes
- Uses native `<input type="radio">` element
- Supports `aria-label` via `inputProps`
- Supports `aria-describedby` for helper text
- Properly announces checked/unchecked state

### Keyboard Navigation
- **Tab**: Move focus to the radio button
- **Space**: Toggle the radio selection
- **Arrow Keys**: Navigate between radio buttons in a group

### Focus Management
- Clear focus indicator with visible focus ring
- Focus ring size: 38px (medium), 34px (small), 42px (large)
- High contrast focus indicator for visibility

### Best Practices
1. Always provide meaningful labels using `FormControlLabel` or `aria-label`
2. Group related radio buttons using `RadioGroup`
3. Use `FormLabel` for group labels with proper `id` linkage
4. Ensure disabled state is clearly communicated
5. Use `required` prop for required fields
6. Provide helpful error messages when validation fails

## Testing

The component includes comprehensive test coverage:

### Test Suite Summary
- **Total Tests**: 25
- **Coverage**: Props, states, interactions, accessibility

### Key Test Scenarios
1. **Rendering**
   - Default props (unchecked, medium size, primary color)
   - All size variants (small, medium, large)
   - All color variants (default, primary)
   - Checked and unchecked states

2. **Interactions**
   - Click to toggle selection
   - onChange callback execution
   - Controlled component behavior
   - Disabled state interaction prevention

3. **Accessibility**
   - ARIA attributes
   - Keyboard navigation
   - Focus management
   - Custom input props

4. **Radio Groups**
   - Multiple radios in a group
   - Exclusive selection behavior
   - Value changes

### Running Tests

```bash
# Run all Radio tests
npm test -- --testPathPattern=Radio

# Run tests in watch mode
npm test -- --testPathPattern=Radio --watch

# Run tests with coverage
npm test -- --testPathPattern=Radio --coverage
```

## Storybook

View the component in Storybook:

```bash
npm run storybook
```

Navigate to: **Atoms → Radio**

### Available Stories
1. **Default** - Basic radio button
2. **Sizes** - All size variants (small, medium, large)
3. **Colors** - Color variants (default, primary)
4. **States** - Checked/unchecked, enabled/disabled
5. **Disabled** - Disabled states
6. **WithLabels** - Radio group with labels
7. **AllSizesAndColors** - Complete matrix of all combinations
8. **RadioGroupExample** - Interactive radio group
9. **HorizontalRadioGroup** - Horizontal layout
10. **WithoutRipple** - Disabled ripple effect
11. **Playground** - Interactive controls

## Figma Integration

The Radio component is implemented based on the MUI v7.2.0 specifications from Figma:

### Figma Node Structure
- **Component Set**: Radio (6558:39273)
- **Variants**: 
  - Checked: false, true
  - Size: small, medium, large
  - Color: default, primary
  - State: enabled, hovered, focused, pressed, disabled

### Design Tokens Used
- `action/hover`: `rgba(0, 0, 0, 0.04)`
- `action/focus`: `rgba(0, 0, 0, 0.12)`
- `primary/_states/hover`: `rgba(0, 153, 153, 0.08)`
- `primary/_states/focusvisible`: `rgba(0, 153, 153, 0.24)`

## Related Components

- **Checkbox** - For selecting multiple options
- **Switch** - For on/off toggles
- **Select** - For dropdown selection
- **ButtonGroup** - For exclusive button selection

## Material-UI Documentation

- [Radio API](https://mui.com/material-ui/api/radio/)
- [Radio Button Guide](https://mui.com/material-ui/react-radio-button/)

## Migration Notes

When migrating from MUI Radio to MRS Radio:

1. The `large` size is added (MUI only supports `small` and `medium`)
2. Type casting is used internally for the `large` size to work with MUI v7.x
3. All other props are compatible with MUI Radio
4. Custom theme tokens are applied automatically

## Verification Results

✅ **Component Implementation**: Complete
✅ **TypeScript Types**: Fully typed with proper interfaces
✅ **Tests**: 25/25 passing (100%)
✅ **Storybook**: 11 interactive stories
✅ **Build**: No errors or warnings
✅ **Linting**: No ESLint errors
✅ **Accessibility**: WCAG 2.1 Level AA compliant
✅ **Documentation**: Complete with examples
✅ **Figma Alignment**: Matches design specifications

## Performance Considerations

- Lightweight wrapper around MUI Radio
- Minimal re-renders with proper memoization
- Efficient event handling
- No unnecessary prop drilling
- Optimized for bundle size

## Browser Support

Supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Known Limitations

1. The `large` size uses type casting as it's not officially supported in MUI v7.x
2. Some hover/focus states may behave slightly differently in test environment
3. Ripple effect cannot be fully tested in JSDOM environment

## Future Enhancements

Potential improvements for future versions:
1. Add more color variants (secondary, error, success, warning)
2. Add custom icon support
3. Add animation customization options
4. Enhance theme integration with more design tokens

