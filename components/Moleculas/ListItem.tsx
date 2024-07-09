import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface ListItemProps {
  item: {
    id: number;
    name: string;
    image: any;
    rating: number;
    peopleRated: number;
    price: number;
  };
  onPress: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ item, onPress }) => {
  return (
    <View style={styles.itensList}>
      <Image source={item.image} style={styles.imageList} />
      <View style={styles.itemtListContainer}>
        <View style={styles.containerItemsClassification}>
          <View style={styles.ratingContainer}>
            <AntDesign name="star" size={24} color="#FFC554" />
            <Text style={styles.boldText}>{item.rating}</Text>
            <Text>({item.peopleRated})</Text>
          </View>
          <SimpleLineIcons
            name="options"
            size={24}
            color="#6F767E"
            onPress={onPress}
          />
        </View>
        <Text style={styles.boldText}>{item.name}</Text>
        <Text style={styles.startsFromText}> Starts From </Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itensList: {
    flexDirection: "row",
    gap: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  imageList: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  price: {
    fontWeight: "bold",
    backgroundColor: "#B5E4CA",
    padding: 5,
    borderRadius: 10,
    maxWidth: 50,
    textAlign: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  containerItemsClassification: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 180,
  },
  boldText: {
    fontWeight: "bold",
  },
  itemtListContainer: {
    gap: 3,
  },
  startsFromText: {
    color: "#9A9FA5",
  },
});

export default ListItem;
