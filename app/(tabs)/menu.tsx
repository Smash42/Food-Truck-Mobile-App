import React from "react";
import { Text, View } from "react-native";

const menu = () => {
  return (
    <View className="flex-1 items-center bg-green-100">
      <Text className="text-5xl font-bold  mt-20">Menu Items</Text>
      <Text className="text-2xl mt-10">Fish Tacos</Text>
      <Text className="text-2xl mt-4">Shrimp Tacos</Text>
      <Text className="text-2xl mt-4">Poke Bowls</Text>
    </View>
  );
};

export default menu;
