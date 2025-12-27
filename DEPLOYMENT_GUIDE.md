# MRS UI v6 - Deployment Guide

**Version**: 0.1.0
**Date**: December 27, 2024

This guide will walk you through deploying the MRS UI v6 Design System in 3 steps.

---

## Prerequisites

Before you begin, ensure you have:
- [x] npm account (create at https://www.npmjs.com/signup if needed)
- [x] GitHub account with access to madersystem/mrs-ui-v6 repository
- [ ] Vercel or Netlify account (optional, for Storybook hosting)

---

## Step 1: Publish to npm 📦

### 1.1 Login to npm

Open your terminal and run:

```bash
npm login
```

You'll be prompted for:
- **Username**: Your npm username
- **Password**: Your npm password
- **Email**: Your npm email
- **OTP** (if 2FA enabled): 6-digit code from your authenticator app

Verify login:
```bash
npm whoami
# Should display your npm username
```

### 1.2 Run Pre-publish Quality Checks

This will automatically run when you publish, but you can verify everything passes first:

```bash
# This runs: lint + type-check + test + build
npm run prepublishOnly
```

Expected output:
- ✅ ESLint: 0 warnings, 0 errors
- ✅ TypeScript: 0 errors
- ✅ Tests: 621/621 passing
- ✅ Build: Successful

### 1.3 Publish to npm

```bash
npm publish
```

**Note**: If you have 2FA enabled, you'll be prompted for an OTP code.

**Alternative with OTP**:
```bash
npm publish --otp=123456
```
(Replace `123456` with your 6-digit authenticator code)

### 1.4 Verify Publication

Visit your package page:
```
https://www.npmjs.com/package/@mrs/ui-v6
```

Test installation in a new directory:
```bash
mkdir test-install
cd test-install
npm init -y
npm install @mrs/ui-v6
```

---

## Step 2: Deploy Storybook 🎨

You have 3 options for hosting Storybook. Choose one:

### Option A: Vercel (Recommended - Easiest)

#### 2.A.1 Sign up / Login to Vercel
- Go to https://vercel.com
- Sign in with GitHub

#### 2.A.2 Import Repository
1. Click **"New Project"**
2. Click **"Import Git Repository"**
3. Search for: `madersystem/mrs-ui-v6`
4. Click **"Import"**

#### 2.A.3 Configure Project (Auto-detected)
Vercel will automatically detect the `vercel.json` configuration:
- **Framework Preset**: Other
- **Build Command**: `npm run build-storybook`
- **Output Directory**: `storybook-static`
- **Install Command**: `npm ci`

Just click **"Deploy"**!

#### 2.A.4 Result
- Your Storybook will be live at: `https://mrs-ui-v6.vercel.app` (or similar)
- Auto-deploys on every push to `main`
- Preview deployments for pull requests

---

### Option B: Netlify

#### 2.B.1 Sign up / Login to Netlify
- Go to https://netlify.com
- Sign in with GitHub

#### 2.B.2 Import Repository
1. Click **"New site from Git"**
2. Choose **GitHub**
3. Search for: `madersystem/mrs-ui-v6`
4. Click on the repository

#### 2.B.3 Configure Build Settings (Auto-detected)
Netlify will automatically detect the `netlify.toml` configuration:
- **Build command**: `npm run build-storybook`
- **Publish directory**: `storybook-static`

Just click **"Deploy site"**!

#### 2.B.4 Result
- Your Storybook will be live at: `https://mrs-ui-v6.netlify.app` (or similar)
- Auto-deploys on every push to `main`

---

### Option C: GitHub Pages

#### 2.C.1 Enable GitHub Pages
1. Go to repository: https://github.com/madersystem/mrs-ui-v6
2. Click **Settings** → **Pages**
3. Under "Source", select: **GitHub Actions**

#### 2.C.2 Trigger Deployment

The workflow is already configured (`.github/workflows/deploy-storybook.yml`).

**Option 1 - Push to main** (auto-deploys):
```bash
git push origin main
```

**Option 2 - Manual trigger**:
1. Go to **Actions** tab on GitHub
2. Click **"Deploy Storybook to GitHub Pages"**
3. Click **"Run workflow"**
4. Select branch: `main`
5. Click **"Run workflow"**

#### 2.C.3 Result
- Your Storybook will be live at: `https://madersystem.github.io/mrs-ui-v6/`
- Auto-deploys on every push to `main`

---

## Step 3: Create GitHub Release 🚀

### 3.1 Ensure Changes are Committed

```bash
# Check status
git status

# If there are uncommitted changes, commit them
git add .
git commit -m "chore: prepare v0.1.0 release"
git push origin main
```

### 3.2 Create Git Tag

```bash
# Create annotated tag
git tag -a v0.1.0 -m "Release v0.1.0 - Production-Ready Release"

# Push tag to GitHub
git push origin v0.1.0
```

### 3.3 Create GitHub Release

**Option A - Using GitHub CLI** (if installed):

```bash
gh release create v0.1.0 \
  --title "v0.1.0 - Production-Ready Release" \
  --notes-file RELEASE_NOTES_v0.1.0.md
```

**Option B - Using GitHub Web UI**:

1. Go to: https://github.com/madersystem/mrs-ui-v6/releases
2. Click **"Draft a new release"**
3. **Choose a tag**: Select `v0.1.0`
4. **Release title**: `v0.1.0 - Production-Ready Release`
5. **Description**: Copy contents from `RELEASE_NOTES_v0.1.0.md`
6. Check **"Set as the latest release"**
7. Click **"Publish release"**

### 3.4 Verify Release

Visit: https://github.com/madersystem/mrs-ui-v6/releases/tag/v0.1.0

---

## Post-Deployment Checklist

After completing all 3 steps:

### npm Package
- [ ] Visit https://www.npmjs.com/package/@mrs/ui-v6
- [ ] Verify README displays correctly
- [ ] Test installation: `npm install @mrs/ui-v6`
- [ ] Verify package size and contents

### Storybook Deployment
- [ ] Visit deployed Storybook URL
- [ ] Test all 33 components load correctly
- [ ] Verify theme works
- [ ] Test on mobile device
- [ ] Share URL with team

### GitHub Release
- [ ] Visit release page on GitHub
- [ ] Verify release notes display correctly
- [ ] Check that tag `v0.1.0` is created
- [ ] Announce release to team

---

## Update README Badges (Optional)

After deployment, you can add live badges to README.md:

### npm Badge (Already added)
```markdown
[![npm version](https://badge.fury.io/js/@mrs%2Fui-v6.svg)](https://www.npmjs.com/package/@mrs/ui-v6)
```

### Add Deployment Badge

**For Vercel**:
```markdown
[![Deployed on Vercel](https://img.shields.io/badge/deployed%20on-Vercel-black)](https://mrs-ui-v6.vercel.app)
```

**For Netlify**:
```markdown
[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-SITE-ID/deploy-status)](https://app.netlify.com/sites/mrs-ui-v6/deploys)
```

**For GitHub Pages**:
```markdown
[![GitHub Pages](https://img.shields.io/badge/docs-GitHub%20Pages-blue)](https://madersystem.github.io/mrs-ui-v6/)
```

---

## Troubleshooting

### npm Publish Fails

**Error**: `E401 Unauthorized`
- **Solution**: Run `npm login` to authenticate

**Error**: `E403 Forbidden - forbidden user`
- **Solution**: You don't have permission to publish under `@mrs` scope
- **Action**: Either:
  1. Ask the `@mrs` org owner to add you as a member
  2. Change package name in `package.json` to `@yourname/ui-v6`

**Error**: `EOTP - This operation requires a one-time password`
- **Solution**: Add `--otp=123456` to publish command (replace with your code)

**Error**: `EPUBLISHCONFLICT - cannot publish over existing version`
- **Solution**: Version 0.1.0 already exists. Bump version:
  ```bash
  npm version patch  # 0.1.0 -> 0.1.1
  # or
  npm version minor  # 0.1.0 -> 0.2.0
  ```

### Vercel/Netlify Deploy Fails

**Error**: Build fails
- **Solution**: Check build logs on platform
- **Common cause**: Missing environment variables (none needed for this project)
- **Fix**: Ensure Node version is 20 (already configured in netlify.toml)

### GitHub Pages Not Working

**Error**: 404 page after deployment
- **Solution**:
  1. Go to Settings → Pages
  2. Ensure "Source" is set to "GitHub Actions"
  3. Re-run the deployment workflow

**Error**: Workflow fails
- **Solution**:
  1. Go to Settings → Actions → General
  2. Under "Workflow permissions", select "Read and write permissions"
  3. Re-run the workflow

---

## Next Steps After Deployment

1. **Share with Team**
   - Send Storybook URL to designers/developers
   - Share npm installation instructions
   - Update internal documentation

2. **Monitor Usage**
   - Check npm download stats
   - Monitor GitHub stars/forks
   - Review issues and feedback

3. **Plan Next Release**
   - See `COMPONENT_ROADMAP.md` for Phase 2 components
   - Dialog, Snackbar, Menu, Tabs coming in v0.2.0

---

## Quick Reference

### Important URLs
- **npm Package**: https://www.npmjs.com/package/@mrs/ui-v6
- **GitHub Repo**: https://github.com/madersystem/mrs-ui-v6
- **Figma Design**: https://figma.com/design/ESNP5KunFotGObfcuXZ9Op/MRS---Material-UI-v.6.5.0

### Quick Commands
```bash
# Publish to npm
npm login
npm publish

# Create release
git tag -a v0.1.0 -m "Release v0.1.0"
git push origin v0.1.0

# Manual Storybook build
npm run build-storybook
# Output: storybook-static/
```

---

**Ready to deploy? Follow the steps above and you'll have your design system live! 🚀**

For questions or issues, refer to:
- DEPLOYMENT_SUMMARY.md
- DEPLOYMENT_READINESS.md
- README.md
