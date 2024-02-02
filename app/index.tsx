import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { SplashScreen } from "expo-router";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function index() {
  const [fontsLoaded, fontError] = useFonts({
    "Inika-Bold": require("../assets/fonts/Inika-Bold.ttf"),
    "Inika-Regular": require("../assets/fonts/Inika-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  const days = [1, 2, 3, 4, 5, 6, 7];

  

  return (
    <View
      className="flex-1 items-center justify-center gap-3 bg-darkBackground"
      onLayout={onLayoutRootView}
    >
      <FlatList
        contentContainerStyle={{ gap: 10, paddingTop: 20, paddingBottom: 20 }}
        columnWrapperStyle={{ gap: 10 }}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={days}
        renderItem={({ item }) => (
          <View className="bg-chocolateBrown w-28 h-28 items-center justify-center rounded-xl">
            <Text className="text-8xl text-center font-[Inika-Regular] text-lightText">
              {item}
            </Text>
          </View>
        )}
      />
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
