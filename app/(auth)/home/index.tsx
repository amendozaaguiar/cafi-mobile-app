import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import useAuthStore from "../../../storage/AuthStore";
import CarouselHeader from "../../../components/CarouselHeader";

export default function HomeScreen() {
  // const { user, clearUser } = useAuthStore();

  return (
    <View>
      <CarouselHeader />
    </View>
  );
}
