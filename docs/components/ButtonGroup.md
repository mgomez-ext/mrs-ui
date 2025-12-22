# ButtonGroup Component Documentation

## Overview

The **ButtonGroup** component is a molecule component in the MRS Design System that groups related buttons together with unified styling. It provides a cohesive way to present multiple action choices or toggle options in a single, visually connected unit.

## Implementation Details

### Location
- **Component**: `src/components/molecules/ButtonGroup/`
- **Types**: `ButtonGroup.types.ts`
- **Tests**: `ButtonGroup.test.tsx`
- **Stories**: `ButtonGroup.stories.tsx`

### Features

#### Orientations
- **Horizontal** (default) - Buttons arranged in a row
- **Vertical** - Buttons arranged in a column

#### Variants
- **Contained** (default) - Solid background with elevation
- **Outlined** - Transparent background with border
- **Text** - Minimal styling without borders

#### Colors
- **Primary** (default) - Primary theme color
- **Secondary** - Secondary theme color
- **Error** - Error/danger color for destructive actions
- **Inherit** - Inherits color from parent

#### Sizes
- **Small** - Compact size for dense interfaces
- **Medium** (default) - Standard size for most use cases
- **Large** - Emphasized size for primary actions

#### Additional Props
- **disabled** - Disables all buttons in the group
- **disableElevation** - Removes shadow from contained variant
- **fullWidth** - Buttons take full width of container
- **sx** - Custom styling via MUI's sx prop

## Usage

### Basic Usage

```typescript
import { ButtonGroup, Button } from '@mrs/ui';

function MyComponent() {
  return (
    <ButtonGroup>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  );
}
```

### With Variants

```typescript
// Contained variant (default)
<ButtonGroup variant="contained">
  <Button>Save</Button>
  <Button>Save & Continue</Button>
</ButtonGroup>

// Outlined variant
<ButtonGroup variant="outlined">
  <Button>Edit</Button>
  <Button>Delete</Button>
</ButtonGroup>

// Text variant
<ButtonGroup variant="text">
  <Button>All</Button>
  <Button>Active</Button>
  <Button>Archived</Button>
</ButtonGroup>
```

### With Colors

```typescript
// Primary color (default)
<ButtonGroup color="primary">
  <Button>Option 1</Button>
  <Button>Option 2</Button>
</ButtonGroup>

// Secondary color
<ButtonGroup color="secondary">
  <Button>Cancel</Button>
  <Button>Back</Button>
</ButtonGroup>

// Error color
<ButtonGroup color="error">
  <Button>Delete</Button>
  <Button>Delete All</Button>
</ButtonGroup>
```

### With Sizes

```typescript
// Small size
<ButtonGroup size="small">
  <Button>-</Button>
  <Button>100%</Button>
  <Button>+</Button>
</ButtonGroup>

// Medium size (default)
<ButtonGroup size="medium">
  <Button>Left</Button>
  <Button>Center</Button>
  <Button>Right</Button>
</ButtonGroup>

// Large size
<ButtonGroup size="large">
  <Button>Previous</Button>
  <Button>Next</Button>
</ButtonGroup>
```

### Vertical Orientation

```typescript
<ButtonGroup orientation="vertical">
  <Button>Top</Button>
  <Button>Middle</Button>
  <Button>Bottom</Button>
</ButtonGroup>
```

### Full Width

```typescript
<ButtonGroup fullWidth>
  <Button>Save</Button>
  <Button>Cancel</Button>
</ButtonGroup>
```

### Disabled State

```typescript
// Disable entire group
<ButtonGroup disabled>
  <Button>One</Button>
  <Button>Two</Button>
</ButtonGroup>

// Disable individual buttons
<ButtonGroup>
  <Button>Active</Button>
  <Button disabled>Disabled</Button>
  <Button>Active</Button>
</ButtonGroup>
```

### Without Elevation

```typescript
<ButtonGroup variant="contained" disableElevation>
  <Button>Flat</Button>
  <Button>Buttons</Button>
</ButtonGroup>
```

### Real-World Examples

#### Text Alignment Controls

```typescript
<ButtonGroup>
  <Button>Left</Button>
  <Button>Center</Button>
  <Button>Right</Button>
  <Button>Justify</Button>
</ButtonGroup>
```

#### View Mode Switcher

```typescript
<ButtonGroup variant="outlined">
  <Button>List</Button>
  <Button>Grid</Button>
  <Button>Gallery</Button>
</ButtonGroup>
```

#### Zoom Controls

```typescript
<ButtonGroup size="small">
  <Button>-</Button>
  <Button>100%</Button>
  <Button>+</Button>
</ButtonGroup>
```

#### Vertical Navigation Menu

```typescript
<ButtonGroup orientation="vertical" variant="outlined" fullWidth>
  <Button>Dashboard</Button>
  <Button>Analytics</Button>
  <Button>Settings</Button>
  <Button>Profile</Button>
</ButtonGroup>
```

#### Filter Tabs

```typescript
<ButtonGroup variant="text" color="secondary">
  <Button>All</Button>
  <Button>Active</Button>
  <Button>Pending</Button>
  <Button>Archived</Button>
</ButtonGroup>
```

## TypeScript Props

```typescript
export interface ButtonGroupProps extends MuiButtonGroupProps {
  /**
   * The group orientation (layout flow direction).
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * The variant to use.
   * @default 'contained'
   */
  variant?: 'contained' | 'outlined' | 'text';

  /**
   * The color of the component.
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'error' | 'inherit';

  /**
   * The size of the component.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation?: boolean;

  /**
   * If `true`, the buttons will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * The content of the component (should be Button components).
   */
  children: React.ReactNode;

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: MuiButtonGroupProps['sx'];
}
```

