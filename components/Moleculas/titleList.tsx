import { Feather, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import Title from "../Atomos/title";

export default function TitleList() {
  return (
    <View style={styles.alignItens}>
      <Title title="Appliance Repair" />
      <View style={styles.alignItens}>
        <Feather name="list" size={24} color="black" />
        <MaterialIcons name="grid-on" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  alignItens: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
});
