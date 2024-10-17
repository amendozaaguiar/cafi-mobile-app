import * as React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { useTheme } from "react-native-paper";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { Pagination } from "react-native-reanimated-carousel";

const data = [
  {
    title: "Title 1",
    image: require("../assets/slider/slider.png"),
  },
  {
    title: "Title 2",
    image: require("../assets/slider/slider.png"),
  },
  {
    title: "Title 3",
    image: require("../assets/slider/slider.png"),
  },
];

export default function CarouselHeader() {
  const width = Dimensions.get("window").width;
  const theme = useTheme();

  const styles = createStyles(width, theme.colors);

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        mode="parallax"
        autoPlay={true}
        loop={true}
        autoPlayInterval={5000}
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 100,
        }}
        width={width}
        height={width / 2}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Image source={item.image} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
}

const createStyles = (width, colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      width: width,
      height: width / 2,
      borderRadius: 20,
    },
  });
