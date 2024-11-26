import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { useRoute } from '@react-navigation/native';
import DatePicker from "./Calendar";
import Line from "./Line";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState, useContext, useEffect } from "react";
import SwiperImage from "./SwiperImage";
import { FavoritesContext } from "../context/FavoritesContext";
import CustomButton from "../../components/CustomButton";
import Toast from 'react-native-toast-message';

function ItemDetails() {
  const route = useRoute(); 
  const { id, name, price, image, category, description, item } = route.params || {};

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded)
  };


  const max_length = 100;

  const {addToFavorites, removeFromFavorites, isFavorite} = useContext(FavoritesContext);
  const isItemFavorite = isFavorite(id);
  console.log(isItemFavorite)

  const handleFavoritePress = () => {
    if(isItemFavorite) {
      removeFromFavorites(id);
      console.log(isItemFavorite)
    } else {
      addToFavorites(item)
    }
  }

  const handleOrderButton = () => {
    Toast.show({
      type: "success",
      text1: `Вы заказали - ${name}`,
      text2: "Дождитесь одобрения владельца",
      visibilityTime: 5000,
      text1Style: { fontSize: 18, fontWeight: "bold" }, // Стили для заголовка
      text2Style: { fontSize: 16 }, // Стили для подзаголовка
    })
  };

  const textStyles = ["text-white "]

  return (
    <ScrollView className="p-3 h-full bg-white">

      {/* картинка слайдер */}
      <SwiperImage image={image} />
      {/*  */}
    
      <Line />

      {/* названия и отзывы */}
      <View >

        <View className="flex-row items-center justify-between">
          <Text className="text-xl font-semibold">{category} {name}</Text>
          <Ionicons onPress={handleFavoritePress} name={!isItemFavorite ? "heart-outline" : "heart"} color="red" size={26}/>
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

      <View>
        <Text className="text-center text-lg font-semibold">Выберите промежуток аренды</Text>
        <DatePicker name={name} price={price}/>
      </View>
      <Line />

      {/* кнопка */}
      <View className="mb-5">
        <CustomButton title="Запросить аренду" handlePress={handleOrderButton} textStyles={textStyles}/>
      </View>
    </ScrollView>
  );
}

export default ItemDetails;