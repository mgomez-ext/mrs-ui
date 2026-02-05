/**
 * AuthContext
 *
 * Context provider for managing authentication state.
 * Integrates with the existing LoginFlow component.
 */

import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import type { User, AuthConfig } from '../types';

interface AuthContextValue {
  /** Current authenticated user */
  user: User | null;
  /** Whether the user is authenticated */
  isAuthenticated: boolean;
  /** Whether authentication is loading */
  isLoading: boolean;
  /** Sign in the user */
  signIn: (user: User) => Promise<void>;
  /** Sign out the user */
  signOut: () => Promise<void>;
  /** Set loading state */
  setLoading: (loading: boolean) => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export interface AuthProviderProps {
  children: React.ReactNode;
  /** Authentication configuration with custom handlers */
  authentication?: AuthConfig;
  /** Initial user (for SSR or persisted sessions) */
  initialUser?: User | null;
}

const STORAGE_KEY = 'mrs-dashboard-user';

/**
 * AuthProvider
 *
 * Provides authentication state and methods to child components.
 */
export function AuthProvider({ children, authentication, initialUser }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(() => {
    if (initialUser) return initialUser;
    // Try to restore from localStorage
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          return JSON.parse(stored) as User;
        }
      } catch {
        // Ignore parse errors
      }
    }
    return null;
  });
  const [isLoading, setLoading] = useState(false);

  const signIn = useCallback(
    async (userData: User) => {
      setLoading(true);
      try {
        // Call custom sign in handler if provided
        if (authentication?.signIn) {
          await authentication.signIn();
        }
        setUser(userData);
        // Persist to localStorage
        if (typeof window !== 'undefined') {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
        }
      } finally {
        setLoading(false);
      }
    },
    [authentication]
  );

  const signOut = useCallback(async () => {
    setLoading(true);
    try {
      // Call custom sign out handler if provided
      if (authentication?.signOut) {
        await authentication.signOut();
      }
      setUser(null);
      // Clear from localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem(STORAGE_KEY);
      }
    } finally {
      setLoading(false);
    }
  }, [authentication]);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: user !== null,
      isLoading,
      signIn,
      signOut,
      setLoading,
    }),
    [user, isLoading, signIn, signOut]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/**
 * useAuth hook
 *
 * Access authentication state and methods from AuthContext.
 */
export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthContext };
