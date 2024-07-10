import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Title from "../Atomos/title";

const Description: React.FC = ({}) => {
  const [text, onChangeText] = useState("");
  return (
    <View style={styles.container}>
      <Title title="Description" />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        multiline={true}
        numberOfLines={4}
        textAlignVertical="top"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    margin: 10,
    padding: 15,
  },
  input: {
    height: 160,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 10,
  },
});

export default Description;
