import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
} from "react";
import { View, Text, Dimensions } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const SCREEN_HEIGTH = Dimensions.get("screen").height;

type BottomSheetProps = {};
export type BottomSheetRefProps = { scrollTo: (destination: number) => void };

const BottomSheet = forwardRef<BottomSheetRefProps, BottomSheetProps>(
  ({}, ref) => {
    const translateY = useSharedValue(0);
    const context = useSharedValue({ y: 0 });

    const scrollTo = useCallback((destination: number) => {
      "worklet";
      translateY.value = withSpring(destination, {
        damping: 200,
        stiffness: 300,
      });
    }, []);

    useImperativeHandle(ref, () => ({
      scrollTo,
    }));

    const gesture = Gesture.Pan()
      .onBegin(() => {
        context.value.y = translateY.value;
      })
      .onUpdate((event) => {
        translateY.value = event.translationY + context.value.y;
        translateY.value = Math.max(translateY.value, -SCREEN_HEIGTH + 100);
      })
      .onEnd(() => {
        if (translateY.value < -SCREEN_HEIGTH / 1.5) {
          translateY.value = -SCREEN_HEIGTH + 100;
        } else if (translateY.value < -300 && translateY.value > -600) {
          translateY.value = -250;
        }
      });

    useEffect(() => {
      translateY.value = withSpring(SCREEN_HEIGTH, {
        damping: 200,
        stiffness: 300,
      });
    }, []);

    const animatedStyle = useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateY: withSpring(translateY.value, {
              damping: 200,
              stiffness: 300,
            }),
          },
        ],
      };
    });

    return (
      <GestureDetector gesture={gesture}>
        <Animated.View
          className="bg-white h-screen rounded-t-2xl p-3 top-full w-full absolute"
          style={animatedStyle}
        >
          <View className="bg-gray-200 w-24 h-2 rounded-full self-center" />
        </Animated.View>
      </GestureDetector>
    );
  }
);

export default BottomSheet;
