import { Text, View } from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-300" >
      <Text className="text-3xl font-pbold">Nope i wont</Text>
      <StatusBar style="auto" />
      <Link href="/sign-in" style={{ color: 'blue' }}>Go to auth</Link>
    </View>
  );
}
