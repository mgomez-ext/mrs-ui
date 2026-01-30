/**
 * Lazy Loaded Components
 *
 * This file provides lazy-loaded versions of heavy components
 * to optimize initial bundle size and improve application performance.
 *
 * Use these exports when you want to load components on-demand
 * with React.lazy() and Suspense.
 *
 * @example
 * ```tsx
 * import { Suspense } from 'react';
 * import { LazyTable } from '@mgomez-ext/mrs-ui/lazy';
 * import { CircularProgress } from '@mgomez-ext/mrs-ui';
 *
 * function MyApp() {
 *   return (
 *     <Suspense fallback={<CircularProgress />}>
 *       <LazyTable>
 *         // ... table content
 *       </LazyTable>
 *     </Suspense>
 *   );
 * }
 * ```
 *
 * @package @mgomez-ext/mrs-ui
 * @version 0.12.0
 */

import { lazy } from 'react';

// ============================================================================
// DATE PICKERS (~196 KB gzipped)
// ============================================================================

/**
 * Lazy-loaded DatePicker component
 *
 * Saves ~196 KB from initial bundle if date pickers are not immediately needed.
 *
 * @example
 * ```tsx
 * import { Suspense } from 'react';
 * import { LazyDatePicker } from '@mgomez-ext/mrs-ui/lazy';
 *
 * <Suspense fallback={<CircularProgress />}>
 *   <LazyDatePicker label="Select Date" />
 * </Suspense>
 * ```
 */
export const LazyDatePicker = lazy(() =>
  import('./components/molecules/DatePicker').then((mod) => ({ default: mod.DatePicker }))
);

/**
 * Lazy-loaded TimePicker component
 *
 * Part of the date-pickers chunk (~196 KB gzipped).
 *
 * @example
 * ```tsx
 * import { Suspense } from 'react';
 * import { LazyTimePicker } from '@mgomez-ext/mrs-ui/lazy';
 *
 * <Suspense fallback={<CircularProgress />}>
 *   <LazyTimePicker label="Select Time" />
 * </Suspense>
 * ```
 */
export const LazyTimePicker = lazy(() =>
  import('./components/molecules/TimePicker').then((mod) => ({ default: mod.TimePicker }))
);

/**
 * Lazy-loaded DateTimePicker component
 *
 * Part of the date-pickers chunk (~196 KB gzipped).
 *
 * @example
 * ```tsx
 * import { Suspense } from 'react';
 * import { LazyDateTimePicker } from '@mgomez-ext/mrs-ui/lazy';
 *
 * <Suspense fallback={<CircularProgress />}>
 *   <LazyDateTimePicker label="Select Date & Time" />
 * </Suspense>
 * ```
 */
export const LazyDateTimePicker = lazy(() =>
  import('./components/molecules/DateTimePicker').then((mod) => ({ default: mod.DateTimePicker }))
);

// ============================================================================
// DATA DISPLAY (~70 KB gzipped)
// ============================================================================

/**
 * Lazy-loaded Table component
 *
 * Saves ~70 KB from initial bundle. Use for tables that are not immediately visible.
 *
 * Includes: Table, TableContainer, TableHead, TableBody, TableFooter, TableRow, TableCell
 *
 * @example
 * ```tsx
 * import { Suspense } from 'react';
 * import {
 *   LazyTable,
 *   LazyTableContainer,
 *   LazyTableHead,
 *   LazyTableBody,
 *   LazyTableRow,
 *   LazyTableCell
 * } from '@mgomez-ext/mrs-ui/lazy';
 *
 * <Suspense fallback={<CircularProgress />}>
 *   <LazyTableContainer>
 *     <LazyTable>
 *       <LazyTableHead>
 *         <LazyTableRow>
 *           <LazyTableCell>Name</LazyTableCell>
 *         </LazyTableRow>
 *       </LazyTableHead>
 *     </LazyTable>
 *   </LazyTableContainer>
 * </Suspense>
 * ```
 */
export const LazyTable = lazy(() =>
  import('./components/molecules/Table').then((mod) => ({ default: mod.Table }))
);

export const LazyTableContainer = lazy(() =>
  import('./components/molecules/Table').then((mod) => ({ default: mod.TableContainer }))
);

export const LazyTableHead = lazy(() =>
  import('./components/molecules/Table').then((mod) => ({ default: mod.TableHead }))
);

export const LazyTableBody = lazy(() =>
  import('./components/molecules/Table').then((mod) => ({ default: mod.TableBody }))
);

