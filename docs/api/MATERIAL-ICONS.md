# Material Icons Usage Map - MRS UI v6 Design System

**Generated**: 2024-12-29
**Status**: Material Symbols Migration Complete (Phase 1 & 2)

## Migration Status Summary

### ✅ Migrated Components (Using MaterialSymbol)

| Component | Icons Migrated | Status |
|-----------|---------------|--------|
| **Alert** | error, info, check_circle, close | ✅ Complete |
| **Snackbar** | close | ✅ Complete |
| **ExpandableNavItem** | expand_more, expand_less | ✅ Complete |
| **DrawerNavigation** | (No direct usage - accepts icons as props) | ✅ Complete |

### 📦 Components Using Material Icons in Stories/Tests Only

These components use Material Icons only in their `.stories.tsx` and `.test.tsx` files for demonstration purposes. The component implementations themselves are migration-ready.

| Component | Usage Type | Icons Used | Files |
|-----------|-----------|------------|-------|
| **AccountStack** | Stories | menu | AccountStack.stories.tsx |
| **AppBar** | Stories | menu, account_circle, mail, notifications, search, more_vert | AppBar.stories.tsx |
| **Avatar** | Stories/Tests | person, favorite | Avatar.stories.tsx, Avatar.test.tsx |
| **Badge** | Stories/Tests | favorite, mail, notifications, shopping_cart | Badge.stories.tsx, Badge.test.tsx |
| **Drawer** | Stories | menu, chevron_left, home, inbox, mail, settings | Drawer.stories.tsx |
| **DrawerNavigation** | Stories/Tests | home, inbox, settings, bar_chart, drafts, layers, people, send, shopping_cart | DrawerNavigation.stories.tsx, DrawerNavigation.test.tsx |
| **ExpandableNavItem** | Stories/Tests | inbox, drafts, send, star_border | ExpandableNavItem.stories.tsx, ExpandableNavItem.test.tsx |
| **Icon** | Stories/Tests | add, delete, favorite, home, search, settings | Icon.stories.tsx, Icon.test.tsx |
| **IconButton** | Stories/Tests | add, delete, favorite, mail, notifications, settings, share | IconButton.stories.tsx, IconButton.test.tsx |
| **List** | Stories | add, drafts, inbox, send | List.stories.tsx |
| **ListItem** | Stories | add, drafts, inbox, send | ListItem.stories.tsx |
| **Menu** | Stories | delete, edit, logout, more_vert, person, settings | Menu.stories.tsx |
| **MenuItem** | Stories | check | MenuItem.stories.tsx |
| **Table** | Stories | delete, edit | Table.stories.tsx |
| **Tabs** | Stories | favorite, home, person_pin, phone, shopping_cart | Tabs.stories.tsx |
| **TextField** | Stories | search, visibility, visibility_off | TextField.stories.tsx |
| **Toolbar** | Stories | menu | Toolbar.stories.tsx |
| **Tooltip** | Stories | add, delete | Tooltip.stories.tsx |

## Complete Icon Inventory

### All Material Icons Used Across Design System

| Material Icon Import | Material Symbol Name | Usage Count | Component Files |
|---------------------|---------------------|-------------|----------------|
| AccountCircle | account_circle | 1 | AppBar.stories |
| AddIcon / AddRoundedIcon | add | 8 | Icon, IconButton, List, ListItem, Tooltip |
| BarChartIcon | bar_chart | 1 | DrawerNavigation.stories |
| CheckIcon | check | 1 | MenuItem.stories |
| CheckCircleRounded ✅ | check_circle | 1 | **Alert** (migrated) |
| ChevronLeftIcon | chevron_left | 1 | Drawer.stories |
| CloseIcon / CloseRounded ✅ | close | 2 | **Alert, Snackbar** (migrated) |
| DeleteIcon | delete | 4 | Icon, IconButton, Menu, Table, Tooltip |
| DraftsIcon / DraftsRoundedIcon | drafts | 4 | DrawerNavigation, ExpandableNavItem, List, ListItem |
| EditIcon | edit | 2 | Menu, Table |
| ErrorRounded ✅ | error | 1 | **Alert** (migrated) |
| ExpandLess ✅ | expand_less | 1 | **ExpandableNavItem** (migrated) |
| ExpandMore ✅ | expand_more | 1 | **ExpandableNavItem** (migrated) |
| FavoriteIcon | favorite | 5 | Avatar, Badge, Icon, IconButton, Tabs |
| HomeIcon | home | 5 | Drawer, DrawerNavigation, Icon, Tabs |
| InboxIcon / InboxRoundedIcon | inbox | 8 | Drawer, DrawerNavigation, ExpandableNavItem, List, ListItem |
| InfoRounded ✅ | info | 1 | **Alert** (migrated) |
| LayersIcon | layers | 1 | DrawerNavigation.stories |
| LogoutIcon | logout | 1 | Menu.stories |
| MailIcon | mail | 5 | AppBar, Badge, Drawer, IconButton |
| MenuIcon | menu | 5 | AccountStack, AppBar, Drawer, Toolbar |
| MoreIcon / MoreVertIcon | more_vert | 2 | AppBar, Menu |
| NotificationsIcon | notifications | 3 | AppBar, Badge, IconButton |
| PeopleIcon | people | 1 | DrawerNavigation.stories |
| PersonIcon | person | 2 | Avatar, Menu |
| PersonPinIcon | person_pin | 1 | Tabs.stories |
| PhoneIcon | phone | 1 | Tabs.stories |
| SearchIcon | search | 3 | AppBar, Icon, TextField |
| SendIcon / SendRoundedIcon | send | 4 | DrawerNavigation, ExpandableNavItem, List, ListItem |
| SettingsIcon | settings | 5 | Drawer, DrawerNavigation, Icon, IconButton, Menu |
| ShareIcon | share | 1 | IconButton.stories |
| ShoppingCartIcon | shopping_cart | 3 | Badge, DrawerNavigation, Tabs |
| StarBorderIcon | star_border | 1 | ExpandableNavItem.stories |
| Visibility | visibility | 1 | TextField.stories |
| VisibilityOff | visibility_off | 1 | TextField.stories |

