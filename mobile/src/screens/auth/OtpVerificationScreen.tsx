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

export function OtpVerificationScreen({ navigation, route }: AuthScreenProps<'VerifyOtp'>) {
  const { verifyPhoneOtp, sendPhoneOtp } = useAuth();
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  const handleVerify = async () => {
    const trimmedOtp = otp.trim();

    if (!/^\d{6}$/.test(trimmedOtp)) {
      setError('Enter the 6-digit OTP sent to your number');
      return;
    }

    setError('');
    setLoading(true);

    const { error: verifyError } = await verifyPhoneOtp(route.params.phoneNumber, trimmedOtp);

    setLoading(false);

    if (verifyError) {
      Alert.alert('Verification Failed', verifyError.message);
      return;
    }

    Alert.alert(
      'Phone Verified',
      'Your number has been verified successfully. You can sign in now.',
      [{ text: 'Continue', onPress: () => navigation.navigate('Login') }],
    );
  };

  const handleResend = async () => {
    setResending(true);
    const { error: resendError } = await sendPhoneOtp(route.params.phoneNumber);
    setResending(false);

    if (resendError) {
      Alert.alert('Could Not Resend OTP', resendError.message);
      return;
    }

    Alert.alert('OTP Sent', 'A new OTP has been sent to your phone.');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <Text style={styles.badge}>ENTER CODE</Text>
          <Text style={styles.headerTitle}>Verify your phone</Text>
          <Text style={styles.headerSubtitle}>{route.params.phoneNumber}</Text>
        </View>

        <View style={styles.formCard}>
          <Text style={styles.title}>One-time passcode</Text>
          <Text style={styles.subtitle}>Enter the 6-digit OTP sent via SMS.</Text>

          <Input
            label="OTP"
            placeholder="123456"
            keyboardType="number-pad"
            value={otp}
            onChangeText={setOtp}
            maxLength={6}
            error={error}
          />

          <Button title="Verify OTP" onPress={handleVerify} loading={loading} />

          <Button
            title={resending ? 'Resending...' : 'Resend OTP'}
            onPress={handleResend}
            variant="outline"
            disabled={resending}
            style={styles.resendBtn}
          />

          <Button
            title="Change Number"
            onPress={() => navigation.navigate('PhoneNumber', { email: route.params.email })}
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
  resendBtn: {
    marginTop: spacing.sm,
  },
  backBtn: {
    marginTop: spacing.xs,
  },
});
