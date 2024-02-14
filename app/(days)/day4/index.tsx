import { Link, Stack } from "expo-router";
import React from "react";
import { View, Pressable, Text } from "react-native";

export default function DayDetailsScreen() {
  return (
    <View className="bg-blue-200 flex-1 items-center justify-center">
      <Stack.Screen options={{ title: "Day 4: Gestures" }} />

      <Link asChild href={`/day4/gestures`}>
        <Pressable className="bg-pink-300 p-2 px-3 rounded-lg">
          <Text className="text-white">Day 3: Bottom Sheet</Text>
        </Pressable>
      </Link>
    </View>
  );
}
