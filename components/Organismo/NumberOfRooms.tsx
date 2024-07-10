import React from "react";
import { StyleSheet, View } from "react-native";
import RoomSelector from "../Atomos/RoomSelector";

interface NumberRoomsProps {
  setUnits: React.Dispatch<React.SetStateAction<number>>;
  setBedrooms: React.Dispatch<React.SetStateAction<number>>;
  countUnits: number;
  countBedrooms: number;
}

const NumberRooms: React.FC<NumberRoomsProps> = ({
  setUnits,
  setBedrooms,
  countUnits,
  countBedrooms,
}) => {
  return (
    <View style={styles.container}>
      <RoomSelector
        label="Number of Units"
        count={countUnits}
        setCount={setUnits}
      />
      <RoomSelector
        label="Number of Bedrooms"
        count={countBedrooms}
        setCount={setBedrooms}
      />
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
});

export default NumberRooms;
