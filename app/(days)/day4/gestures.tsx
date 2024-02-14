import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Pressable } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "./BottomSheet";

export default function Gestures() {
    const onPress = 

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack.Screen
        options={{ navigationBarHidden: false, headerShown: false }}
      />
      <View className="bg-slate-950 flex-1 items-center justify-center">
        <StatusBar style="light" />
        <Pressable className="h-14 w-14 rounded-full bg-white"></Pressable>
        <BottomSheet />
      </View>
    </GestureHandlerRootView>
  );
}
