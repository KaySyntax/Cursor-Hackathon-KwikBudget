import React, { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import {
  isSupabaseConfigured,
  supabase,
  supabasePasswordResetRedirectUrl,
} from '../lib/supabase';

type AuthState = {
  session: Session | null;
  user: User | null;
  isLoading: boolean;
  signUp: (
    email: string,
    password: string,
    fullName: string
  ) => Promise<{ error: Error | null; requiresEmailConfirmation: boolean }>;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: Error | null }>;
  sendPhoneOtp: (phone: string) => Promise<{ error: Error | null }>;
  verifyPhoneOtp: (phone: string, token: string) => Promise<{ error: Error | null }>;
};

const AuthContext = createContext<AuthState | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getMissingConfigError = () => ({
    error: new Error(
      'Supabase is not configured. Add EXPO_PUBLIC_SUPABASE_URL and EXPO_PUBLIC_SUPABASE_ANON_KEY (or EXPO_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY) to your .env file.',
    ),
  });

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      setIsLoading(false);
      return;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      },
    );

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, fullName: string) => {
    if (!isSupabaseConfigured || !supabase) {
      return { ...getMissingConfigError(), requiresEmailConfirmation: false };
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
      },
    });
    return {
      error: error as Error | null,
      requiresEmailConfirmation: Boolean(data.user && !data.session),
    };
  };

  const signIn = async (email: string, password: string) => {
    if (!isSupabaseConfigured || !supabase) {
      return getMissingConfigError();
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { error: error as Error | null };
  };

  const signOut = async () => {
    if (!isSupabaseConfigured || !supabase) {
      return;
    }

    await supabase.auth.signOut();
  };

  const resetPassword = async (email: string) => {
    if (!isSupabaseConfigured || !supabase) {
      return getMissingConfigError();
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: supabasePasswordResetRedirectUrl || undefined,
    });
    return { error: error as Error | null };
  };

  const sendPhoneOtp = async (phone: string) => {
    if (!isSupabaseConfigured || !supabase) {
      return getMissingConfigError();
    }

    const { error } = await supabase.auth.signInWithOtp({
      phone,
    });

    return { error: error as Error | null };
  };

  const verifyPhoneOtp = async (phone: string, token: string) => {
    if (!isSupabaseConfigured || !supabase) {
      return getMissingConfigError();
    }

    const { error } = await supabase.auth.verifyOtp({
      phone,
      token,
      type: 'sms',
    });

    return { error: error as Error | null };
  };

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        isLoading,
        signUp,
        signIn,
        signOut,
        resetPassword,
        sendPhoneOtp,
        verifyPhoneOtp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
