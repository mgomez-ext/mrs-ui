# Login Flow - Documentación Completa

## Overview

Se ha creado un flujo de autenticación completo utilizando únicamente componentes del **Mrs-UI Design System**. El flujo incluye 4 pantallas principales y está completamente funcional y lista para integrar con un backend.

---

## 📋 Pantallas Incluidas

### 1. **Login Screen** - `LoginScreen`
Pantalla principal de inicio de sesión.

**Componentes utilizados:**
- `Card` - Contenedor principal
- `TextField` - Campos de email y contraseña
- `Button` - Botón de envío
- `Checkbox` - "Recuerda mis datos"
- `Link` - "¿Olvidaste tu contraseña?" y "Crear cuenta"
- `Typography` - Títulos y textos
- `Stack` - Distribución de elementos
- `FormControlLabel` - Etiqueta para checkbox
- `Alert` - Mensajes de error
- `CircularProgress` - Indicador de carga
- `Divider` - Separador visual

**Funcionalidades:**
- ✅ Validación de email (formato válido)
- ✅ Validación de contraseña (mínimo 6 caracteres)
- ✅ Toggle de visibilidad de contraseña
- ✅ Checkbox para recordar datos
- ✅ Navegación a pantalla de registro
- ✅ Navegación a recuperación de contraseña
- ✅ Simulación de envío con loading state

**Props:**
```typescript
{
  onNavigateToSignup?: () => void;      // Callback para ir a registro
  onNavigateToForgotPassword?: () => void; // Callback para ir a recuperación
}
```

---

### 2. **Sign Up Screen** - `SignUpScreen`
Pantalla de registro de nuevos usuarios.

**Componentes utilizados:**
- `Card` - Contenedor principal
- `TextField` - Campos de email, contraseña y confirmación
- `Button` - Botón de crear cuenta
- `FormControlLabel` - Checkbox de términos
- `Link` - Link a términos y condiciones / volver a login
- `Typography` - Títulos y textos
- `Stack` - Distribución
- `Alert` - Mensajes de error
- `CircularProgress` - Indicador de carga
- `Divider` - Separador visual
- `Container` - Ancho máximo

**Funcionalidades:**
- ✅ Validación de email
- ✅ Validación de contraseña (mínimo 8 caracteres)
- ✅ Validación de confirmación de contraseña
- ✅ Validación de aceptación de términos
- ✅ Navegación a verificación de email
- ✅ Navegación a login
- ✅ Simulación de registro

**Props:**
```typescript
{
  onNavigateToLogin?: () => void;          // Callback para ir a login
  onNavigateToVerification?: () => void;   // Callback para ir a verificación
}
```

---

### 3. **Password Recovery Screen** - `PasswordRecoveryScreen`
Pantalla para recuperar contraseña olvidada.

**Componentes utilizados:**
- `Card` - Contenedor principal
- `TextField` - Campo de email
- `Button` - Botón de envío
- `Link` - Volver a login
- `Typography` - Títulos y textos
- `Stack` - Distribución
- `Container` - Ancho máximo
- `Box` - Contenedor de éxito

**Funcionalidades:**
- ✅ Input de email
- ✅ Pantalla de confirmación tras envío
- ✅ Navegación automática después de envío
- ✅ Navegación a login
- ✅ Simulación de envío de email

**Props:**
```typescript
{
  onNavigateToLogin?: () => void;  // Callback para ir a login
  onNavigateToReset?: () => void;  // Callback para ir a reset de contraseña
}
```

---

### 4. **Email Verification Screen** - `EmailVerificationScreen`
Pantalla para verificar el email con código de 6 dígitos.

**Componentes utilizados:**
- `Card` - Contenedor principal
- `TextField` - Campos de código (6 campos)
- `Button` - Botón de verificación
- `Link` - Reenviar código / volver a login
- `Typography` - Títulos y textos
- `Stack` - Distribución
- `Container` - Ancho máximo
- `Box` - Contenedor decorativo

**Funcionalidades:**
- ✅ Campos de código de 6 dígitos
- ✅ Auto-focus en campo siguiente
- ✅ Validación de solo números
- ✅ Opción de reenviar código
- ✅ Navegación a login tras verificación
- ✅ Simulación de verificación

**Props:**
```typescript
{
  email?: string;                   // Email para mostrar
  onNavigateToLogin?: () => void;   // Callback para ir a login
}
```

---

### 5. **Main Flow Component** - `LoginFlow`
Componente principal que maneja toda la navegación entre pantallas.

**Funcionalidades:**
- ✅ Manejo de estados de navegación
- ✅ Transiciones entre pantallas
- ✅ Estado centralizado del flujo

---

## 🎨 Componentes Mrs-UI Utilizados

| Componente | Uso |
|-----------|-----|
| `Card` | Contenedor principal de formularios |
| `TextField` | Campos de entrada de texto |
| `Button` | Botones de acción |
| `Typography` | Títulos y textos |
| `Stack` | Distribución de elementos (flex) |
| `Container` | Ancho máximo y centrado |
| `Box` | Contenedor genérico |
| `Checkbox` | Casillas de verificación |
| `FormControlLabel` | Etiquetas para controles |
| `Link` | Enlaces navegables |
| `Divider` | Separadores visuales |
| `Alert` | Mensajes de error/éxito |
| `CircularProgress` | Indicador de carga |

