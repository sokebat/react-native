import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

import { AlertCircle, Home } from "lucide-react-native";
import { Button } from "./button";
import { SafeAreaView } from "./safe-area-view";
import { ScrollView } from "./scroll-view";

interface GeneralErrorProps {
  title?: string;
  message?: string;
  showHomeButton?: boolean;
  onRetry?: () => void;
  retryText?: string;
}

export function GeneralError({
  title = "Something went wrong",
  message = "We&apos;re having trouble loading this content. Please try again.",
  showHomeButton = true,
  onRetry,
  retryText = "Try Again",
}: GeneralErrorProps) {
  const handleGoHome = () => {
    router.replace("/");
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView
        contentContainerClassName="flex-1 p-6"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 items-center justify-center">
          <AlertCircle className="mb-6 h-20 w-20 text-muted-foreground" />

          <Text className="mb-4 text-center text-3xl font-semibold text-foreground">
            {title}
          </Text>

          <Text className="mb-8 max-w-xs text-center text-base leading-6 text-muted-foreground">
            {message}
          </Text>

          <View className="w-full max-w-xs gap-3">
            {onRetry && (
              <Button onPress={onRetry} size="lg" className="w-full">
                <Text className="text-base font-medium text-primary-foreground">
                  {retryText}
                </Text>
              </Button>
            )}

            {showHomeButton && (
              <Button
                onPress={handleGoHome}
                variant={onRetry ? "outline" : "default"}
                size="lg"
                className="w-full"
              >
                <Home className={onRetry ? "mr-2 h-4 w-4 text-foreground" : "mr-2 h-4 w-4 text-primary-foreground"} />
                <Text className={onRetry ? "text-base font-medium text-foreground" : "text-base font-medium text-primary-foreground"}>
                  Go to Home
                </Text>
              </Button>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
