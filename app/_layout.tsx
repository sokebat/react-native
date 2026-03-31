import "react-native-reanimated";
import "../global.css";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";

import { ErrorBoundary, ThemeProvider as UIThemeProvider } from "@/components/ui";
import { useColorScheme } from "@/hooks/useColorScheme";

SplashScreen.preventAutoHideAsync();

const paperThemes = {
  light: {
    ...MD3LightTheme,
    roundness: 18,
    colors: {
      ...MD3LightTheme.colors,
      primary: "#1b4965",
      onPrimary: "#f5fbff",
      primaryContainer: "#cae9ff",
      onPrimaryContainer: "#102b3c",
      secondary: "#bee9e8",
      onSecondary: "#153a51",
      background: "#f5fbff",
      onBackground: "#102b3c",
      surface: "#ebf7ff",
      onSurface: "#102b3c",
      outline: "#82c4d5",
      outlineVariant: "#c0e2ea",
      error: "#d94f4f",
      onError: "#ffffff",
    },
  },
  dark: {
    ...MD3DarkTheme,
    roundness: 18,
    colors: {
      ...MD3DarkTheme.colors,
      primary: "#cae9ff",
      onPrimary: "#102b3c",
      primaryContainer: "#153a51",
      onPrimaryContainer: "#e0f2ff",
      secondary: "#5fa8d3",
      onSecondary: "#0b1d28",
      background: "#0b1d28",
      onBackground: "#f5fbff",
      surface: "#102b3c",
      onSurface: "#f5fbff",
      outline: "#4a9ccf",
      outlineVariant: "#1a4760",
      error: "#ffb4ab",
      onError: "#690005",
    },
  },
} as const;

const navigationThemes = {
  light: {
    ...NavigationDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      primary: paperThemes.light.colors.primary,
      background: paperThemes.light.colors.background,
      card: paperThemes.light.colors.surface,
      text: paperThemes.light.colors.onBackground,
      border: paperThemes.light.colors.outlineVariant,
      notification: paperThemes.light.colors.error,
    },
  },
  dark: {
    ...NavigationDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      primary: paperThemes.dark.colors.primary,
      background: paperThemes.dark.colors.background,
      card: paperThemes.dark.colors.surface,
      text: paperThemes.dark.colors.onBackground,
      border: paperThemes.dark.colors.outlineVariant,
      notification: paperThemes.dark.colors.error,
    },
  },
} as const;

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ErrorBoundary>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <UIThemeProvider>
            <PaperProvider theme={isDark ? paperThemes.dark : paperThemes.light}>
              <ThemeProvider value={isDark ? navigationThemes.dark : navigationThemes.light}>
                <Stack>
                  <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                  <Stack.Screen name="+not-found" />
                </Stack>
                <StatusBar style={isDark ? "light" : "dark"} />
              </ThemeProvider>
            </PaperProvider>
          </UIThemeProvider>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </ErrorBoundary>
  );
}