---

## 📦 Instalación

El componente está en: `/Users/mader/mrs-ui/src/LoginFlow.tsx`

### Importar en tu aplicación:

```typescript
import { LoginFlow } from './LoginFlow';

export default function App() {
  return <LoginFlow />;
}
```

O importar componentes individuales:

```typescript
import { LoginScreen, SignUpScreen, PasswordRecoveryScreen, EmailVerificationScreen } from './LoginFlow';

export default function MyApp() {
  return <LoginScreen />;
}
```

---

## 🚀 Uso Básico

### Con React Router:

```typescript
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { LoginScreen, SignUpScreen, PasswordRecoveryScreen } from './LoginFlow';

export default function App() {
  const navigate = useNavigate();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <LoginScreen
              onNavigateToSignup={() => navigate('/signup')}
              onNavigateToForgotPassword={() => navigate('/forgot-password')}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUpScreen
              onNavigateToLogin={() => navigate('/login')}
              onNavigateToVerification={() => navigate('/verify')}
            />
          }
        />
        <Route
          path="/forgot-password"
          element={
            <PasswordRecoveryScreen
              onNavigateToLogin={() => navigate('/login')}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
```

### Sin React Router:

```typescript
import { LoginFlow } from './LoginFlow';

export default function App() {
  return <LoginFlow />;
}
```

---

## 🔌 Integración con Backend

Para conectar con un API real, reemplaza las simulaciones de API calls:

### LoginScreen:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!validateForm()) return;

  setIsLoading(true);
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
        rememberMe: formData.rememberMe,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      // Guardar token
      localStorage.setItem('token', data.token);
      // Redirigir a dashboard
      navigate('/dashboard');
    } else {
      setErrors({ submit: data.message });
    }
  } catch (error) {
    setErrors({ submit: 'Error al conectar con el servidor' });
  } finally {
    setIsLoading(false);
  }
};
```

### SignUpScreen:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!validateForm()) return;

  setIsLoading(true);
  try {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });

    if (response.ok) {
      onNavigateToVerification?.();
    } else {
      const data = await response.json();
      setErrors({ email: data.message });
    }
  } catch (error) {
    setErrors({ submit: 'Error al registrarse' });
  } finally {
    setIsLoading(false);
  }
};
```

---

## 🎯 Flujo de Usuario

```
Login Screen
    ├─ ✅ Iniciar sesión
    │   └─ Verificación exitosa → Dashboard
    │
    ├─ ¿Olvidaste tu contraseña?
    │   └─ Password Recovery
    │       └─ Email enviado → Volver a Login
    │
    └─ Crear cuenta
        └─ Sign Up Screen
            ├─ Validar formulario
            └─ Email Verification
                └─ Código verificado → Login

```

---

## 🎨 Personalización

### Cambiar colores:

Los colores están definidos en los componentes Mrs-UI. Puedes personalizar usando `sx` props:

```typescript
<Card elevation={1} sx={{ p: 4, backgroundColor: '#f5f5f5' }}>
  {/* Contenido */}
</Card>
```

### Cambiar textos:

Todos los textos son strings y pueden ser parametrizados:

```typescript
interface LoginScreenProps {
  title?: string;
  subtitle?: string;
  onNavigateToSignup?: () => void;
  onNavigateToForgotPassword?: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({
  title = 'Iniciar Sesión',
  subtitle = 'Bienvenido de vuelta a tu cuenta',
  ...props
}) => {
  return (
    // ...
    <Typography variant="h4">{title}</Typography>
    <Typography variant="body2">{subtitle}</Typography>
    // ...
  );
};
```

---

## 📱 Responsividad

El flujo es completamente responsivo gracias a los componentes Mrs-UI:

- `Container` adapta el ancho automáticamente
- `Stack` usa flexbox para adaptarse a dispositivos
- `TextField` y `Button` son 100% ancho en móvil
- Las tarjetas se adaptan al ancho disponible

---

## ✅ Validaciones Incluidas

| Campo | Validación |
|-------|-----------|
| Email | Formato de email válido |
| Contraseña (Login) | Mínimo 6 caracteres |
| Contraseña (Signup) | Mínimo 8 caracteres |
| Confirmación | Debe coincidir con contraseña |
| Términos | Debe estar marcado |

---

## 🔐 Seguridad

**Nota importante:** Este componente es un ejemplo de UI. Para un proyecto en producción, asegúrate de:

- ✅ Usar HTTPS para todas las conexiones
- ✅ Validar en backend (no solo en frontend)
- ✅ Usar tokens seguros (JWT con expiración)
- ✅ Implementar CSRF protection
- ✅ Hash de contraseñas en backend
- ✅ Rate limiting en endpoints de login
- ✅ Logs de intentos fallidos

---

## 📄 Licencia

Este componente es parte del Mrs-UI Design System.

---

## 🆘 Soporte

Para preguntas sobre los componentes Mrs-UI, consulta la documentación del design system.
