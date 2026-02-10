import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function index() {
  return (
    <View className="flex-1 justify-center items-center bg-emerald-200 px-4 border-2 border-emerald-400">
      <Text className="text-5xl font-bold mb-4">Smashing Fins</Text>
      <Text className="text-xl mb-5">
        Transport yourself to a tropical beach with every bite!
      </Text>

      <Text className="text-lg mt-4">
        Smashing Fins offers a variety of different tacos with a tropical twist.
        Who doesn't love a nice refreshing tuna poke bowl on a hot summer day?
        We also have delicious coconut shrimp tacos that will transport you to
        the beach with every bite!
      </Text>
      <Text className="text-2xl mt-6 font-bold"> Featured Menu Items: </Text>
      <Text className="text-lg mt-3"> - Coconut Shrimp Tacos </Text>
      <Text className="text-lg"> - Tuna Poke Bowls </Text>
      <Text className="text-lg"> - Mango Salsa Shrimp Tacos </Text>

      <Link href="/menu" className="text-lg font-bold text-blue-600 mt-6">
        See more items on our menu!
      </Link>
    </View>
  );
}
