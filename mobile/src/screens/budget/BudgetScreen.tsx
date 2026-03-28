import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from '../../components';
import { colors, spacing, typography } from '../../theme';
import { CURRENCY_SYMBOL } from '../../constants/app';

export function BudgetScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Budget</Text>
      <Text style={styles.subtitle}>Track spend velocity and stay on plan in real time.</Text>

      <Card variant="elevated" style={styles.summaryCard}>
        <Text style={styles.summaryLabel}>Daily budget</Text>
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
    paddingTop: spacing.xl,
    paddingBottom: spacing.xxl,
  },
  title: {
    ...typography.h2,
    color: colors.text,
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    marginTop: spacing.xs,
    marginBottom: spacing.lg,
  },
  summaryCard: {
    backgroundColor: colors.accent,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    borderRadius: 30,
  },
  summaryLabel: {
    ...typography.small,
    color: '#C8CCC6',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  summaryAmount: {
    ...typography.amount,
    color: colors.textInverse,
    marginVertical: spacing.sm,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#2E342E',
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
    color: '#D3D8D1',
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
    borderRadius: 22,
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
