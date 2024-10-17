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
import useAuthStore from "../../storage/AuthStore";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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

export default function AuthLayout() {
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

  if (!user) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <PaperProvider theme={theme}>
          <SafeAreaView>
            <StatusBar backgroundColor={theme.colors.primary} />
            <Header user={user} />
            <Slot />
            <Toast />
          </SafeAreaView>
        </PaperProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
