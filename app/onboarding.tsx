import { useRouter } from "expo-router";
import { useRef } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import PagerView from "react-native-pager-view";
import { Button, Text, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const items = [
  {
    image: require("../assets/onboarding/one.png"),
    title: "Best Coffee",
    description:
      "Fugiat labore id fugiat ut. Ad eiusmod irure pariatur minim laborum voluptate esse et consequat culpa. In commodo voluptate voluptate id commodo incididunt aliqua excepteur magna. Labore voluptate cillum consectetur laboris in aliqua aliquip magna. Ea reprehenderit Lorem dolor irure qui proident eu commodo do fugiat culpa elit ad. Aute ex ad ipsum sit proident labore officia. Magna sit sint esse deserunt commodo officia quis incididunt.Fugiat labore id fugiat ut. Ad eiusmod irure pariatur minim laborum voluptate esse et consequat culpa. In commodo voluptate voluptate id commodo incididunt aliqua excepteur magna. Labore voluptate cillum consectetur laboris in aliqua aliquip magna. Ea reprehenderit Lorem dolor irure qui proident eu commodo do fugiat culpa elit ad. Aute ex ad ipsum sit proident labore officia. Magna sit sint esse deserunt commodo officia quis incididunt.Fugiat labore id fugiat ut. Ad eiusmod irure pariatur minim laborum voluptate esse et consequat culpa. In commodo voluptate voluptate id commodo incididunt aliqua excepteur magna. Labore voluptate cillum consectetur laboris in aliqua aliquip magna. Ea reprehenderit Lorem dolor irure qui proident eu commodo do fugiat culpa elit ad. Aute ex ad ipsum sit proident labore officia. Magna sit sint esse deserunt commodo officia quis incididunt.Fugiat labore id fugiat ut. Ad eiusmod irure pariatur minim laborum voluptate esse et consequat culpa. In commodo voluptate voluptate id commodo incididunt aliqua excepteur magna. Labore voluptate cillum consectetur laboris in aliqua aliquip magna. Ea reprehenderit Lorem dolor irure qui proident eu commodo do fugiat culpa elit ad. Aute ex ad ipsum sit proident labore officia. Magna sit sint esse deserunt commodo officia quis incididunt.",
  },
  {
    image: require("../assets/onboarding/two.png"),
    title: "1 Cup Drink",
    description:
      "Deserunt culpa consequat nostrud excepteur irure. Excepteur ad deserunt sint quis elit. Minim duis occaecat id ullamco veniam enim duis eu id nisi aliquip magna. Lorem adipisicing magna incididunt labore id ut quis ipsum consectetur adipisicing occaecat. Consequat amet occaecat sint proident incididunt dolor sint proident occaecat.",
  },
  {
    image: require("../assets/onboarding/three.png"),
    title: "Working Powers",
    description:
      "Proident commodo fugiat est culpa esse id ad. Lorem incididunt dolor qui tempor cupidatat laboris ipsum consectetur exercitation sunt ad in. Esse ipsum laboris officia veniam nulla. Nulla culpa sit eiusmod sit dolor qui ad sit fugiat sunt ad fugiat ad duis. Nisi veniam voluptate anim aliquip duis adipisicing ullamco fugiat proident id commodo. Incididunt sunt sint enim minim minim sint sit Lorem nostrud consectetur esse.",
  },
];

export default function OnboardingScreen() {
  const router = useRouter();

  const viewRef = useRef(null);
  const theme = useTheme();
  const styles = createStyles(theme.colors);

  const handleNext = (index) => {
    if (index === items.length - 1) {
      router.replace("/login");
      return;
    }

    viewRef.current?.setPage(index + 1);
  };

  const handleSkip = () => {
    router.replace("/login");
  };

  return (
    <PagerView style={styles.container} initialPage={0} ref={viewRef}>
      {items.map((item, index) => (
        <SafeAreaView style={styles.page} key={index}>
          <ScrollView style={styles.content}>
            <Image source={item.image} style={styles.image} />
            <Text variant="headlineLarge" style={styles.title}>
              {item.title}
            </Text>
            <Text variant="bodyLarge">{item.description}</Text>
          </ScrollView>
          <View style={styles.buttons} key={index}>
            <Button
              mode="contained"
              onPress={() => handleNext(index)}
              style={styles.button}
            >
              {index === items.length - 1 ? "Finalizar" : "Siguiente"}
            </Button>

            <Button onPress={() => handleSkip()} style={styles.skip}>
              Saltar
            </Button>
          </View>
        </SafeAreaView>
      ))}
    </PagerView>
  );
}

const createStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    page: {
      padding: 10,
      alignItems: "center",
    },
    content: {
      marginBottom: 100,
    },
    title: {
      fontWeight: "bold",
      color: colors.primary,
      alignSelf: "center",
      margin: 10,
    },
    image: {
      borderRadius: 10,
      width: "100%",
      height: 400,
    },
    button: {
      backgroundColor: colors.primary,
    },
    buttons: {
      position: "absolute",
      bottom: 0,
      width: "50%",
      marginBottom: 10,
    },
    skip: {
      marginTop: 10,
      color: colors.tertiary,
    },
  });
