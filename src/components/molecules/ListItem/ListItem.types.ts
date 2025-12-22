/**
 * ListItem component type definitions
 */

import { ListItemProps as MuiListItemProps } from '@mui/material/ListItem';
import { ListItemButtonProps as MuiListItemButtonProps } from '@mui/material/ListItemButton';

/**
 * MRS ListItem component props
 * Extends Material-UI ListItemProps and ListItemButtonProps
 *
 * @example
 * ```tsx
 * <ListItem>
 *   <ListItemText primary="Item" />
 * </ListItem>
 * <ListItem button onClick={handleClick}>
 *   <ListItemIcon><Icon /></ListItemIcon>
 *   <ListItemText primary="Clickable" secondary="With icon" />
 * </ListItem>
 * ```
 */
export interface ListItemProps
  extends Omit<MuiListItemProps, 'button'>,
    Pick<
      MuiListItemButtonProps,
      'autoFocus' | 'selected' | 'onClick' | 'disabled'
    > {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;

  /**
   * If `true`, the list item is a button (using `ListItemButton`).
   * @default false
   */
  button?: boolean;

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * @default false
   */
  dense?: boolean;

  /**
   * If `true`, the left and right padding is removed.
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
   */
  secondaryAction?: React.ReactNode;

  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems?: 'flex-start' | 'center';

  /**
   * If `true`, the list item is selected.
   * Only applicable when `button` is true.
   * @default false
   */
  selected?: boolean;

  /**
   * If `true`, the list item is disabled.
   * Only applicable when `button` is true.
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the element will receive focus automatically.
   * Only applicable when `button` is true.
   * @default false
   */
  autoFocus?: boolean;

  /**
   * Callback fired when the component is clicked.
   * Only applicable when `button` is true.
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

