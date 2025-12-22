# MRS Design System (v6.5)

Material-UI v6.5-compatible design system built with React + TypeScript.

> For the latest v7.2 version, see [@mrs/ui](../mrs-ui).

## 📦 Install & Fonts

```bash
npm install @mrs/ui-v6
```

Add Nunito (required) and Material Symbols (optional for font icons) to `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>
```

See `docs/guides/Fonts.md` for setup details.

## 🚀 Quick Start

```tsx
import { Button, theme } from '@mrs/ui-v6';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button variant="contained" color="primary">
        Hello MRS Design System
      </Button>
    </ThemeProvider>
  );
}
```

### Theme Modes & Tokens

```tsx
import { lightTheme, darkTheme, colors, shape, typography } from '@mrs/ui-v6';

const primary = colors.light.primary.main; // #00686f
const radius = shape.rounded; // 9999
const heading = typography.h1.fontFamily; // Nunito
```

## 🎨 Components

- **Atoms (17)**: Avatar, Badge, Button, Checkbox, Chip, CircularProgress, Divider, Icon, IconButton, LinearProgress, Paper, Radio, Skeleton, Slider, Switch, Tooltip, Typography
- **Molecules (4)**: Autocomplete, ButtonGroup, List, ListItem

See `docs/components/README.md` for per-component docs and props.

## 📚 Documentation

- `docs/README.md` — navigation for guides, components, and release checklists
- Storybook (local): `npm run dev` then open [http://localhost:6006](http://localhost:6006)
- Migration & differences: `docs/guides/Migration_v6_to_v7.md`, `docs/guides/Version_Differences.md`

## 🛠️ Scripts

- `npm run dev` — Storybook
- `npm run build` — library build (ESM+CJS, types)
- `npm run build-storybook` — static Storybook
- `npm test` / `npm run test:watch`
- `npm run type-check`
- `npm run lint` / `npm run lint:fix`

## 📦 Publishing

1. `npm run type-check && npm run build`
2. `npm run publish:patch|minor|major`
3. See `docs/release/Publishing.md` for the full checklist (tests, changelog, versioning).

## 🔗 Design Source

- Figma: [MRS - Material UI v.6.5.0](https://figma.com/design/ESNP5KunFotGObfcuXZ9Op/MRS---Material-UI-v.6.5.0)
- Tokens: `theme.json` consumed by `src/theme/theme.ts`

## 🆘 Support

- Open an issue in the repo or contact the MRS Design System Team.

---

**Built with ❤️ by the MRS Design System Team**

