import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ListItem from "./ListItem";

interface ItemListProps {
  items: Array<{
    id: number;
    image: any;
    name: string;
    rating: number;
    peopleRated: number;
    price: number;
  }>;
  onPressItem: (id: number) => void;
  isGridView: boolean;
}

const ItemList: React.FC<ItemListProps> = ({
  items,
  onPressItem,
  isGridView,
}) => {
  if (isGridView) {
    return (
      <ScrollView horizontal contentContainerStyle={styles.gridContainer}>
        {items.map((item, index) => (
          <View key={index} style={styles.gridItem}>
            <ListItem item={item} onPress={() => onPressItem(item.id)} />
          </View>
        ))}
      </ScrollView>
    );
  } else {
    return (
      <View style={styles.listContainer}>
        {items.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <ListItem item={item} onPress={() => onPressItem(item.id)} />
          </View>
        ))}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 10,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    marginTop: 10,
  },
  listItem: {
    width: "100%",
    marginBottom: 10,
  },
  gridItem: {
    width: 200,
    marginRight: 10,
  },
});

export default ItemList;
