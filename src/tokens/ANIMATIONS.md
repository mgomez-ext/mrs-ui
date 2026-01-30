# Animation & Transition Tokens - Implementation Guide

## Overview

The MRS Design System includes comprehensive animation and transition tokens based on Material Design Motion guidelines. These tokens ensure consistent, purposeful motion across all components.

---

## 🎯 Philosophy

**Motion should be**:

- **Purposeful**: Every animation has a clear reason
- **Quick**: Fast enough to not slow down the user
- **Consistent**: Same duration and easing for similar actions
- **Smooth**: Natural feeling with proper easing curves

---

## 📊 Token Structure

```
src/tokens/source/
├── primitives/motion.json          → Duration + Easing primitives
├── semantic/transitions.json       → Semantic transition patterns
└── component/animations.json       → Component-specific animations
```

---

## ⏱️ Duration Tokens

Duration tokens define how long animations and transitions last.

### Primitive Durations

| Token      | Value   | Use Case                                           |
| ---------- | ------- | -------------------------------------------------- |
| `instant`  | `0ms`   | Instant changes, no animation                      |
| `fast`     | `100ms` | Micro-interactions (toggles, checkboxes, switches) |
| `base`     | `200ms` | Standard transitions (buttons, chips, inputs)      |
| `moderate` | `300ms` | Medium elements (drawers, dialogs, accordions)     |
| `slow`     | `400ms` | Large content shifts (page transitions)            |
| `slower`   | `500ms` | Complex animations (multi-step processes)          |

### Usage Examples

```typescript
import { PrimitivesMotionDurationFast } from '@mgomez-ext/mrs-ui/tokens';

// TypeScript
const buttonTransition = `all ${PrimitivesMotionDurationFast} ease-in-out`;
// → "all 100ms ease-in-out"
```

```css
/* CSS Variables */
.button {
  transition: all var(--mrs-primitives-motion-duration-fast) ease-in-out;
  /* → transition: all 100ms ease-in-out; */
}
```

```scss
// SCSS Variables
.button {
  transition: all $mrs-primitives-motion-duration-fast ease-in-out;
  // → transition: all 100ms ease-in-out;
}
```

---

## 📈 Easing Tokens

Easing functions (cubic-bezier curves) control the acceleration and deceleration of animations.

### Primitive Easing Functions

| Token        | Value                          | Use Case                     | Curve                 |
| ------------ | ------------------------------ | ---------------------------- | --------------------- |
| `linear`     | `cubic-bezier(0, 0, 1, 1)`     | Constant speed (rare)        | Straight line         |
| `standard`   | `cubic-bezier(0.4, 0, 0.2, 1)` | Most common transition       | Smooth S-curve        |
| `emphasized` | `cubic-bezier(0.2, 0, 0, 1)`   | Emphasized motion            | Strong decel          |
| `decelerate` | `cubic-bezier(0, 0, 0.2, 1)`   | Elements **entering** screen | Quick start, slow end |
| `accelerate` | `cubic-bezier(0.4, 0, 1, 1)`   | Elements **leaving** screen  | Slow start, quick end |
| `sharp`      | `cubic-bezier(0.4, 0, 0.6, 1)` | Quick, focused transitions   | Sharp curve           |
| `easeIn`     | `cubic-bezier(0.4, 0, 1, 1)`   | Gradual acceleration         | Start slow            |
| `easeOut`    | `cubic-bezier(0, 0, 0.2, 1)`   | Gradual deceleration         | End slow              |
| `easeInOut`  | `cubic-bezier(0.4, 0, 0.2, 1)` | Smooth start and end         | Balanced              |

### When to Use Each Easing

#### `standard` (Most Common)

- General purpose transitions
- Button hover/focus states
- Color changes
- Small movements

#### `decelerate` (Entering)

- Modals appearing
- Drawers sliding in
- Content expanding
- **Elements coming INTO view**

#### `accelerate` (Leaving)

- Modals disappearing
- Drawers sliding out
- Content collapsing
- **Elements going OUT of view**

#### `emphasized` (Material Design)

