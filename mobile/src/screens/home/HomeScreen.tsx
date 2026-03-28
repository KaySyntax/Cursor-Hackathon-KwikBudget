import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from '../../components';
import { useAuth } from '../../context/AuthContext';
import { colors, spacing, typography } from '../../theme';
import { APP_NAME, CURRENCY_SYMBOL } from '../../constants/app';

export function HomeScreen() {
  const { user } = useAuth();
  const displayName = user?.user_metadata?.full_name ?? 'there';

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi, {displayName}</Text>
        <Text style={styles.subGreeting}>{APP_NAME} keeps your cash in control.</Text>
      </View>

      <Card variant="elevated" style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Available today</Text>
        <Text style={styles.balanceAmount}>{CURRENCY_SYMBOL}0.00</Text>
        <View style={styles.balanceRow}>
          <View style={styles.balanceStat}>
            <Text style={styles.statLabel}>Total Locked</Text>
            <Text style={styles.statValue}>{CURRENCY_SYMBOL}0.00</Text>
          </View>
          <View style={styles.balanceDivider} />
          <View style={styles.balanceStat}>
            <Text style={styles.statLabel}>Released Today</Text>
            <Text style={styles.statValue}>{CURRENCY_SYMBOL}0.00</Text>
          </View>
        </View>
      </Card>

      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.actionsRow}>
        <Card style={styles.actionCard}>
          <Text style={styles.actionIcon}>◆</Text>
          <Text style={styles.actionLabel}>Lock Funds</Text>
        </Card>
        <Card style={styles.actionCard}>
          <Text style={styles.actionIcon}>▮</Text>
          <Text style={styles.actionLabel}>View Budget</Text>
        </Card>
        <Card style={styles.actionCard}>
          <Text style={styles.actionIcon}>◎</Text>
          <Text style={styles.actionLabel}>History</Text>
        </Card>
      </View>

      <Text style={styles.sectionTitle}>Recent Activity</Text>
      <Card variant="outlined" style={styles.emptyCard}>
        <Text style={styles.emptyText}>No recent activity yet.</Text>
        <Text style={styles.emptySubtext}>
          Lock some funds to get started with daily budgeting!
        </Text>
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
  header: {
    marginBottom: spacing.md,
  },
  greeting: {
    ...typography.h2,
    color: colors.text,
  },
  subGreeting: {
    ...typography.caption,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  balanceCard: {
    backgroundColor: colors.accent,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    borderRadius: 30,
  },
  balanceLabel: {
    ...typography.caption,
    color: colors.primary,
    opacity: 0.8,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  balanceAmount: {
    ...typography.amount,
    color: colors.textInverse,
    marginVertical: spacing.sm,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.sm,
  },
  balanceStat: {
    flex: 1,
  },
  balanceDivider: {
    width: 1,
    height: 32,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginHorizontal: spacing.md,
  },
  statLabel: {
    ...typography.small,
    color: '#C8CCC6',
    opacity: 0.7,
  },
  statValue: {
    ...typography.bodyBold,
    color: colors.textInverse,
    marginTop: 2,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.text,
    marginBottom: spacing.md,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  actionCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
  },
  actionIcon: {
    fontSize: 24,
    color: colors.primaryDark,
    marginBottom: spacing.xs,
  },
  actionLabel: {
    ...typography.small,
    fontWeight: '600',
    color: colors.text,
  },
  emptyCard: {
    alignItems: 'center',
    paddingVertical: spacing.xl,
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
  },
});
