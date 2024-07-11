import { Feather, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Title from "../Atomos/title";

interface TitleListProps {
  onListView: () => void;
  onGridView: () => void;
}

const TitleList: React.FC<TitleListProps> = ({ onListView, onGridView }) => {
  return (
    <View style={styles.alignItems}>
      <Title title="Appliance Repair" />
      <View style={styles.alignItems}>
        <TouchableOpacity onPress={onListView}>
          <Feather name="list" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onGridView}>
          <MaterialIcons name="grid-on" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  alignItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
});

export default TitleList;
