/**
 * Dialog Component
 *
 * A modal dialog component for displaying content that requires user interaction.
 * Wraps Material-UI Dialog with MRS Design System theming.
 *
 * @example
 * ```tsx
 * import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mgomez-ext/mrs-ui';
 *
 * function MyDialog() {
 *   const [open, setOpen] = useState(false);
 *
 *   return (
 *     <>
 *       <Button onClick={() => setOpen(true)}>Open Dialog</Button>
 *       <Dialog open={open} onClose={() => setOpen(false)}>
 *         <DialogTitle>Dialog Title</DialogTitle>
 *         <DialogContent>
 *           Content goes here
 *         </DialogContent>
 *         <DialogActions>
 *           <Button onClick={() => setOpen(false)}>Cancel</Button>
 *           <Button onClick={() => setOpen(false)} variant="contained">OK</Button>
 *         </DialogActions>
 *       </Dialog>
 *     </>
 *   );
 * }
 * ```
 */

import React from 'react';
import MuiDialog from '@mui/material/Dialog';
import type { DialogProps } from './Dialog.types';

export const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  (
    {
      open,
      onClose,
      maxWidth = 'sm',
      fullWidth = false,
      fullScreen = false,
      scroll = 'paper',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <MuiDialog
        ref={ref}
        open={open}
        onClose={onClose}
        maxWidth={maxWidth}
        fullWidth={fullWidth}
        fullScreen={fullScreen}
        scroll={scroll}
        {...props}
      >
        {children}
      </MuiDialog>
    );
  }
);

Dialog.displayName = 'Dialog';

export default Dialog;
