import React from "react";
import { View, Text } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const generateStyle = (x: SharedValue<number>, y: SharedValue<number>) => {
  const followX = useDerivedValue(() => {
    return withSpring(x.value);
  });

  const followY = useDerivedValue(() => {
    return withSpring(y.value);
  });

  const animatedFollowStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(followX.value),
        },
        {
          translateY: withSpring(followY.value),
        },
      ],
    };
  });

  return { animatedFollowStyle, followX, followY };
};

export default function Gestures() {
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

  const { animatedFollowStyle, followX, followY } = generateStyle(
    translateX,
    translateY
  );

  const { animatedFollowStyle: animatedFollowStyle2 } = generateStyle(
    followX,
    followY
  );

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
            style={animatedFollowStyle2}
          ></Animated.View>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}