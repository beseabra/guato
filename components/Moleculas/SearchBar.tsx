import React from "react";
import { StyleSheet, TextInput } from "react-native";

interface SearchBarProps {
  text: string;
  onChangeText: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ text, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      value={text}
      onChangeText={onChangeText}
      placeholder="Search Category"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
});

export default SearchBar;
