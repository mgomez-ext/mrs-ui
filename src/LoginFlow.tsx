/**
 * Login Flow Component
 * Flujo completo de autenticación usando componentes Mrs-UI Design System
 */

import React, { useState } from 'react';
import {
  Card,
  TextField,
  Button,
  Stack,
  Typography,
  Checkbox,
  Link,
  Alert,
  Box,
  FormControlLabel,
  CircularProgress,
  Container,
  Divider,
} from './components';

// ============================================================================
// 1. COMPONENTE: Login Screen (Pantalla de Inicio de Sesión)
// ============================================================================

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface LoginScreenProps {
  onNavigateToSignup?: () => void;
  onNavigateToForgotPassword?: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({
  onNavigateToSignup,
  onNavigateToForgotPassword,
}) => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresa un email válido';
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    // Simular API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);

    console.log('Login data:', formData);
    alert('¡Inicio de sesión exitoso!');
  };

  const handleInputChange = (
    field: keyof LoginFormData,
    value: unknown
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Limpiar error cuando el usuario empieza a escribir
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: '',
      }));
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ py: 8 }}>
        <Card elevation={1} sx={{ p: 4 }}>
          <Stack spacing={3}>
            {/* Header */}
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
                Iniciar Sesión
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Bienvenido de vuelta a tu cuenta
              </Typography>
            </Box>

            {/* Error Alert */}
            {Object.keys(errors).length > 0 && (
              <Alert severity="error">
                Por favor, completa correctamente los campos del formulario
              </Alert>
            )}

            {/* Email Field */}
            <TextField
              label="Email"
              placeholder="tu@email.com"
              fullWidth
              value={formData.email}
              onChange={(
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => handleInputChange('email', e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
            />

            {/* Password Field */}
            <Box>
              <TextField
                label="Contraseña"
                placeholder="••••••••"
                type={showPassword ? 'text' : 'password'}
                fullWidth
                value={formData.password}
                onChange={(
                  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => handleInputChange('password', e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
              />
              <Box sx={{ mt: 1 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={showPassword}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setShowPassword(e.target.checked)
                      }
                      size="small"
                    />
                  }
                  label="Mostrar contraseña"
                />
              </Box>
            </Box>

            {/* Remember Me & Forgot Password */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.rememberMe}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleInputChange('rememberMe', e.target.checked)
                    }
                  />
                }
                label="Recuerda mis datos"
              />
              <Link
                component="button"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  onNavigateToForgotPassword?.();
                }}
                sx={{ textDecoration: 'none', cursor: 'pointer' }}
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </Stack>

            {/* Submit Button */}
            <Button
              variant="contained"
              fullWidth
              size="large"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? (
                <CircularProgress size={16} sx={{ mr: 1 }} />
              ) : null}
              Iniciar Sesión
            </Button>

            {/* Divider */}
            <Divider />

            {/* Sign Up Link */}
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2">
                ¿No tienes cuenta?{' '}
                <Link
                  component="button"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    onNavigateToSignup?.();
                  }}
                  sx={{ textDecoration: 'none' }}
                >
                  Crear cuenta
                </Link>
              </Typography>
            </Box>
          </Stack>
        </Card>
      </Box>
    </Container>
  );
};

// ============================================================================
// 2. COMPONENTE: Sign Up Screen (Pantalla de Registro)
// ============================================================================

interface SignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

interface SignUpScreenProps {
  onNavigateToLogin?: () => void;
  onNavigateToVerification?: () => void;
}

