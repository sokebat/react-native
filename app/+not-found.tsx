import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";
import { Button, SafeAreaView } from "@/components/ui";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <SafeAreaView className="flex-1 bg-background">
        <View className="flex-1 items-center justify-center p-5">
          <Text className="mb-4 text-5xl font-bold text-foreground">404</Text>
          <Text className="mb-2 text-2xl font-semibold text-foreground">Page not found</Text>
          <Text className="mb-8 text-center text-base text-muted-foreground">
            This screen does not exist.
          </Text>
          <Link href="/" asChild>
            <Button variant="default">
              <Text className="text-base font-medium text-primary-foreground">
                Go to home screen
              </Text>
            </Button>
          </Link>
        </View>
      </SafeAreaView>
    </>
  );
}
