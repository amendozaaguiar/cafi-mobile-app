import { ScrollView } from "react-native";
import CarouselHeader from "../../../components/CarouselHeader";
import Categories from "../../../components/Categories";
import Items from "../../../components/Items";
import { SafeAreaView } from "react-native-safe-area-context";
import Promotions from "../../../components/Promotions";
import Footer from "../../../components/Footer";

export default function HomeScreen() {
  return (
    <>
      <ScrollView>
        <CarouselHeader />
        <Categories />
        <Promotions />
        <Items />
      </ScrollView>
      <Footer />
    </>
  );
}
