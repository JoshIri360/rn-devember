import { StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { SplashScreen } from "expo-router";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function index() {
  const [fontsLoaded, fontError] = useFonts({
    "Inika-Bold": require("./assets/fonts/Inika-Bold.ttf"),
    "Inika-Regular": require("./assets/fonts/Inika-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  return (
    <View
      className="flex-1 items-center justify-center gap-3 bg-darkBackground"
      onLayout={onLayoutRootView}
    >
      <View className="bg-chocolateBrown w-32 h-32 items-center justify-center rounded-xl">
        <Text className="text-5xl text-lightText">1</Text>
      </View>
      <View className="bg-chocolateBrown w-32 h-32 items-center justify-center rounded-xl">
        <Text className="text-5xl text-lightText">2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  day: {
    width: 50,
    height: 50,
    backgroundColor: "red",
  },
});
