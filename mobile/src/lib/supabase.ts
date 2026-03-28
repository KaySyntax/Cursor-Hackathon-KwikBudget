import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const resolveEnv = (keys: string[]) => {
  for (const key of keys) {
    const value = process.env[key];
    if (value && value.trim().length > 0) {
      return value.trim();
    }
  }
  return '';
};

const supabaseUrl = resolveEnv([
  'EXPO_PUBLIC_SUPABASE_URL',
  'REACT_APP_SUPABASE_URL',
]);
const supabaseAnonKey = resolveEnv([
  'EXPO_PUBLIC_SUPABASE_ANON_KEY',
  'EXPO_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY',
  'REACT_APP_SUPABASE_ANON_KEY',
  'REACT_APP_SUPABASE_PUBLISHABLE_DEFAULT_KEY',
]);
export const supabasePasswordResetRedirectUrl = resolveEnv([
  'EXPO_PUBLIC_SUPABASE_PASSWORD_RESET_REDIRECT_URL',
  'EXPO_PUBLIC_SUPABASE_REDIRECT_URL',
  'REACT_APP_SUPABASE_PASSWORD_RESET_REDIRECT_URL',
  'REACT_APP_SUPABASE_REDIRECT_URL',
]);

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

if (!isSupabaseConfigured) {
  console.warn(
    'Supabase is not configured. Set EXPO_PUBLIC_SUPABASE_URL and EXPO_PUBLIC_SUPABASE_ANON_KEY (or EXPO_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY) in your .env file.',
  );
}

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
      },
    })
  : null;
