import React, { useState } from "react";
import { Text, View } from "react-native";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  GeneralError,
  NetworkError,
  SafeAreaView,
  ScrollView,
} from "@/components/ui";
import { useNetworkConnection } from "@/hooks/useNetworkConnection";

export default function ErrorDemo() {
  const [showNetworkError, setShowNetworkError] = useState(false);
  const [showGeneralError, setShowGeneralError] = useState(false);
  const [throwError, setThrowError] = useState(false);
  const { isConnected, isInternetReachable, type, checkConnection } =
    useNetworkConnection();

  if (throwError) {
    throw new Error("This is a test error to demonstrate the Error Boundary!");
  }

  if (showNetworkError) {
    return (
      <NetworkError
        onRetry={() => setShowNetworkError(false)}
        message="This is a demo of the network error screen. In a real app, this would show when there&apos;s no internet connection."
      />
    );
  }

  if (showGeneralError) {
    return (
      <GeneralError
        title="Demo Error"
        message="This is a demo of a general error screen. You can customize the title and message."
        onRetry={() => setShowGeneralError(false)}
        retryText="Close Error"
      />
    );
  }

  return (
    <SafeAreaView edges={["top"]} className="flex-1">
      <ScrollView className="flex-1" contentContainerClassName="p-4">
        <Text className="mb-4 text-4xl font-bold text-foreground">
          Error Handling Demo
        </Text>

        <Card className="mb-4">
          <CardHeader>
            <CardTitle>
              <Text className="text-2xl font-semibold text-foreground">Network Status</Text>
            </CardTitle>
            <CardDescription>
              <Text className="text-sm text-muted-foreground">Monitor your connection status</Text>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <View className="gap-3">
              <View className="flex-row items-center justify-between">
                <Text className="text-base text-foreground">Connection Status:</Text>
                <View className="flex-row items-center gap-2">
                  <View
                    className={`h-3 w-3 rounded-full ${isConnected ? "bg-green-500" : "bg-red-500"}`}
                  />
                  <Text className={isConnected ? "text-green-600" : "text-red-600"}>
                    {isConnected ? "Connected" : "Disconnected"}
                  </Text>
                </View>
              </View>
              <View className="flex-row items-center justify-between">
                <Text className="text-base text-foreground">Internet Access:</Text>
                <View className="flex-row items-center gap-2">
                  <View
                    className={`h-3 w-3 rounded-full ${isInternetReachable ? "bg-green-500" : "bg-orange-500"}`}
                  />
                  <Text
                    className={
                      isInternetReachable ? "text-green-600" : "text-orange-600"
                    }
                  >
                    {isInternetReachable ? "Available" : "No Internet"}
                  </Text>
                </View>
              </View>
              {type && (
                <View className="flex-row items-center justify-between">
                  <Text className="text-base text-foreground">Network Type:</Text>
                  <Text className="text-muted-foreground">{type}</Text>
                </View>
              )}
              <Button
                onPress={async () => {
                  await checkConnection();
                }}
                variant="outline"
                size="sm"
              >
                <Text className="text-sm font-medium text-foreground">Refresh Status</Text>
              </Button>
            </View>
          </CardContent>
        </Card>

        <Text className="mb-4 text-3xl font-semibold text-foreground">
          Error Screens
        </Text>

        <Card className="mb-4">
          <CardHeader>
            <CardTitle>
              <Text className="text-2xl font-semibold text-foreground">Network Error Demo</Text>
            </CardTitle>
            <CardDescription>
              <Text className="text-sm text-muted-foreground">Shows when there&apos;s no internet connection</Text>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onPress={() => setShowNetworkError(true)}>
              <Text className="text-base font-medium text-primary-foreground">Show Network Error</Text>
            </Button>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardHeader>
            <CardTitle>
              <Text className="text-2xl font-semibold text-foreground">General Error Demo</Text>
            </CardTitle>
            <CardDescription>
              <Text className="text-sm text-muted-foreground">Shows for generic application errors</Text>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onPress={() => setShowGeneralError(true)} variant="secondary">
              <Text className="text-base font-medium text-secondary-foreground">Show General Error</Text>
            </Button>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardHeader>
            <CardTitle>
              <Text className="text-2xl font-semibold text-foreground">Error Boundary Demo</Text>
            </CardTitle>
            <CardDescription>
              <Text className="text-sm text-muted-foreground">Catches JavaScript errors in component tree</Text>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Text className="mb-4 text-sm text-destructive">
              This will crash the screen and show the error boundary
            </Text>
            <Button onPress={() => setThrowError(true)} variant="destructive">
              <Text className="text-base font-medium text-destructive-foreground">Trigger Error Boundary</Text>
            </Button>
          </CardContent>
        </Card>

        <Text className="mb-4 text-3xl font-semibold text-foreground">
          Usage Examples
        </Text>

        <Card>
          <CardHeader>
            <CardTitle>
              <Text className="text-2xl font-semibold text-foreground">Implementation Guide</Text>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Text className="mb-3 text-sm text-foreground">
              1. Error Boundary (Already integrated in root):
            </Text>
            <View className="mb-4 rounded-md bg-muted p-3">
              <Text className="text-xs font-mono text-foreground">
                {`// Automatically catches all errors
// Already wrapped in app/_layout.tsx
<ErrorBoundary>
  <YourApp />
</ErrorBoundary>`}
              </Text>
            </View>

            <Text className="mb-3 text-sm text-foreground">
              2. Network Error Handling:
            </Text>
            <View className="mb-4 rounded-md bg-muted p-3">
              <Text className="text-xs font-mono text-foreground">
                {`import { NetworkError } from '@/components/ui';
import { useIsOnline } from '@/hooks/useNetworkConnection';

function MyScreen() {
  const isOnline = useIsOnline();

  if (!isOnline) {
    return <NetworkError onRetry={refetch} />;
  }

  return <YourContent />;
}`}
              </Text>
            </View>

            <Text className="mb-3 text-sm text-foreground">
              3. Custom Error States:
            </Text>
            <View className="rounded-md bg-muted p-3">
              <Text className="text-xs font-mono text-foreground">
                {`import { GeneralError } from '@/components/ui';

if (error) {
  return (
    <GeneralError
      title="Failed to load data"
      message={error.message}
      onRetry={handleRetry}
    />
  );
}`}
              </Text>
            </View>
          </CardContent>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
