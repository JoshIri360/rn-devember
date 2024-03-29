import { SplashScreen, Stack } from "expo-router";
import { Montserrat_700Bold, useFonts } from "@expo-google-fonts/montserrat";
import { Inika_400Regular } from "@expo-google-fonts/inika";
import { useCallback, useEffect } from "react";
import {
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";

SplashScreen.preventAutoHideAsync();

/**
 * Root layout component.
 *
 * This component is responsible for rendering the root layout of the application.
 * It handles the loading of fonts and displays the main screen.
 *
 * @returns The root layout component.
 */
export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    MontserratBold: Montserrat_700Bold,
    InikaRegular: Inika_400Regular,
    PoppinsMedium: Poppins_500Medium,
    PoppinsRegular: Poppins_400Regular,
  });

  // useEffect(() => {
  //   if (fontsLoaded || fontError) {
  //   }
  // }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  
  SplashScreen.hideAsync();

  return (
    <Stack screenOptions={{}}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
