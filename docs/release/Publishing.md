## Publish Checklist

1) **Clean workspace**
- Ensure `git status` is clean.
- Remove generated folders (`dist/`, `storybook-static/`); they are gitignored.

2) **Install + type check**
```bash
npm install
npm run type-check
```

3) **Tests + lint**
```bash
npm test
npm run lint
# optional: npm run format:check
```

4) **Build artifacts**
```bash
npm run build
```
Outputs ESM (`dist/index.mjs`), CJS (`dist/index.js`), and type declarations.

5) **Validate package contents**
```bash
npm pack --dry-run
```
Ensure `dist/` is present and `src/`, `tests/`, `.storybook/` are excluded.

6) **Update changelog + version**
- Edit `CHANGELOG.md`.
- Choose bump: `npm run publish:patch|minor|major` (uses `prepublishOnly` → type-check + build).

7) **Publish**
```bash
npm publish --access=restricted
```

### Notes
- Peer deps: `react` / `react-dom` v18.3+.
- Built against `@mui/material@6.5.x`.
- Storybook deploy is optional; if needed, run `npm run build-storybook` and host `/storybook-static`.

