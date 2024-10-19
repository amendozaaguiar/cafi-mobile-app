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
import theme from "../../constants/Theme";
import Footer from "../../components/Footer";

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

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <PaperProvider theme={theme}>
          <StatusBar backgroundColor={theme.colors.primary} />
          <SafeAreaView
            style={{
              flex: 1,
            }}
          >
            <Header user={user} />
            <Slot />
            {/* <Footer /> */}
            <Toast />
          </SafeAreaView>
        </PaperProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
