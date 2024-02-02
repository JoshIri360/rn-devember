import {
  FlatList,
  ListRenderItem,
  FlatList as RNFlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback } from "react";
import { SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import DayListItem from "@/components/core/DayListItem";

SplashScreen.preventAutoHideAsync();

export default function index() {
  const [fontsLoaded, fontError] = useFonts({
    InikaBold: require("../assets/fonts/Inika-Bold.ttf"),
    InikaRegular: require("../assets/fonts/Inika-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <View
      className="flex-1 items-center justify-center gap-3 bg-darkBackground"
      onLayout={onLayoutRootView}
    >
      <FlatList
        contentContainerStyle={{ gap: 15, paddingTop: 20, paddingBottom: 20 }}
        columnWrapperStyle={{ gap: 15 }}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={days}
        renderItem={({ item }) => <DayListItem item={item as number} />}
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
