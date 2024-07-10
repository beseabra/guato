import { ApplianceRepair } from "@/assets/list/ApplianceRepair";
import { AntDesign } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, View } from "react-native";

type DetailsProps = {
  itemId: number;
};

export default function Details() {
  const { itemId } = useRoute().params as DetailsProps;

  const filteredItems = ApplianceRepair.filter((item) => item.id === itemId);

  return (
    <View style={styles.container}>
      {filteredItems.map((item) => (
        <View key={item.id} style={styles.imageContainer}>
          <Image source={item.image} style={styles.imageList} />
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.8)"]}
            style={styles.gradient}
          />
          <View style={styles.imageTextContainer}>
            <View style={styles.ratingContainer}>
              <AntDesign name="star" size={12} color="#fff" />
              <Text style={styles.imageRatingText}>{item.rating}</Text>
            </View>
            <Text style={styles.imageText}>{item.name}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  imageContainer: {
    position: "relative",
  },
  imageList: {
    width: "100%",
    height: 255,
  },
  imageTextContainer: {
    position: "absolute",
    top: 130,
    left: 10,
    padding: 5,
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 255,
  },
  imageText: {
    color: "white",
    fontSize: 28,
    maxWidth: 203,
    fontWeight: "bold",
  },
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