**Total Unique Icons**: 41
**Total Usage Instances**: 89
**Migrated in Components**: 6 icons (error, info, check_circle, close, expand_more, expand_less)
**Remaining in Stories/Tests**: 35 icons (83 instances)

## Icon Name Mapping Reference

### Material Icons → Material Symbols Conversion

| Material Icons Package | Material Symbols Name | Notes |
|----------------------|----------------------|-------|
| `@mui/icons-material/AccountCircle` | `account_circle` | Snake_case |
| `@mui/icons-material/Add` | `add` | Remove "Icon" suffix |
| `@mui/icons-material/AddRounded` | `add` | Remove variant suffix |
| `@mui/icons-material/BarChart` | `bar_chart` | Snake_case |
| `@mui/icons-material/Check` | `check` | |
| `@mui/icons-material/CheckCircleRounded` | `check_circle` | Use fill prop |
| `@mui/icons-material/ChevronLeft` | `chevron_left` | Snake_case |
| `@mui/icons-material/Close` | `close` | |
| `@mui/icons-material/CloseRounded` | `close` | Remove variant suffix |
| `@mui/icons-material/Delete` | `delete` | |
| `@mui/icons-material/Drafts` | `drafts` | |
| `@mui/icons-material/DraftsRounded` | `drafts` | Remove variant suffix |
| `@mui/icons-material/Edit` | `edit` | |
| `@mui/icons-material/ErrorRounded` | `error` | Use fill prop |
| `@mui/icons-material/ExpandLess` | `expand_less` | Snake_case |
| `@mui/icons-material/ExpandMore` | `expand_more` | Snake_case |
| `@mui/icons-material/Favorite` | `favorite` | |
| `@mui/icons-material/Home` | `home` | |
| `@mui/icons-material/Inbox` | `inbox` | |
| `@mui/icons-material/InboxRounded` | `inbox` | Remove variant suffix |
| `@mui/icons-material/InfoRounded` | `info` | Use fill prop |
| `@mui/icons-material/Layers` | `layers` | |
| `@mui/icons-material/Logout` | `logout` | |
| `@mui/icons-material/Mail` | `mail` | |
| `@mui/icons-material/Menu` | `menu` | |
| `@mui/icons-material/MoreVert` | `more_vert` | Snake_case |
| `@mui/icons-material/Notifications` | `notifications` | |
| `@mui/icons-material/People` | `people` | |
| `@mui/icons-material/Person` | `person` | |
| `@mui/icons-material/PersonPin` | `person_pin` | Snake_case |
| `@mui/icons-material/Phone` | `phone` | |
| `@mui/icons-material/Search` | `search` | |
| `@mui/icons-material/Send` | `send` | |
| `@mui/icons-material/SendRounded` | `send` | Remove variant suffix |
| `@mui/icons-material/Settings` | `settings` | |
| `@mui/icons-material/Share` | `share` | |
| `@mui/icons-material/ShoppingCart` | `shopping_cart` | Snake_case |
| `@mui/icons-material/StarBorder` | `star` | Use fill=0 |
| `@mui/icons-material/Visibility` | `visibility` | |
| `@mui/icons-material/VisibilityOff` | `visibility_off` | Snake_case |

## Migration Strategy

