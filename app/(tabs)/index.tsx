import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "react-native";

export default function TabOneScreen() {
  return (
    <View className="bg-red-100">
      <Text>Tab One</Text>
      <View className="bg-black" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}
