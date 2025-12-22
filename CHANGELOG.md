# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2024-12-22 (v6.5 Initial Release)

### Added
- Material-UI v6.5.0 compatible version of MRS Design System
- All 17 components ported from v7.2 version (14 atoms + 2 molecules)
- Complete theme configuration using `ThemeProvider`
- Storybook v10 with v6.5 theme setup
- All 327 tests passing
- Build system configured for ESM + CJS output
- TypeScript declarations with custom theme augmentations
- VERSION_DIFFERENCES.md documentation

### Changed
- Dependencies downgraded to MUI v6.5.0
- Storybook preview.tsx uses explicit ThemeProvider decorator
- Package name changed to `@mrs/ui-v6`

### Notes
- Complete feature parity with v7.2 version
- Visual consistency maintained
- All component APIs identical to v7.2 version

---

**Previous v7.2 Changelog** (for reference):

## [0.1.0] - 2025-12-22

### Added
- Initial release of MRS Design System
- Complete theme configuration based on `theme.json`
- Light and dark theme support
- Button component with all variants
- Storybook setup with theme switching
- TypeScript support with full type definitions
- Testing utilities with theme provider
- npm private publishing workflow
- Comprehensive documentation

### Design Tokens
- Color schemes (light/dark)
- Typography scale (Nunito font family)
- Spacing system (8px grid)
- Shape tokens (border radius)
- Component-specific tokens

### Components
- Button (contained, outlined, text variants)

### Infrastructure
- Vite build system
- TypeScript configuration
- Jest testing setup
- Storybook v10.1.10
- ESLint ready
- npm scripts for development and publishing

