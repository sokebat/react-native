import React from "react";
import { Text, View } from "react-native";

import { RefreshCw, WifiOff } from "lucide-react-native";
import { Button } from "./button";
import { SafeAreaView } from "./safe-area-view";
import { ScrollView } from "./scroll-view";

interface NetworkErrorProps {
  onRetry?: () => void;
  message?: string;
}

export function NetworkError({ onRetry, message }: NetworkErrorProps) {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView
        contentContainerClassName="flex-1 p-6"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 items-center justify-center">
          <WifiOff className="mb-6 h-20 w-20 text-muted-foreground" />

          <Text className="mb-4 text-center text-3xl font-semibold text-foreground">
            No Internet Connection
          </Text>

          <Text className="mb-8 max-w-xs text-center text-base leading-6 text-muted-foreground">
            {message ||
              "Please check your internet connection and try again. Make sure you&apos;re connected to WiFi or mobile data."}
          </Text>

          {onRetry && (
            <Button onPress={onRetry} size="lg" className="w-full max-w-xs">
              <RefreshCw className="mr-2 h-4 w-4 text-primary-foreground" />
              <Text className="text-base font-medium text-primary-foreground">
                Try Again
              </Text>
            </Button>
          )}

          <View className="mt-12 w-full max-w-xs rounded-lg bg-muted p-4">
            <Text className="mb-2 text-sm font-semibold text-foreground">
              Troubleshooting Tips:
            </Text>
            <View className="gap-2">
              <Text className="text-sm text-muted-foreground">
                Check if airplane mode is off
              </Text>
              <Text className="text-sm text-muted-foreground">
                Verify WiFi or mobile data is enabled
              </Text>
              <Text className="text-sm text-muted-foreground">
                Try restarting your device
              </Text>
              <Text className="text-sm text-muted-foreground">
                Move closer to your router
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
