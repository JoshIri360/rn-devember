import { SplashScreen, Stack } from "expo-router";
import { Montserrat_700Bold, useFonts } from "@expo-google-fonts/montserrat";
import { Inika_400Regular } from "@expo-google-fonts/inika";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    MontserratBold: Montserrat_700Bold,
    InikaRegular: Inika_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack screenOptions={{}}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
