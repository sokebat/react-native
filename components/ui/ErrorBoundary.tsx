import { router } from "expo-router";
import React, { Component, ReactNode } from "react";
import { Pressable, View } from "react-native";

import { AlertCircleIcon, HomeIcon, RefreshCwIcon } from "../../libs/icons";
import { Button } from "./button";
import { SafeAreaView } from "./safe-area-view";
import { ScrollView } from "./scroll-view";
import { Text } from "./text";

interface Props {
  children: ReactNode;
  fallback?: (error: Error, resetError: () => void) => ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  resetError = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  handleReload = () => {
    this.resetError();
    router.replace("/");
  };

  handleGoHome = () => {
    this.resetError();
    router.replace("/");
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback(this.state.error!, this.resetError);
      }

      return (
        <SafeAreaView className="flex-1 bg-background">
          <ScrollView
            contentContainerClassName="flex-1 p-6"
            showsVerticalScrollIndicator={false}
          >
            <View className="flex-1 items-center justify-center">
              <AlertCircleIcon className="mb-6 h-20 w-20 text-destructive" />

              <Text variant="h2" className="mb-4 text-center">
                Oops! Something went wrong
              </Text>

              <Text variant="p" className="mb-8 max-w-xs text-center text-muted-foreground">
                We encountered an unexpected error. Don&apos;t worry, you can try reloading the
                app or go back to home.
              </Text>

              <View className="w-full max-w-xs gap-3">
                <Button onPress={this.handleReload} size="lg" className="w-full">
                  <RefreshCwIcon className="mr-2 h-4 w-4" />
                  <Text>Reload App</Text>
                </Button>

                <Button onPress={this.handleGoHome} variant="outline" size="lg" className="w-full">
                  <HomeIcon className="mr-2 h-4 w-4" />
                  <Text>Go to Home</Text>
                </Button>
              </View>

              {__DEV__ && this.state.error && (
                <Pressable className="mt-8 w-full max-w-sm rounded-lg bg-muted p-4">
                  <Text variant="small" className="mb-2 font-semibold">
                    Error Details (Dev Only):
                  </Text>
                  <Text variant="code" className="text-xs text-destructive">
                    {this.state.error.message}
                  </Text>
                  {this.state.errorInfo && (
                    <Text variant="code" className="mt-2 text-xs text-muted-foreground">
                      {this.state.errorInfo.componentStack?.slice(0, 200)}...
                    </Text>
                  )}
                </Pressable>
              )}
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    }

    return this.props.children;
  }
}

