import TitleList from "@/components/Moleculas/titleList";
import { ApplianceRepair } from "@/components/list/ApplianceRepair";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function HomeScreen() {
  const [text, onChangeText] = useState("");

  // Filtrar a lista de ApplianceRepair com base no texto de entrada
  const filteredItems = ApplianceRepair.filter((item) =>
    item.name.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={onChangeText}
          placeholder="Search Category"
        />
        <View style={styles.containerComponent}>
          <TitleList />
          {filteredItems.map((item, index) => (
            <View key={index} style={styles.itensList}>
              <Image source={item.image} style={styles.imageList} />
              <View>
                <View style={styles.ratingContainer}>
                  <AntDesign name="star" size={24} color="#FFC554" />
                  <Text style={styles.boldText}>{item.rating}</Text>
                  <Text>({item.peopleRated})</Text>
                </View>
                <Text style={styles.boldText}>{item.name}</Text>
                <Text style={styles.price}>${item.price}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#F9F9F9",
  },
  scrollViewContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  containerComponent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  itensList: {
    flexDirection: "row",
    gap: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  imageList: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  price: {
    fontWeight: "bold",
    backgroundColor: "#B5E4CA",
    padding: 5,
    borderRadius: 10,
    maxWidth: 50,
    textAlign: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  boldText: {
    fontWeight: "bold",
  },
});
