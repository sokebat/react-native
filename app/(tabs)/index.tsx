import React from "react";
import { Text } from "react-native";

import { SafeAreaView, View } from "@/components/ui";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 justify-center px-6 py-10">
        <View className="rounded-3xl border border-border bg-card p-6 shadow-sm">
          <Text className="text-3xl font-semibold text-foreground">
            react-native-stater
          </Text>
          <Text className="mt-3 text-lg leading-7 text-muted-foreground">
            Your app shell is running with the stack, tabs, and theme providers
            wired up cleanly.
          </Text>
          <Text className="mt-5 text-base leading-7 text-foreground">
            Use the tabs below to check the menu and error demo screens while we
            keep building.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
