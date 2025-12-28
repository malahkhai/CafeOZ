import { Colors } from '@/constants/Colors';
import { Tabs } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import React from 'react';
import { useColorScheme } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: '#8E8E93',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colorScheme === 'dark' ? '#181610' : '#FFFFFF',
          borderTopWidth: 0,
          elevation: 0,
          height: 88,
          paddingBottom: 30,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '500',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Events',
          tabBarIcon: ({ color, focused }) => (
            <SymbolView
              name={focused ? "calendar.badge.plus" : "calendar"}
              size={24}
              tintColor={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="locations"
        options={{
          title: 'Locations',
          tabBarIcon: ({ color, focused }) => (
            <SymbolView
              name={focused ? "mappin.circle.fill" : "mappin.circle"}
              size={24}
              tintColor={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          tabBarIcon: ({ color, focused }) => (
            <SymbolView
              name={focused ? "fork.knife" : "fork.knife"}
              size={24}
              tintColor={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="club"
        options={{
          title: 'Club',
          tabBarIcon: ({ color, focused }) => (
            <SymbolView
              name={focused ? "star.circle.fill" : "star.circle"}
              size={24}
              tintColor={color}
            />
          ),
          tabBarBadge: '3',
          tabBarBadgeStyle: {
            backgroundColor: '#FF6B35',
            color: 'white',
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <SymbolView
              name={focused ? "person.circle.fill" : "person.circle"}
              size={24}
              tintColor={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
