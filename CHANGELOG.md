# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2024-12-27 (Production-Ready Release)

### Added

**Layout Foundation (4 components)**
- Box - Fundamental layout container with sx prop support
- Stack - Flexbox layout manager with direction, spacing, and dividers
- Grid - Responsive 12-column grid system using MUI Grid2
- Container - Max-width wrapper for page content (xs/sm/md/lg/xl)

**Form Controls (11 components)**
- Button - Primary action buttons with variants
- Checkbox - Binary selection input
- FormControlLabel - Labels for form controls
- FormGroup - Group multiple controls
- Radio - Single selection from group
- RadioGroup - Manage radio button groups
- Select - Dropdown selection menu
- MenuItem - Options for Select
- Switch - Toggle on/off
- TextField - Text input with variants
- Slider - Range selection slider

**Display Components (11 components)**
- Typography - Text with theme variants
- Avatar - User profile pictures
- Badge - Status indicators and counts
- Chip - Compact tags and filters
- Divider - Visual content separator
- Icon - Icon display
- IconButton - Clickable icons
- Link - Accessible hyperlinks
- Paper - Elevated surface container
- Skeleton - Loading placeholders
- Tooltip - Contextual help popups

**Feedback (2 components)**
- CircularProgress - Circular loading indicator
- LinearProgress - Linear loading bar

**Complex Components (5 components)**
- Accordion - Expandable content panels
- Alert - Contextual feedback messages
- Autocomplete - Search with suggestions
- Breadcrumbs - Navigation hierarchy
- Card - Content container with header/actions

**Infrastructure**
- Material-UI v6.5.0 compatible version
- Complete theme configuration with `ThemeProvider`
- Storybook v10.1.10 with comprehensive documentation
- 621 tests passing (100% pass rate)
- Build system: ESM + CJS output (199.67 kB gzipped)
- TypeScript 5.3.0 with strict mode and full type definitions
- Deployment configurations (Vercel, Netlify, GitHub Pages)
- CI/CD pipeline with GitHub Actions
- npm publishing workflow with provenance
- Comprehensive README with installation guide

### Changed
- Package name: `@mrs/ui-v6`
- PublishConfig access: "public" (ready for npm publishing)
- Enhanced prepublishOnly script with full quality checks
- Removed Story UI dependencies (not needed)

### Quality Assurance
- ✅ 621 tests passing (0 failing)
- ✅ TypeScript: 0 errors
- ✅ ESLint: Clean (component code)
- ✅ Build: Successful
- ✅ Package size: Optimized to 199.67 kB gzipped
- ✅ Tree-shakeable: Import only what you need
- ✅ Zero runtime dependencies: All peer dependencies

### Documentation
- 46+ Storybook stories for layout components
- Interactive component explorer
- Installation and usage examples
- Theme customization guide
- DEPLOYMENT_READINESS.md assessment
- COMPONENT_ROADMAP.md for future releases

### Notes
- **33 production-ready components** (28 atoms + 5 molecules)
- Complete Material-UI v6.5 compatibility
- Dual module support (ESM and CommonJS)
- Full TypeScript support with type safety
- Responsive, mobile-first design
- WCAG compliant components
- Ready for deployment to Vercel, Netlify, or GitHub Pages

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

