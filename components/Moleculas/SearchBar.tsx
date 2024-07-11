import { EvilIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface SearchBarProps {
  text: string;
  onChangeText: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ text, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={onChangeText}
        placeholder="Search Category"
      />
      <View style={styles.icon}>
        <EvilIcons name="search" size={24} color="#fff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "90%",
    marginVertical: 12,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  icon: {
    backgroundColor: "#6759FF",
    padding: 8,
    borderRadius: 8,
    justifyContent: "center",
    alignContent: "center",
    marginVertical: 12,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default SearchBar;
