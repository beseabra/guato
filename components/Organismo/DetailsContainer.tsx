import ImageContainer from "@/components/Moleculas/ImageContainer";
import React from "react";
import { StyleSheet, View } from "react-native";
import PropertyTypeSelector from "./PropertyTypeSelector";

interface DetailsContainerProps {
  item: {
    id: number;
    name: string;
    image: any;
    rating: number;
  };
  selectedIcon: string | null;
  onIconPress: (iconName: string) => void;
}

const DetailsContainer: React.FC<DetailsContainerProps> = ({
  item,
  selectedIcon,
  onIconPress,
}) => {
  return (
    <View style={styles.container}>
      <ImageContainer item={item} />
      <PropertyTypeSelector
        selectedIcon={selectedIcon}
        onIconPress={onIconPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
});

export default DetailsContainer;
