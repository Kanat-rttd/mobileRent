import { Text, View } from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function AddPost({navigation}) {
  return (
    <View>
        <Text
          onPress={() => navigation.navigate('Main')}
        >
          Добавить объявление
        </Text>
    </View>
  );
}
