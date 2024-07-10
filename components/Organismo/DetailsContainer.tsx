import ImageContainer from "@/components/Moleculas/ImageContainer";
import React from "react";
import { StyleSheet, View } from "react-native";
import Description from "./Description";
import NumberRooms from "./NumberOfRooms";
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
  setUnit: React.Dispatch<React.SetStateAction<number>>;
  setBedrooms: React.Dispatch<React.SetStateAction<number>>;
  unit: number;
  bedroom: number;
}

const DetailsContainer: React.FC<DetailsContainerProps> = ({
  item,
  selectedIcon,
  onIconPress,
  setUnit,
  setBedrooms,
  unit,
  bedroom,
}) => {
  return (
    <View style={styles.container}>
      <ImageContainer item={item} />
      <View style={styles.typeProperty}>
        <PropertyTypeSelector
          selectedIcon={selectedIcon}
          onIconPress={onIconPress}
        />
        <NumberRooms
          setUnits={setUnit}
          setBedrooms={setBedrooms}
          countUnits={unit}
          countBedrooms={bedroom}
        />
        <Description />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    paddingBottom: 20,
  },
  typeProperty: {
    marginTop: -35,
  },
});

export default DetailsContainer;
