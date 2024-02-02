import { Stack } from "expo-router";
import index from ".";

export default function RootLayout() {
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
