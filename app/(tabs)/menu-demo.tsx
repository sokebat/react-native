import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerItem,
  DrawerSeparator,
  DrawerTitle,
  DrawerTrigger,
  SafeAreaView,
  ScrollView,
} from "@/components/ui";
import * as Clipboard from "expo-clipboard";
import { useRouter } from "expo-router";
import {
  Bell,
  Home,
  Menu,
  Settings,
  User,
} from "lucide-react-native";
import React from "react";
import { Alert, Pressable, Text, View } from "react-native";

export default function MenuDemo() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [position, setPosition] = React.useState<"left" | "right">("left");
  const router = useRouter();

  return (
    <SafeAreaView edges={["top"]} className="flex-1">
      <View className="flex-row items-center justify-between border-b border-border bg-background p-4">
        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} side={position}>
          <DrawerTrigger asChild>
            <Pressable className="p-2">
              <Menu className="h-6 w-6 text-foreground" />
            </Pressable>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>
                <Text className="text-xl font-semibold text-foreground">
                  Navigation Menu
                </Text>
              </DrawerTitle>
            </DrawerHeader>

            <DrawerItem
              icon={<Home className="h-5 w-5 text-foreground" />}
              onPress={() => router.push("/")}
            >
              <Text className="text-base text-foreground">Home</Text>
            </DrawerItem>

            <DrawerItem
              icon={<User className="h-5 w-5 text-foreground" />}
              onPress={() => {
                // Navigate to profile
              }}
            >
              <Text className="text-base text-foreground">Profile</Text>
            </DrawerItem>

            <DrawerItem
              icon={<Bell className="h-5 w-5 text-foreground" />}
              onPress={() => {
                // Navigate to notifications
              }}
            >
              <Text className="text-base text-foreground">Notifications</Text>
            </DrawerItem>

            <DrawerSeparator />

            <DrawerItem
              icon={<Settings className="h-5 w-5 text-foreground" />}
              onPress={() => {
                // Navigate to settings
              }}
            >
              <Text className="text-base text-foreground">Settings</Text>
            </DrawerItem>
          </DrawerContent>
        </Drawer>

        <Text className="text-base font-semibold text-foreground">Menu Demo</Text>

        <View className="w-10" />
      </View>

      <ScrollView className="flex-1 p-4">
        <Text className="mb-8 text-center text-4xl font-bold text-foreground">
          Hamburger Menu Demo
        </Text>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>
              <Text className="text-2xl font-semibold text-foreground">
                How it works
              </Text>
            </CardTitle>
            <CardDescription>
              <Text className="text-sm leading-6 text-muted-foreground">
                The hamburger menu is positioned absolutely and won&apos;t
                interfere with your layout.
              </Text>
            </CardDescription>
          </CardHeader>
          <CardContent className="gap-3">
            <Text className="text-base text-foreground">- Tap the hamburger icon to open the menu</Text>
            <Text className="text-base text-foreground">- Swipe from the edge or tap outside to close</Text>
            <Text className="text-base text-foreground">- Menu items navigate or trigger actions</Text>
            <Text className="text-base text-foreground">- Can be positioned top-left or top-right</Text>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>
              <Text className="text-2xl font-semibold text-foreground">
                Position Options
              </Text>
            </CardTitle>
          </CardHeader>
          <CardContent className="gap-4">
            <View className="flex-row gap-4">
              <Pressable
                className={`flex-1 rounded-lg border-2 p-4 ${position === "left" ? "border-primary bg-primary/10" : "border-muted"}`}
                onPress={() => setPosition("left")}
              >
                <Text className="text-center font-medium text-foreground">Left Side</Text>
              </Pressable>
              <Pressable
                className={`flex-1 rounded-lg border-2 p-4 ${position === "right" ? "border-primary bg-primary/10" : "border-muted"}`}
                onPress={() => setPosition("right")}
              >
                <Text className="text-center font-medium text-foreground">Right Side</Text>
              </Pressable>
            </View>
            <Text className="mt-2 text-center text-sm text-muted-foreground">
              Drawer opens from: {position}
            </Text>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              <Text className="text-2xl font-semibold text-foreground">
                Implementation
              </Text>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Pressable
              className="rounded-lg bg-muted p-4"
              onPress={async () => {
                const code = `import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui";
import { Menu } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

<SafeAreaView className="flex-1">
  <View className="flex-row items-center justify-between p-4 border-b border-border">
    <Drawer open={open} onOpenChange={setOpen} side="${position}">
      <DrawerTrigger asChild>
        <Pressable className="p-2">
          <Menu className="h-6 w-6 text-foreground" />
        </Pressable>
      </DrawerTrigger>
      <DrawerContent>{/* Menu items */}</DrawerContent>
    </Drawer>

    <Text className="text-base font-semibold text-foreground">My App</Text>
    <View className="w-10" />
  </View>
</SafeAreaView>`;
                await Clipboard.setStringAsync(code);
                Alert.alert("Copied!", "Code example copied to clipboard");
              }}
            >
              <Text className="text-xs font-mono text-foreground">
                Tap to copy example
              </Text>
            </Pressable>
          </CardContent>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
