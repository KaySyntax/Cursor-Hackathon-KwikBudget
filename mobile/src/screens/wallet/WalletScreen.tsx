import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from '../../components';
import { colors, spacing, typography } from '../../theme';
import { CURRENCY_SYMBOL } from '../../constants/app';

export function WalletScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Wallet</Text>
      <Text style={styles.subtitle}>Move money with guardrails that keep you on budget.</Text>

      <Card variant="elevated" style={styles.lockCard}>
        <Text style={styles.cardTag}>TOTAL CASH</Text>
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
  lockCard: {
    backgroundColor: colors.accent,
    padding: spacing.lg,
    marginBottom: spacing.md,
    borderRadius: 30,
  },
  cardTag: {
    ...typography.small,
    color: colors.primary,
    letterSpacing: 1,
    textTransform: 'uppercase',
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
    backgroundColor: 'rgba(255,255,255,0.25)',
  },
  lockLabel: {
    ...typography.caption,
    color: '#D3D8D1',
  },
  lockAmount: {
    ...typography.h2,
    color: colors.textInverse,
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
    marginTop: spacing.sm,
  },
  emptyCard: {
    alignItems: 'center',
    paddingVertical: spacing.xl,
    marginBottom: spacing.lg,
    borderRadius: 22,
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
