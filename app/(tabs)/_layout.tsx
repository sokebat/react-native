import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { House, Menu, TriangleAlert } from "lucide-react-native";

import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const activeTintColor = colorScheme === "dark" ? "#cae9ff" : "#1b4965";

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: activeTintColor,
        headerShown: false,
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
          tabBarIcon: ({ color }) => <House size={22} color={color} />,
        }}
      />

      <Tabs.Screen
        name="menu-demo"
        options={{
          title: "Menu",
          tabBarIcon: ({ color }) => <Menu size={22} color={color} />,
        }}
      />

      <Tabs.Screen
        name="error-demo"
        options={{
          title: "Errors",
          tabBarIcon: ({ color }) => <TriangleAlert size={22} color={color} />,
        }}
      />
    </Tabs>
  );
}
