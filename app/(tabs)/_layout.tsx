import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab, IconSymbol, TabBarBackground } from "@/components/ui";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const activeTintColor = colorScheme === "dark" ? "#cae9ff" : "#1b4965";

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: activeTintColor,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={22} name="house.fill" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="menu-demo"
        options={{
          title: "Menu",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={22} name="menucard" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="error-demo"
        options={{
          title: "Errors",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={22} name="exclamationmark.triangle.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
