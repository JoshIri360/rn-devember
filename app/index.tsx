import { Dimensions, FlatList, SafeAreaView, StyleSheet } from "react-native";
import React, { useCallback } from "react";
import DayListItem from "@/components/core/DayListItem";
import HomePageFeatureCard from "@/components/core/HomePageFeatureCard";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function index() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const itemWidth = 104;
  const gap = 15;

  const screenWidth = Dimensions.get("window").width;
  const numColumns = Math.floor(screenWidth / (itemWidth + gap));

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-darkBackground">
      <HomePageFeatureCard />
      <FlatList
        contentContainerStyle={{ gap: gap, padding: gap }}
        columnWrapperStyle={{ gap: gap }}
        showsVerticalScrollIndicator={false}
        numColumns={numColumns}
        data={days}
        renderItem={({ item }) => <DayListItem item={item as number} />}
      />
    </SafeAreaView>
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
