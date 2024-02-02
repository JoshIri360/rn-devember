import { FlatList, SafeAreaView } from "react-native";
import DayListItem from "@/components/core/DayListItem";
import HomePageFeatureCard from "@/components/core/HomePageFeatureCard";
import { NativeWindStyleSheet } from "nativewind";

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
  const gap = 15;
  const numColumns = 3;

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-darkBackground">
      <HomePageFeatureCard />
      <FlatList
        contentContainerStyle={{ gap: gap, padding: gap }}
        columnWrapperStyle={{ gap: gap }}
        showsVerticalScrollIndicator={false}
        numColumns={numColumns}
        data={days}
        renderItem={({ item }) => <DayListItem item={item as number} />}
      />
    </SafeAreaView>
  );
}
