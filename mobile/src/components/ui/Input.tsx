import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import { colors } from '../../theme/colors';
import { spacing, radius } from '../../theme/spacing';
import { typography } from '../../theme/typography';

type InputProps = TextInputProps & {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
  isPassword?: boolean;
};

export function Input({
  label,
  error,
  containerStyle,
  isPassword,
  style,
  ...rest
}: InputProps) {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.inputWrapper,
          focused && styles.inputFocused,
          error && styles.inputError,
        ]}
      >
        <TextInput
          style={[styles.input, style]}
          placeholderTextColor={colors.textMuted}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          secureTextEntry={isPassword && !showPassword}
          autoCapitalize="none"
          {...rest}
        />
        {isPassword && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeButton}
          >
            <Text style={styles.eyeText}>{showPassword ? 'Hide' : 'Show'}</Text>
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  label: {
    ...typography.caption,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    height: 52,
  },
  inputFocused: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryLight,
  },
  inputError: {
    borderColor: colors.danger,
  },
  input: {
    flex: 1,
    ...typography.body,
    color: colors.text,
    height: '100%',
  },
  eyeButton: {
    paddingLeft: spacing.sm,
  },
  eyeText: {
    ...typography.caption,
    color: colors.primary,
    fontWeight: '600',
  },
  error: {
    ...typography.small,
    color: colors.danger,
    marginTop: spacing.xs,
  },
});
