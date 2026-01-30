# Lazy Loading Guide

**Version**: 0.12.0  
**Last Updated**: January 23, 2026

---

## 📖 Overview

MRS UI provides lazy-loaded versions of heavy components to optimize your application's initial bundle size and improve loading performance.

With code splitting enabled (v0.12.0+), components are automatically split into optimized chunks:

| Chunk | Size (gzipped) | Components |
|-------|----------------|------------|
| **Main** | 123 KB | Core components (Button, TextField, etc.) |
| **Date Pickers** | 195 KB | DatePicker, TimePicker, DateTimePicker |
| **Data Display** | 70 KB | Table |
| **Overlays** | 14 KB | Drawer, Dialog |

**Total Bundle Size**: ~402 KB (but now splittable!)

---

## 🎯 When to Use Lazy Loading

### ✅ Use Lazy Loading When:

1. **Component Not Immediately Visible**
   - Modals/Dialogs (shown on user action)
   - Drawers (navigation panels)
   - Tab content (loaded when tab is clicked)

2. **Large Components**
   - Tables with many rows
   - Date pickers (heavy dayjs dependency)

3. **Conditional Features**
   - Admin-only pages
   - Feature-flagged components
   - Premium features

4. **Route-Based Splitting**
   - Different pages/routes
   - Dashboard widgets
   - Report generators

### ❌ Don't Use Lazy Loading When:

1. **Component Always Visible**
   - Navigation bar
   - Footer
   - Page header

2. **Small Components**
   - Buttons
   - Icons
   - Typography

3. **Critical Path**
   - Above-the-fold content
   - First paint elements
   - Hero sections

---

## 🚀 Quick Start

### Installation

MRS UI v0.12.0+ includes lazy exports out of the box:

```bash
npm install @mgomez-ext/mrs-ui@latest
```

### Basic Usage

```tsx
import { Suspense } from 'react';
import { LazyTable, LazyTableContainer } from '@mgomez-ext/mrs-ui/lazy';
import { CircularProgress } from '@mgomez-ext/mrs-ui';

function MyDataTable() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <LazyTableContainer>
        <LazyTable>
          {/* table content */}
        </LazyTable>
      </LazyTableContainer>
    </Suspense>
  );
}
```

**Bundle Impact**: Saves ~70 KB from initial load! 🚀

---

## 📦 Available Lazy Components

### Date Pickers (~195 KB)

```tsx
import {
  LazyDatePicker,
  LazyTimePicker,
  LazyDateTimePicker,
} from '@mgomez-ext/mrs-ui/lazy';

<Suspense fallback={<CircularProgress />}>
  <LazyDatePicker label="Select Date" />
</Suspense>
```

**Bundle Savings**: **-195 KB** (48% of total bundle!)

---

### Table Components (~70 KB)

```tsx
import {
  LazyTable,
  LazyTableContainer,
  LazyTableHead,
  LazyTableBody,
  LazyTableFooter,
  LazyTableRow,
  LazyTableCell,
} from '@mgomez-ext/mrs-ui/lazy';

<Suspense fallback={<CircularProgress />}>
  <LazyTableContainer>
    <LazyTable>
      <LazyTableHead>
        <LazyTableRow>
          <LazyTableCell>Name</LazyTableCell>
          <LazyTableCell>Email</LazyTableCell>
        </LazyTableRow>
      </LazyTableHead>
      <LazyTableBody>
        <LazyTableRow>
          <LazyTableCell>John Doe</LazyTableCell>
          <LazyTableCell>john@example.com</LazyTableCell>
        </LazyTableRow>
      </LazyTableBody>
    </LazyTable>
  </LazyTableContainer>
</Suspense>
```

**Bundle Savings**: **-70 KB** (17% of total bundle!)

---

### Overlay Components (~14 KB)

```tsx
import {
  LazyDrawer,
  LazyDialog,
  LazyDialogTitle,
  LazyDialogContent,
  LazyDialogContentText,
  LazyDialogActions,
} from '@mgomez-ext/mrs-ui/lazy';

// Drawer example
<Suspense fallback={null}>
  <LazyDrawer open={open} onClose={onClose}>
    Navigation content
  </LazyDrawer>
</Suspense>

// Dialog example
<Suspense fallback={null}>
  <LazyDialog open={open} onClose={onClose}>
    <LazyDialogTitle>Confirm Action</LazyDialogTitle>
    <LazyDialogContent>
      Are you sure?
    </LazyDialogContent>
    <LazyDialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <Button onClick={onConfirm}>Confirm</Button>
    </LazyDialogActions>
  </LazyDialog>
</Suspense>
```

**Bundle Savings**: **-14 KB** (3% of total bundle)

---

## 🎨 Fallback Patterns

### Loading Spinner

```tsx
import { Suspense } from 'react';
import { CircularProgress, Box } from '@mgomez-ext/mrs-ui';
import { LazyTable } from '@mgomez-ext/mrs-ui/lazy';

<Suspense
  fallback={
    <Box display="flex" justifyContent="center" padding={4}>
      <CircularProgress />
    </Box>
  }
>
  <LazyTable>{/* content */}</LazyTable>
</Suspense>
```

