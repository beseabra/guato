import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface NumberRoomsProps {
  Setunit: React.Dispatch<React.SetStateAction<number>>;
  Setbedrooms: React.Dispatch<React.SetStateAction<number>>;
  countUnits: number;
  countBedrooms: number;
}

const NumberRooms: React.FC<NumberRoomsProps> = ({
  Setbedrooms,
  Setunit,
  countUnits,
  countBedrooms,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerSelect}>
        <Text style={styles.textRooms}> Number of Units </Text>
        <View style={styles.sectionSelect}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Setunit(countUnits - 1)}
            disabled={countUnits === 0}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.countText}>{countUnits}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Setunit(countUnits + 1)}
            disabled={countUnits === 10}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerSelect}>
        <Text style={styles.textRooms}> Number of Bedrooms </Text>
        <View style={styles.sectionSelect}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Setbedrooms(countBedrooms - 1)}
            disabled={countBedrooms === 0}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.countText}>{countBedrooms}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Setbedrooms(countBedrooms + 1)}
            disabled={countBedrooms === 10}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    margin: 10,
    padding: 15,
  },
  button: {
    backgroundColor: "#6759FF",
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  containerSelect: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  sectionSelect: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
  countText: {
    marginHorizontal: 20,
    fontSize: 20,
  },
  textRooms: {
    fontSize: 16,
  },
});

export default NumberRooms;