export const SignUpScreen: React.FC<SignUpScreenProps> = ({
  onNavigateToLogin,
  onNavigateToVerification,
}) => {
  const [formData, setFormData] = useState<SignUpFormData>({
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresa un email válido';
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 8) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'Debes aceptar los términos';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);

    console.log('Sign up data:', formData);
    onNavigateToVerification?.();
  };

  const handleInputChange = (
    field: keyof SignUpFormData,
    value: unknown
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ py: 8 }}>
        <Card elevation={1} sx={{ p: 4 }}>
          <Stack spacing={3}>
            {/* Header */}
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
                Crear Cuenta
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Únete a nuestra comunidad hoy
              </Typography>
            </Box>

            {/* Error Alert */}
            {Object.keys(errors).length > 0 && (
              <Alert severity="error">
                Por favor, completa correctamente todos los campos
              </Alert>
            )}

            {/* Email Field */}
            <TextField
              label="Email"
              placeholder="tu@email.com"
              fullWidth
              type="email"
              value={formData.email}
              onChange={(
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => handleInputChange('email', e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
            />

            {/* Password Field */}
            <TextField
              label="Contraseña"
              placeholder="••••••••"
              type="password"
              fullWidth
              value={formData.password}
              onChange={(
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => handleInputChange('password', e.target.value)}
              error={!!errors.password}
              helperText={
                errors.password ||
                'Mínimo 8 caracteres con números y símbolos'
              }
            />

            {/* Confirm Password Field */}
            <TextField
              label="Confirmar Contraseña"
              placeholder="••••••••"
              type="password"
              fullWidth
              value={formData.confirmPassword}
              onChange={(
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => handleInputChange('confirmPassword', e.target.value)}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
            />

            {/* Terms Checkbox */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.agreeToTerms}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleInputChange('agreeToTerms', e.target.checked)
                  }
                  color={errors.agreeToTerms ? 'default' : 'primary'}
                />
              }
              label={
                <Typography variant="body2">
                  Acepto los{' '}
                  <Link sx={{ textDecoration: 'none' }}>
                    términos y condiciones
                  </Link>
                </Typography>
              }
            />
            {errors.agreeToTerms && (
              <Typography variant="caption" color="error">
                {errors.agreeToTerms}
              </Typography>
            )}

            {/* Submit Button */}
            <Button
              variant="contained"
              fullWidth
              size="large"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? (
                <CircularProgress size={16} sx={{ mr: 1 }} />
              ) : null}
              Crear Cuenta
            </Button>

            {/* Divider */}
            <Divider />

            {/* Login Link */}
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2">
                ¿Ya tienes cuenta?{' '}
                <Link
                  component="button"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    onNavigateToLogin?.();
                  }}
                  sx={{ textDecoration: 'none' }}
                >
                  Iniciar sesión
                </Link>
              </Typography>
            </Box>
          </Stack>
        </Card>
      </Box>
    </Container>
  );
};

// ============================================================================
// 3. COMPONENTE: Password Recovery Screen (Pantalla de Recuperación)
// ============================================================================

interface PasswordRecoveryScreenProps {
  onNavigateToLogin?: () => void;
  onNavigateToReset?: () => void;
}

export const PasswordRecoveryScreen: React.FC<PasswordRecoveryScreenProps> =
  ({ onNavigateToLogin, onNavigateToReset }) => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsLoading(false);
      setSubmitted(true);

      // Simular navegación después de 3 segundos
      setTimeout(() => {
        onNavigateToReset?.();
      }, 3000);
    };

    if (submitted) {
      return (
        <Container maxWidth="sm">
          <Box sx={{ py: 8 }}>
            <Card elevation={1} sx={{ p: 4, textAlign: 'center' }}>
              <Stack spacing={3} alignItems="center">
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    backgroundColor: '#e8f5e9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography sx={{ fontSize: 32 }}>✓</Typography>
                </Box>

                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  Email Enviado
                </Typography>

                <Typography variant="body2" color="textSecondary">
                  Hemos enviado instrucciones para recuperar tu contraseña a:
                </Typography>

                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {email}
                </Typography>

                <Typography variant="caption" color="textSecondary">
                  Por favor, revisa tu bandeja de entrada y sigue los pasos.
                  Si no recibes el email, verifica tu carpeta de spam.
                </Typography>

                <Stack spacing={2} sx={{ width: '100%', mt: 2 }}>
                  <Button variant="outlined" fullWidth onClick={onNavigateToLogin}>
                    Volver al Login
                  </Button>
                </Stack>
              </Stack>
            </Card>
          </Box>
        </Container>
      );
    }

    return (
      <Container maxWidth="sm">
        <Box sx={{ py: 8 }}>
          <Card elevation={1} sx={{ p: 4 }}>
            <Stack spacing={3}>
              {/* Header */}
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
                  Recuperar Contraseña
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Ingresa tu email para recibir instrucciones
                </Typography>
              </Box>

              {/* Email Field */}
              <TextField
                label="Email"
                placeholder="tu@email.com"
                fullWidth
                type="email"
                value={email}
                onChange={(
                  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => setEmail(e.target.value)}
              />

              {/* Submit Button */}
              <Button
                variant="contained"
                fullWidth
                size="large"
                onClick={handleSubmit}
                disabled={isLoading || !email}
              >
                {isLoading ? (
                  <CircularProgress size={16} sx={{ mr: 1 }} />
                ) : null}
                Enviar Instrucciones
              </Button>

              {/* Back Link */}
              <Box sx={{ textAlign: 'center' }}>
                <Link
                  component="button"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    onNavigateToLogin?.();
                  }}
                  sx={{ textDecoration: 'none' }}
                >
                  Volver al Login
                </Link>
              </Box>
            </Stack>
          </Card>
        </Box>
      </Container>
    );
  };

