import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface RatingContainerProps {
  rating: number;
}

const RatingContainer: React.FC<RatingContainerProps> = ({ rating }) => {
  return (
    <View style={styles.ratingContainer}>
      <AntDesign name="star" size={12} color="#fff" />
      <Text style={styles.imageRatingText}>{rating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FB9450",
    borderRadius: 20,
    padding: 5,
    maxWidth: 47,
  },
  imageRatingText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default RatingContainer;
