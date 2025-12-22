# Font Setup Guide - MRS Design System

## Overview

The MRS Design System requires specific fonts to be loaded for proper rendering. This guide covers all font requirements and setup instructions.

---

## Required Fonts

### 1. Nunito (Primary Typography)

**Required for**: All text and typography components

**Setup**: Add to your HTML `<head>` tag:

```html
<!-- Preconnect for better performance -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Nunito font with all required weights -->
<link
  href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

**Weights Included:**
- Light (300) - Used for h1 headings
- Regular (400) - Default body text
- Medium (500) - Table headers, some components
- SemiBold (600) - Subtitles, buttons, h5-h6
- Bold (700) - Optional for emphasis

---

## Optional Fonts

### 2. Material Icons Font (for Font Icons)

**Required for**: Font Icons only (not needed if using SVG icons)

**When to use**: Only if you're using `<Icon type="font" iconName="add" />` instead of `<Icon icon={AddIcon} />`

**Recommendation**: ⚠️ We recommend using SVG icons from `@mui/icons-material` instead for better performance and flexibility.

#### Option A: Material Symbols Rounded (Recommended)

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>
```

#### Option B: Material Icons (Classic)

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
```

**Choose only one Material Icons font** - they serve the same purpose.

---

## Complete HTML Setup

### Minimal Setup (Recommended)

For most use cases, you only need the Nunito font:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
    <!-- Required: Nunito font -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    
    <title>My App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### Full Setup (with Font Icons)

If you need Font Icons:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
    <!-- Required: Nunito font -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    
    <!-- Optional: Material Icons font (for Font Icons) -->
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />
    
    <title>My App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

---

## Framework-Specific Setup

### React (index.html)

Place font links in `public/index.html`:

```html
<!-- public/index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Font links here -->
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### Next.js

Add to `pages/_document.tsx`:

```tsx
// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Nunito font */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          
          {/* Optional: Material Icons */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```

### Vite

Place font links in `index.html` at project root:

```html
<!-- index.html (root) -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Font links here -->
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## Performance Optimization

### Preconnect for Faster Loading

Always use preconnect for Google Fonts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

This establishes early connections to Google's servers before requesting fonts.

### Font Display Strategy

The `display=swap` parameter ensures text is visible while fonts load:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

Options:
- `display=swap` - Show fallback font immediately, swap when loaded (recommended)
- `display=fallback` - Brief invisible period, then fallback, swap if loads fast
- `display=optional` - Show fallback, only swap if font is cached

---

## Self-Hosting Fonts (Advanced)

For better performance and privacy, you can self-host fonts:

### 1. Download Fonts

Use [google-webfonts-helper](https://gwfh.mranftl.com/fonts) to download font files.

### 2. Add to Project

```
public/
  fonts/
    nunito/
      nunito-v26-latin-300.woff2
      nunito-v26-latin-regular.woff2
      nunito-v26-latin-500.woff2
      nunito-v26-latin-600.woff2
```

### 3. Create CSS File

```css
/* src/fonts.css */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url('/fonts/nunito/nunito-v26-latin-300.woff2') format('woff2');
}

@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/nunito/nunito-v26-latin-regular.woff2') format('woff2');
}

/* Add other weights... */
```

### 4. Import CSS

```tsx
// src/index.tsx
import './fonts.css';
```

---

## Troubleshooting

### Fonts Not Loading

**Check:**
1. ✅ Font link is in `<head>` section
2. ✅ Font link is before other stylesheets
3. ✅ Check browser Network tab for font file requests
4. ✅ Check for Content Security Policy (CSP) blocking fonts

### Font Icons Not Showing

**Check:**
1. ✅ Material Icons font link is present
2. ✅ Using correct icon names from [Material Icons](https://fonts.google.com/icons)
3. ✅ Font is loaded (check Network tab)
4. ✅ Consider using SVG icons instead for better reliability

### Wrong Font Displaying

**Check:**
1. ✅ Theme is properly applied via `ThemeProvider`
2. ✅ Font family in theme matches loaded font
3. ✅ Browser cache (clear and reload)

---

## Font Decision Guide

### When to Use What

| Feature | Nunito | Material Symbols | SVG Icons |
|---------|--------|-----------------|-----------|
| **Typography** | ✅ Required | ❌ | ❌ |
| **Icons** | ❌ | ⚠️ Optional | ✅ Recommended |
| **Performance** | ⚡ Good | ⚠️ Slower | ⚡ Best |
| **Customization** | Limited | Limited | ✅ Full |
| **Bundle Size** | Font file | Font file | Tree-shakable |
| **Color Support** | N/A | Single color | Full color |

**Recommendation:**
- ✅ **Always use**: Nunito for typography
- ✅ **Prefer**: SVG icons from `@mui/icons-material`
- ⚠️ **Use only if needed**: Material Icons font for Font Icons

---

## Quick Reference

### Nunito Weights Used

| Component | Weight | Value |
|-----------|--------|-------|
| h1 | Light | 300 |
| h2, h3, h4 | Regular | 400 |
| h5, h6 | SemiBold | 600 |
| body1, body2 | Regular | 400 |
| subtitle1, subtitle2 | SemiBold | 600 |
| button | SemiBold | 600 |
| caption, overline | Regular | 400 |

### Font Loading Order

1. **Preconnect** (for performance)
2. **Nunito** (required)
3. **Material Icons** (optional, if using Font Icons)
4. **Your app CSS**

---

## See Also

- [MRS Design System Documentation](./README.md)
- [Icon Component](./ICON_COMPONENT.md)
- [Typography Component](./TYPOGRAPHY_COMPONENT.md)
- [Theme Structure](./src/theme/README.md)

---

**Last Updated**: December 22, 2025  
**Status**: Production Ready  
**Required Fonts**: Nunito (always), Material Icons (optional)