## Verification Results

### Tests: ✅ 24/24 Passing

All tests successfully verify:
- **Rendering**: Children buttons, default props, all variants, colors, sizes, orientations
- **Props**: Disabled, disableElevation, fullWidth
- **Combinations**: All variant and color combinations
- **Interactions**: Click handlers on individual buttons
- **Ref**: Forwarding ref to underlying element
- **Styling**: Custom sx prop
- **Accessibility**: Proper ARIA attributes

### Test Coverage

```
ButtonGroup
  ✓ renders with children buttons
  ✓ renders with default props (contained variant, primary color, horizontal)
  ✓ renders with contained variant
  ✓ renders with outlined variant
  ✓ renders with text variant
  ✓ renders with primary color
  ✓ renders with secondary color
  ✓ renders with error color
  ✓ renders with inherit color
  ✓ renders with horizontal orientation
  ✓ renders with vertical orientation
  ✓ renders with small size
  ✓ renders with medium size
  ✓ renders with large size
  ✓ renders as disabled
  ✓ renders with disableElevation
  ✓ renders with fullWidth
  ✓ forwards ref correctly
  ✓ applies custom sx prop
  ✓ renders all variant and color combinations
  ✓ renders with multiple buttons
  ✓ handles click events on buttons
  ✓ renders vertical group with multiple buttons
  ✓ applies aria-label to group
```

## Storybook Stories

The following stories are available in Storybook:

1. **Default** - Basic button group with default props
2. **Variants** - Showcases contained, outlined, and text variants
3. **Colors** - Displays all color options
4. **Sizes** - Shows small, medium, and large sizes
5. **Orientation** - Demonstrates horizontal and vertical layouts
6. **Disabled** - Shows disabled state for entire group and individual buttons
7. **DisableElevation** - Compares with and without elevation
8. **FullWidth** - Demonstrates full-width layout
9. **VerticalFullWidth** - Combines vertical orientation with full width
10. **OutlinedVariantAllColors** - All colors with outlined variant
11. **RealWorldExamples** - Practical use cases (text alignment, view options, zoom controls, etc.)
12. **Playground** - Interactive story for experimenting with all props

## Design System Integration

### Atomic Design Classification
- **Level**: Molecule
- **Composed of**: Button atoms
- **Purpose**: Group related buttons with unified styling

### Theme Integration
- Inherits all theme colors from MUI theme
- Uses theme spacing and border radius
- Applies theme shadows for elevation
- Follows theme breakpoints for responsive behavior

### Figma Design Reference
- **Figma Link**: [MRS - Material UI v.7.2.0 - ButtonGroup](https://www.figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0?node-id=6590-48896&m=dev)
- All variants, colors, sizes, and states match Figma specifications

## Accessibility

### ARIA Support
- Uses `role="group"` for the button group container
- Supports `aria-label` for group description
- Individual buttons maintain their own ARIA attributes
- Keyboard navigation works seamlessly across grouped buttons

### Keyboard Navigation
- **Tab**: Navigate between button groups
- **Arrow Keys**: Navigate between buttons within a group (when focused)
- **Enter/Space**: Activate the focused button

### Best Practices
1. Always provide meaningful labels for buttons
2. Use `aria-label` on the ButtonGroup for complex groups
3. Ensure sufficient color contrast for all variants
4. Don't disable buttons unless absolutely necessary
5. Provide visual feedback for active/selected state

## Best Practices

### Do's ✅
- Use ButtonGroup for related actions (e.g., text alignment, view modes)
- Keep button labels concise and clear
- Use consistent sizing across the application
- Choose appropriate variant based on visual hierarchy
- Use vertical orientation for navigation menus
- Provide accessible labels and descriptions

### Don'ts ❌
- Don't mix different button variants within the same group
- Don't use ButtonGroup for unrelated actions
- Don't overcrowd with too many buttons (max 5-7 recommended)
- Don't use very long text labels in horizontal groups
- Don't forget to handle click events for each button
- Don't use only icons without text labels (unless with tooltips)

## Common Use Cases

1. **Toggle Controls**: Text alignment, formatting options
2. **View Switchers**: List, grid, gallery views
3. **Zoom Controls**: Zoom in, reset, zoom out
4. **Navigation**: Vertical menu options
5. **Filters**: Category or status filters
6. **Actions**: Related operations (save, save & continue, cancel)
7. **Pagination**: Previous, page numbers, next

## Browser Support

The ButtonGroup component is fully supported in:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Related Components

- **Button** - Individual button component used within ButtonGroup
- **ToggleButtonGroup** - Similar component for mutually exclusive options
- **Tab/Tabs** - For navigation between content sections
- **BottomNavigation** - For mobile navigation

## Migration Notes

When migrating from other button group implementations:

1. **Props Mapping**:
   - `direction` → `orientation`
   - `type` → `variant`
   - `theme` → `color`

2. **Styling**:
   - Use `sx` prop instead of inline styles
   - Leverage theme tokens for consistency

3. **Accessibility**:
   - Add `aria-label` to button groups
   - Ensure all buttons have proper labels

## Version History

- **v0.1.0** - Initial implementation with all variants, colors, sizes, and orientations

---

**Status**: ✅ Complete | **Tests**: 24 passing | **Stories**: 12 | **Figma**: Synchronized