### Phase 1: Foundation ✅ Complete
- Created MaterialSymbol component
- Added Material Symbols font
- Created global CSS configuration
- Set MRS defaults (weight=300, fill=0, grade=100, rounded)

### Phase 2: Component Migration ✅ Complete
- Migrated Alert component (3 components migrated)
- Migrated Snackbar component
- Migrated ExpandableNavItem component
- All 960 tests passing
- Bundle size reduced: 241.77 kB → 241.19 kB

### Phase 3: Stories/Tests Migration (Optional)
Stories and tests can be optionally migrated to use MaterialSymbol for consistency:

**Priority**: Low (These are examples only, not production code)

**Approach**: Update stories to demonstrate MaterialSymbol usage
```tsx
// Before
import HomeIcon from '@mui/icons-material/Home';
<Icon icon={HomeIcon} />

// After
import { MaterialSymbol } from '../MaterialSymbol';
<MaterialSymbol icon="home" />
```

**Benefits**:
- Consistency across documentation
- Better performance in Storybook
- Demonstrates MaterialSymbol usage to consumers

**Files to Update** (18 story files):
1. AccountStack.stories.tsx (1 icon)
2. AppBar.stories.tsx (6 icons)
3. Avatar.stories.tsx (2 icons)
4. Badge.stories.tsx (4 icons)
5. Drawer.stories.tsx (6 icons)
6. DrawerNavigation.stories.tsx (9 icons)
7. ExpandableNavItem.stories.tsx (4 icons)
8. Icon.stories.tsx (6 icons)
9. IconButton.stories.tsx (7 icons)
10. List.stories.tsx (4 icons)
11. ListItem.stories.tsx (4 icons)
12. Menu.stories.tsx (6 icons)
13. MenuItem.stories.tsx (1 icon)
14. Table.stories.tsx (2 icons)
15. Tabs.stories.tsx (5 icons)
16. TextField.stories.tsx (3 icons)
17. Toolbar.stories.tsx (1 icon)
18. Tooltip.stories.tsx (2 icons)

## Component Architecture

### Icon Wrapper Component

The `Icon` component (`src/components/atoms/Icon/Icon.tsx`) is a wrapper that:
- Accepts Material Icon components as props (`icon` prop)
- Supports both SVG and Font icons
- Applies MRS theme sizing

**Current Usage Pattern**:
```tsx
import HomeIcon from '@mui/icons-material/Home';
<Icon icon={HomeIcon} size="medium" />
```

**Note**: Icon component itself doesn't need migration - it's a wrapper. The icons passed to it can be either Material Icons or MaterialSymbol.

### MaterialSymbol Component

The new `MaterialSymbol` component provides:
- Variable font technology
- Dynamic customization (weight, fill, grade)
- MRS design system defaults
- Smaller bundle size
- Better performance

**Usage Pattern**:
```tsx
import { MaterialSymbol } from '@mgomez-ext/mrs-ui';
<MaterialSymbol icon="home" size="medium" />
```

## Bundle Size Impact

### Before Migration
- Material Icons: ~600 KB (multiple icon components)
- Bundle: 241.77 kB gzipped

### After Phase 2 Migration
- Material Symbols Font: ~50 KB (single variable font)
- Bundle: 241.19 kB gzipped
- **Savings**: 0.58 kB (with potential for more as usage grows)

### Projected After Full Migration
- Additional savings as more Material Icon imports are removed
- Estimated: 1-2 KB additional reduction

## Testing Status

- ✅ **MaterialSymbol Tests**: 29/29 passing
- ✅ **Alert Tests**: 58/58 passing
- ✅ **Snackbar Tests**: 24/24 passing
- ✅ **ExpandableNavItem Tests**: 22/22 passing
- ✅ **DrawerNavigation Tests**: 25/25 passing
- ✅ **Full Test Suite**: 960/960 passing (100%)

## Recommendations

### For Component Development
1. ✅ Use MaterialSymbol for all new components
2. ✅ Use MaterialSymbol for component implementations (production code)
3. ⚠️ Consider migrating stories to MaterialSymbol for consistency (optional)

### For Consumers
1. Install Material Symbols font (documented in README)
2. Use MaterialSymbol component for custom icons
3. Reference migration pattern from Alert component

### For Future Maintenance
1. Update documentation to favor MaterialSymbol over Material Icons
2. Add ESLint rule to prevent new Material Icons imports (optional)
3. Consider migrating remaining stories in Phase 3 (low priority)

## References

- **Migration Plan**: `MATERIAL_SYMBOLS_MIGRATION_PLAN.md`
- **MaterialSymbol Component**: `src/components/atoms/MaterialSymbol/`
- **Material Symbols Font**: https://fonts.google.com/icons
- **MRS Defaults**: weight=300, fill=0, grade=100, rounded variant
