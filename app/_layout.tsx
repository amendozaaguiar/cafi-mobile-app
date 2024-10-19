import AsyncStorage from "@react-native-async-storage/async-storage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slot, Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  Text,
} from "react-native-paper";
import Toast from "react-native-toast-message";
import useAuthStore from "../storage/AuthStore";
import * as SplashScreen from "expo-splash-screen";
import theme from "../constants/Theme";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout() {
  const router = useRouter();
  const { user, loadUser } = useAuthStore();

  useEffect(() => {
    async function prepare() {
      try {
        await loadUser();
        if (user) {
          router.replace("/(auth)/home");
        } else {
          router.replace("/onboarding");
        }
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, [user]);

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <Slot />
        <Toast />
      </PaperProvider>
    </QueryClientProvider>
  );
}
