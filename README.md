# MRS UI Design System

[![GitHub Packages](https://img.shields.io/badge/package-GitHub%20Packages-blue)](https://github.com/mgomez-ext/mrs-ui/packages)

A comprehensive design system based on Material UI, with 53 production-ready React components and TypeScript support.

## 📖 Documentation

**[→ View Full Documentation](docs/README.md)**

- **[Getting Started](docs/START-HERE.md)** - Quick introduction and setup
- **[Guides](docs/guides/)** - How-to guides and tutorials
- **[Architecture](docs/architecture/)** - System design and decisions
- **[API Reference](docs/api/)** - Component API documentation
- **[Best Practices](docs/guides/BEST-PRACTICES.md)** - Development patterns
- **[Migration Guide](docs/guides/migrations/)** - From Material-UI
- **[Theme & Tokens](docs/architecture/THEME_ARCHITECTURE.md)** - Theming system

## 📦 Installation

```bash
npm install @mgomez-ext/mrs-ui
```

**Peer Dependencies:**
```bash
npm install @mui/material @emotion/react @emotion/styled react react-dom
```

## 🎯 Quick Start

```tsx
import { Button, TextField, ThemeProvider, theme } from '@mgomez-ext/mrs-ui';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TextField label="Email" />
      <Button variant="contained">Sign In</Button>
    </ThemeProvider>
  );
}
```

## 🔗 Links

- [GitHub Packages](https://github.com/mgomez-ext/mrs-ui/packages)
- [GitHub Repository](https://github.com/mgomez-ext/mrs-ui)

---

**Version**: 1.1.0
**License**: UNLICENSED

---

**For complete documentation, see [docs/README.md](docs/README.md)**
