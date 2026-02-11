import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const info = () => {
  return (
    <View className="flex-1 items-center bg-emerald-100">
      <Text className="text-5xl font-bold  mt-20">Smashing Fins</Text>
      <Text className="text-2xl font-bold mt-10"> Hours: </Text>
      <Text className="text-lg"> Monday - Friday: 11am - 8pm </Text>
      <Text className="text-lg"> Saturday - Friday: 12pm - 9pm </Text>
      <Text className="text-lg"> Sunday- Closed</Text>

      <Text className="text-2xl font-bold mt-10"> Location: </Text>
      <Text className="text-lg"> 123 Main Street, Anytown, USA </Text>

      <Link href="/" className="text-lg font-bold text-blue-600 mt-6">
        Back to the Home Page!
      </Link>
      <Link href="/menu" className="text-lg font-bold text-blue-600 mt-6">
        See our Menu!
      </Link>
    </View>
  );
};

export default info;
