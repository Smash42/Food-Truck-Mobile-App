import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function index() {
  return (
    <View className="flex-1 justify-center items-center bg-blue-200">
      <Text className="text-5xl font-bold mb-4">Smashing Fins</Text>
      <Text className="text-3xl mb-8">
        Transport yourself to a tropical beach with every bite!
      </Text>

      <Link href="/menu" className="text-lg font-bold text-green-600">
        Go to Menu
      </Link>

      <Text className="text-lg mt-4">
        Smashing Fins offers a variety of different tacos with a tropical twist.
        Who doesn't love a nice refreshing tuna poke bowl on a hot summer day?
        We also have delicious coconut shrimp tacos that will transport you to
        the beach with every bite!
      </Text>
      <Text className="text-2xl mt-4"> Featured Menu Items: </Text>
      <Text className="text-lg"> - Coconut Shrimp Tacos </Text>
      <Text className="text-lg"> - Tuna Poke Bowls </Text>
      <Text className="text-lg"> - Mango Salsa Shrimp Tacos </Text>
    </View>
  );
}
