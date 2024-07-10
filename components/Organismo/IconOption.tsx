import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface IconOptionProps {
  iconName: string;
  iconComponent: React.ReactElement;
  isSelected: boolean;
  onPress: () => void;
  children: React.ReactNode;
}

const IconOption: React.FC<IconOptionProps> = ({
  iconComponent,
  isSelected,
  onPress,
  children,
}) => {
  return (
    <View style={styles.containerIcons}>
      <TouchableOpacity
        style={[
          styles.iconContainer,
          isSelected && styles.selectedIconContainer,
        ]}
        onPress={onPress}
      >
        {React.cloneElement(iconComponent, {
          color: isSelected ? "#fff" : "#D1D3D4",
        })}
      </TouchableOpacity>
      <Text>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    borderWidth: 2,
    borderColor: "#D1D3D4",
    borderRadius: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginBottom: 10,
  },
  selectedIconContainer: {
    backgroundColor: "#6759FF",
    borderColor: "transparent",
  },
  containerIcons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default IconOption;
