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

const promotions = [
  {
    title: "50 % OFF",
    image: require("../assets/promotions/promotion-1.png"),
  },
  {
    title: "2x1",
    image: require("../assets/promotions/promotion-2.png"),
  },
  {
    title: "20 % OFF",
    image: require("../assets/promotions/promotion-3.png"),
  },
];

export default function Promotions() {
  const router = useRouter();
  const theme = useTheme();
  const styles = createStyles(theme.colors);

  return (
    <View>
      <Text variant="headlineLarge" style={styles.promotions}>
        Promociones
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false} // Oculta el indicador de scroll
        contentContainerStyle={styles.scrollContainer} // Aplica padding al contenido del scroll
      >
        {promotions.map((promotion, index) => (
          <TouchableOpacity
            key={index}
            style={styles.promotion}
            onPress={() => {
              Toast.show({
                type: "info",
                text1: "Acceso denegado",
                text2: `Esta promoción ${promotion.title} no está disponible`,
              });
            }}
          >
            <Image source={promotion.image} />
            <Text style={styles.promotionTitle}>{promotion.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const createStyles = (colors) =>
  StyleSheet.create({
    promotions: {
      padding: 10,
      fontWeight: "bold",
    },
    scrollContainer: {
      //   padding: 10,
    },
    container: {
      flexDirection: "row",
    },
    promotion: {
      alignItems: "center",
      padding: 10,
      margin: 10,
      height: 110,
    },
    promotionImage: {
      width: 70,
      height: 70,
    },
    promotionTitle: {
      position: "absolute",
      bottom: 0,
      left: 10,
      textAlign: "center",
      backgroundColor: colors.primary,
      color: "white",
      fontWeight: "bold",
      padding: 5,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
    },
  });
