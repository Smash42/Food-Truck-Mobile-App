import { Link } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
const sharkImage = require("../../assets/images/shark-lg.png");

const search = () => {
  return (
    <View className="flex-1 justify-center items-center bg-amber-100">
      <Text className="text-5xl font-bold  mt-20 mb-4 fixed">
        Smashing Fins
      </Text>
      <Image source={sharkImage} />
      <Text className="text-2xl font-bold mt-6">Search Items</Text>
      <Text className="text-lg mb-5"> Coming Soon... </Text>

      <Link href="/menu" className="text-lg font-bold text-blue-600 mt-6">
        See more items on our menu!
      </Link>
      <Link href="/info" className="text-lg font-bold text-blue-600 mt-6">
        Quick Info
      </Link>
    </View>
  );
};

export default search;
