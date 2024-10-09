import { Image, StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";

const items = [
  {
    image: require("../assets/onboarding/one.png"),
    title: "First page",
    description: "Swipe ➡️",
  },
  {
    image: require("../assets/onboarding/two.png"),
    title: "Second page",
    description: "Swipe ➡️",
  },
  {
    image: require("../assets/onboarding/three.png"),
    title: "Third page",
    description: "Swipe ➡️",
  },
];

export default function OnboardingScreen() {
  return (
    <PagerView style={styles.container} initialPage={0}>
      {items.map((item, index) => (
        <View style={styles.page} key={index}>
          <Image source={item.image} style={styles.image} />
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>
        </View>
      ))}
    </PagerView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f43",
  },
  image: {
    width: 400,
    height: 400,
    borderRadius: 20,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
});
