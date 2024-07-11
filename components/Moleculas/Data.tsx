import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomCalendar from "../Atomos/Calendar";

interface DataProps {
  setDateTime: React.Dispatch<React.SetStateAction<string | null>>;
}

const Data: React.FC<DataProps> = ({ setDateTime }) => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDatePress = (date: string) => {
    setSelectedDate(date);
    setIsCalendarVisible(false);
    setDateTime(date);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setIsCalendarVisible(true)}
      >
        <Feather name="calendar" size={24} color="black" />
        <View>
          <Text style={styles.title}>DATE</Text>
          <Text style={styles.subtitle}>
            {selectedDate ? selectedDate : "Select your Date"}
          </Text>
        </View>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isCalendarVisible}
        onRequestClose={() => setIsCalendarVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <CustomCalendar
              onDayPress={(day) => {
                const formattedDate = new Date(
                  day.dateString
                ).toLocaleDateString("en-US");
                handleDatePress(formattedDate);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFBC99",
    borderRadius: 10,
    margin: 10,
    padding: 15,
    flexDirection: "row",
    gap: 10,
  },
  title: {
    fontSize: 12,
    color: "#6F767E",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
});

export default Data;
