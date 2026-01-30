# MRS UI - Project Structure

**Version**: 0.12.0  
**Last Updated**: January 23, 2026

---

## 📁 Root Directory Structure

```
mrs-ui/
├── README.md                    ← Getting started (essential)
├── README.npm.md                ← Clean npm package description
├── CHANGELOG.md                 ← Version history (essential)
├── CONTRIBUTING.md              ← Contribution guidelines (essential)
├── LICENSE                      ← License file
│
├── package.json                 ← Package configuration
├── package-lock.json
├── tsconfig.json                ← TypeScript config
├── tsconfig.build.json
├── vite.config.ts               ← Build configuration
├── jest.config.js               ← Test configuration
├── eslint.config.mjs            ← Linter configuration
├── .prettierrc.json
├── chromatic.config.json
├── figma.config.json
├── typedoc.json
│
├── src/                         ← Source code
│   ├── components/              54 production components
│   ├── theme/                   Theme configuration
│   ├── tokens/                  Design tokens (470+)
│   ├── types/                   TypeScript types
│   ├── hooks/                   Custom React hooks
│   ├── index.ts                 Main entry point
│   └── lazy.ts                  Lazy loading exports
│
├── docs/                        ← Documentation (organized)
│   ├── START-HERE.md            Entry point
│   ├── README.md                Documentation index
│   ├── API-REFERENCE.md
│   ├── BEST-PRACTICES.md
│   ├── MIGRATION-FROM-MUI.md
│   ├── guides/                  User guides
│   ├── components/              Component docs (20+ files)
│   ├── implementation-reports/  v0.12.0 reports
│   ├── migration-guides/        Migration docs
│   ├── architecture/            Architecture docs
│   ├── deployment/              Deployment guides
│   └── archive/                 Deprecated docs
│
├── tests/                       ← Test utilities
├── legacy/                      ← Deprecated files
├── .storybook/                  ← Storybook configuration
└── .github/                     ← GitHub Actions workflows
```

---

## 📂 Key Directories

### `/src` - Source Code

```
src/
├── components/
│   ├── atoms/           31 atomic components
│   ├── molecules/       23 molecule components
│   └── providers/       React providers
│
├── theme/
│   ├── theme.ts         Main theme configuration
│   ├── tokens.ts        Token re-exports
│   └── tokens-import.ts Generated token imports
│
├── tokens/
│   ├── source/          Token source files (DTCG format)
│   ├── config/          Style Dictionary config
│   ├── generated/       Auto-generated token outputs
│   │   ├── css/         CSS Variables
│   │   ├── scss/        SCSS Variables
│   │   ├── ts/          TypeScript exports
│   │   └── json/        JSON exports
│   └── scripts/         Token build scripts
│
├── types/
│   ├── theme.d.ts       Theme type augmentation
│   └── theme-helpers.ts Type-safe helper utilities
│
├── hooks/
│   └── animations/      Animation hooks
│
├── index.ts             Main entry point (123 KB gzipped)
└── lazy.ts              Lazy loading entry (0.6 KB gzipped)
```

### `/docs` - Documentation

```
docs/
├── START-HERE.md                        Entry point for all docs
├── README.md                            Documentation navigation
├── API-REFERENCE.md                     Complete API reference
├── BEST-PRACTICES.md                    Development guidelines
├── MIGRATION-FROM-MUI.md                MUI migration guide
│
├── guides/
│   ├── LazyLoading.md                   Bundle optimization
│   └── Fonts.md                         Font setup
│
├── components/                          Component documentation
│   ├── README.md
│   ├── Button.md, TextField.md, etc.    20+ component guides
│   └── ...
│
├── implementation-reports/              v0.12.0 technical reports
│   ├── EXECUTIVE-SUMMARY-v0.12.0.md
│   ├── PHASE-2-COMPLETE.md
│   ├── BEFORE-AFTER-v0.12.0.md
│   └── ... (10 detailed reports)
│
├── migration-guides/                    Migration documentation
│   ├── THEME-MIGRATION-GUIDE.md
│   ├── MIGRATION_GUIDE.md
│   └── MIGRATION_COMPLETE.md
│
├── architecture/                        Architecture documentation
│   ├── THEME_ARCHITECTURE.md
│   ├── TOKENS.md
│   ├── COMPONENT_ROADMAP.md
│   ├── FIGMA-CODE-CONNECT-STATUS.md
│   └── ... (8 architecture docs)
│
├── deployment/                          Deployment guides
│   ├── DEPLOYMENT-GUIDE.md
│   ├── PACKAGE_STATUS.md
│   └── RELEASE-SUMMARY.md
│
└── archive/                             Deprecated docs
    └── DEBUG-TODO.md
```

---

## 🔍 Finding Files

### By Purpose