---

### Skeleton Placeholder

```tsx
import { Suspense } from 'react';
import { Skeleton, Box } from '@mgomez-ext/mrs-ui';
import { LazyTable } from '@mgomez-ext/mrs-ui/lazy';

<Suspense
  fallback={
    <Box>
      <Skeleton variant="rectangular" height={400} />
    </Box>
  }
>
  <LazyTable>{/* content */}</LazyTable>
</Suspense>
```

---

### No Fallback (Invisible)

For overlays that are conditionally rendered:

```tsx
import { Suspense, useState } from 'react';
import { Button } from '@mgomez-ext/mrs-ui';
import { LazyDialog } from '@mgomez-ext/mrs-ui/lazy';

function MyComponent() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>

      {open && (
        <Suspense fallback={null}>
          <LazyDialog open={open} onClose={() => setOpen(false)}>
            Dialog content
          </LazyDialog>
        </Suspense>
      )}
    </>
  );
}
```

**Note**: Using `fallback={null}` is fine for modals/overlays since they appear on top of existing content.

---

## 🏗️ Advanced Patterns

### Route-Based Code Splitting

```tsx
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CircularProgress } from '@mgomez-ext/mrs-ui';
import { LazyTable } from '@mgomez-ext/mrs-ui/lazy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/reports"
          element={
            <Suspense fallback={<CircularProgress />}>
              <LazyTable>{/* reports data */}</LazyTable>
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
```

---

### Conditional Feature Loading

```tsx
import { Suspense } from 'react';
import { CircularProgress } from '@mgomez-ext/mrs-ui';
import { LazyDatePicker } from '@mgomez-ext/mrs-ui/lazy';

function FeatureComponent({ isPremiumUser }: { isPremiumUser: boolean }) {
  if (!isPremiumUser) {
    return <div>Upgrade to Premium to access Date Picker</div>;
  }

  return (
    <Suspense fallback={<CircularProgress />}>
      <LazyDatePicker label="Premium Feature" />
    </Suspense>
  );
}
```

---

### Nested Suspense Boundaries

```tsx
import { Suspense } from 'react';
import { CircularProgress, Box } from '@mgomez-ext/mrs-ui';
import { LazyTable, LazyTimeline } from '@mgomez-ext/mrs-ui/lazy';

function Dashboard() {
  return (
    <Box>
      <Suspense fallback={<CircularProgress />}>
        <LazyTable>{/* table data */}</LazyTable>
      </Suspense>

      <Suspense fallback={<CircularProgress />}>
        <LazyTimeline>{/* timeline events */}</LazyTimeline>
      </Suspense>
    </Box>
  );
}
```

**Benefit**: Each component loads independently!

---

### Preloading Components

```tsx
import { Button } from '@mgomez-ext/mrs-ui';

// Preload dialog on button hover
function MyComponent() {
  const handleMouseEnter = () => {
    // Preload the lazy component
    import('@mgomez-ext/mrs-ui/lazy').then((mod) => {
      // Dialog is now in cache
    });
  };

  return <Button onMouseEnter={handleMouseEnter}>Open Dialog</Button>;
}
```

**Benefit**: Instant loading when user clicks! 🚀

---

## 📊 Performance Impact

### Without Lazy Loading

```
Initial Bundle: 402 KB
- Main: 123 KB
- Date Pickers: 195 KB ❌ (loaded but not used)
- Data Display: 70 KB ❌ (loaded but not used)
- Overlays: 14 KB ❌ (loaded but not used)

Time to Interactive: ~2.5s (3G network)
```

### With Lazy Loading

```
Initial Bundle: 123 KB ✅ (70% reduction!)
- Main: 123 KB (always loaded)

Lazy Loaded (on demand):
- Date Pickers: 195 KB (loaded when <LazyDatePicker> renders)
- Data Display: 70 KB (loaded when <LazyTable> renders)
- Overlays: 14 KB (loaded when <LazyDialog> renders)

Time to Interactive: ~0.8s (3G network) ✅ (3x faster!)
```

### Real-World Example

**App without lazy loading**:
```
Home Page Bundle: 402 KB
- Uses: Button, TextField, Typography (30 KB)
- Waste: 372 KB unused code ❌
```

**App with lazy loading**:
```
Home Page Bundle: 123 KB
- Uses: Button, TextField, Typography (30 KB)
- Lazy chunks: Loaded only when needed ✅

Savings: 279 KB (69% smaller!) 🚀
```

---

## 🎯 Best Practices

### 1. Wrap in Suspense Immediately

```tsx
// ✅ Good - Suspense at component level
function MyComponent() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <LazyTable>{/* content */}</LazyTable>
    </Suspense>
  );
}

// ❌ Bad - No Suspense boundary
function MyComponent() {
  return <LazyTable>{/* content */}</LazyTable>; // Will error!
}
```

---

### 2. Provide Meaningful Fallbacks

