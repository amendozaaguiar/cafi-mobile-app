import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SafeAreaView>{children}</SafeAreaView>;
}
