import { router } from "expo-router";
import React from "react";
import { View } from "react-native";

import { AlertCircleIcon, HomeIcon } from "../../libs/icons";
import { Button } from "./button";
import { SafeAreaView } from "./safe-area-view";
import { ScrollView } from "./scroll-view";
import { Text } from "./text";

interface GeneralErrorProps {
  title?: string;
  message?: string;
  showHomeButton?: boolean;
  onRetry?: () => void;
  retryText?: string;
}

export function GeneralError({
  title = "Something went wrong",
  message = "We're having trouble loading this content. Please try again.",
  showHomeButton = true,
  onRetry,
  retryText = "Try Again",
}: GeneralErrorProps) {
  const handleGoHome = () => {
    router.replace("/");
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView contentContainerClassName="flex-1 p-6" showsVerticalScrollIndicator={false}>
        <View className="flex-1 items-center justify-center">
          <AlertCircleIcon className="mb-6 h-20 w-20 text-muted-foreground" />

          <Text variant="h2" className="mb-4 text-center">
            {title}
          </Text>

          <Text variant="p" className="mb-8 max-w-xs text-center text-muted-foreground">
            {message}
          </Text>

          <View className="w-full max-w-xs gap-3">
            {onRetry && (
              <Button onPress={onRetry} size="lg" className="w-full">
                <Text>{retryText}</Text>
              </Button>
            )}

            {showHomeButton && (
              <Button
                onPress={handleGoHome}
                variant={onRetry ? "outline" : "default"}
                size="lg"
                className="w-full"
              >
                <HomeIcon className="mr-2 h-4 w-4" />
                <Text>Go to Home</Text>
              </Button>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

