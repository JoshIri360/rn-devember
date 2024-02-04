import { View, Text, Image, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { Link, Stack, router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import {
  Directions,
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

import onBoardImage1 from "../../../assets/images/onboarding/onboard1.png";
import onBoardImage2 from "../../../assets/images/onboarding/onboard2.png";
import onBoardImage3 from "../../../assets/images/onboarding/onboard3.png";

const onBoardingSteps = [
  {
    image: onBoardImage1,
    title: "Create your Profile",
    description:
      "Complete your profile to help you find a roommate who will be right for you.",
  },
  {
    image: onBoardImage2,
    title: "Find a Roommate",
    description:
      "Search for a roommate who shares your interests and lifestyle.",
  },
  {
    image: onBoardImage3,
    title: "Connect and Chat",
    description:
      "Start a conversation with your potential roommate and get to know them.",
  },
];

const onboardingScreen = () => {
  const [currentStep, setCurrentStep] = React.useState(0);

  const data = onBoardingSteps[currentStep];

  const swipeRight = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onEnd(() => {
      if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
      }
    });

  const swipeLeft = Gesture.Fling()
    .direction(Directions.LEFT)
    .onEnd(() => {
      if (currentStep < onBoardingSteps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    });

  const fling = Gesture.Simultaneous(swipeRight, swipeLeft);

  return (
    <SafeAreaView className="flex-1 bg-[#FCFCFC] py-12">
      <Stack.Screen options={{ headerShown: false }} />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View className="relative flex-1 items-center justify-center">
          <Pressable
            onPress={() => {
              router.back();
            }}
            className="flex-row justify-center items-center absolute top-0 right-3 text-center"
          >
            <Text className="font-[PoppinsMedium] pr-2">Skip</Text>
            <AntDesign name="doubleright" size={16} color="black" />
          </Pressable>
          <GestureDetector gesture={fling}>
            <Image
              source={data.image}
              className="w-[90%] aspect-square mt-20"
              style={{ height: undefined }}
              resizeMode="contain"
            />
          </GestureDetector>
          <View className="px-10">
            <Text className="text-[18px] font-[PoppinsMedium] my-2 mt-6 text-center">
              {data.title}
            </Text>
            <Text className="font-[PoppinsRegular] text-center">
              {data.description}
            </Text>
          </View>
          <View className="flex-row mt-6">
            {onBoardingSteps.map((_, index) => {
              return (
                <Pressable
                  onPress={() => {
                    setCurrentStep(index);
                  }}
                  key={index}
                  hitSlop={10}
                  className={`w-4 h-4 rounded-full mx-1 ${
                    currentStep === index ? "bg-black w-6" : "bg-[#E0E0E0]"
                  }`}
                ></Pressable>
              );
            })}
          </View>
          <View className="mt-10">
            <Pressable
              onPress={() => {
                if (currentStep < onBoardingSteps.length - 1) {
                  setCurrentStep(currentStep + 1);
                } else {
                  router.back();
                }
              }}
              className="bg-[#E0E0E0] w-[200px] h-12 items-center justify-center rounded-full"
            >
              <Text className="font-[PoppinsMedium] text-[16px]">Next</Text>
            </Pressable>
          </View>
        </View>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default onboardingScreen;
