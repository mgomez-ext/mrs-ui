# List and ListItem Components

## Overview

Implementation of List and ListItem components for the MRS Design System, following Material-UI v7.2.0 specifications and Figma designs.

**Figma References:**
- **List**: [https://www.figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0?node-id=11566-157133&m=dev](https://www.figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0?node-id=11566-157133&m=dev)
- **ListItem**: [https://www.figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0?node-id=6591-48882&m=dev](https://www.figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0?node-id=6591-48882&m=dev)

**Date**: December 2025  
**Status**: ✅ Implemented and tested

---

## Components

### 1. List

**Location**: `src/components/molecules/List/`

**Description**: Container component for list items. Lists are continuous, vertical indexes of text or images.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | The content of the list (ListItem components) |
| `dense` | `boolean` | `false` | If true, compact vertical padding is used |
| `disablePadding` | `boolean` | `false` | If true, vertical padding is removed from the list |
| `subheader` | `ReactNode` | - | The content of the subheader (ListSubheader) |
| `component` | `ElementType` | `'ul'` | The component used for the root node |
| `sx` | `SxProps` | - | System prop for styling |

#### Usage

```tsx
import { List, ListItem } from '@mrs-ui/core';
import { ListItemText } from '@mui/material';

// Basic usage
<List>
  <ListItem>
    <ListItemText primary="Item 1" />
  </ListItem>
  <ListItem>
    <ListItemText primary="Item 2" />
  </ListItem>
</List>

// Dense list
<List dense>
  <ListItem>
    <ListItemText primary="Dense item" />
  </ListItem>
</List>

// Without padding
<List disablePadding>
  <ListItem>
    <ListItemText primary="No padding" />
  </ListItem>
</List>
```

#### Variants

1. **Default** - Standard list with padding
2. **Dense** - Compact vertical padding (`dense={true}`)
3. **Disable Padding** - No vertical padding (`disablePadding={true}`)
4. **With Subheader** - List with header text

---

### 2. ListItem

**Location**: `src/components/molecules/ListItem/`

**Description**: Individual list item component. Can be static or interactive (button).

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | The content of the list item |
| `button` | `boolean` | `false` | If true, the list item is a button (interactive) |
| `dense` | `boolean` | `false` | If true, compact vertical padding is used |
| `disableGutters` | `boolean` | `false` | If true, left and right padding is removed |
| `divider` | `boolean` | `false` | If true, a divider is added to the bottom |
| `disablePadding` | `boolean` | `false` | If true, all padding is removed |
| `secondaryAction` | `ReactNode` | - | Element to display at the end of the list item |
| `alignItems` | `'flex-start' \| 'center'` | `'center'` | Defines align-items style property |
| `selected` | `boolean` | `false` | If true, the list item is selected (button mode only) |
| `disabled` | `boolean` | `false` | If true, the list item is disabled (button mode only) |
| `autoFocus` | `boolean` | `false` | If true, receives focus automatically (button mode only) |
| `onClick` | `function` | - | Click handler (button mode only) |
| `component` | `ElementType` | - | The component used for the root node |
| `sx` | `SxProps` | - | System prop for styling |

#### Usage

```tsx
import { List, ListItem } from '@mrs-ui/core';
import { ListItemText, ListItemIcon } from '@mui/material';
import { Icon } from '@mrs-ui/core';

// Basic list item
<ListItem>
  <ListItemText primary="Item" />
</ListItem>

// With icon
<ListItem>
  <ListItemIcon>
    <Icon name="InboxRounded" />
  </ListItemIcon>
  <ListItemText primary="Inbox" />
</ListItem>

// With secondary text
<ListItem>
  <ListItemText 
    primary="Primary text" 
    secondary="Secondary text" 
  />
</ListItem>

// Interactive (button)
<ListItem button onClick={handleClick} selected={isSelected}>
  <ListItemText primary="Clickable" />
</ListItem>

// With secondary action
<ListItem
  secondaryAction={
    <IconButton edge="end">
      <Icon name="MoreVertRounded" />
    </IconButton>
  }
>
  <ListItemText primary="Item with action" />
</ListItem>

// Dense
<ListItem dense>
  <ListItemText primary="Dense item" />
</ListItem>

// Without gutters
<ListItem disableGutters>
  <ListItemText primary="No side padding" />
</ListItem>

// With divider
<ListItem divider>
  <ListItemText primary="Item with divider" />
</ListItem>
```

#### Variants

1. **Static** - Non-interactive list item (default)
2. **Button** - Interactive list item (`button={true}`)
   - Enabled
   - Hovered (automatic via CSS)
   - Focused (automatic via CSS)
   - Pressed (automatic via CSS)
   - Selected (`selected={true}`)
   - Disabled (`disabled={true}`)

#### States (Button Mode)

- **Enabled**: Default state, interactive
- **Selected**: Highlighted state with `selected={true}`
- **Disabled**: Non-interactive state with `disabled={true}`
- **Hover/Focus/Pressed**: Automatically handled by Material-UI

---

## File Structure

```
src/components/molecules/
├── List/
│   ├── List.tsx              # Component implementation
│   ├── List.types.ts         # TypeScript types
│   ├── List.stories.tsx      # Storybook stories
│   ├── List.test.tsx         # Unit tests
│   └── index.ts              # Barrel exports
└── ListItem/
    ├── ListItem.tsx          # Component implementation
    ├── ListItem.types.ts     # TypeScript types
    ├── ListItem.stories.tsx  # Storybook stories
    ├── ListItem.test.tsx     # Unit tests
    └── index.ts              # Barrel exports
```

---

## Design Tokens Used

### From Theme

Both components use Material-UI's theme system with MRS design tokens:

```typescript
// Colors
theme.palette.primary.main
theme.palette.primary._states.hover
theme.palette.primary._states.focus
theme.palette.primary._states.selected
theme.palette.text.primary
theme.palette.text.secondary
theme.palette.text.disabled
theme.palette.divider
theme.palette.background.paper

// Typography
theme.typography.body1 (regular)
theme.typography.body2 (dense)
theme.typography.subtitle1 (selected state)

// Spacing
theme.spacing(1) = 8px
theme.spacing(2) = 16px
```

### Component-Specific Tokens

- **List padding**: `8px` (top/bottom)
- **ListItem padding**: `16px` (left/right when gutters enabled), `8px` or `4px` (top/bottom based on dense)
- **Dense ListItem**: Uses `body2` typography and reduced spacing
- **Selected state**: Uses `primary._states.focus` background color

---

## Storybook Stories

### List Stories

1. **Default** - Basic list
2. **With Padding** - List with default padding (visual border)
3. **Disable Padding** - List without vertical padding
4. **Dense** - Compact list
5. **With Icons** - List items with icons
6. **With Secondary Actions** - List items with action buttons
7. **With Subheader** - List with header
8. **All Variants** - All combinations displayed
9. **Playground** - Interactive controls

### ListItem Stories

1. **Default** - Basic list item
2. **With Icon** - Item with left icon
3. **With Secondary Text** - Item with secondary text
4. **With Secondary Action** - Item with right action button
5. **With Divider** - Item with bottom divider
6. **Dense** - Compact list item
7. **Disable Gutters** - Item without side padding
8. **Button Variant** - Interactive list items with selection
9. **States** - All button states (enabled, selected, disabled)
10. **All Variants** - All combinations of props
11. **Playground** - Interactive controls

---

## Tests Coverage

### List Tests

✅ Rendering
- Renders successfully
- Renders multiple items
- Renders with subheader

✅ Props
- Applies dense prop
- Applies disablePadding prop
- Renders as ordered list (ol)
- Applies custom sx prop

✅ Accessibility
- Renders as ul by default
- Supports aria attributes

✅ Children Composition
- Renders children correctly

### ListItem Tests

✅ Rendering
- Renders successfully
- Renders with icon
- Renders with secondary text
- Renders with secondary action

✅ Props
- Applies dense prop
- Applies disableGutters prop
- Applies divider prop
- Applies disablePadding prop
- Applies custom sx prop

✅ Button Variant
- Renders as button when button prop is true
- Handles click events
- Applies selected state
- Applies disabled state
- Prevents click when disabled

✅ Accessibility
- Renders as li element
- Supports aria attributes
- Supports autoFocus

✅ Children Composition
- Renders complex children composition

---

## Integration with MUI Components

Both List and ListItem are designed to work seamlessly with Material-UI's List ecosystem:

- **ListItemText** - For primary and secondary text content
- **ListItemIcon** - For icons on the left side
- **ListItemAvatar** - For avatars on the left side
- **ListSubheader** - For list section headers
- **Divider** - For visual separation between list items
- **ListItemSecondaryAction** - For actions on the right side (via `secondaryAction` prop)

### Example with Full Composition

```tsx
<List
  subheader={<ListSubheader>Recent</ListSubheader>}
>
  <ListItem
    button
    selected={selected === 0}
    onClick={() => setSelected(0)}
    secondaryAction={
      <IconButton edge="end">
        <Icon name="MoreVertRounded" />
      </IconButton>
    }
  >
    <ListItemIcon>
      <Icon name="InboxRounded" />
    </ListItemIcon>
    <ListItemText 
      primary="Inbox" 
      secondary="5 new messages" 
    />
  </ListItem>
  <Divider />
  <ListItem
    button
    selected={selected === 1}
    onClick={() => setSelected(1)}
  >
    <ListItemIcon>
      <Icon name="DraftsRounded" />
    </ListItemIcon>
    <ListItemText primary="Drafts" />
  </ListItem>
</List>
```

---

## Implementation Notes

### Architecture

- **List** wraps `MuiList` directly, passing through all props
- **ListItem** conditionally wraps content with `MuiListItemButton` when `button={true}`
- Both components follow the established pattern of other MRS components

### Design Decisions

1. **Button Prop**: ListItem uses a `button` prop instead of separate ListItemButton component for simpler API
2. **State Management**: Interactive states (hover, focus, pressed) are handled automatically by Material-UI
3. **Composition**: Components support full composition with MUI's ListItem* components
4. **Type Safety**: Full TypeScript support with extended MUI prop types

### Accessibility

- List renders as semantic `<ul>` by default (can be changed to `<ol>`)
- ListItem renders as semantic `<li>` element
- Button variant uses proper button semantics
- Supports all ARIA attributes
- Keyboard navigation supported in button mode
- Focus management with `autoFocus` prop

---

## Related Components

- **Icon** - Used for icons within list items
- **IconButton** - Used for secondary actions
- **Divider** - Used to separate list items
- **Typography** - Used indirectly via ListItemText

---

## Migration from Previous Version

If migrating from a custom List implementation:

```diff
// Before (hypothetical)
- <CustomList>
-   <CustomListItem onClick={handleClick}>
-     <span>Item</span>
-   </CustomListItem>
- </CustomList>

// After
+ <List>
+   <ListItem button onClick={handleClick}>
+     <ListItemText primary="Item" />
+   </ListItem>
+ </List>
```

---

## Future Enhancements

Potential improvements for future versions:

1. **Nested Lists** - Support for nested/collapsible list items
2. **Virtualization** - Support for react-window integration
3. **Drag and Drop** - Reorderable list items
4. **Selection Mode** - Built-in multi-select support
5. **Custom Animations** - Smooth transitions for state changes

---

## Resources

- [Material-UI List Documentation](https://mui.com/material-ui/react-list/)
- [Material-UI List API](https://mui.com/material-ui/api/list/)
- [Material-UI ListItem API](https://mui.com/material-ui/api/list-item/)
- [Material-UI ListItemButton API](https://mui.com/material-ui/api/list-item-button/)
- [Material Design Lists Specification](https://m2.material.io/components/lists)

---

**Last Updated**: December 2025  
**Component Version**: 1.0.0  
**Material-UI Version**: 7.2.0

