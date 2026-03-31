# react-native-stater

A polished Expo starter built with React Native, Expo Router, NativeWind, and a reusable UI component set.

This template gives you a solid mobile app foundation with themed components, routing, bottom tabs, drawer and sheet patterns, error handling helpers, and a clean Tailwind-style workflow for React Native.

## Highlights

- Expo Router app structure with tab navigation
- NativeWind + Tailwind token setup
- Reusable UI components in `components/ui`
- Light and dark theme support
- React Native Paper theme integration
- Drawer, dialog, sheet, card, input, badge, table, and form primitives
- Built-in error boundary and network error patterns
- Expo-ready setup for Android, iOS, and web

## Stack

- React Native `0.81`
- Expo `54`
- React `19`
- Expo Router
- NativeWind
- Tailwind CSS
- React Native Paper
- Gorhom Bottom Sheet
- Lucide React Native

## Included Screens

- `Home`: UI component showcase and quick-start examples
- `Menu Demo`: drawer-based hamburger navigation example
- `Errors`: network status and error-handling demo

## Project Structure

```txt
app/
  _layout.tsx
  (tabs)/
    _layout.tsx
    index.tsx
    menu-demo.tsx
    error-demo.tsx
components/
  ui/
hooks/
libs/
assets/
global.css
tailwind.config.js
```

## Getting Started

### 1. Install dependencies

```bash
pnpm install
```

If you prefer npm:

```bash
npm install
```

### 2. Start the development server

```bash
pnpm start
```

### 3. Run on a platform

```bash
pnpm android
pnpm ios
pnpm web
```

## Available Scripts

```bash
pnpm start
pnpm dev
pnpm lint
pnpm android
pnpm ios
pnpm web
pnpm build:android
pnpm build:ios
pnpm build:all
```

## UI Components

The template exports a shared UI kit from `components/ui`, including:

- `Button`
- `Card`
- `Badge`
- `Input`
- `Checkbox`
- `Switch`
- `Dialog`
- `Drawer`
- `Sheet`
- `DataTable`
- `SafeAreaView`
- `ScrollView`
- `Text`
- `ErrorBoundary`
- `GeneralError`
- `NetworkError`

You can import most components like this:

```tsx
import { Button, Card, Text } from "@/components/ui";
```

## Theming

The app ships with:

- custom light and dark color palettes
- shared navigation theme wiring
- React Native Paper theme support
- Tailwind semantic tokens in `tailwind.config.js`

Theme setup lives primarily in `app/_layout.tsx`.

## Why Use This Template

- Faster project setup for new Expo apps
- Better starting point than a blank scaffold
- Helpful demos for common mobile UI patterns
- Clean structure for scaling features over time

## Build

EAS build scripts are already included:

```bash
pnpm build:android
pnpm build:ios
pnpm build:all
```

Make sure EAS is configured in your Expo account before running production builds.

## Next Ideas

- Add authentication flow screens
- Add state management
- Connect API layers
- Add tests and CI
- Create app-specific design tokens

## License

Use this template as a starting point for your own projects.
