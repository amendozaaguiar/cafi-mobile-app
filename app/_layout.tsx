import AsyncStorage from "@react-native-async-storage/async-storage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slot, Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  Text,
} from "react-native-paper";
import Toast from "react-native-toast-message";
import useAuthStore from "../storage/AuthStore";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#FF045F",
    secondary: "#FFC100",
    tertiary: "#1E18CF",
  },
};

// Create a client
const queryClient = new QueryClient();

export default function RootLayout() {
  const router = useRouter();
  const { user, loadUser } = useAuthStore();

  useEffect(() => {
    const checkSession = async () => {
      await loadUser();
      if (user) {
        router.replace("/(auth)/home");
      } else {
        router.replace("/onboarding");
      }
    };

    checkSession();
  }, [user]);

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <StatusBar backgroundColor={theme.colors.primary} />
        <Slot />
        <Toast />
      </PaperProvider>
    </QueryClientProvider>
  );
}
