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

interface AnimatedViewProps {
  x: SharedValue<number>;
  y: SharedValue<number>;
}

const useFollowAnimationPosition = ({ x, y }: AnimatedViewProps) => {
  const springConfig = {
    damping: 20,
    stiffness: 300,
  };

  const followX = useDerivedValue(() => {
    return withSpring(x.value, springConfig);
  });

  const followY = useDerivedValue(() => {
    return withSpring(y.value, springConfig);
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: followX.value }, { translateY: followY.value }],
    };
  });

  return { followX, followY, animatedStyle };
};

export default function LearningGesture() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const context = useSharedValue({ x: 0, y: 0 });

  // Define the pan gesture
  const gesture = Gesture.Pan()
    .onBegin(() => {
      // When the gesture begins, store the initial translations in the context
      context.value = { x: translateX.value, y: translateY.value };
    })
    .onUpdate((event) => {
      // When the gesture updates, update the translations based on the gesture's translation and the initial translations stored in the context
      translateX.value = event.translationX + context.value.x;
      translateY.value = event.translationY + context.value.y;
    });

  const springConfig = {
    damping: 20,
    stiffness: 400,
  };

  const {
    followX: followX1,
    followY: followY1,
    animatedStyle: animatedStyle1,
  } = useFollowAnimationPosition({
    x: translateX,
    y: translateY,
  });

  const {
    followX: followX2,
    followY: followY2,
    animatedStyle: animatedStyle2,
  } = useFollowAnimationPosition({
    x: followX1,
    y: followY1,
  });

  const {
    followX: followX3,
    followY: followY3,
    animatedStyle: animatedStyle3,
  } = useFollowAnimationPosition({
    x: followX2,
    y: followY2,
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className="flex-1 justify-center items-center bg-pink-200">
        <GestureDetector gesture={gesture}>
          <View className="relative">
            <Animated.View
              style={animatedStyle1}
              className="h-20 w-20 bg-blue-400 rounded-full absolute"
            ></Animated.View>
            <Animated.View
              style={animatedStyle2}
              className="h-20 w-20 bg-red-400 rounded-full absolute"
            ></Animated.View>
            <Animated.View
              style={animatedStyle3}
              className="h-20 w-20 bg-green-400 rounded-full absolute"
            ></Animated.View>
          </View>
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
}
