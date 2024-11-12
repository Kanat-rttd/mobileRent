import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { useRoute } from '@react-navigation/native';
import DatePicker from "./Calendar";
import Line from "./Line";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from "react";
import SwiperImage from "./SwiperImage";

function ItemDetails() {
  const route = useRoute(); 
  const { id, name, price, image, category, description } = route.params || {};

  const [isExpanded, setIsExpanded] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded)
  };

  const max_length = 100;

  const handleHeart = () => {
    setIsPressed(!isPressed)
  }

  return (
    <ScrollView className="p-3 h-full bg-white">

      {/* картинка слайдер */}
      <SwiperImage image={image} />
      {/*  */}
    
      <Line />

      {/* названия и отзывы */}
      <View >

        <View className="flex-row items-center justify-between">
          <Text className="text-xl ">{category} {name}</Text>
          <Ionicons onPress={handleHeart} name={!isPressed ? "heart-outline" : "heart"} color="red" size={26}/>
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
      {/*  */}
      
      <Line />

      {/* Цена */}
        <View>
          <Text className="text-xl font-bold">{price}000 ₸ в день</Text>
        </View>
      {/*  */}

      <Line />

      {/* Описание */}
        <View>
          <Text className="mb-2 font-medium text-xl">Описание</Text>
          <View className="flex-row flex-wrap items-center">
            <Text className="text-lg">
                {isExpanded || description.length <= max_length
                  ? description
                  : `${description.substring(0, max_length)}..`
              }
              </Text>
            {description.length > max_length && (
              <TouchableOpacity onPress={toggleDescription}>
                <Text className="text-blue-500">
                  {isExpanded ? "Свернуть" : "Раскрыть"}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      {/*  */}

      <Line />

      {/* <DatePicker /> */}
    </ScrollView>
  );
}

export default ItemDetails;