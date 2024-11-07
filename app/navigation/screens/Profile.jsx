import { Text, View } from "react-native";
// import * as React from 'react';

export default function Profile({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('Main')}>
        Профиль
      </Text>
    </View>
  );
}
