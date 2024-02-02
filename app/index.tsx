import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function index() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <View style={styles.day}>
        <Text>1</Text>
      </View>
      <View style={styles.day}>
        <Text>2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  day: {
    width: 50,
    height: 50,
    backgroundColor: "red",
  },
});
