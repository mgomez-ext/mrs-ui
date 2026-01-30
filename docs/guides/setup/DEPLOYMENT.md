# MRS-UI Deployment Guide

**Version:** 0.10.2
**Date:** 2026-01-14
**Status:** ✅ PRODUCTION READY

---

## 📦 Package Information

### GitHub Packages
- **Package Name:** `@mgomez-ext/mrs-ui`
- **Version:** 0.10.2
- **Registry:** GitHub Packages
- **Bundle Size:** 403.52 KB (gzipped)

### Repository
- **GitHub:** https://github.com/mgomez-ext/mrs-ui
- **Storybook:** https://mgomez-ext.github.io/mrs-ui/
- **Issues:** https://github.com/mgomez-ext/mrs-ui/issues

---

## 🚀 Deployment Status

### ✅ Storybook Deployment
**Status:** LIVE
**URL:** https://mgomez-ext.github.io/mrs-ui/

Storybook has been successfully deployed to GitHub Pages with:
- ✅ All 54 component stories
- ✅ Interactive documentation
- ✅ Dark mode examples
- ✅ Design token explorer
- ✅ Accessibility testing addon
- ✅ Mobile-responsive preview

**To access:**
1. Visit https://mgomez-ext.github.io/mrs-ui/
2. Browse components by category (Atoms, Molecules)
3. Test component variants and props
4. View code examples
5. Check accessibility scores

---

## 📥 Installation for Consumers

### Basic Installation

```bash
npm install @mgomez-ext/mrs-ui
```

### Peer Dependencies

```bash
npm install @mui/material @emotion/react @emotion/styled react react-dom
```

### Full Installation (Recommended)

```bash
# Install the package
npm install @mgomez-ext/mrs-ui

# Install peer dependencies
npm install @mui/material @emotion/react @emotion/styled

# React (if not already installed)
npm install react react-dom
```

---

## 🎯 Quick Start Guide

### 1. Basic Usage

```tsx
import { Button, TextField, Container } from '@mgomez-ext/mrs-ui';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@mgomez-ext/mrs-ui/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <TextField label="Email" />
        <Button variant="contained">Submit</Button>
      </Container>
    </ThemeProvider>
  );
}
```

### 2. Using Design Tokens

```tsx
import { tokens } from '@mgomez-ext/mrs-ui/tokens';

// Use tokens directly
const MyComponent = () => (
  <div style={{
    color: tokens.colorTextPrimary,
    backgroundColor: tokens.colorBackgroundSurface
  }}>
    Content
  </div>
);
```

### 3. Grid Component (New v2 API)

```tsx
import { Grid } from '@mgomez-ext/mrs-ui';

function ResponsiveLayout() {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        Column 1
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        Column 2
      </Grid>
    </Grid>
  );
}
```

---

## 📝 Publishing to NPM

### Prerequisites

1. **NPM Account Setup**
   ```bash
   npm login
   # Enter your npm credentials
   ```

2. **Verify Package Configuration**
   ```bash
   npm run type-check  # Must pass
   npm run lint        # Must pass
   npm test            # Must pass
   npm run build       # Must succeed
   ```

### Publishing Process

#### Option 1: Automatic (Recommended)

```bash
# Patch version (0.10.2 → 0.10.3)
npm run publish:patch

# Minor version (0.10.2 → 0.11.0)
npm run publish:minor

# Major version (0.10.2 → 1.0.0)
npm run publish:major
```

#### Option 2: Manual

```bash
# Run quality checks
npm run prepublishOnly

# Publish
npm publish
```

### Post-Publication

1. **Verify Publication**
   ```bash
   npm view @mgomez-ext/mrs-ui version
   # Should show: 0.10.2
   ```

2. **Test Installation**
   ```bash
   # In a test project
   npm install @mgomez-ext/mrs-ui@0.10.2
   ```

3. **Update GitHub Release**
   - Go to https://github.com/mgomez-ext/mrs-ui/releases
   - Create new release with tag `v0.10.2`
   - Copy CHANGELOG content to release notes

---

## 🔄 Continuous Deployment

### GitHub Actions Setup

The repository includes automated workflows:

1. **CI/CD Pipeline** (`.github/workflows/ci.yml`)
   - Runs on every push
   - Tests, linting, type checking
   - Build verification

2. **Storybook Deployment** (Manual)
   ```bash
   npm run deploy-storybook
   ```

3. **Figma Token Sync** (`.github/workflows/figma-sync.yml`)
   - Scheduled: Every Monday at 9 AM UTC
   - Manual trigger available
   - Automatic PR creation

### Setting Up Automated NPM Publishing

To enable automated publishing on releases:

1. **Generate NPM Token**
   ```bash
   npm token create --read-only=false
   ```

