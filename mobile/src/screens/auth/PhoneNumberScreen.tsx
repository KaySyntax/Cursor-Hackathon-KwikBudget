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

function normalizeGhanaNumber(input: string): string {
  const cleaned = input.replace(/\s+/g, '').replace(/-/g, '');

  if (cleaned.startsWith('+233')) {
    return cleaned;
  }

  if (cleaned.startsWith('233')) {
    return `+${cleaned}`;
  }

  if (/^0\d{9}$/.test(cleaned)) {
    return `+233${cleaned.slice(1)}`;
  }

  return cleaned;
}

function isValidGhanaNumber(input: string): boolean {
  return /^\+233\d{9}$/.test(input);
}

export function PhoneNumberScreen({ navigation, route }: AuthScreenProps<'PhoneNumber'>) {
  const { sendPhoneOtp } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async () => {
    const normalizedPhone = normalizeGhanaNumber(phoneNumber.trim());

    if (!isValidGhanaNumber(normalizedPhone)) {
      setError('Use a valid Ghana number, e.g. +233241234567');
      return;
    }

    setError('');
    setLoading(true);

    const { error: otpError } = await sendPhoneOtp(normalizedPhone);

    setLoading(false);

    if (otpError) {
      Alert.alert('OTP Error', otpError.message);
      return;
    }

    navigation.navigate('VerifyOtp', {
      phoneNumber: normalizedPhone,
      email: route.params.email,
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <Text style={styles.badge}>PHONE VERIFICATION</Text>
          <Text style={styles.headerTitle}>Add your mobile number</Text>
          <Text style={styles.headerSubtitle}>We will send a one-time passcode via SMS.</Text>
        </View>

        <View style={styles.formCard}>
          <Text style={styles.title}>Ghana mobile number</Text>
          <Text style={styles.subtitle}>Supported format: 0241234567 or +233241234567</Text>

          <Input
            label="Phone Number"
            placeholder="+233241234567"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            error={error}
          />

          <Button title="Send OTP" onPress={handleSendOtp} loading={loading} />

          <Button
            title="Back to Login"
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
    paddingTop: spacing.xl,
    paddingBottom: spacing.xl,
  },
  header: {
    backgroundColor: colors.accent,
    borderRadius: 26,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  badge: {
    ...typography.small,
    color: colors.primary,
    letterSpacing: 1.8,
    fontWeight: '700',
    marginBottom: spacing.sm,
  },
  headerTitle: {
    ...typography.h2,
    color: colors.textInverse,
    marginBottom: spacing.xs,
  },
  headerSubtitle: {
    ...typography.body,
    color: '#D4D8D2',
  },
  formCard: {
    backgroundColor: colors.surface,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
  },
  title: {
    ...typography.h3,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  subtitle: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },
  backBtn: {
    marginTop: spacing.sm,
  },
});
