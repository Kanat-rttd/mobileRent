import { Image, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import DatePicker from "./Calendar";
import Line from "./Line";
import Ionicons from 'react-native-vector-icons/Ionicons';

function ItemDetails() {
  const { id, name, price, image, category } = useLocalSearchParams();

  return (
    <ScrollView className="p-3 h-full bg-white">

      <View className="w-full h-72">
        <Image
          className="w-full h-full rounded-xl"
          source={image}
          resizeMode="contain"
        />
      </View>
    
      <Line />

      <View >
        <View className="flex-row items-center justify-between">
          <Text className="text-xl ">{category} {name}</Text>
          <Ionicons className="" name="heart-outline" color="red" size={26}/>
        </View>

        <View className="flex-row items-center">
          <Ionicons className="mt-3" name="star" color="orange" size={18}/>
          <Ionicons className="mt-3" name="star" color="orange" size={18}/>
          <Ionicons className="mt-3" name="star" color="orange" size={18}/>
          <Ionicons className="mt-3" name="star" color="orange" size={18}/>
          <Ionicons className="mt-3" name="star-outline" color="orange" size={18}/>

          <Text className="ml-2 mt-3">37 Отзывов</Text>
        </View>

      </View>
      
      <Line />

        <View>
          <Text className="text-xl font-bold">{price}000 ₸ в день</Text>
        </View>

      <Line />
      {/* <DatePicker /> */}
    </ScrollView>
  );
}

export default ItemDetails;