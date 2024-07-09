import ItemList from "@/components/Moleculas/ItemList";
import SearchBar from "@/components/Moleculas/SearchBar";
import TitleList from "@/components/Moleculas/titleList";
import { ApplianceRepair } from "@/components/list/ApplianceRepair";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { StackTypes } from "../_layout";

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<StackTypes>();
  const [text, onChangeText] = useState("");

  const filteredItems = ApplianceRepair.filter((item) =>
    item.name.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <SearchBar text={text} onChangeText={onChangeText} />
        <View style={styles.containerComponent}>
          <TitleList />
          <ItemList
            items={filteredItems}
            onPressItem={(id) => {
              navigation.navigate("Details", {
                itemId: id,
              });
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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
  containerComponent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
});

export default HomeScreen;
