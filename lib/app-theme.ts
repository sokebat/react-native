import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  type Theme as NavigationTheme,
} from "@react-navigation/native";

export type AppUiTheme = "light" | "dark";

export interface AppTheme {
  colors: {
    background: string;
  };
  navigation: NavigationTheme;
  statusBar: "light" | "dark";
  uiTheme: AppUiTheme;
}

const appColors = {
  light: {
    primary: "#1b4965",
    background: "#f5fbff",
    surface: "#ebf7ff",
    onBackground: "#102b3c",
    outlineVariant: "#c0e2ea",
    error: "#d94f4f",
  },
  dark: {
    primary: "#cae9ff",
    background: "#0b1d28",
    surface: "#102b3c",
    onBackground: "#f5fbff",
    outlineVariant: "#1a4760",
    error: "#ffb4ab",
  },
} as const;

const navigationThemes = {
  light: {
    ...NavigationDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      primary: appColors.light.primary,
      background: appColors.light.background,
      card: appColors.light.surface,
      text: appColors.light.onBackground,
      border: appColors.light.outlineVariant,
      notification: appColors.light.error,
    },
  },
  dark: {
    ...NavigationDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      primary: appColors.dark.primary,
      background: appColors.dark.background,
      card: appColors.dark.surface,
      text: appColors.dark.onBackground,
      border: appColors.dark.outlineVariant,
      notification: appColors.dark.error,
    },
  },
} as const;

const appThemes: Record<AppUiTheme, AppTheme> = {
  light: {
    colors: {
      background: appColors.light.background,
    },
    navigation: navigationThemes.light,
    statusBar: "dark",
    uiTheme: "light",
  },
  dark: {
    colors: {
      background: appColors.dark.background,
    },
    navigation: navigationThemes.dark,
    statusBar: "light",
    uiTheme: "dark",
  },
};

export function getAppTheme(colorScheme: "light" | "dark") {
  return appThemes[colorScheme];
}
