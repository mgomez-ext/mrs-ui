/**
 * Alert component type definitions
 */

import { AlertProps as MuiAlertProps } from '@mui/material/Alert';
import { ReactNode } from 'react';

/**
 * Severity levels supported by the MRS Alert component.
 */
export type AlertSeverity = 'error' | 'warning' | 'info' | 'success';

/**
 * Variants supported by the MRS Alert component.
 */
export type AlertVariant = 'filled' | 'outlined' | 'standard';

/**
 * Alert component props
 *
 * Extends MUI Alert props while constraining severity/variant and exposing
 * convenience flags for optional parts of the layout (icon, close, action).
 */
export interface AlertProps
  extends Omit<MuiAlertProps, 'severity' | 'variant' | 'icon' | 'action'> {
  /**
   * Alert severity. Controls colors and default icon.
   * @default 'error'
   */
  severity?: AlertSeverity;

  /**
   * Visual variant of the alert.
   * @default 'filled'
   */
  variant?: AlertVariant;

  /**
   * Optional title displayed above the description.
   */
  title?: ReactNode;

  /**
   * Optional description text. If omitted, only the title renders.
   */
  description?: ReactNode;

  /**
   * Controls the leading icon. Pass `false` to hide, or a ReactNode to override.
   * @default true
   */
  icon?: boolean | ReactNode;

  /**
   * If true, renders a close button on the right.
   * Provide an `onClose` handler to respond to clicks.
   * @default false
   */
  close?: boolean;

  /**
   * Custom action content rendered on the right (e.g., a Button).
   * If `close` is also true, the close button will appear after this content.
   */
  action?: ReactNode;
}

