import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import useAuthStore from "../../../storage/AuthStore";

export default function HomeScreen() {
  const { user, clearUser } = useAuthStore();

  console.log(user);

  return (
    <SafeAreaView>
      <Text>{user?.email}</Text>
      <Button onPress={() => clearUser()}>Salir</Button>
    </SafeAreaView>
  );
}
