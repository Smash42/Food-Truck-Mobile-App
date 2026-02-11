import { Link } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const menu = () => {
  return (
    <ScrollView>
      <View className="flex-1 items-center bg-emerald-100">
        <Text className="text-5xl font-bold  mt-20 fixed">Smashing Fins</Text>

        <Text className="text-3xl font-bold mt-10"> Menu </Text>
        <Text className="text-xl mt-3 p-4 text-center">
          {" "}
          Every order is curated with the only the freshiest ingredients to
          waken your taste buds and transport you to a warm tropical beach.
          Below you will find our extension menu, including sides and drink
          options.
        </Text>
        <Text className="text-lg font-bold">
          *Please let us know of any food allergies.*{" "}
        </Text>

        <Text className="text-2xl mt-5 font-bold"> Mains: </Text>
        <Text className="text-lg mt-3">Fish Tacos</Text>
        <Text className="text-lg">Coconut Shrimp Tacos</Text>
        <Text className="text-lg">Mango Salsa Shrimp Tacos</Text>
        <Text className="text-lg">Tuna Poke Bowls</Text>
        <Text className="text-lg"> Pineapple Chicken Quesedillas</Text>

        <Text className="text-2xl mt-4 font-bold"> Sides: </Text>
        <Text className="text-lg mt-3">Chips and Guacamole</Text>
        <Text className="text-lg">Chips and Mango Salsa</Text>
        <Text className="text-lg">Street Corn</Text>
        <Text className="text-lg">Coconut Rice</Text>

        <Text className="text-2xl mt-4 font-bold"> Beverages: </Text>
        <Text className="text-lg mt-3"> Jarritos Pineapple Soda </Text>
        <Text className="text-lg">Tropical Mai Tai: non-alcoholic</Text>
        <Text className="text-lg">Water</Text>

        <Text></Text>
        <Link href="/" className="text-lg font-bold text-blue-600 mt-6">
          Back to the Home Page!
        </Link>
        <Link
          href="/info"
          className="text-lg font-bold text-blue-600 mt-6 mb-20"
        >
          Quick Info
        </Link>
      </View>
    </ScrollView>
  );
};

export default menu;
