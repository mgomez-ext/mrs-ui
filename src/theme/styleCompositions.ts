/**
 * Style Compositions - Reusable style patterns
 *
 * This module provides composable style patterns that are used across
 * multiple components to reduce duplication and improve consistency.
 *
 * Each composition is a function that returns style objects compatible
 * with MUI's sx prop.
 *
 * @example
 * ```tsx
 * // In theme.ts
 * MuiButton: {
 *   styleOverrides: {
 *     root: {
 *       ...styleCompositions.button.base(),
 *     },
 *     sizeSmall: {
 *       ...styleCompositions.button.sizes.small,
 *     },
 *   },
 * }
 * ```
 */

import type { CSSObject, Theme } from '@mui/material/styles';
import { typographyTokens, shapeTokens } from './tokens-import';

/**
 * Style composition factory for creating reusable patterns
 */
export const styleCompositions = {
  /**
   * Button style compositions
   * Used by: MuiButton, MuiFab, MuiToggleButton
   */
  button: {
    /**
     * Base button styles
     */
    base: (): CSSObject => ({
      fontWeight: typographyTokens.fontWeightSemiBold,
      textTransform: 'none',
      borderRadius: shapeTokens.rounded,
      transition: 'all 0.2s ease',
    }),

    /**
     * Button size variants (Figma measurements)
     * Large: 102px width, 48px height
     * Medium: 96px width, 40px height
     * Small: 80px width, 32px height
     */
    sizes: {
      small: {
        fontSize: '0.8125rem',
        padding: '6px 12px',
        minHeight: '32px',
      },
      medium: {
        fontSize: '0.875rem',
        padding: '8px 16px',
        minHeight: '40px',
      },
      large: {
        fontSize: '1rem',
        padding: '12px 24px',
        minHeight: '48px',
      },
    },

    /**
     * Button state styles
     */
    states: {
      disabled: (): CSSObject => ({
        opacity: 0.5,
        cursor: 'not-allowed',
        pointerEvents: 'none',
      }),
    },
  },

  /**
   * Input style compositions
   * Used by: MuiTextField, MuiOutlinedInput, MuiFilledInput, MuiInput
   */
  input: {
    /**
     * Base input styles
     */
    base: (): CSSObject => ({
      borderRadius: shapeTokens.md,
      transition: 'all 0.2s ease',
    }),

    /**
     * Input size variants
     */
    sizes: {
      small: {
        fontSize: '0.8125rem',
        padding: '6px 10px',
      },
      medium: {
        fontSize: '0.875rem',
        padding: '8px 12px',
      },
      large: {
        fontSize: '1rem',
        padding: '10px 14px',
      },
    },

    /**
     * Input state styles
     */
    states: {
      disabled: (theme: Theme): CSSObject => ({
        backgroundColor: theme.palette.action.disabledBackground,
        cursor: 'not-allowed',
      }),
      error: (theme: Theme): CSSObject => ({
        borderColor: theme.palette.error.main,
        color: theme.palette.error.main,
      }),
      focused: (theme: Theme): CSSObject => ({
        borderColor: theme.palette.primary.main,
        outline: `2px solid ${theme.palette.primary.main}`,
      }),
    },
  },

  /**
   * Surface style compositions
   * Used by: MuiCard, MuiPaper, MuiDialog
   */
  surface: {
    /**
     * Base surface styles
     */
    base: (theme: Theme): CSSObject => ({
      borderRadius: shapeTokens.lg,
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
    }),

    /**
     * Surface elevation variants
     */
    elevations: {
      none: { boxShadow: 'none' },
      low: (theme: Theme): CSSObject => ({ boxShadow: theme.shadows?.[1] }),
      medium: (theme: Theme): CSSObject => ({ boxShadow: theme.shadows?.[4] }),
      high: (theme: Theme): CSSObject => ({ boxShadow: theme.shadows?.[8] }),
    },
  },

  /**
   * List item style compositions
   * Used by: MuiListItem, MuiListItemButton
   */
  listItem: {
    /**
     * Base list item styles
     */
    base: (): CSSObject => ({
      borderRadius: shapeTokens.sm,
      transition: 'all 0.2s ease',
    }),

    /**
     * List item state styles
     */
    states: {
      selected: (theme: Theme): CSSObject => ({
        backgroundColor: theme.palette.action.selected,
        fontWeight: typographyTokens.fontWeightSemiBold,
      }),
      hover: (theme: Theme): CSSObject => ({
        backgroundColor: theme.palette.action.hover,
      }),
      disabled: (): CSSObject => ({
        opacity: 0.5,
        cursor: 'not-allowed',
        pointerEvents: 'none',
      }),
    },
  },

  /**
   * Chip style compositions
   * Used by: MuiChip
   */
  chip: {
    /**
     * Base chip styles
     */
    base: (): CSSObject => ({
      borderRadius: shapeTokens.rounded,
      fontWeight: typographyTokens.fontWeightMedium,
      transition: 'all 0.2s ease',
    }),

    /**
     * Chip size variants
     */
    sizes: {
      small: {
        fontSize: '0.75rem',
        padding: '4px 8px',
      },
      medium: {
        fontSize: '0.875rem',
        padding: '6px 12px',
      },
    },

    /**
     * Chip state styles
     */
    states: {
      disabled: (): CSSObject => ({
        opacity: 0.5,
        cursor: 'not-allowed',
      }),
    },
  },

  /**
   * Alert and feedback style compositions
   * Used by: MuiAlert, MuiSnackbar
   */
  feedback: {
    /**
     * Base feedback styles
     */
    base: (): CSSObject => ({
      borderRadius: shapeTokens.md,
      padding: '12px 16px',
      transition: 'all 0.2s ease',
    }),

    /**
     * Alert severity variants
     */
    variants: {
      error: (theme: Theme): CSSObject => ({
        backgroundColor: theme.palette.error.light,
        color: theme.palette.error.dark,
      }),
    },
  },

  /**
   * Common state compositions
   * Used across multiple components
   */
  states: {
    /**
     * Focus state - applies consistent focus styling
     */
    focus: (theme: Theme): CSSObject => ({
      outline: `2px solid ${theme.palette.primary.main}`,
      outlineOffset: '2px',
    }),

    /**
     * Hover state - applies consistent hover styling
     */
    hover: (theme: Theme): CSSObject => ({
      backgroundColor: theme.palette.action.hover,
      transition: 'background-color 0.2s ease',
    }),

    /**
     * Active/selected state
     */
    active: (theme: Theme): CSSObject => ({
      backgroundColor: theme.palette.action.selected,
      fontWeight: typographyTokens.fontWeightSemiBold,
    }),

    /**
     * Disabled state - applies consistent disabled styling
     */
    disabled: (): CSSObject => ({
      opacity: 0.5,
      cursor: 'not-allowed',
      pointerEvents: 'none',
    }),

    /**
     * Loading state - subtle opacity reduction
     */
    loading: (): CSSObject => ({
      position: 'relative',
      pointerEvents: 'none',
      opacity: 0.7,
    }),
  },

  /**
   * Typography weight shortcuts
   */
  typography: {
    bold: { fontWeight: typographyTokens.fontWeightBold },
    semiBold: { fontWeight: typographyTokens.fontWeightSemiBold },
    medium: { fontWeight: typographyTokens.fontWeightMedium },
    regular: { fontWeight: typographyTokens.fontWeightRegular },
    light: { fontWeight: typographyTokens.fontWeightLight },
  },

  /**
   * Spacing shortcuts
   * Note: Use MUI spacing() function for responsive values
   */
  spacing: {
    compact: { padding: '8px 12px', gap: '8px' },
    normal: { padding: '12px 16px', gap: '12px' },
    comfortable: { padding: '16px 20px', gap: '16px' },
    spacious: { padding: '20px 24px', gap: '20px' },
  },

  /**
   * Border radius shortcuts
   */
  borderRadius: {
    sharp: { borderRadius: 0 },
    small: { borderRadius: shapeTokens.sm },
    medium: { borderRadius: shapeTokens.md },
    large: { borderRadius: shapeTokens.lg },
    rounded: { borderRadius: shapeTokens.rounded },
  },

  /**
   * Flexbox and layout compositions
   */
  layout: {
    /**
     * Flex row with centered items
     */
    flexRowCenter: (): CSSObject => ({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    }),

    /**
     * Flex column with centered items
     */
    flexColumnCenter: (): CSSObject => ({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }),

    /**
     * Full width container
     */
    fullWidth: (): CSSObject => ({
      width: '100%',
    }),

    /**
     * Responsive container
     */
    responsiveContainer: (): CSSObject => ({
      width: '100%',
      maxWidth: '100%',
    }),
  },
};

/**
 * Type export for style compositions
 */
export type StyleComposition = typeof styleCompositions;
