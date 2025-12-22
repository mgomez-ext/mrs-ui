# Migration Guide: v6.5 to v7.2

This guide helps you migrate from `@mrs/ui-v6` (Material-UI v6.5) to `@mrs/ui` (Material-UI v7.2).

## Overview

The migration is **extremely simple** because both versions maintain complete API compatibility. Most projects can upgrade with just dependency changes and import updates.

## Prerequisites

- Node.js 18+
- npm 9+
- React 18.3+

## Migration Steps

### Step 1: Update Dependencies

```bash
# Remove v6.5 package
npm uninstall @mrs/ui-v6

# Install v7.2 package
npm install @mrs/ui
```

This will automatically upgrade:
- `@mui/material` from `^6.5.0` to `^7.2.0`
- `@mui/icons-material` from `^6.5.0` to `^7.2.0`

### Step 2: Update Imports

**Find and replace** all import statements:

```tsx
// Before (v6.5)
import { Button, lightTheme, darkTheme } from '@mrs/ui-v6';

// After (v7.2)
import { Button, lightTheme, darkTheme } from '@mrs/ui';
```

**Automated find/replace**:
```bash
# Using sed (macOS/Linux)
find . -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/@mrs\/ui-v6/@mrs\/ui/g'

# Or use your IDE's find/replace feature
# Find: @mrs/ui-v6
# Replace: @mrs/ui
```

### Step 3: Verify Theme Provider (Optional)

Your existing `ThemeProvider` usage continues to work without changes:

```tsx
// This works in both v6.5 and v7.2
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '@mrs/ui';

<ThemeProvider theme={lightTheme}>
  <App />
</ThemeProvider>
```

**Optional**: Upgrade to CSS Variables (v7.2 only feature):

```tsx
// New in v7.2 - optional CSS variables support
import { CssVarsProvider } from '@mui/material/styles';
import { lightTheme } from '@mrs/ui';

<CssVarsProvider theme={lightTheme}>
  <App />
</CssVarsProvider>
```

### Step 4: Run Tests

```bash
npm test
```

All tests should pass without modifications.

### Step 5: Build and Verify

```bash
npm run build
```

Check for any TypeScript errors or build issues.

## No Code Changes Needed

The following **do NOT require changes**:

✅ **Component usage** - All props identical
```tsx
// Works in both versions
<Button variant="contained" color="primary" size="large">
  Click Me
</Button>
```

✅ **Theme access** - Same theme structure
```tsx
// Works in both versions
const theme = useTheme();
const color = theme.palette.primary.main;
const spacing = theme.spacing(2);
const radius = theme.shape.rounded;
```

✅ **Custom theme extensions** - Same augmentation pattern
```tsx
// Works in both versions
declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      myColor: string;
    }
  }
}
```

✅ **Component styling with sx** - Identical API
```tsx
// Works in both versions
<Box sx={{ padding: 2, borderRadius: 'rounded' }}>
  Content
</Box>
```

## Optional: Leverage v7.2 Features

After migrating, you can optionally adopt v7.2-specific features:

### 1. CSS Variables (Optional)

```tsx
// Enable CSS variables
import { CssVarsProvider } from '@mui/material/styles';

<CssVarsProvider theme={lightTheme}>
  <App />
</CssVarsProvider>

// Access theme via CSS variables
const MyComponent = () => (
  <div style={{ 
    color: 'var(--mui-palette-primary-main)',
    padding: 'var(--mui-spacing-2)'
  }}>
    Content
  </div>
);
```

### 2. Enhanced Type Safety

v7.2 has improved TypeScript types for some advanced scenarios. Your existing code benefits automatically.

## Troubleshooting

### Issue: Import errors after migration

**Solution**: Clear node_modules and reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Type errors after upgrade

**Solution**: Clear TypeScript cache
```bash
rm -rf node_modules/.cache
npm run type-check
```

### Issue: Storybook not working

**Solution**: Rebuild Storybook
```bash
rm -rf storybook-static
npm run build-storybook
```

## Rollback Plan

If you encounter issues and need to rollback:

```bash
# Reinstall v6.5
npm uninstall @mrs/ui
npm install @mrs/ui-v6

# Revert imports
find . -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i '' 's/@mrs\/ui/@mrs\/ui-v6/g'

# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Migration Checklist

- [ ] Remove `@mrs/ui-v6` from package.json
- [ ] Install `@mrs/ui`
- [ ] Update all imports from `@mrs/ui-v6` to `@mrs/ui`
- [ ] Run `npm install`
- [ ] Run `npm run type-check`
- [ ] Run `npm test` (all tests should pass)
- [ ] Run `npm run build`
- [ ] Test application manually
- [ ] (Optional) Consider adopting CSS variables
- [ ] Update documentation/README
- [ ] Commit changes

## Expected Timeline

- **Small projects** (< 50 files): 10-15 minutes
- **Medium projects** (50-200 files): 30-45 minutes
- **Large projects** (200+ files): 1-2 hours

Most time is spent on testing, not actual code changes.

## Breaking Changes

**There are NO breaking changes** when migrating from `@mrs/ui-v6` to `@mrs/ui`.

Both versions maintain complete API compatibility. The underlying MUI upgrade from v6 to v7 has some breaking changes, but none affect the MRS Design System API.

## Benefits of Upgrading

### Performance
- ✅ Slightly improved runtime performance
- ✅ Better tree-shaking in some scenarios
- ✅ Reduced bundle size with CSS variables (if adopted)

### Features
- ✅ Optional CSS variables support
- ✅ Enhanced TypeScript types
- ✅ Latest MUI bug fixes
- ✅ Improved accessibility

### Maintenance
- ✅ Latest version receives priority support
- ✅ New components added to v7.2 first
- ✅ Long-term support track

## Support

### Need Help?

- **Documentation**: See [VERSION_DIFFERENCES.md](./VERSION_DIFFERENCES.md)
- **Issues**: Open an issue in the repository
- **Team**: Contact the MRS Design System Team

### Common Questions

**Q: Do I need to change any component code?**  
A: No, all component APIs are identical.

**Q: Will my tests break?**  
A: No, all tests should pass without changes.

**Q: Should I use CSS variables?**  
A: Optional. Classic theme tokens continue to work. Use CSS variables if you need dynamic theming or SSR optimization.

**Q: How long does migration take?**  
A: 10-60 minutes depending on project size. Most is testing, not code changes.

**Q: Can I migrate incrementally?**  
A: No, you must upgrade the entire project at once. However, the upgrade is safe and fast.

**Q: What if I find a bug after upgrading?**  
A: Report it immediately. We maintain both versions and can backport fixes if needed.

## Version Support Policy

- **v7.2 (@mrs/ui)**: Active development, new features, priority support
- **v6.5 (@mrs/ui-v6)**: Maintenance mode, bug fixes, security updates

Both versions receive:
- ✅ Critical bug fixes
- ✅ Security patches
- ✅ Design token updates

v7.2 also receives:
- ✅ New components
- ✅ New features
- ✅ Performance improvements

## Post-Migration

After successful migration:

1. **Update documentation** - Change version references in your project docs
2. **Notify team** - Let developers know about the upgrade
3. **Monitor** - Watch for any unexpected issues in production
4. **Celebrate** - You're on the latest version! 🎉

---

**Last Updated**: December 2024  
**Migration Difficulty**: ⭐ Very Easy  
**Estimated Time**: 10-60 minutes  
**Breaking Changes**: None

