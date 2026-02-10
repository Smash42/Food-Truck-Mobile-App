import React from "react";
import { Text, View } from "react-native";

const menu = () => {
  return (
    <View className="flex-1 items-center bg-green-100">
      <Text className="text-5xl font-bold  mt-20">
        Smashing Fins: Menu Items
      </Text>
      <Text className="text-2xl mt-4"> Mains: </Text>
      <Text className="text-xl mt-6">Fish Tacos</Text>
      <Text className="text-xl mt-4">Coconut Shrimp Tacos</Text>
      <Text className="text-xl mt-4">Mango Salsa Shrimp Tacos</Text>
      <Text className="text-xl mt-4">Tuna Poke Bowls</Text>
      <Text className="text-xl mt-4"> Pineapple Chicken Quesedillas</Text>

      <Text className="text-2xl mt-4"> Sides: </Text>
      <Text className="text-xl mt-6">Chips and Guacamole</Text>
      <Text className="text-xl mt-4">Chips and Mango Salsa</Text>
      <Text className="text-xl mt-4">Street Corn</Text>
      <Text className="text-xl mt-4">Coconut Rice</Text>
    </View>
  );
};

export default menu;
