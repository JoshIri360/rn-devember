import React from "react";
import { View, Text } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

export default function componentName() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const context = useSharedValue({ x: 0, y: 0 });

  // Define the pan gesture
  const gesture = Gesture.Pan()
    .onBegin(() => {
      // When the gesture begins, log the initial x translation and store the initial translations in the context
      console.log("begin", translateX.value);
      context.value = { x: translateX.value, y: translateY.value };
    })
    .onUpdate((event) => {
      // When the gesture updates, log the x translation and update the translations based on the gesture's translation and the initial translations stored in the context
      console.log("update", translateX.value);
      translateX.value = event.translationX + context.value.x;
      translateY.value = event.translationY + context.value.y;
    });

  // Define the animated styles for the view that will be moved by the gesture
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className="flex-1 justify-center items-center bg-pink-200">
        <GestureDetector gesture={gesture}>
          <Animated.View
            style={animatedStyles}
            className="h-20 w-20 bg-blue-400 rounded-full"
          ></Animated.View>
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
}
