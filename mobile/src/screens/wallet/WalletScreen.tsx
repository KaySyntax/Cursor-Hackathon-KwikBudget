import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from '../../components';
import { colors, spacing, typography } from '../../theme';
import { CURRENCY_SYMBOL } from '../../constants/app';

export function WalletScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Wallet</Text>
      <Text style={styles.subtitle}>Lock funds and manage daily releases</Text>

      <Card variant="elevated" style={styles.lockCard}>
        <View style={styles.lockRow}>
          <View style={styles.lockStat}>
            <Text style={styles.lockLabel}>Locked</Text>
            <Text style={styles.lockAmount}>{CURRENCY_SYMBOL}0.00</Text>
          </View>
          <View style={styles.lockDivider} />
          <View style={styles.lockStat}>
            <Text style={styles.lockLabel}>Available</Text>
            <Text style={[styles.lockAmount, { color: colors.success }]}>
              {CURRENCY_SYMBOL}0.00
            </Text>
          </View>
        </View>
      </Card>

      <View style={styles.actionsRow}>
        <Button
          title="Lock Funds"
          onPress={() => {}}
          style={styles.actionBtn}
        />
        <Button
          title="Withdraw"
          onPress={() => {}}
          variant="outline"
          style={styles.actionBtn}
        />
      </View>

      <Text style={styles.sectionTitle}>Release Schedule</Text>
      <Card variant="outlined" style={styles.emptyCard}>
        <Text style={styles.emptyText}>No locked funds</Text>
        <Text style={styles.emptySubtext}>
          Lock some money and we'll release a portion to you every day
        </Text>
      </Card>

      <Text style={styles.sectionTitle}>Transaction History</Text>
      <Card variant="outlined" style={styles.emptyCard}>
        <Text style={styles.emptyText}>No transactions yet</Text>
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
  lockCard: {
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  lockRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lockStat: {
    flex: 1,
    alignItems: 'center',
  },
  lockDivider: {
    width: 1,
    height: 40,
    backgroundColor: colors.border,
  },
  lockLabel: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  lockAmount: {
    ...typography.h2,
    color: colors.text,
    marginTop: spacing.xs,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  actionBtn: {
    flex: 1,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.text,
    marginBottom: spacing.md,
  },
  emptyCard: {
    alignItems: 'center',
    paddingVertical: spacing.xl,
    marginBottom: spacing.lg,
  },
  emptyText: {
    ...typography.body,
    color: colors.textSecondary,
  },
  emptySubtext: {
    ...typography.small,
    color: colors.textMuted,
    marginTop: spacing.xs,
    textAlign: 'center',
    paddingHorizontal: spacing.lg,
  },
});
