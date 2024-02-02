import { Stack, useGlobalSearchParams } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

export default function Day() {
  const { id } = useGlobalSearchParams();

  return (
    <View className="flex-1 justify-center items-center">
      <Stack.Screen options={{ title: `Day ${id}` }} />
      <Text>Day {id}</Text>
    </View>
  );
}
