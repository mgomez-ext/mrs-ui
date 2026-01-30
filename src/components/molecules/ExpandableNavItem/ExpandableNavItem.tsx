/**
 * ExpandableNavItem Component
 *
 * Collapsible navigation item component for the MRS Design System.
 * Supports nested child items with expand/collapse functionality.
 *
 * @example
 * ```tsx
 * import { ExpandableNavItem } from '@mgomez-ext/mrs-ui';
 * import InboxIcon from '@mui/icons-material/Inbox';
 *
 * function MyNav() {
 *   const [open, setOpen] = React.useState(false);
 *
 *   return (
 *     <List>
 *       <ExpandableNavItem
 *         label="Products"
 *         icon={<InboxIcon />}
 *         isOpen={open}
 *         onToggle={() => setOpen(!open)}
 *         children={[
 *           { label: 'All Products', onClick: () => console.log('All') },
 *           { label: 'Categories', onClick: () => console.log('Categories') }
 *         ]}
 *       />
 *     </List>
 *   );
 * }
 * ```
 *
 * @see {@link https://mui.com/material-ui/api/list-item-button/}
 * @see {@link https://mui.com/material-ui/api/collapse/}
 */

import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import { useTheme } from '@mui/material/styles';
import { MaterialSymbol } from '../../atoms/MaterialSymbol';
import type { ExpandableNavItemProps, NavItem } from './ExpandableNavItem.types';

/**
 * ExpandableNavItem component
 *
 * Collapsible navigation item with support for nested child items.
 * Features expand/collapse animation and selected state support.
 *
 * Features:
 * - Expandable/collapsible with smooth animation
 * - Supports nested child items
 * - Icon support for parent and child items
 * - Selected/active state highlighting
 * - MRS design tokens (Nunito font, MRS colors)
 * - Full accessibility support (ARIA attributes)
 *
 * @param props - ExpandableNavItem component props
 * @returns ExpandableNavItem component
 */
export const ExpandableNavItem = React.forwardRef<HTMLDivElement, ExpandableNavItemProps>(
  (
    {
      label,
      icon,
      isOpen = false,
      onToggle,
      children = [],
      selected = false,
      onClick,
      ListItemButtonProps,
      childListItemButtonProps,
    },
    ref
  ) => {
    const theme = useTheme();

    const handleParentClick = () => {
      if (onToggle) {
        onToggle();
      }
      if (onClick) {
        onClick();
      }
    };

    return (
      <div ref={ref}>
        {/* Parent Item */}
        <ListItemButton
          selected={selected}
          onClick={handleParentClick}
          sx={{
            fontFamily: theme.typography.fontFamily,
            ...ListItemButtonProps?.sx,
          }}
          {...ListItemButtonProps}
        >
          {icon && <ListItemIcon sx={{ minWidth: 40 }}>{icon}</ListItemIcon>}
          <ListItemText
            primary={label}
            primaryTypographyProps={{
              fontFamily: theme.typography.fontFamily,
              fontWeight: selected ? 600 : 400,
            }}
          />
          {children.length > 0 && (
            <MaterialSymbol icon={isOpen ? 'expand_less' : 'expand_more'} size="medium" />
          )}
        </ListItemButton>

        {/* Collapsible Child Items */}
        {children.length > 0 && (
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {children.map((child: NavItem, index: number) => (
                <ListItemButton
                  key={index}
                  selected={child.selected}
                  onClick={child.onClick}
                  sx={{
                    pl: icon ? 9 : 4,
                    fontFamily: theme.typography.fontFamily,
                    ...childListItemButtonProps?.sx,
                  }}
                  {...childListItemButtonProps}
                >
                  {child.icon && <ListItemIcon sx={{ minWidth: 40 }}>{child.icon}</ListItemIcon>}
                  <ListItemText
                    primary={child.label}
                    primaryTypographyProps={{
                      fontFamily: theme.typography.fontFamily,
                      fontSize: '0.875rem',
                      fontWeight: child.selected ? 600 : 400,
                    }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        )}
      </div>
    );
  }
);

ExpandableNavItem.displayName = 'ExpandableNavItem';

export type { ExpandableNavItemProps, NavItem };
export default ExpandableNavItem;
