/**
 * Ejemplos de Uso del Login Flow
 * Diferentes formas de implementar el flujo de autenticación
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import {
  LoginFlow,
  LoginScreen,
  SignUpScreen,
  PasswordRecoveryScreen,
  EmailVerificationScreen,
} from '../LoginFlow';

// ============================================================================
// EJEMPLO 1: Uso Básico - Flujo Automático Completo
// ============================================================================

export const BasicExample = () => {
  return <LoginFlow />;
};

// ============================================================================
// EJEMPLO 2: Con React Router - Navegación entre rutas
// ============================================================================

export const RouterExample = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginRouterPage />} />
        <Route path="/signup" element={<SignUpRouterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordRouterPage />} />
        <Route path="/verify" element={<VerificationRouterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const LoginRouterPage = () => {
  const navigate = useNavigate();

  return (
    <LoginScreen
      onNavigateToSignup={() => navigate('/signup')}
      onNavigateToForgotPassword={() => navigate('/forgot-password')}
    />
  );
};

const SignUpRouterPage = () => {
  const navigate = useNavigate();

  return (
    <SignUpScreen
      onNavigateToLogin={() => navigate('/')}
      onNavigateToVerification={() => navigate('/verify')}
    />
  );
};

const ForgotPasswordRouterPage = () => {
  const navigate = useNavigate();

  return (
    <PasswordRecoveryScreen
      onNavigateToLogin={() => navigate('/')}
      onNavigateToReset={() => navigate('/')}
    />
  );
};

const VerificationRouterPage = () => {
  const navigate = useNavigate();

  return (
    <EmailVerificationScreen
      email="usuario@email.com"
      onNavigateToLogin={() => navigate('/')}
    />
  );
};

// ============================================================================
// EJEMPLO 3: Con Context API - Estado global de autenticación
// ============================================================================

type AuthContextType = {
  isAuthenticated: boolean;
  user: { email: string; name: string } | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ email: string; name: string } | null>(
    null
  );

  const login = async (email: string, password: string) => {
    // Simulación de login
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setUser({ email, name: email.split('@')[0] });
    setIsAuthenticated(true);
  };

  const signup = async (email: string, password: string) => {
    // Simulación de signup
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setUser({ email, name: email.split('@')[0] });
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider');
  }
  return context;
};

export const ContextExample = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedPage />} />
          <Route path="/login" element={<LoginContextPage />} />
          <Route path="/signup" element={<SignUpContextPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

const LoginContextPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await login(email, password);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginScreen
      onNavigateToSignup={() => navigate('/signup')}
      onNavigateToForgotPassword={() => navigate('/forgot-password')}
    />
  );
};

const SignUpContextPage = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();

  return (
    <SignUpScreen
      onNavigateToLogin={() => navigate('/login')}
      onNavigateToVerification={() => {
        // Después de signup exitoso
        navigate('/');
      }}
    />
  );
};

const ProtectedPage = () => {
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Bienvenido, {user?.name}</h1>
      <p>Email: {user?.email}</p>
      <button onClick={() => { logout(); navigate('/login'); }}>
        Logout
      </button>
    </div>
  );
};

// ============================================================================
// EJEMPLO 4: Personalizados - Componentes extendidos
// ============================================================================

interface CustomLoginScreenProps {
  theme?: 'light' | 'dark';
  companyLogo?: string;
}

export const CustomLoginScreen: React.FC<CustomLoginScreenProps> = ({
  theme = 'light',
  companyLogo,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        backgroundColor: theme === 'dark' ? '#1a1a1a' : '#ffffff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {companyLogo && (
        <img
          src={companyLogo}
          alt="Company Logo"
          style={{ marginBottom: '40px', maxWidth: '150px' }}
        />
      )}

      <LoginScreen
        onNavigateToSignup={() => setIsOpen(true)}
        onNavigateToForgotPassword={() => console.log('Forgot password')}
      />

      {isOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
          <SignUpScreen
            onNavigateToLogin={() => setIsOpen(false)}
            onNavigateToVerification={() => setIsOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

// ============================================================================
// EJEMPLO 5: Con Validación de Backend
// ============================================================================

interface BackendErrorResponse {
  message: string;
  field?: string;
  code?: string;
}

export const BackendValidationExample = () => {
  const [currentScreen, setCurrentScreen] = useState<
    'login' | 'signup' | 'forgot'
  >('login');
  const [backendError, setBackendError] = useState<string>('');

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const error: BackendErrorResponse = await response.json();
        setBackendError(error.message);
        return;
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      window.location.href = '/dashboard';
    } catch (error) {
      setBackendError('Error al conectar con el servidor');
    }
  };

  const handleSignUp = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const error: BackendErrorResponse = await response.json();
        setBackendError(error.message);
        return;
      }

      setCurrentScreen('forgot');
    } catch (error) {
      setBackendError('Error al registrarse');
    }
  };

  return (
    <>
      {currentScreen === 'login' && (
        <LoginScreen
          onNavigateToSignup={() => {
            setBackendError('');
            setCurrentScreen('signup');
          }}
          onNavigateToForgotPassword={() => {
            setBackendError('');
            setCurrentScreen('forgot');
          }}
        />
      )}

      {currentScreen === 'signup' && (
        <SignUpScreen
          onNavigateToLogin={() => {
            setBackendError('');
            setCurrentScreen('login');
          }}
          onNavigateToVerification={() => setCurrentScreen('login')}
        />
      )}

      {currentScreen === 'forgot' && (
        <PasswordRecoveryScreen
          onNavigateToLogin={() => {
            setBackendError('');
            setCurrentScreen('login');
          }}
        />
      )}

      {backendError && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            backgroundColor: '#f44336',
            color: 'white',
            padding: '16px',
            borderRadius: '4px',
          }}
        >
          {backendError}
        </div>
      )}
    </>
  );
};

// ============================================================================
// EJEMPLO 6: Minimal - Solo componente de login
// ============================================================================

export const MinimalExample = () => {
  return (
    <LoginScreen
      onNavigateToSignup={() => console.log('Ir a signup')}
      onNavigateToForgotPassword={() => console.log('Ir a recuperación')}
    />
  );
};

// ============================================================================
// Exports por defecto
// ============================================================================

export default BasicExample;
