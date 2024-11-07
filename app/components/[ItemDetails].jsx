import { Image, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import DatePicker from "./Calendar";

function ItemDetails() {
  const { id, name, price, image } = useLocalSearchParams();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View className="w-44 h-44 rounded-xl overflow-hidden mb-4">
        <Image className="w-full h-full object-cover" source={image} />
      </View>
      <Text className="text-2xl font-bold">{name}</Text>
      <Text className="text-lg">${price} per day</Text>
      <DatePicker />
    </View>
  );
}

export default ItemDetails;