import React from "react";
import { StyleSheet, Text } from "react-native";

interface TitleProps {
  title: string;
}
export default function Title({ title }: TitleProps) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    borderLeftWidth: 5,
    borderLeftColor: "#CABDFF",
    paddingLeft: 10,
  },
});
