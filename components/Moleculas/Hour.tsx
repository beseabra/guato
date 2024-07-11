import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TimePicker from "../Atomos/Time";

interface HourProps {
  setDateTime: React.Dispatch<React.SetStateAction<string | null>>;
}

const Hour: React.FC<HourProps> = ({ setDateTime }) => {
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleConfirm = (time: string) => {
    setSelectedTime(time);
    setDateTime(time);
    setIsPickerVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setIsPickerVisible(true)}
      >
        <Feather name="clock" size={24} color="black" />
        <View>
          <Text style={styles.title}>TIME</Text>
          <Text style={styles.subtitle}>
            {selectedTime ? selectedTime : "Select your Time"}
          </Text>
        </View>
      </TouchableOpacity>

      {isPickerVisible && (
        <TimePicker
          visible={isPickerVisible}
          onClose={() => setIsPickerVisible(false)}
          onConfirm={handleConfirm}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#B5E4CA",
    borderRadius: 10,
    margin: 10,
    padding: 15,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 12,
    color: "#6F767E",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Hour;