export const LazyTableFooter = lazy(() =>
  import('./components/molecules/Table').then((mod) => ({ default: mod.TableFooter }))
);

export const LazyTableRow = lazy(() =>
  import('./components/molecules/Table').then((mod) => ({ default: mod.TableRow }))
);

export const LazyTableCell = lazy(() =>
  import('./components/molecules/Table').then((mod) => ({ default: mod.TableCell }))
);

// ============================================================================
// OVERLAYS (~14 KB gzipped)
// ============================================================================

/**
 * Lazy-loaded Drawer component
 *
 * Saves ~14 KB from initial bundle. Use for drawers that are conditionally rendered.
 *
 * @example
 * ```tsx
 * import { Suspense, useState } from 'react';
 * import { LazyDrawer } from '@mgomez-ext/mrs-ui/lazy';
 * import { Button } from '@mgomez-ext/mrs-ui';
 *
 * function MyApp() {
 *   const [open, setOpen] = useState(false);
 *
 *   return (
 *     <>
 *       <Button onClick={() => setOpen(true)}>Open Drawer</Button>
 *
 *       {open && (
 *         <Suspense fallback={null}>
 *           <LazyDrawer open={open} onClose={() => setOpen(false)}>
 *             Drawer content
 *           </LazyDrawer>
 *         </Suspense>
 *       )}
 *     </>
 *   );
 * }
 * ```
 */
export const LazyDrawer = lazy(() =>
  import('./components/molecules/Drawer').then((mod) => ({ default: mod.Drawer }))
);

/**
 * Lazy-loaded Dialog component
 *
 * Part of the overlays chunk (~14 KB gzipped).
 *
 * Includes: Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions
 *
 * @example
 * ```tsx
 * import { Suspense, useState } from 'react';
 * import {
 *   LazyDialog,
 *   LazyDialogTitle,
 *   LazyDialogContent,
 *   LazyDialogActions
 * } from '@mgomez-ext/mrs-ui/lazy';
 * import { Button } from '@mgomez-ext/mrs-ui';
 *
 * function MyApp() {
 *   const [open, setOpen] = useState(false);
 *
 *   return (
 *     <>
 *       <Button onClick={() => setOpen(true)}>Open Dialog</Button>
 *
 *       {open && (
 *         <Suspense fallback={null}>
 *           <LazyDialog open={open} onClose={() => setOpen(false)}>
 *             <LazyDialogTitle>Dialog Title</LazyDialogTitle>
 *             <LazyDialogContent>Dialog content</LazyDialogContent>
 *             <LazyDialogActions>
 *               <Button onClick={() => setOpen(false)}>Close</Button>
 *             </LazyDialogActions>
 *           </LazyDialog>
 *         </Suspense>
 *       )}
 *     </>
 *   );
 * }
 * ```
 */
export const LazyDialog = lazy(() =>
  import('./components/molecules/Dialog').then((mod) => ({ default: mod.Dialog }))
);

export const LazyDialogTitle = lazy(() =>
  import('./components/molecules/Dialog').then((mod) => ({ default: mod.DialogTitle }))
);

export const LazyDialogContent = lazy(() =>
  import('./components/molecules/Dialog').then((mod) => ({ default: mod.DialogContent }))
);

export const LazyDialogContentText = lazy(() =>
  import('./components/molecules/Dialog').then((mod) => ({ default: mod.DialogContentText }))
);

export const LazyDialogActions = lazy(() =>
  import('./components/molecules/Dialog').then((mod) => ({ default: mod.DialogActions }))
);

// ============================================================================
// UTILITIES
// ============================================================================

/**
 * Helper type for lazy-loaded components with proper typing
 *
 * @example
 * ```tsx
 * import type { LazyComponent } from '@mgomez-ext/mrs-ui/lazy';
 *
 * const MyLazyComponent: LazyComponent<typeof MyComponent> = lazy(() =>
 *   import('./MyComponent').then(mod => ({ default: mod.MyComponent }))
 * );
 * ```
 */
export type LazyComponent<T extends React.ComponentType<any>> = React.LazyExoticComponent<T>;

/**
 * Pre-configured Suspense component with fallback
 *
 * @example
 * ```tsx
 * import { LazySuspense, LazyTable } from '@mgomez-ext/mrs-ui/lazy';
 *
 * <LazySuspense>
 *   <LazyTable>
 *     // table content
 *   </LazyTable>
 * </LazySuspense>
 * ```
 */
export { Suspense as LazySuspense } from 'react';
