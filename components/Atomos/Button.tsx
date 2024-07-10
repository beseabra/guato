import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  name: string;
  onPress: () => void;
  color: string;
  border: number;
}

const Button: React.FC<ButtonProps> = ({ name, onPress, color, border }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: color, borderWidth: border }]}
    >
      <Text style={[styles.text, { color: border === 1 ? "#000" : "#fff" }]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 160,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#ccc",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Button;
