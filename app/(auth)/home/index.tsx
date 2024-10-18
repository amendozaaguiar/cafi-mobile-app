import { ScrollView } from "react-native";
import CarouselHeader from "../../../components/CarouselHeader";
import Categories from "../../../components/Categories";
import Items from "../../../components/Items";

export default function HomeScreen() {
  return (
    <ScrollView>
      <CarouselHeader />
      <Categories />
      <Items />
    </ScrollView>
  );
}
