import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useRef } from "react";
import { View, Text, Pressable } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetRefProps } from "./BottomSheet";

export default function Gestures() {
  const ref = useRef<BottomSheetRefProps>(null);
  const onPress = useCallback(() => {
    ref?.current?.scrollTo(-200);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack.Screen
        options={{ navigationBarHidden: false, headerShown: false }}
      />
      <View className="bg-slate-950 flex-1 items-center justify-center">
        <StatusBar style="light" />
        <Pressable
          onPress={onPress}
          className="h-14 w-14 rounded-full bg-white"
        ></Pressable>
        <BottomSheet ref={ref} />
      </View>
    </GestureHandlerRootView>
  );
}
