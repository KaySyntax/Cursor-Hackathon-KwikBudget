import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { Button, Input } from '../../components';
import { useAuth } from '../../context/AuthContext';
import { colors, spacing, typography } from '../../theme';
import type { AuthScreenProps } from '../../types';

export function ForgotPasswordScreen({ navigation }: AuthScreenProps<'ForgotPassword'>) {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleReset = async () => {
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email address');
      return;
    }
    setError('');
    setLoading(true);
    const { error: resetError } = await resetPassword(email.trim());
    setLoading(false);
    if (resetError) {
      Alert.alert('Error', resetError.message);
    } else {
      Alert.alert(
        'Email Sent',
        'Check your email for a password reset link.',
        [{ text: 'OK', onPress: () => navigation.navigate('Login') }],
      );
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.form}>
          <Text style={styles.title}>Reset Password</Text>
          <Text style={styles.subtitle}>
            Enter the email address associated with your account and we'll send you a
            link to reset your password.
          </Text>

          <Input
            label="Email"
            placeholder="you@example.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            error={error}
          />

          <Button title="Send Reset Link" onPress={handleReset} loading={loading} />

          <Button
            title="Back to Sign In"
            onPress={() => navigation.navigate('Login')}
            variant="ghost"
            style={styles.backBtn}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: spacing.lg,
  },
  form: {},
  title: {
    ...typography.h2,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  subtitle: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
    lineHeight: 22,
  },
  backBtn: {
    marginTop: spacing.sm,
  },
});
