import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { Button, Text, useTheme } from "react-native-paper";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";

const categories = [
  {
    title: "Helados",
    image: require("../assets/categories/category-1.png"),
  },
  {
    title: "Calientes",
    image: require("../assets/categories/category-2.png"),
  },
  {
    title: "Té",
    image: require("../assets/categories/category-3.png"),
  },
  {
    title: "Frappe",
    image: require("../assets/categories/category-4.png"),
  },
  {
    title: "Helados",
    image: require("../assets/categories/category-1.png"),
  },
  {
    title: "Calientes",
    image: require("../assets/categories/category-2.png"),
  },
  {
    title: "Té",
    image: require("../assets/categories/category-3.png"),
  },
  {
    title: "Frappe",
    image: require("../assets/categories/category-4.png"),
  },
];

export default function Categories() {
  const router = useRouter();
  const theme = useTheme();
  const styles = createStyles(theme.colors);

  return (
    <View>
      <Text variant="headlineLarge" style={styles.categories}>
        Categories
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false} // Oculta el indicador de scroll
        contentContainerStyle={styles.scrollContainer} // Aplica padding al contenido del scroll
      >
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={
              index === categories.length - 1
                ? [styles.category, styles.categorySelected]
                : styles.category
            }
            onPress={() => {
              if (category.title === "Frappe") {
                router.push("/(auth)/category");
                return;
              }

              Toast.show({
                type: "info",
                text1: "Acceso denegado",
                text2: `Esta categoría ${category.title} no está disponible`,
              });
            }}
          >
            <Image source={category.image} />
            <Text
              style={
                index === categories.length - 1
                  ? [styles.categoryTitle, styles.categoryTitleSelected]
                  : styles.categoryTitle
              }
            >
              {category.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const createStyles = (colors) =>
  StyleSheet.create({
    categories: {
      padding: 10,
      fontWeight: "bold",
    },
    scrollContainer: {
      //   padding: 10,
    },
    container: {
      flexDirection: "row",
    },
    category: {
      alignItems: "center",
      padding: 10,
      margin: 10,
      height: 110,
    },
    categorySelected: {
      backgroundColor: colors.primary,
      borderRadius: 10,
      color: "#fff",
    },
    categoryImage: {
      width: 70,
      height: 70,
    },
    categoryTitle: {
      fontWeight: "light",
      position: "absolute",
      bottom: 10,
    },
    categoryTitleSelected: {
      fontWeight: "bold",
      color: "#fff",
    },
  });
