/**
 * List component type definitions
 */

import { ListProps as MuiListProps } from '@mui/material/List';

/**
 * MRS List component props
 * Extends Material-UI ListProps
 *
 * @example
 * ```tsx
 * <List>
 *   <ListItem>Item 1</ListItem>
 *   <ListItem>Item 2</ListItem>
 * </List>
 * <List dense disablePadding>
 *   <ListItem>Dense item</ListItem>
 * </List>
 * ```
 */
export interface ListProps extends MuiListProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense?: boolean;

  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding?: boolean;

  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader?: React.ReactNode;

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   * @default 'ul'
   */
  component?: React.ElementType;

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: MuiListProps['sx'];
}