- Important state changes
- User-triggered actions
- Primary interactions

#### `sharp` (Quick & Snappy)

- Toggle switches
- Radio buttons
- Checkboxes
- Quick feedback

### Visualization

```
Linear:      ————————————————————
Standard:    ╭────────────╮
Emphasized:  ╭─────────────╮
Decelerate:  ╮
             │
             ╰────────────────
Accelerate:  ─────────────────╮
                             │
                             ╯
Sharp:       ╭──────────╮
```

---

## 🎭 Semantic Transitions

Pre-configured transitions combining duration + easing for common patterns.

### Fade Transitions

```typescript
// Fade In
SemanticTransitionFadeIn;
// → "opacity 200ms cubic-bezier(0.4, 0, 1, 1)"

// Fade Out
SemanticTransitionFadeOut;
// → "opacity 200ms cubic-bezier(0, 0, 0.2, 1)"
```

**Use Cases**: Tooltips, overlays, subtle content changes

### Slide Transitions

```typescript
// Slide In (entering)
SemanticTransitionSlideIn;
// → "transform 300ms cubic-bezier(0, 0, 0.2, 1)"

// Slide Out (leaving)
SemanticTransitionSlideOut;
// → "transform 300ms cubic-bezier(0.4, 0, 1, 1)"
```

**Use Cases**: Drawers, side panels, notifications

### Expand Transitions

```typescript
// Expand (opening)
SemanticTransitionExpandIn;
// → "all 300ms cubic-bezier(0.4, 0, 0.2, 1)"

// Collapse (closing)
SemanticTransitionExpandOut;
// → "all 200ms cubic-bezier(0.4, 0, 0.6, 1)"
```

**Use Cases**: Accordions, collapsible sections, dropdowns

### Elevation Transitions

```typescript
SemanticTransitionElevation;
// → "box-shadow 100ms cubic-bezier(0.4, 0, 0.2, 1)"
```

**Use Cases**: Cards on hover, FABs, elevated surfaces

---

## 🎨 Component Animations

Each component has pre-configured animation tokens for consistent behavior.

### Button

```typescript
ComponentButtonTransitionDefault;
// → "all 100ms cubic-bezier(0.4, 0, 0.2, 1)"

ComponentButtonTransitionElevation;
// → "box-shadow 100ms cubic-bezier(0.4, 0, 0.2, 1)"
```

**Implementation**:

```tsx
<Button
  sx={{
    transition: ComponentButtonTransitionDefault,
    '&:hover': {
      transition: ComponentButtonTransitionElevation,
    },
  }}
/>
```

### Dialog

```typescript
ComponentDialogTransitionEnter;
// → "opacity 300ms cubic-bezier(0, 0, 0.2, 1),
//     transform 300ms cubic-bezier(0, 0, 0.2, 1)"

ComponentDialogTransitionExit;
// → "opacity 200ms cubic-bezier(0.4, 0, 1, 1),
//     transform 200ms cubic-bezier(0.4, 0, 1, 1)"
```

**Implementation**:

```tsx
<Dialog
  TransitionProps={{
    timeout: {
      enter: 300,
      exit: 200,
    },
  }}
/>
```

### Drawer

```typescript
ComponentDrawerTransitionEnter;
// → "transform 300ms cubic-bezier(0, 0, 0.2, 1)"

ComponentDrawerTransitionExit;
// → "transform 300ms cubic-bezier(0.4, 0, 1, 1)"
```

### Switch

```typescript
ComponentSwitchTransitionThumb;
// → "transform 100ms cubic-bezier(0.4, 0, 0.6, 1)"

ComponentSwitchTransitionTrack;
// → "background-color 100ms cubic-bezier(0.4, 0, 0.2, 1)"
```

**Why Different**:

- Thumb uses `sharp` easing for quick, snappy movement
- Track uses `standard` easing for smooth color change

### Skeleton (Loading Animations)

```typescript
ComponentSkeletonAnimationPulseDuration;
// → "1500ms"

ComponentSkeletonAnimationWaveDuration;
// → "1600ms"
```

