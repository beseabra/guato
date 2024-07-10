import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import RatingContainer from "./RatingContainer";

interface ImageContainerProps {
  item: {
    id: number;
    name: string;
    image: any;
    rating: number;
  };
}

const ImageContainer: React.FC<ImageContainerProps> = ({ item }) => {
  return (
    <View style={styles.imageContainer}>
      <ImageBackground source={item.image} style={styles.imageList} />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={styles.gradient}
      />
      <View style={styles.imageTextContainer}>
        <RatingContainer rating={item.rating} />
        <Text style={styles.imageText}>{item.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: "relative",
  },
  imageList: {
    width: "100%",
    height: 255,
    transform: [{ scaleX: -1 }],
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 255,
  },
  imageTextContainer: {
    position: "absolute",
    top: 125,
    left: 10,
    padding: 5,
  },
  imageText: {
    color: "white",
    fontSize: 28,
    maxWidth: 203,
    fontWeight: "bold",
  },
});

export default ImageContainer;
