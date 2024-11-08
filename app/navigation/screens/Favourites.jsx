import { Text, View } from "react-native";

export default function Favourites({navigation}) {
  return (
    <View>
      <Text
        onPress={() => navigation.navigate('Main')}
      >
        Избранное1
      </Text>
    </View>
  );
}
