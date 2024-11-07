import { Image, View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from '@expo/vector-icons';


function Item ({item}) {
  return (
    <View className="p-4 flex items-center bg-white rounded-2xl shadow-lg overflow-hidden"> 

      {/* <View className="flex-row justify-between items-center">
        <Ionicons name="heart" size={32} color='red' />
        <Ionicons name="cart" size={32} color='black'/>
      </View> */}
      
      {/* image */}
      <View className="w-44 h-44 rounded-xl overflow-hidden mb-4">
        <Image className="w-full h-full object-cover" source={item.image} />
      </View>

      {/* name and price */}
      <View className="flex items-center">
        <Text className="text-xl font-bold text-gray-800 mb-2">{item.name}</Text>
        <Text className="text-gray-600">${item.price} per day</Text>
      </View>

      {/* button */}
      <View className="mt-4">
        <Link className="bg-blue-600 active:bg-blue-700 text-white py-2 px-4 rounded-full transition-all duration-200"
            href={{
                pathname: "/components/[ItemDetails]",
                params: { id: item.id, name: item.name, price: item.price, image: item.image },
              }}
        >
          <Text className="font-medium text-white">Заказать</Text>
        </Link>
      </View>

    </View>
  )
}

export default Item;