2. **Add to GitHub Secrets**
   - Go to Repository Settings → Secrets → Actions
   - Add secret: `NPM_TOKEN` with your token

3. **Create Workflow** (`.github/workflows/publish.yml`)
   ```yaml
   name: Publish to NPM
   on:
     release:
       types: [created]
   jobs:
     publish:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
             registry-url: 'https://registry.npmjs.org'
         - run: npm ci
         - run: npm run prepublishOnly
         - run: npm publish
           env:
             NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}}
   ```

---

## 🧪 Quality Assurance Checklist

Before any deployment, ensure:

- [ ] All tests passing (1,199/1,199)
- [ ] Zero TypeScript errors
- [ ] Zero ESLint errors
- [ ] Prettier formatting applied
- [ ] Production build succeeds
- [ ] Storybook builds without errors
- [ ] Bundle size within limits (<500KB gzipped)
- [ ] CHANGELOG.md updated
- [ ] README.md updated
- [ ] Version bumped appropriately

---

## 📊 Current Release Metrics

### v0.10.2 Statistics

**Code Quality:**
- ✅ Tests: 1,199/1,199 passing (100%)
- ✅ Test Suites: 57/57 passing
- ✅ TypeScript: 0 errors
- ✅ ESLint: 0 errors
- ✅ Prettier: All files formatted

**Bundle Size:**
- ESM: 2,240.72 KB (403.52 KB gzipped)
- CJS: 2,258.50 KB (404.44 KB gzipped)
- CSS: 3.70 KB (0.96 KB gzipped)

**Components:**
- 54 Production-ready components
- 31 Atoms + 23 Molecules
- 470+ Design tokens
- 100% TypeScript coverage

---

## 🔐 Security Considerations

### Package Security

1. **No Known Vulnerabilities**
   ```bash
   npm audit
   # 0 vulnerabilities
   ```

2. **Regular Dependency Updates**
   - Review dependencies monthly
   - Update MUI to latest stable
   - Monitor security advisories

3. **Access Control**
   - NPM: 2FA required for publishing
   - GitHub: Protected main branch
   - Secrets: Encrypted in GitHub

---

## 📚 Documentation Links

### For Developers
- **GitHub Repository:** https://github.com/mgomez-ext/mrs-ui
- **Storybook:** https://mgomez-ext.github.io/mrs-ui/
- **CHANGELOG:** [CHANGELOG.md](./CHANGELOG.md)
- **Contributing Guide:** [CONTRIBUTING.md](./CONTRIBUTING.md)
- **Debug Report:** [DEBUG-TODO.md](./DEBUG-TODO.md)

### For Consumers
- **GitHub Packages:** https://github.com/mgomez-ext/mrs-ui/packages
- **Installation Guide:** [README.md](./README.md)
- **Component Docs:** https://mgomez-ext.github.io/mrs-ui/
- **Design Tokens:** [TOKENS.md](./TOKENS.md)
- **Theme Guide:** [THEME_ARCHITECTURE.md](./THEME_ARCHITECTURE.md)

---

## 🆘 Troubleshooting

### Common Issues

**1. Build Fails**
```bash
# Clean and rebuild
npm run clean
npm run build
```

**2. Tests Failing**
```bash
# Clear Jest cache
npx jest --clearCache
npm test
```

**3. Storybook Won't Build**
```bash
# Clear Storybook cache
rm -rf node_modules/.cache/storybook
npm run build-storybook
```

**4. Publishing Errors**
```bash
# Verify npm authentication
npm whoami

# Re-login if needed
npm login
```

### Support

For issues or questions:
- Open an issue: https://github.com/mgomez-ext/mrs-ui/issues
- Check existing issues for solutions
- Review documentation in `/docs` folder

---

## 🎉 Release Checklist

Use this checklist for each release:

### Pre-Release
- [ ] All changes committed and pushed
- [ ] Tests passing locally
- [ ] Version bumped in package.json
- [ ] CHANGELOG.md updated
- [ ] README.md updated if needed
- [ ] Build succeeds
- [ ] Storybook builds

### Release
- [ ] Create GitHub release
- [ ] Publish to NPM
- [ ] Deploy Storybook
- [ ] Verify package installation
- [ ] Test in consumer project

### Post-Release
- [ ] Announce in team channels
- [ ] Update documentation site
- [ ] Monitor for issues
- [ ] Respond to feedback

---

## 📅 Maintenance Schedule

### Weekly
- Review open issues
- Check for security updates
- Test Storybook deployment

### Monthly
- Update dependencies
- Review bundle size
- Performance audit
- Documentation review

### Quarterly
- Major dependency updates
- Architecture review
- Accessibility audit
- Component roadmap planning

---

**Last Updated:** 2026-01-14
**Next Review:** 2026-02-14
**Maintained By:** MRS Design System Team