| Need | File/Directory |
|------|----------------|
| **Get started** | `README.md` |
| **Install** | `README.md` → Installation section |
| **All docs** | `docs/README.md` |
| **Component API** | `docs/API-REFERENCE.md` |
| **Best practices** | `docs/BEST-PRACTICES.md` |
| **Lazy loading** | `docs/guides/LazyLoading.md` |
| **Migration** | `docs/migration-guides/` |
| **What's new** | `docs/implementation-reports/EXECUTIVE-SUMMARY-v0.12.0.md` |
| **Architecture** | `docs/architecture/` |
| **Component details** | `docs/components/[ComponentName].md` |

---

## 🏗️ Build Outputs

### `/dist` - Build Output (generated)

```
dist/
├── index.mjs                    Main ESM bundle (123 KB gzipped)
├── index.js                     Main CJS bundle (124 KB gzipped)
├── index.d.ts                   TypeScript definitions
│
├── lazy.mjs                     Lazy loading ESM (0.6 KB gzipped)
├── lazy.js                      Lazy loading CJS (0.7 KB gzipped)
├── lazy.d.ts                    Lazy loading types
│
├── date-pickers-*.mjs           Date picker chunk (195 KB gzipped)
├── date-pickers-*.js            Date picker chunk (197 KB gzipped)
│
├── data-display-*.mjs           Table/Timeline chunk (71 KB gzipped)
├── data-display-*.js            Table/Timeline chunk (71 KB gzipped)
│
├── overlays-*.mjs               Dialog/Drawer chunk (14 KB gzipped)
├── overlays-*.js                Dialog/Drawer chunk (14 KB gzipped)
│
├── theme/                       Theme exports
├── tokens/                      Token exports
└── mrs-ui.css                   Component styles (3.7 KB)
```

---

## 🧪 Test Structure

```
tests/
├── setup.ts                     Jest setup
├── styleMock.js                 Style mock
└── test-utils.tsx               Testing utilities

src/components/**/
└── *.test.tsx                   Component tests (58 test suites)
```

---

## 📦 Package Exports

### Main Entry Point
```typescript
import { Button, TextField, ... } from '@mgomez-ext/mrs-ui';
```
**Bundle**: 123 KB (gzipped)

### Lazy Loading Entry
```typescript
import { LazyTable, LazyDialog, ... } from '@mgomez-ext/mrs-ui/lazy';
```
**Bundle**: 0.6 KB (gzipped) + chunks on-demand

### Theme Entry
```typescript
import { theme, colors, shape } from '@mgomez-ext/mrs-ui/theme';
```

### Tokens Entry
```typescript
import { PrimaryMain, ... } from '@mgomez-ext/mrs-ui/tokens';
```

---

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Package configuration & scripts |
| `tsconfig.json` | TypeScript compiler config (development) |
| `tsconfig.build.json` | TypeScript compiler config (production) |
| `vite.config.ts` | Vite bundler configuration |
| `jest.config.js` | Jest test runner configuration |
| `eslint.config.mjs` | ESLint linter configuration |
| `.prettierrc.json` | Prettier formatter configuration |
| `chromatic.config.json` | Visual regression testing |
| `figma.config.json` | Figma Code Connect configuration |
| `typedoc.json` | API documentation generator |

---

## 🚀 NPM Scripts

### Development
```bash
npm run dev              # Start Storybook dev server
npm run storybook        # Alias for dev
npm test                 # Run tests
npm run test:watch       # Watch mode tests
npm run lint             # Run ESLint
npm run type-check       # TypeScript check
```

### Build
```bash
npm run build            # Build library
npm run build-storybook  # Build Storybook
npm run tokens:build     # Generate design tokens
```

### Publishing
```bash
npm run publish:patch    # Publish patch version
npm run publish:minor    # Publish minor version
npm run publish:major    # Publish major version
```

---

## 📊 File Statistics

```
Total Files:          ~450 files
Source Files:         ~350 TypeScript/React files
Test Files:           58 test suites
Documentation:        60+ markdown files
Components:           54 production-ready
Design Tokens:        470+ tokens

Bundle Size:
  Main:               123 KB (gzipped)
  With Lazy Loading:  Starts at 123 KB, grows on-demand
```

---

## 🔒 Security & Privacy

### What's Public

✅ npm package (`@mgomez-ext/mrs-ui`)
✅ GitHub repository (public)
✅ Storybook documentation (public)
✅ Component source code
✅ Documentation

### What's Private

🔒 GitHub Actions secrets (FIGMA_TOKEN, NPM_TOKEN, etc.)
🔒 Internal development paths
🔒 Environment variables

**All sensitive information has been removed from public files.**

---

## 📝 Notes

- All builds are automated via GitHub Actions
- Design tokens auto-generate from source files
- Figma Code Connect files (.figma.tsx) link components to designs
- Documentation is version-specific (v0.12.0)
- Legacy files kept in `legacy/` directory

---

**Version**: 0.12.0  
**Structure Type**: Monorepo (library package)  
**Build System**: Vite  
**Package Manager**: npm
