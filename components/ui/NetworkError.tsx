import React from "react";
import { View } from "react-native";

import { RefreshCwIcon, WifiOffIcon } from "../../libs/icons";
import { Button } from "./button";
import { SafeAreaView } from "./safe-area-view";
import { ScrollView } from "./scroll-view";
import { Text } from "./text";

interface NetworkErrorProps {
  onRetry?: () => void;
  message?: string;
}

export function NetworkError({ onRetry, message }: NetworkErrorProps) {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView contentContainerClassName="flex-1 p-6" showsVerticalScrollIndicator={false}>
        <View className="flex-1 items-center justify-center">
          <WifiOffIcon className="mb-6 h-20 w-20 text-muted-foreground" />

          <Text variant="h2" className="mb-4 text-center">
            No Internet Connection
          </Text>

          <Text variant="p" className="mb-8 max-w-xs text-center text-muted-foreground">
            {message ||
              "Please check your internet connection and try again. Make sure you're connected to WiFi or mobile data."}
          </Text>

          {onRetry && (
            <Button onPress={onRetry} size="lg" className="w-full max-w-xs">
              <RefreshCwIcon className="mr-2 h-4 w-4" />
              <Text>Try Again</Text>
            </Button>
          )}

          <View className="mt-12 w-full max-w-xs rounded-lg bg-muted p-4">
            <Text variant="small" className="mb-2 font-semibold">
              Troubleshooting Tips:
            </Text>
            <View className="gap-2">
              <Text variant="small" className="text-muted-foreground">
                Check if airplane mode is off
              </Text>
              <Text variant="small" className="text-muted-foreground">
                Verify WiFi or mobile data is enabled
              </Text>
              <Text variant="small" className="text-muted-foreground">
                Try restarting your device
              </Text>
              <Text variant="small" className="text-muted-foreground">
                Move closer to your router
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

