import * as React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { useTheme } from "react-native-paper";
import Carousel from "react-native-reanimated-carousel";

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
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const width = Dimensions.get("window").width;
  const theme = useTheme();

  const styles = createStyles(width, theme.colors);

  console.log("currentIndex", currentIndex);

  return (
    <View>
      <Carousel
        onSnapToItem={(index) => setCurrentIndex(index)}
        mode="parallax"
        autoPlay={true}
        loop={true}
        autoPlayInterval={2000}
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 100,
        }}
        width={width}
        height={width / 2}
        data={data}
        renderItem={({ item }) => (
          <Image source={item.image} style={styles.image} />
        )}
      />

      <View style={styles.dotContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dotStyle,
              {
                marginRight: index === data.length - 1 ? 0 : 5,
                width: index === currentIndex ? 40 : 10,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const createStyles = (width, colors) =>
  StyleSheet.create({
    image: {
      width: width,
      height: width / 2,
      borderRadius: 20,
    },
    dotContainer: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: width / 2 - 10,
    },
    dotStyle: {
      height: 10,
      borderRadius: 5,
      backgroundColor: colors.secondary,
    },
  });
