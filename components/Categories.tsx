import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
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
];

export default function Categories() {
  const router = useRouter();
  const theme = useTheme();
  const styles = createStyles(theme.colors);

  return (
    <View>
      <Text variant="headlineLarge" style={styles.categories}>
        Categorias
      </Text>
      <View style={styles.container}>
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
              variant="titleLarge"
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
      </View>
    </View>
  );
}

const createStyles = (colors) =>
  StyleSheet.create({
    categories: {
      padding: 10,
      fontWeight: "bold",
    },
    container: {
      padding: 10,
      flexDirection: "row",
      flexWrap: "wrap",
    },

    category: {
      alignItems: "center",
      padding: 10,
      margin: 10,
      height: 150,
      width: 140,
      //   borderRadius: 10,
      //   borderColor: colors.secondary,
      //   borderWidth: 2,
      //   //   height: 150,
      //   //   width: 500,
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
      color: colors.primary,
      fontWeight: "bold",
      position: "absolute",
      bottom: 0,
    },
    categoryTitleSelected: {
      color: "#fff",
    },
  });
