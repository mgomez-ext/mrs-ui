# Micro-Interactions Library

Complete library of animation hooks and visual effect components for creating engaging user experiences.

---

## 📚 Table of Contents

1. [Overview](#overview)
2. [Animation Hooks](#animation-hooks)
3. [Effect Components](#effect-components)
4. [Usage Examples](#usage-examples)
5. [Best Practices](#best-practices)

---

## 🎯 Overview

Micro-interactions are small, subtle animations that provide feedback, guide users, and add delight to the user experience.

### Philosophy

**Good micro-interactions should be**:

- **Fast**: Complete in 100-300ms
- **Purposeful**: Every animation has a clear reason
- **Subtle**: Enhance, don't distract
- **Consistent**: Use design tokens for timing

---

## 🎨 Animation Hooks

### `useRipple`

Material Design ripple effect on click.

```typescript
import { useRipple } from '@mgomez-ext/mrs-ui/hooks/animations';

const MyButton = () => {
  const { ripples, createRipple } = useRipple();

  return (
    <button onClick={createRipple}>
      {ripples.map(ripple => (
        <span key={ripple.id} className="ripple" />
      ))}
      Click me
    </button>
  );
};
```

**Use Cases**:

- Button clicks
- Card taps
- Interactive elements
- Touch feedback

---

### `usePulse`

Continuous pulsing animation for attention-grabbing elements.

```typescript
import { usePulse } from '@mgomez-ext/mrs-ui/hooks/animations';

const NotificationIcon = () => {
  const pulseRef = usePulse<HTMLDivElement>({
    duration: 1000,  // 1 second cycle
    scale: 1.05,     // 5% scale increase
    enabled: true,   // Can be toggled
  });

  return <div ref={pulseRef}>🔔</div>;
};
```

**Use Cases**:

- Notification indicators
- Call-to-action buttons
- Unread badges
- "New" labels

**Options**:

- `duration`: Animation cycle duration (ms)
- `scale`: Scale factor (1.0 = no scale)
- `enabled`: Toggle animation on/off

---

### `useShake`

Shake animation for errors and invalid inputs.

```typescript
import { useShake } from '@mgomez-ext/mrs-ui/hooks/animations';

const LoginForm = () => {
  const { ref, shake } = useShake<HTMLDivElement>({
    duration: 200,  // Fast shake
    distance: 10,   // 10px movement
  });

  const handleSubmit = () => {
    if (isInvalid) {
      shake(); // Trigger shake animation
    }
  };

  return (
    <div ref={ref}>
      <input />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
```

**Use Cases**:

- Form validation errors
- Invalid password attempts
- Incorrect inputs
- Failed actions

**Options**:

- `duration`: Shake duration (default: 200ms)
- `distance`: Shake distance in pixels (default: 10px)

---

### `useBounce`

Playful bounce effect for success actions.

```typescript
import { useBounce } from '@mgomez-ext/mrs-ui/hooks/animations';

const LikeButton = () => {
  const { ref, bounce } = useBounce<HTMLButtonElement>({
    duration: 300,
    scale: 1.2,
  });

  const handleLike = () => {
    bounce(); // Trigger bounce
    // ... handle like action
  };

  return (
    <button ref={ref} onClick={handleLike}>
      ❤️ Like
    </button>
  );
};
```

**Use Cases**:

- Like/favorite actions
- Success confirmations
- Achievement unlocks
- Positive feedback

**Options**:

- `duration`: Bounce duration (default: 300ms)
- `scale`: Peak scale factor (default: 1.2)

---

### `useHoverScale`

Smooth scale transition on hover.

```typescript
import { useHoverScale } from '@mgomez-ext/mrs-ui/hooks/animations';

const ProductCard = () => {
  const { isHovered, onMouseEnter, onMouseLeave, style } = useHoverScale({
    scale: 1.05,
  });

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={style}
    >
      <h3>Product {isHovered && '👉'}</h3>
    </div>
  );
};
```

**Use Cases**:

- Card hover effects
- Image galleries
- Product listings
- Interactive previews

**Options**:

- `scale`: Scale factor on hover (default: 1.05)
- `duration`: Transition duration (from tokens)
- `easing`: Easing function (from tokens)

**Returns**:

- `isHovered`: Boolean hover state
- `onMouseEnter`: Mouse enter handler
- `onMouseLeave`: Mouse leave handler
- `style`: Inline styles with transition

---

## 🎭 Effect Components

### `RippleButton`

Enhanced button with custom ripple effect.

```typescript
import { RippleButton } from '@mrs-uisystem/ui-v6/components/effects';

<RippleButton variant="contained" color="primary">
  Click for Ripple
</RippleButton>
```

**Props**: Extends `ButtonProps` from Material-UI

**Additional Props**:

- `disableRipple`: Disable ripple effect (default: false)

---

### `AnimatedBadge`

Badge with entrance animations.

```typescript
import { AnimatedBadge } from '@mrs-uisystem/ui-v6/components/effects';

<AnimatedBadge
  badgeContent={count}
  color="error"
  animationVariant="bounce"
>
  <MailIcon />
</AnimatedBadge>
```

**Props**: Extends `BadgeProps` from Material-UI

**Additional Props**:

- `animationVariant`: `'bounce' | 'pulse' | 'none'` (default: 'bounce')
- `animateOnChange`: Animate when count changes (default: true)

**Variants**:

- **bounce**: One-time bounce when badge appears/changes
- **pulse**: Continuous pulsing animation
- **none**: No animation

---

### `LoadingDots`

Three-dot loading animation.

```typescript
import { LoadingDots } from '@mrs-uisystem/ui-v6/components/effects';

<LoadingDots color="primary" size="medium" />
```

**Props**:

- `color`: `'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'`
- `size`: `'small' | 'medium' | 'large'`

---

## 💡 Usage Examples

### Form Validation with Shake

```typescript
const SignupForm = () => {
  const { ref, shake } = useShake<HTMLFormElement>();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) {
      shake(); // Visual feedback for invalid email
      return;
    }
    // Submit form
  };

  return (
    <form ref={ref} onSubmit={handleSubmit}>
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit">Sign Up</Button>
    </form>
  );
};
```

---

### Interactive Card Grid

```typescript
const ProductGrid = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {products.map(product => {
        const hover = useHoverScale({ scale: 1.08 });
        return (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card
              onMouseEnter={hover.onMouseEnter}
              onMouseLeave={hover.onMouseLeave}
              style={hover.style}
            >
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography>${product.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
```

---

### Notification Badge

```typescript
const NotificationButton = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1); // Badge will bounce on change
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatedBadge
      badgeContent={count}
      color="error"
      animationVariant="pulse"
    >
      <IconButton>
        <NotificationsIcon />
      </IconButton>
    </AnimatedBadge>
  );
};
```

---

### Success Confirmation

```typescript
const SaveButton = () => {
  const { ref, bounce } = useBounce<HTMLButtonElement>();
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    await saveData();
    setLoading(false);
    setSaved(true);
    bounce(); // Celebrate success!
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <Button
      ref={ref}
      onClick={handleSave}
      disabled={loading}
      startIcon={saved ? <CheckIcon /> : <SaveIcon />}
      color={saved ? 'success' : 'primary'}
    >
      {loading ? <LoadingDots size="small" /> : saved ? 'Saved!' : 'Save'}
    </Button>
  );
};
```

---

## 🎬 Best Practices

### 1. **Keep It Fast**

```typescript
// ✅ Good: Fast micro-interactions
const { bounce } = useBounce({ duration: 300 });

// ❌ Bad: Too slow
const { bounce } = useBounce({ duration: 1000 });
```

---

### 2. **Be Purposeful**

```typescript
// ✅ Good: Clear purpose (error feedback)
const { shake } = useShake();
if (error) shake();

// ❌ Bad: Animation for no reason
useEffect(() => {
  bounce(); // Why bounce on mount?
}, []);
```

---

### 3. **Respect User Preferences**

```typescript
// ✅ Good: Respect prefers-reduced-motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const pulseRef = usePulse({
  enabled: !prefersReducedMotion,
});
```

---

### 4. **Don't Overuse**

```typescript
// ✅ Good: Single attention-grabbing element
<AnimatedBadge badgeContent={5} animationVariant="pulse">
  <NotificationsIcon />
</AnimatedBadge>

// ❌ Bad: Everything pulsing
<div style={{ animation: 'pulse infinite' }}>
  <AnimatedBadge animationVariant="pulse">...</AnimatedBadge>
  <AnimatedBadge animationVariant="pulse">...</AnimatedBadge>
  <AnimatedBadge animationVariant="pulse">...</AnimatedBadge>
</div>
```

---

### 5. **Combine Thoughtfully**

```typescript
// ✅ Good: Related animations
const { ref, shake } = useShake();
const { bounce } = useBounce();

if (error) shake();
else if (success) bounce();

// ❌ Bad: Conflicting animations
const handleClick = () => {
  shake();
  bounce();
  pulse();
  // Too much at once!
};
```

---

## 🚀 Performance Tips

### 1. Use CSS Animations When Possible

Hooks like `usePulse` use Web Animations API for better performance than inline styles.

### 2. Cleanup Animations

All hooks properly clean up animations on unmount.

### 3. Avoid Layout Thrashing

```typescript
// ✅ Good: Animate transform (GPU accelerated)
style={{ transform: `scale(${scale})` }}

// ⚠️ Caution: Animate width/height (causes reflow)
style={{ width: isHovered ? '200px' : '100px' }}
```

---

## 📦 Import Paths

```typescript
// Hooks
import {
  useRipple,
  usePulse,
  useShake,
  useBounce,
  useHoverScale,
} from '@mrs-uisystem/ui-v6/hooks/animations';

// Components
import { RippleButton, AnimatedBadge, LoadingDots } from '@mrs-uisystem/ui-v6/components/effects';
```

---

**Maintained by**: MRS Design System Team  
**Last Updated**: December 2025  
**Version**: 1.0.0
