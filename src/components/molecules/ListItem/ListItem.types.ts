/**
 * ListItem component type definitions
 */

import { ListItemProps as MuiListItemProps } from '@mui/material/ListItem';
import { ListItemButtonProps as MuiListItemButtonProps } from '@mui/material/ListItemButton';

/**
 * MRS ListItem component props
 * Extends Material-UI ListItemProps and ListItemButtonProps
 *
 * Based on Figma design specifications:
 * - Always interactive by default (uses ListItemButton internally)
 * - Special styling for selected state (SemiBold font, primary/dark color)
 * - Support for dense and regular layouts
 * - Support for left/right content slots
 *
 * @example
 * ```tsx
 * // Simple interactive list item
 * <ListItem onClick={handleClick}>
 *   <ListItemText primary="Item" />
 * </ListItem>
 *
 * // With icon and secondary action
 * <ListItem
 *   selected={isSelected}
 *   onClick={handleClick}
 *   secondaryAction={<IconButton><Icon /></IconButton>}
 * >
 *   <ListItemIcon><Icon /></ListItemIcon>
 *   <ListItemText primary="Clickable" secondary="With icon" />
 * </ListItem>
 *
 * // Dense variant without gutters
 * <ListItem dense disableGutters>
 *   <ListItemText primary="Dense item" />
 * </ListItem>
 * ```
 */
export interface ListItemProps
  extends Omit<MuiListItemProps, 'button' | 'onClick'>,
    Pick<MuiListItemButtonProps, 'autoFocus' | 'selected' | 'disabled'> {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;

  /**
   * If `true`, the list item is interactive (clickable).
   * By default, ListItem is always interactive unless explicitly disabled.
   * @default true
   */
  button?: boolean;

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * - Regular: 8px vertical padding
   * - Dense: 4px vertical padding
   * @default false
   */
  dense?: boolean;

  /**
   * If `true`, the left and right padding is removed.
   * - Regular: 16px horizontal padding
   * - Disabled: 0px horizontal padding
   * @default false
   */
  disableGutters?: boolean;

  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider?: boolean;

  /**
   * If `true`, all padding is removed.
   * @default false
   */
  disablePadding?: boolean;

  /**
   * The element to display at the end of ListItem.
   * Typically used for IconButton or other actions.
   */
  secondaryAction?: React.ReactNode;

  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems?: 'flex-start' | 'center';

  /**
   * If `true`, the list item is in selected state.
   * Selected state applies special styling:
   * - Background: primary._states.focus
   * - Text: SemiBold weight and primary.dark color
   * @default false
   */
  selected?: boolean;

  /**
   * If `true`, the list item is disabled and non-interactive.
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the element will receive focus automatically.
   * @default false
   */
  autoFocus?: boolean;

  /**
   * Callback fired when the component is clicked.
   * Uses ListItemButton signature (div) for interactive mode while staying compatible with LI root.
   */
  onClick?: MuiListItemButtonProps['onClick'];

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component?: React.ElementType;

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: MuiListItemProps['sx'];
}
