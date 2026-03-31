import type { PropsWithChildren } from "react";

import { ThemeProvider } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { ErrorBoundary, ThemeProvider as UIThemeProvider } from "@/components/ui";
import type { AppTheme } from "@/lib/app-theme";

interface AppProvidersProps extends PropsWithChildren {
  theme: AppTheme;
}

export function AppProviders({ children, theme }: AppProvidersProps) {
  return (
    <ErrorBoundary>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <UIThemeProvider theme={theme.uiTheme}>
          <ThemeProvider value={theme.navigation}>{children}</ThemeProvider>
        </UIThemeProvider>
      </GestureHandlerRootView>
    </ErrorBoundary>
  );
}
