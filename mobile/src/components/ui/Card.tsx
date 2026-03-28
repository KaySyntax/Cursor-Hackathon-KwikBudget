import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing, radius } from '../../theme/spacing';

type CardProps = {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: 'default' | 'elevated' | 'outlined';
};

export function Card({ children, style, variant = 'default' }: CardProps) {
  return (
    <View style={[styles.base, variantStyles[variant], style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: radius.lg,
    padding: spacing.md,
    backgroundColor: colors.surface,
  },
});

const variantStyles: Record<string, ViewStyle> = {
  default: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  elevated: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },
  outlined: {
    borderWidth: 1,
    borderColor: colors.border,
  },
};