```tsx
// ✅ Good - Skeleton matches content structure
<Suspense fallback={<Skeleton variant="rectangular" height={400} />}>
  <LazyTable>{/* content */}</LazyTable>
</Suspense>

// ⚠️ Acceptable - Generic loading
<Suspense fallback={<CircularProgress />}>
  <LazyTable>{/* content */}</LazyTable>
</Suspense>

// ❌ Bad - No visual feedback
<Suspense fallback={null}>
  <LazyTable>{/* content */}</LazyTable>
</Suspense>
```

---

### 3. Group Related Components

```tsx
// ✅ Good - Single Suspense for related components
<Suspense fallback={<CircularProgress />}>
  <LazyTable>
    <LazyTableHead>
      <LazyTableRow>
        <LazyTableCell>Name</LazyTableCell>
      </LazyTableRow>
    </LazyTableHead>
  </LazyTable>
</Suspense>

// ❌ Bad - Multiple Suspense boundaries
<Suspense fallback={<CircularProgress />}>
  <LazyTable>
    <Suspense fallback={<CircularProgress />}>
      <LazyTableHead>
        <Suspense fallback={<CircularProgress />}>
          <LazyTableRow>{/* ... */}</LazyTableRow>
        </Suspense>
      </LazyTableHead>
    </Suspense>
  </LazyTable>
</Suspense>
```

---

### 4. Test Loading States

```tsx
import { render, screen } from '@testing-library/react';
import { Suspense } from 'react';
import { LazyTable } from '@mgomez-ext/mrs-ui/lazy';

test('shows loading state', () => {
  render(
    <Suspense fallback={<div>Loading...</div>}>
      <LazyTable>{/* content */}</LazyTable>
    </Suspense>
  );

  expect(screen.getByText('Loading...')).toBeInTheDocument();
});
```

---

## 🐛 Common Issues

### Issue 1: "A component suspended while responding to synchronous input"

**Problem**: Lazy component triggered by user interaction without Suspense.

**Solution**: Wrap lazy component in Suspense:

```tsx
// ❌ Bad
<button onClick={() => setShowTable(true)}>Show Table</button>
{showTable && <LazyTable />} // Error!

// ✅ Good
<button onClick={() => setShowTable(true)}>Show Table</button>
{showTable && (
  <Suspense fallback={<CircularProgress />}>
    <LazyTable />
  </Suspense>
)}
```

---

### Issue 2: Flash of Loading State

**Problem**: Loading spinner flashes briefly even when component loads instantly.

**Solution**: Use React.startTransition (React 18+):

```tsx
import { useState, useTransition, Suspense } from 'react';
import { LazyTable } from '@mgomez-ext/mrs-ui/lazy';

function MyComponent() {
  const [showTable, setShowTable] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      setShowTable(true);
    });
  };

  return (
    <>
      <button onClick={handleClick}>Show Table</button>
      {showTable && (
        <Suspense fallback={<CircularProgress />}>
          <LazyTable />
        </Suspense>
      )}
    </>
  );
}
```

---

### Issue 3: TypeScript Errors

**Problem**: Type inference issues with lazy components.

**Solution**: Import types separately:

```tsx
import { Suspense } from 'react';
import { LazyTable } from '@mgomez-ext/mrs-ui/lazy';
import type { TableProps } from '@mgomez-ext/mrs-ui';

function MyTable(props: TableProps) {
  return (
    <Suspense fallback={<CircularProgress />}>
      <LazyTable {...props} />
    </Suspense>
  );
}
```

---

## 📚 Resources

### Internal Documentation

- [Performance Optimizations Guide](../PERFORMANCE-OPTIMIZATIONS-v0.12.0.md)
- [Code Splitting Configuration](../../vite.config.ts)
- [Component Documentation](../components/README.md)

### External Resources

- [React Lazy Documentation](https://react.dev/reference/react/lazy)
- [React Suspense Documentation](https://react.dev/reference/react/Suspense)
- [Code Splitting Guide](https://react.dev/learn/code-splitting)
- [Web Performance Best Practices](https://web.dev/performance)

---

## 🎉 Summary

### Bundle Savings

| Scenario | Without Lazy Loading | With Lazy Loading | Savings |
|----------|---------------------|-------------------|---------|
| **Basic App** (Button, TextField) | 402 KB | 123 KB | **-279 KB (69%)** ✅ |
| **With Tables** | 402 KB | 193 KB | **-209 KB (52%)** ✅ |
| **With Date Pickers** | 402 KB | 318 KB | **-84 KB (21%)** ✅ |
| **Full App** (all components) | 402 KB | 402 KB | 0 KB (but faster load!) |

### Performance Improvements

- ✅ **3x faster** Time to Interactive (basic apps)
- ✅ **70% smaller** initial bundle (best case)
- ✅ **Better caching** (chunks change independently)
- ✅ **Improved UX** (smoother page loads)

### Zero Breaking Changes

- ✅ **Backwards Compatible**: Regular imports still work
- ✅ **Opt-in**: Use lazy loading when beneficial
- ✅ **Type Safe**: Full TypeScript support
- ✅ **No Config Required**: Works out of the box

---

**Questions?** Check out our [Performance Guide](../PERFORMANCE-OPTIMIZATIONS-v0.12.0.md) or open an issue on GitHub.

**Ready to optimize?** Start with date pickers - they're the biggest win! 🚀