**Continuous Animations**: Longer durations for loading states

### Progress

```typescript
ComponentProgressAnimationIndeterminateDuration;
// → "2000ms"

ComponentProgressAnimationCircularDuration;
// → "1400ms"
```

---

## 🔧 Integration with MUI Components

### Material-UI Transition Components

Material-UI provides transition components that work with our tokens:

#### Fade

```tsx
import Fade from '@mui/material/Fade';
import { PrimitivesMotionDurationBase } from '@/tokens';

<Fade in={show} timeout={parseInt(PrimitivesMotionDurationBase)}>
  <div>Content</div>
</Fade>;
```

#### Grow

```tsx
import Grow from '@mui/material/Grow';
import { PrimitivesMotionDurationModerate } from '@/tokens';

<Grow in={show} timeout={parseInt(PrimitivesMotionDurationModerate)}>
  <div>Content</div>
</Grow>;
```

#### Slide

```tsx
import Slide from '@mui/material/Slide';
import { ComponentDrawerTransitionEnter } from '@/tokens';

<Slide in={show} direction="right" timeout={300}>
  <div>Content</div>
</Slide>;
```

#### Collapse

```tsx
import Collapse from '@mui/material/Collapse';
import { ComponentCollapseTransitionEnter } from '@/tokens';

<Collapse in={show} timeout={300}>
  <div>Content</div>
</Collapse>;
```

### Theme Integration

Add transitions to your MUI theme:

```typescript
import { createTheme } from '@mui/material/styles';
import {
  PrimitivesMotionDurationFast,
  PrimitivesMotionDurationBase,
  PrimitivesMotionEasingStandard,
} from '@/tokens';

const theme = createTheme({
  transitions: {
    duration: {
      shortest: parseInt(PrimitivesMotionDurationFast), // 100ms
      shorter: parseInt(PrimitivesMotionDurationFast), // 100ms
      short: parseInt(PrimitivesMotionDurationBase), // 200ms
      standard: parseInt(PrimitivesMotionDurationBase), // 200ms
      complex: parseInt(PrimitivesMotionDurationModerate), // 300ms
      enteringScreen: parseInt(PrimitivesMotionDurationModerate), // 300ms
      leavingScreen: parseInt(PrimitivesMotionDurationBase), // 200ms
    },
    easing: {
      easeInOut: PrimitivesMotionEasingStandard,
      easeOut: PrimitivesMotionEasingDecelerate,
      easeIn: PrimitivesMotionEasingAccelerate,
      sharp: PrimitivesMotionEasingSharp,
    },
  },
});
```

---

## 📊 Token Reference Table

### All Duration Tokens

| Token Name                         | Value   | Common Use         |
| ---------------------------------- | ------- | ------------------ |
| `PrimitivesMotionDurationInstant`  | `0ms`   | Instant changes    |
| `PrimitivesMotionDurationFast`     | `100ms` | Toggles, switches  |
| `PrimitivesMotionDurationBase`     | `200ms` | Buttons, chips     |
| `PrimitivesMotionDurationModerate` | `300ms` | Dialogs, drawers   |
| `PrimitivesMotionDurationSlow`     | `400ms` | Page transitions   |
| `PrimitivesMotionDurationSlower`   | `500ms` | Complex animations |

### All Easing Tokens

| Token Name                         | Cubic Bezier       | Best For             |
| ---------------------------------- | ------------------ | -------------------- |
| `PrimitivesMotionEasingLinear`     | `(0, 0, 1, 1)`     | Progress bars (rare) |
| `PrimitivesMotionEasingStandard`   | `(0.4, 0, 0.2, 1)` | General transitions  |
| `PrimitivesMotionEasingEmphasized` | `(0.2, 0, 0, 1)`   | Important actions    |
| `PrimitivesMotionEasingDecelerate` | `(0, 0, 0.2, 1)`   | Entering screen      |
| `PrimitivesMotionEasingAccelerate` | `(0.4, 0, 1, 1)`   | Leaving screen       |
| `PrimitivesMotionEasingSharp`      | `(0.4, 0, 0.6, 1)` | Quick feedback       |

