# Contributing to MRS Design System

Thank you for your interest in contributing to the MRS Design System! This document provides guidelines and instructions for contributing.

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher
- Git

### Setup Development Environment

1. Clone the repository:
```bash
git clone <repository-url>
cd mrs-ui
```

2. Install dependencies:
```bash
npm install
```

3. Start Storybook:
```bash
npm run dev
```

4. Open [http://localhost:6006](http://localhost:6006) to view components

## 📋 Development Workflow

### 1. Create a Branch

```bash
git checkout -b feature/component-name
# or
git checkout -b fix/issue-description
```

Branch naming conventions:
- `feature/` - New components or features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Test additions or updates

### 2. Develop Your Component

Follow the component structure:

```
src/components/atoms/ComponentName/
├── ComponentName.tsx         # Implementation
├── ComponentName.types.ts    # TypeScript types
├── ComponentName.stories.tsx # Storybook stories
├── ComponentName.test.tsx    # Tests
└── index.ts                  # Exports
```

### 3. Component Checklist

Before submitting, ensure your component has:

- [ ] **Implementation** - Component code using theme tokens
- [ ] **Types** - TypeScript interfaces and types
- [ ] **Stories** - Storybook stories for all variants
- [ ] **Tests** - Unit tests with good coverage
- [ ] **Documentation** - JSDoc comments
- [ ] **Accessibility** - ARIA attributes and keyboard navigation
- [ ] **Theme Integration** - Uses theme tokens (no hardcoded values)

### 4. Code Quality

Run these commands before committing:

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Format code
npm run format

# Run tests
npm test

# Build verification
npm run build
```

### 5. Commit Your Changes

Follow conventional commits:

```bash
git commit -m "feat: add new Button component"
git commit -m "fix: correct Button hover state"
git commit -m "docs: update Button documentation"
```

Commit types:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `test:` - Test additions or updates
- `chore:` - Build process or auxiliary tool changes

### 6. Push and Create Pull Request

```bash
git push origin feature/component-name
```

Then create a Pull Request on GitHub.

## 🎨 Component Guidelines

### Using Theme Tokens

Always use theme tokens instead of hardcoded values:

```tsx
// ✅ Good
const theme = useTheme();
<Box sx={{ color: theme.palette.primary.main }} />

// ❌ Bad
<Box sx={{ color: '#00686f' }} />
```

### Component Structure

```tsx
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { ComponentProps } from './Component.types';

/**
 * Component description
 * 
 * @figma Link to Figma design
 * @see Link to MUI docs if applicable
 */
export const Component = React.forwardRef<HTMLElement, ComponentProps>(
  ({ children, sx, ...props }, ref) => {
    const theme = useTheme();

    return (
      <div ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

Component.displayName = 'Component';
```

### TypeScript Types

```tsx
import { HTMLAttributes } from 'react';

/**
 * Component props
 */
export interface ComponentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Variant of the component
   */
  variant?: 'primary' | 'secondary';
  
  /**
   * Size of the component
   */
  size?: 'small' | 'medium' | 'large';
}
```

### Storybook Stories

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Component } from './Component';

const meta: Meta<typeof Component> = {
  title: 'Atoms/Component',
  component: Component,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    variant: 'primary',
    children: 'Component',
  },
};
```

### Tests

```tsx
import { renderWithTheme, screen } from '../../../../tests/test-utils';
import { Component } from './Component';

describe('Component', () => {
  it('renders component', () => {
    renderWithTheme(<Component>Test</Component>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('applies variant styles', () => {
    renderWithTheme(<Component variant="primary">Test</Component>);
    // Add assertions
  });
});
```

## 🧪 Testing Guidelines

### Writing Tests

- Test component rendering
- Test all variants and states
- Test user interactions
- Test accessibility
- Aim for >80% code coverage

### Running Tests

```bash
# Run all tests
npm test

# Watch mode
npm run test:watch

# With coverage
npm test -- --coverage
```

## 📚 Documentation

### JSDoc Comments

Add comprehensive JSDoc comments:

```tsx
/**
 * Button component for primary actions
 * 
 * @example
 * ```tsx
 * <Button variant="contained" color="primary">
 *   Click me
 * </Button>
 * ```
 * 
 * @param props - Button component props
 * @returns Button element
 */
```

### Storybook Documentation

Use Storybook's autodocs feature:

```tsx
const meta: Meta<typeof Component> = {
  title: 'Atoms/Component',
  component: Component,
  tags: ['autodocs'], // Enables automatic documentation
  parameters: {
    docs: {
      description: {
        component: 'Detailed component description here',
      },
    },
  },
};
```

## 🎯 Design Token Usage

### Color Tokens

```tsx
theme.palette.primary.main
theme.palette.secondary.main
theme.palette.error.main
theme.palette._components.alert.error.filled.background
```

### Typography Tokens

```tsx
theme.typography.h1
theme.typography.body1
theme.typography.fontWeightSemiBold
```

### Spacing Tokens

```tsx
theme.spacing(1) // 8px
theme.spacing(2) // 16px
theme.spacing(3) // 24px
```

### Shape Tokens

```tsx
theme.shape.sm // 4px
theme.shape.md // 8px
theme.shape.rounded // 9999px
```

## 🔍 Code Review Process

### What Reviewers Look For

1. **Code Quality**
   - Clean, readable code
   - Proper TypeScript types
   - No hardcoded values

2. **Testing**
   - Adequate test coverage
   - Tests pass locally

3. **Documentation**
   - JSDoc comments
   - Storybook stories
   - Updated README if needed

4. **Design System Consistency**
   - Uses theme tokens
   - Follows naming conventions
   - Matches Figma designs

5. **Accessibility**
   - ARIA attributes
   - Keyboard navigation
   - Screen reader support

## 🐛 Bug Reports

### Before Submitting

- Check if the bug has already been reported
- Verify the bug exists in the latest version
- Collect information about your environment

### Bug Report Template

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
 - OS: [e.g. macOS]
 - Browser: [e.g. Chrome 120]
 - Version: [e.g. 0.1.0]
```

## 💡 Feature Requests

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
A clear description of the problem.

**Describe the solution you'd like**
A clear description of what you want to happen.

**Describe alternatives you've considered**
Alternative solutions or features you've considered.

**Additional context**
Any other context or screenshots.
```

## 📦 Publishing (Maintainers Only)

### Pre-publish Checklist

- [ ] All tests pass
- [ ] TypeScript compiles
- [ ] Build succeeds
- [ ] CHANGELOG updated
- [ ] Version bumped

### Publishing Commands

```bash
# Patch release (0.1.0 → 0.1.1)
npm run publish:patch

# Minor release (0.1.0 → 0.2.0)
npm run publish:minor

# Major release (0.1.0 → 1.0.0)
npm run publish:major
```

## 📞 Getting Help

- Open an issue for bugs or feature requests
- Contact the MRS Design System Team
- Check existing documentation and Storybook

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to the MRS Design System! 🎉

