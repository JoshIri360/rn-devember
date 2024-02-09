import React from "react";
import { View, Text } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function componentName() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const context = useSharedValue({ x: 0, y: 0 });

  const gesture = Gesture.Pan()
    .onBegin(() => {
      context.value = { x: translateX.value, y: translateY.value };
    })
    .onUpdate((event) => {
      translateX.value = event.translationX + context.value.x;
      translateY.value = event.translationY + context.value.y;
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: withSpring(translateX.value) },
        { translateY: withSpring(translateY.value) },
      ],
    };
  });

  const followX = useDerivedValue(() => {
    return translateX.value;
  });

  const followY = useDerivedValue(() => {
    return translateY.value;
  });

  const animatedFollowStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(followX.value, {
            damping: 300,
            stiffness: 100,
          }),
        },
        {
          translateY: withSpring(followY.value, {
            damping: 300,
            stiffness: 100,
          }),
        },
      ],
    };
  });

  const animatedThirdCircleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(followX.value, {
            damping: 300,
            stiffness: 80,
          }),
        },
        {
          translateY: withSpring(followY.value, {
            damping: 300,
            stiffness: 80,
          }),
        },
      ],
    };
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GestureDetector gesture={gesture}>
        <View className="flex-1 justify-center items-center bg-blue-200">
          <Animated.View
            className="bg-red-300 absolute h-20 w-20 rounded-full"
            style={animatedStyle}
          ></Animated.View>
          <Animated.View
            className="bg-blue-300 absolute -z-10 h-20 w-20 rounded-full"
            style={animatedFollowStyle}
          ></Animated.View>
          <Animated.View
            className="bg-green-300 absolute -z-20 h-20 w-20 rounded-full"
            style={animatedThirdCircleStyle}
          ></Animated.View>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}
