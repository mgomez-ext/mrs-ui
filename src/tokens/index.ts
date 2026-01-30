/**
 * MRS Design System - Token Hub
 *
 * Central export point for all design tokens.
 * Tokens are generated from source JSON files using Style Dictionary.
 *
 * @example
 * ```typescript
 * import * as tokens from '@mgomez-ext/mrs-ui/tokens';
 *
 * // Access token values
 * const brandColor = tokens.PrimitivesColorsBrandVerones;
 * const buttonRadius = tokens.ComponentButtonBorderRadius;
 * ```
 */

// Re-export all generated token constants
export * from './generated/ts/tokens';
