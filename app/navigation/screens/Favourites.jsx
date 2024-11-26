import { ScrollView, Text, View, Image, Pressable, LayoutAnimation, UIManager, Platform } from "react-native";
import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import { Ionicons } from "@expo/vector-icons";
import Line from "../../components/Line";

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function Favourites({ navigation }) {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext);

  const handleRemove = (itemId) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    removeFromFavorites(itemId);
  };

  console.log("Страница Избранное:", favorites)

  return (
    <ScrollView className="bg-white">
      <View>
        {favorites.length > 0 ? (
          favorites.map((item) => (
            <View key={item.id} style={{ opacity: 1 }}>
              {/* // main view */}
              <View className="flex-row p-3">
                {/* image */}
                <View className="w-40 h-40 rounded-lg overflow-hidden mr-3">
                  <Image source={item.image} className="w-full h-full object-cover" />
                </View>
                {/* text */}
                <View className="flex-1 justify-around">
                  <View className="flex-row items-center justify-between">
                    <Text className="text-xl">{item.name}</Text>
                    <Pressable>
                      <Ionicons
                        name="heart" 
                        size={28} 
                        color="red"
                        onPress={() => handleRemove(item.id)}
                      />
                    </Pressable>
                  </View>
                  <Text style={{ color: "grey" }}>{item.category}</Text>
                  <View className="flex-row items-center space-x-1">
                    <Text className="text-sm text-yellow-500">★★★★☆</Text>
                    <Text className="text-sm text-gray-600"> (79 отзывов)</Text>
                  </View>

                  {/* price and button */}
                  <View className="flex-row items-center justify-between mr-1">
                    <Text className="text-2xl font-bold">{item.price}00 ₸</Text>
                    <Pressable
                      className="bg-blue-600 active:bg-blue-700 py-2 px-3 rounded-xl"
                      onPress={() => navigation.navigate('[ItemDetails]', {
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        image: item.image,
                        category: item.category,
                        description: item.description
                      })}
                    >
                      <Text className="text-white text-sm font-semibold">Арендовать</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
              <Line />
            </View>
          ))
        ) : (
          <Text className="text-center">У вас нет избранных элементов.</Text>
        )}
      </View>
    </ScrollView>
  );
}