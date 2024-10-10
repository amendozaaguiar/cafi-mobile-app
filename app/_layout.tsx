import { Slot, Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#FF045F",
    secondary: "#FFC100",
    tertiary: "#1E18CF",
  },
};

export default function RootLayout() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/onboarding");
  }, []);

  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor={theme.colors.primary} />
      <Slot />
    </PaperProvider>
  );
}
