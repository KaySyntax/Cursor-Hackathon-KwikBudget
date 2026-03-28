import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { Card, Button } from '../../components';
import { useAuth } from '../../context/AuthContext';
import { colors, spacing, typography } from '../../theme';

export function ProfileScreen() {
  const { user, signOut } = useAuth();
  const displayName = user?.user_metadata?.full_name ?? 'User';
  const email = user?.email ?? '';

  const handleSignOut = () => {
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Sign Out', style: 'destructive', onPress: signOut },
    ]);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Card variant="elevated" style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {displayName.charAt(0).toUpperCase()}
          </Text>
        </View>
        <Text style={styles.name}>{displayName}</Text>
        <Text style={styles.email}>{email}</Text>
      </Card>

      <Text style={styles.sectionTitle}>Settings</Text>

      <Card style={styles.menuCard}>
        <MenuItem label="Edit Profile" />
        <View style={styles.menuDivider} />
        <MenuItem label="Notification Preferences" />
        <View style={styles.menuDivider} />
        <MenuItem label="Daily Release Time" />
        <View style={styles.menuDivider} />
        <MenuItem label="Security" />
      </Card>

      <Text style={styles.sectionTitle}>Support</Text>

      <Card style={styles.menuCard}>
        <MenuItem label="Help Centre" />
        <View style={styles.menuDivider} />
        <MenuItem label="Privacy Policy" />
        <View style={styles.menuDivider} />
        <MenuItem label="Terms of Service" />
      </Card>

      <Button
        title="Sign Out"
        onPress={handleSignOut}
        variant="danger"
        style={styles.signOutBtn}
      />
    </ScrollView>
  );
}

function MenuItem({ label }: { label: string }) {
  return (
    <View style={menuStyles.item}>
      <Text style={menuStyles.label}>{label}</Text>
      <Text style={menuStyles.chevron}>›</Text>
    </View>
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
  profileCard: {
    alignItems: 'center',
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  avatarText: {
    ...typography.h1,
    color: colors.primary,
  },
  name: {
    ...typography.h3,
    color: colors.text,
  },
  email: {
    ...typography.caption,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  sectionTitle: {
    ...typography.bodyBold,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
    textTransform: 'uppercase',
    fontSize: 12,
    letterSpacing: 1,
  },
  menuCard: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    marginBottom: spacing.lg,
  },
  menuDivider: {
    height: 1,
    backgroundColor: colors.borderLight,
  },
  signOutBtn: {
    marginTop: spacing.md,
  },
});

const menuStyles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
  },
  label: {
    ...typography.body,
    color: colors.text,
  },
  chevron: {
    fontSize: 20,
    color: colors.textMuted,
  },
});
