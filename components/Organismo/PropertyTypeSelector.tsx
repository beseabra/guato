import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import Title from "../Atomos/title";
import IconOption from "./IconOption";

interface PropertyTypeSelectorProps {
  selectedIcon: string | null;
  onIconPress: (iconName: string) => void;
}

const PropertyTypeSelector: React.FC<PropertyTypeSelectorProps> = ({
  selectedIcon,
  onIconPress,
}) => {
  return (
    <View style={styles.containerTypes}>
      <Title title="Type of Property" />
      <View style={styles.typePropertyIcons}>
        <IconOption
          iconName="home"
          iconComponent={<Feather name="home" size={24} />}
          isSelected={selectedIcon === "home"}
          onPress={() => onIconPress("home")}
        >
          Home
        </IconOption>
        <IconOption
          iconName="office"
          iconComponent={
            <MaterialCommunityIcons name="office-building-outline" size={24} />
          }
          isSelected={selectedIcon === "office"}
          onPress={() => onIconPress("office")}
        >
          Office
        </IconOption>
        <IconOption
          iconName="villa"
          iconComponent={<MaterialIcons name="villa" size={24} />}
          isSelected={selectedIcon === "villa"}
          onPress={() => onIconPress("villa")}
        >
          Villa
        </IconOption>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerTypes: {
    backgroundColor: "#fff",
    width: 342,
    borderRadius: 10,
    margin: 10,
    marginBottom: 0,
    height: 174,
    padding: 15,
  },
  typePropertyIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30,
  },
});

export default PropertyTypeSelector;
