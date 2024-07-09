import React from "react";
import { StyleSheet, View } from "react-native";
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
}

const ItemList: React.FC<ItemListProps> = ({ items, onPressItem }) => {
  return (
    <View style={styles.containerList}>
      {items.map((item, index) => (
        <ListItem
          key={index}
          item={item}
          onPress={() => onPressItem(item.id)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  containerList: {
    marginTop: 10,
  },
});

export default ItemList;
