import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Avatar, Button, Card, Icon, Text, useTheme } from "react-native-paper";
import { Rating } from "react-native-ratings";
import Toast from "react-native-toast-message";

const items = [
  {
    title: "Mocha Frappe",
    price: {
      before: 5.99,
      after: 4.99,
    },
    score: 4.5,
    image: require("../assets/items/item-1.png"),
    favorite: true,
  },
  {
    title: "Ice Green Tea",
    price: {
      before: 3.99,
      after: 2.99,
    },
    score: 4.0,
    image: require("../assets/items/item-2.png"),
    favorite: false,
  },
  {
    title: "Hot Expresso",
    price: {
      before: 2.99,
      after: 1.99,
    },
    score: 3.5,
    image: require("../assets/items/item-3.png"),
    favorite: false,
  },
  {
    title: "Amakado Hot",
    price: {
      before: 3.99,
      after: 2.99,
    },
    score: 4.0,
    image: require("../assets/items/item-4.png"),
    favorite: false,
  },
  {
    title: "Mocha Frappe",
    price: {
      before: 5.99,
      after: 4.99,
    },
    score: 4.5,
    image: require("../assets/items/item-1.png"),
    favorite: true,
  },
  {
    title: "Ice Green Tea",
    price: {
      before: 3.99,
      after: 2.99,
    },
    score: 4.0,
    image: require("../assets/items/item-2.png"),
    favorite: false,
  },
  {
    title: "Hot Expresso",
    price: {
      before: 2.99,
      after: 1.99,
    },
    score: 3.5,
    image: require("../assets/items/item-3.png"),
    favorite: false,
  },
  {
    title: "Amakado Hot",
    price: {
      before: 3.99,
      after: 2.99,
    },
    score: 4.0,
    image: require("../assets/items/item-4.png"),
    favorite: false,
  },
  {
    title: "Mocha Frappe",
    price: {
      before: 5.99,
      after: 4.99,
    },
    score: 4.5,
    image: require("../assets/items/item-1.png"),
    favorite: true,
  },
  {
    title: "Ice Green Tea",
    price: {
      before: 3.99,
      after: 2.99,
    },
    score: 4.0,
    image: require("../assets/items/item-2.png"),
    favorite: false,
  },
  {
    title: "Hot Expresso",
    price: {
      before: 2.99,
      after: 1.99,
    },
    score: 3.5,
    image: require("../assets/items/item-3.png"),
    favorite: false,
  },
  {
    title: "Amakado Hot",
    price: {
      before: 3.99,
      after: 2.99,
    },
    score: 4.0,
    image: require("../assets/items/item-4.png"),
    favorite: false,
  },
  {
    title: "Mocha Frappe",
    price: {
      before: 5.99,
      after: 4.99,
    },
    score: 4.5,
    image: require("../assets/items/item-1.png"),
    favorite: true,
  },
  {
    title: "Ice Green Tea",
    price: {
      before: 3.99,
      after: 2.99,
    },
    score: 4.0,
    image: require("../assets/items/item-2.png"),
    favorite: false,
  },
  {
    title: "Hot Expresso",
    price: {
      before: 2.99,
      after: 1.99,
    },
    score: 3.5,
    image: require("../assets/items/item-3.png"),
    favorite: false,
  },
  {
    title: "Amakado Hot",
    price: {
      before: 3.99,
      after: 2.99,
    },
    score: 4.0,
    image: require("../assets/items/item-4.png"),
    favorite: false,
  },
  {
    title: "Mocha Frappe",
    price: {
      before: 5.99,
      after: 4.99,
    },
    score: 4.5,
    image: require("../assets/items/item-1.png"),
    favorite: true,
  },
  {
    title: "Ice Green Tea",
    price: {
      before: 3.99,
      after: 2.99,
    },
    score: 4.0,
    image: require("../assets/items/item-2.png"),
    favorite: false,
  },
  {
    title: "Hot Expresso",
    price: {
      before: 2.99,
      after: 1.99,
    },
    score: 3.5,
    image: require("../assets/items/item-3.png"),
    favorite: false,
  },
  {
    title: "Amakado Hot",
    price: {
      before: 3.99,
      after: 2.99,
    },
    score: 4.0,
    image: require("../assets/items/item-4.png"),
    favorite: false,
  },
  {
    title: "Mocha Frappe",
    price: {
      before: 5.99,
      after: 4.99,
    },
    score: 4.5,
    image: require("../assets/items/item-1.png"),
    favorite: true,
  },
  {
    title: "Ice Green Tea",
    price: {
      before: 3.99,
      after: 2.99,
    },
    score: 4.0,
    image: require("../assets/items/item-2.png"),
    favorite: false,
  },
  {
    title: "Hot Expresso",
    price: {
      before: 2.99,
      after: 1.99,
    },
    score: 3.5,
    image: require("../assets/items/item-3.png"),
    favorite: false,
  },
  {
    title: "Amakado Hot",
    price: {
      before: 3.99,
      after: 2.99,
    },
    score: 4.0,
    image: require("../assets/items/item-4.png"),
    favorite: false,
  },
];

export default function Items() {
  const theme = useTheme();
  const styles = createStyles(theme.colors);

  return (
    <>
      <Text variant="headlineLarge" style={styles.title}>
        Productos
      </Text>
      <View style={styles.container}>
        {items.map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              Toast.show({
                type: "info",
                text1: "Acceso denegado",
                text2: "Esta función no está disponible",
              });
            }}
            key={index}
            style={styles.cardsContainer}
          >
            <Card style={styles.card} mode="contained">
              <TouchableOpacity
                style={styles.heart}
                onPress={() => {
                  Toast.show({
                    type: "info",
                    text1: "Acceso denegado",
                    text2: "Esta función no está disponible",
                  });
                }}
              >
                <Icon
                  source="heart"
                  size={20}
                  color={
                    item.favorite ? theme.colors.primary : "rgba(0, 0, 0, 0.5)"
                  }
                />
              </TouchableOpacity>
              <Card.Cover source={item.image} width={150} height={150} />

              <Card.Content>
                <Text variant="bodyLarge" style={styles.cardTitle}>
                  {item.title}
                </Text>
                <Text variant="bodySmall">
                  Precio:{" "}
                  <Text style={styles.strikethroughText}>
                    {item.price.before}$
                  </Text>{" "}
                  {item.price.after}$
                </Text>
                <Rating
                  type="star"
                  ratingCount={5}
                  imageSize={20}
                  readonly={true}
                  startingValue={item.score}
                  ratingBackgroundColor="#f2f2f2"
                  tintColor="#f2f2f2"
                />
              </Card.Content>
            </Card>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
}

const createStyles = (colors) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    cardsContainer: {
      minWidth: 150,
      padding: 10,
    },
    title: {
      margin: 10,
      fontWeight: "bold",
    },
    heart: {
      position: "absolute",
      top: 0,
      right: 0,
      zIndex: 1,
      padding: 10,
      backgroundColor: "rgba(255, 255, 255, 0.5)",
    },
    strikethroughText: {
      textDecorationLine: "line-through",
    },
    card: {
      margin: 10,
      backgroundColor: "#f2f2f2",
    },
    cardTitle: {
      fontWeight: "bold",
    },
  });