// ============================================================================
// 4. COMPONENTE: Email Verification Screen (Verificación de Email)
// ============================================================================

interface EmailVerificationScreenProps {
  email?: string;
  onNavigateToLogin?: () => void;
}

export const EmailVerificationScreen: React.FC<EmailVerificationScreenProps> =
  ({ email = 'usuario@email.com', onNavigateToLogin }) => {
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const [isLoading, setIsLoading] = useState(false);

    const handleCodeChange = (index: number, value: string) => {
      if (value.length <= 1 && /^\d*$/.test(value)) {
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        // Auto-focus next input
        if (value && index < 5) {
          const nextInput = document.getElementById(`code-${index + 1}`);
          nextInput?.focus();
        }
      }
    };

    const handleSubmit = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);

      const fullCode = code.join('');
      console.log('Verification code:', fullCode);
      alert('¡Email verificado exitosamente!');
      onNavigateToLogin?.();
    };

    const isCodeComplete = code.every((digit) => digit !== '');

    return (
      <Container maxWidth="sm">
        <Box sx={{ py: 8 }}>
          <Card elevation={1} sx={{ p: 4 }}>
            <Stack spacing={3} alignItems="center">
              {/* Header */}
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
                  Verificar Email
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Hemos enviado un código de 6 dígitos a:
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 500, mt: 1 }}>
                  {email}
                </Typography>
              </Box>

              {/* Code Input Fields */}
              <Stack direction="row" spacing={1} sx={{ my: 3 }}>
                {code.map((digit, index) => (
                  <TextField
                    key={index}
                    id={`code-${index}`}
                    inputProps={{
                      maxLength: 1,
                      style: { textAlign: 'center', fontSize: 20 },
                    }}
                    placeholder="-"
                    value={digit}
                    onChange={(
                      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                    ) => handleCodeChange(index, e.target.value)}
                    sx={{
                      width: 50,
                      '& input': {
                        textAlign: 'center',
                        fontSize: 24,
                        fontWeight: 600,
                      },
                    }}
                  />
                ))}
              </Stack>

              {/* Submit Button */}
              <Button
                variant="contained"
                fullWidth
                size="large"
                onClick={handleSubmit}
                disabled={isLoading || !isCodeComplete}
              >
                {isLoading ? (
                  <CircularProgress size={16} sx={{ mr: 1 }} />
                ) : null}
                Verificar Email
              </Button>

              {/* Resend Code */}
              <Typography variant="caption" color="textSecondary">
                ¿No recibiste el código?{' '}
                <Link
                  component="button"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    alert('Código reenviado a ' + email);
                  }}
                  sx={{ textDecoration: 'none' }}
                >
                  Reenviar código
                </Link>
              </Typography>

              {/* Back Link */}
              <Link
                component="button"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  onNavigateToLogin?.();
                }}
                sx={{ textDecoration: 'none' }}
              >
                Volver al Login
              </Link>
            </Stack>
          </Card>
        </Box>
      </Container>
    );
  };

// ============================================================================
// 5. COMPONENTE: Main Login Flow (Flujo Principal)
// ============================================================================

type LoginFlowStep =
  | 'login'
  | 'signup'
  | 'forgot-password'
  | 'verification'
  | 'reset-password';

export const LoginFlow: React.FC = () => {
  const [currentStep, setCurrentStep] =
    useState<LoginFlowStep>('login');

  const renderStep = () => {
    switch (currentStep) {
      case 'login':
        return (
          <LoginScreen
            onNavigateToSignup={() => setCurrentStep('signup')}
            onNavigateToForgotPassword={() =>
              setCurrentStep('forgot-password')
            }
          />
        );

      case 'signup':
        return (
          <SignUpScreen
            onNavigateToLogin={() => setCurrentStep('login')}
            onNavigateToVerification={() => setCurrentStep('verification')}
          />
        );

      case 'forgot-password':
        return (
          <PasswordRecoveryScreen
            onNavigateToLogin={() => setCurrentStep('login')}
            onNavigateToReset={() => setCurrentStep('reset-password')}
          />
        );

      case 'verification':
        return (
          <EmailVerificationScreen
            email="usuario@email.com"
            onNavigateToLogin={() => setCurrentStep('login')}
          />
        );

      case 'reset-password':
        return (
          <PasswordRecoveryScreen
            onNavigateToLogin={() => setCurrentStep('login')}
          />
        );

      default:
        return null;
    }
  };

  return <>{renderStep()}</>;
};

export default LoginFlow;
