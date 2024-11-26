import { Ionicons } from "@expo/vector-icons";
import { Image, View, Text, Pressable, TouchableOpacity } from "react-native";
import { useContext } from "react";
  import { FavoritesContext } from "../context/FavoritesContext";

function Item ({item, navigation}) {
  const {addToFavorites, removeFromFavorites, isFavorite} = useContext(FavoritesContext);
  const isItemFavorite = isFavorite(item.id);

  const handleFavoritePress = () => {
    if(isItemFavorite) {
      removeFromFavorites(item.id)
    } else {
      addToFavorites(item)
    }
  }

  return (
    <View className="p-4 bg-zinc-100 rounded-xl overflow-hidden"> 
      
      {/* Top Row: Category */}
      <View className="flex-row justify-between w-full items-center mb-3">
        {/* Category Badge */}
        <View className="bg-red-500 px-2 py-1 rounded-lg">
          <Text className="text-white text-sm font-semibold">{item.category}</Text>
        </View>
        <TouchableOpacity
          onPress={handleFavoritePress}
          className="p-1  bg-white rounded-full"
        >
          <Ionicons
            name="heart"
            size={24}
            color={isItemFavorite ? "red" : "gray"} 
            style={{
              textShadowColor: isFavorite ? "rgba(0, 0, 0, 0.25)" : "transparent",
              textShadowOffset: { width: 0, height: 0 },
              textShadowRadius: 2,
            }}
          />
        </TouchableOpacity>
      </View>

      {/* Image */}
      <View className="w-full h-40 rounded-lg overflow-hidden mb-2">
        <Image className="w-full h-full object-cover" source={item.image}/>
      </View>

      {/* Name and Rating */}
      <View className="flex items-start mb-2">
        <Text className="text-base font-semibold text-gray-800">{item.name}</Text>
        <View className="flex-row items-center space-x-1">
          <Text className="text-sm text-yellow-500">★★★★☆</Text> 
          <Text className="text-sm text-gray-600"> (79 отзывов)</Text>
        </View>
      </View>

      {/* Price and Button */}
      <View className="flex-row items-center justify-between mt-2">
        <View className="flex items-start">
          <Text className="text-lg font-bold text">{item.price}00 ₸</Text>
        </View>

        <Pressable 
          className="bg-blue-600 active:bg-blue-700 py-2 px-4 rounded-full"
          onPress={() => navigation.navigate('[ItemDetails]', { 
            id: item.id, 
            name: item.name, 
            price: item.price, 
            image: item.image, 
            category: item.category, 
            description: item.description,
            item: item,
          })}
        >
          <Text className="text-white text-sm font-semibold">Арендовать</Text>
        </Pressable>
      </View>

    </View>
  )
}

export default Item;