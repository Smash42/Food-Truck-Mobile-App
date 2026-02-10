import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function index() {
  return (
    <View className="flex-1 justify-center items-center bg-blue-200">
      <Text className="text-4xl font-bold mb-4">Smashing Fins Food Truck</Text>
      <Text className="text-2xl mb-8">The best food truck in town!</Text>

      <Link href="/menu" className="text-lg text-green-600">
        Go to Menu
      </Link>

      <Text className="text-lg mt-4">
        Text describing type of food to be served
      </Text>
    </View>
  );
}
