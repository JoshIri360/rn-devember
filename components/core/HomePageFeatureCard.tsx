import React, { Component } from "react";
import { Image, Text, View } from "react-native";

export class HomePageFeatureCard extends Component {
  render() {
    return (
      <View className="items-center justify-center relative overflow-hidden w-screen">
        <Image
          className="absolute bottom-0"
          source={require("../../assets/images/home.png")}
        />
        <Text className="font-[MontserratBold] text-white text-8xl mt-10">
          24
        </Text>
        <Text className="font-[MontserratBold] text-white text-lg">
          DAYS DEVEMBER
        </Text>
      </View>
    );
  }
}

export default HomePageFeatureCard;
