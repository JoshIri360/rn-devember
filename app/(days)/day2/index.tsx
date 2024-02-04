import { Link, Stack } from "expo-router";
import React from "react";
import { View, Pressable, Text } from "react-native";

export default function DayDetailsScreen() {
  return (
    <View className="bg-blue-200 flex-1 items-center justify-center">
      <Stack.Screen options={{ title: "Day 2: Onboarding" }} />

      <Link asChild href={`/day2/onboarding`}>
        <Pressable className="bg-pink-300 p-2 px-3 rounded-lg">
          <Text className="text-white">Day 2: Onboarding</Text>
        </Pressable>
      </Link>
    </View>
  );
}
