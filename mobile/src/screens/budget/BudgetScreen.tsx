import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from '../../components';
import { colors, spacing, typography } from '../../theme';
import { CURRENCY_SYMBOL } from '../../constants/app';

export function BudgetScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Budget</Text>
      <Text style={styles.subtitle}>Track and manage your daily spending</Text>

      <Card variant="elevated" style={styles.summaryCard}>
        <Text style={styles.summaryLabel}>Daily Budget</Text>
        <Text style={styles.summaryAmount}>{CURRENCY_SYMBOL}0.00</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: '0%' }]} />
        </View>
        <Text style={styles.progressText}>
          {CURRENCY_SYMBOL}0.00 of {CURRENCY_SYMBOL}0.00 spent today
        </Text>
      </Card>

      <Text style={styles.sectionTitle}>Spending Categories</Text>
      <Card variant="outlined" style={styles.emptyCard}>
        <Text style={styles.emptyText}>No categories set up yet</Text>
        <Button
          title="Set Up Budget"
          onPress={() => {}}
          variant="secondary"
          style={styles.setupBtn}
        />
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  title: {
    ...typography.h2,
    color: colors.text,
  },
  subtitle: {
    ...typography.caption,
    color: colors.textSecondary,
    marginTop: spacing.xs,
    marginBottom: spacing.lg,
  },
  summaryCard: {
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  summaryLabel: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  summaryAmount: {
    ...typography.amount,
    color: colors.primary,
    marginVertical: spacing.sm,
  },
  progressBar: {
    height: 8,
    backgroundColor: colors.borderLight,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
  progressText: {
    ...typography.small,
    color: colors.textMuted,
    marginTop: spacing.sm,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.text,
    marginBottom: spacing.md,
  },
  emptyCard: {
    alignItems: 'center',
    paddingVertical: spacing.xl,
  },
  emptyText: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  setupBtn: {
    paddingHorizontal: spacing.xl,
  },
});
