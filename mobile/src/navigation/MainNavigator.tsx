import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home/HomeScreen';
import { BudgetScreen } from '../screens/budget/BudgetScreen';
import { WalletScreen } from '../screens/wallet/WalletScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import type { MainTabParamList } from '../types';

const Tab = createBottomTabNavigator<MainTabParamList>();

const TAB_ICONS: Record<keyof MainTabParamList, { focused: string; default: string }> = {
  Home: { focused: '🏠', default: '🏡' },
  Budget: { focused: '📊', default: '📊' },
  Wallet: { focused: '💰', default: '💰' },
  Profile: { focused: '👤', default: '👤' },
};

export function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarLabelStyle: {
          ...typography.small,
          fontWeight: '600',
          marginTop: -2,
        },
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.borderLight,
          height: 60,
          paddingBottom: 8,
          paddingTop: 6,
        },
        tabBarIcon: () => null,
        tabBarLabel: route.name,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Budget" component={BudgetScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
