import { ScrollView, View } from "react-native";
import DayListItem from "@/components/core/DayListItem";
import HomePageFeatureCard from "@/components/core/HomePageFeatureCard";
import { NativeWindStyleSheet } from "nativewind";
import { GestureHandlerRootView } from "react-native-gesture-handler";

NativeWindStyleSheet.setOutput({
  default: "native",
});

/**
 * Renders the main index component of the application.
 *
 * @returns The JSX element representing the index component.
 */
export default function index() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <ScrollView
      className="flex-1 bg-darkBackground"
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <HomePageFeatureCard />
        <View
          className="flex-row flex-wrap justify-center items-center w-full pt-5"
          style={{ rowGap: 18, columnGap: 18 }}
        >
          {days.map((day) => (
            <DayListItem key={day} item={day} />
          ))}
        </View>
    </ScrollView>
  );
}