---

## 🎬 Best Practices

### 1. Choose the Right Duration

```typescript
// ✅ Good: Fast for micro-interactions
<Switch transition={PrimitivesMotionDurationFast} />

// ✅ Good: Moderate for larger elements
<Dialog timeout={PrimitivesMotionDurationModerate} />

// ❌ Bad: Too slow for simple button
<Button transition="all 1000ms ease" />
```

### 2. Match Easing to Direction

```typescript
// ✅ Good: Decelerate when entering
<Drawer
  open={isOpen}
  transitionDuration={{
    enter: PrimitivesMotionDurationModerate,
    exit: PrimitivesMotionDurationBase,
  }}
  sx={{
    '& .MuiDrawer-paper': {
      transition: ComponentDrawerTransitionEnter, // Uses decelerate
    },
  }}
/>

// ❌ Bad: Using accelerate for entering
```

### 3. Consistent Timing

```typescript
// ✅ Good: Consistent button transitions
const buttonStyle = {
  transition: ComponentButtonTransitionDefault, // 100ms standard
};

// ❌ Bad: Inconsistent durations
const buttonStyle = {
  transition: 'color 100ms, background 300ms, border 50ms',
};
```

### 4. Avoid Over-Animation

```typescript
// ✅ Good: Subtle, purposeful
<Chip
  onClick={handleClick}
  sx={{ transition: ComponentChipTransitionDefault }}
/>

// ❌ Bad: Too much motion
<Chip
  onClick={handleClick}
  sx={{
    transition: 'all 500ms ease',
    '&:hover': {
      transform: 'scale(1.5) rotate(10deg)',
      boxShadow: '0 10px 50px rgba(0,0,0,0.5)',
    },
  }}
/>
```

### 5. Performance Considerations

```typescript
// ✅ Good: Animate transform and opacity (GPU accelerated)
sx={{
  transition: 'transform 200ms, opacity 200ms',
}}

// ⚠️ Caution: Avoid animating layout properties
sx={{
  transition: 'width 200ms, height 200ms', // Can cause layout reflow
}}
```

---

## 🛠️ Troubleshooting

### Issue: Animation feels sluggish

**Solution**: Use faster duration

```typescript
// Before
transition: PrimitivesMotionDurationSlow; // 400ms

// After
transition: PrimitivesMotionDurationBase; // 200ms
```

### Issue: Animation feels abrupt

**Solution**: Use smoother easing

```typescript
// Before
easing: PrimitivesMotionEasingSharp;

// After
easing: PrimitivesMotionEasingStandard;
```

### Issue: Entering/exiting feels wrong

**Solution**: Match easing to direction

```typescript
// Entering: Use decelerate
transitionEnter: ComponentDialogTransitionEnter;

// Exiting: Use accelerate
transitionExit: ComponentDialogTransitionExit;
```

---

## 📚 References

- [Material Design Motion](https://m3.material.io/styles/motion/overview)
- [MUI Transitions](https://mui.com/material-ui/transitions/)
- [Cubic Bezier Generator](https://cubic-bezier.com/)
- [CSS Easing Functions](https://easings.net/)

---

## 🎯 Quick Reference

### Most Common Combinations

```typescript
// Buttons, Chips, Small Elements
duration: PrimitivesMotionDurationFast (100ms)
easing: PrimitivesMotionEasingStandard

// Dialogs, Drawers, Medium Elements
duration: PrimitivesMotionDurationModerate (300ms)
easing: PrimitivesMotionEasingDecelerate (entering)
        PrimitivesMotionEasingAccelerate (leaving)

// Page Transitions, Large Content
duration: PrimitivesMotionDurationSlow (400ms)
easing: PrimitivesMotionEasingEmphasized

// Toggles, Switches, Instant Feedback
duration: PrimitivesMotionDurationFast (100ms)
easing: PrimitivesMotionEasingSharp
```

---

**Maintained by**: MRS Design System Team  
**Last Updated**: December 2025  
**Version**: 1.0.0
