import React from "react";
import { Text, View } from "react-native";

const menu = () => {
  return (
    <View className="flex-1 items-center bg-emerald-100">
      <Text className="text-5xl font-bold  mt-20">Smashing Fins</Text>
      <Text className="text-3xl font-bold mt-10"> Menu </Text>
      <Text className="text-2xl mt-4"> Mains: </Text>
      <Text className="text-lg mt-3">Fish Tacos</Text>
      <Text className="text-lg">Coconut Shrimp Tacos</Text>
      <Text className="text-lg">Mango Salsa Shrimp Tacos</Text>
      <Text className="text-lg">Tuna Poke Bowls</Text>
      <Text className="text-lg"> Pineapple Chicken Quesedillas</Text>

      <Text className="text-2xl mt-4"> Sides: </Text>
      <Text className="text-lg mt-3">Chips and Guacamole</Text>
      <Text className="text-lg">Chips and Mango Salsa</Text>
      <Text className="text-lg">Street Corn</Text>
      <Text className="text-lg">Coconut Rice</Text>
    </View>
  );
};

export default menu;
