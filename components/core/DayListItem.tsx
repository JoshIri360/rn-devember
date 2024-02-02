import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

/**
 * Renders a day list item component.
 * @param {Object} props - The component props.
 * @param {string} props.item - The item to be displayed.
 * @returns {JSX.Element} The rendered day list item.
 */
const DayListItem = ({ item }: { item: number }) => {
  return (
    <Link asChild href={`/${item}/`}>
      <Pressable className="bg-chocolateBrown w-[104px] h-[104px] items-center justify-center rounded-xl">
        <Text
          className="text-[90px] text-center font-[InikaRegular] text-lightText"
          style={{
            lineHeight: 110,
          }}
        >
          {item}
        </Text>
      </Pressable>
    </Link>
  );
};

export default DayListItem;
