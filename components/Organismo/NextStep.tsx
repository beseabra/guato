import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import UUID from "react-native-uuid";
import Button from "../Atomos/Button";
import BillDetails from "../Moleculas/BillDetails";
import CustomModal from "../Organismo/CustomModal";

interface NextStepProps {
  NumberUnits: number;
  NumberBedrooms: number;
  price: number;
  title: string;
}

const NextStep: React.FC<NextStepProps> = ({
  NumberUnits,
  NumberBedrooms,
  price,
  title,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [timeSelected, setTimeSelected] = useState<string | null>(null);
  const [dateSelected, setDateSelected] = useState<string | null>(null);

  const total = NumberUnits * price + NumberBedrooms * price;

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const saveDraft = async () => {
    try {
      const id = UUID.v4();
      const business = "Westinghouse";
      const currentDate = new Date();
      const selectedDate = dateSelected ? new Date(dateSelected) : null;
      let status = "pendente";

      if (selectedDate) {
        if (selectedDate.toDateString() === currentDate.toDateString()) {
          status = "confirmado";
        } else if (selectedDate < currentDate) {
          status = "cancelado";
        }
      }

      const draft = {
        id,
        title,
        timeSelected,
        dateSelected,
        business,
        status,
      };

      const existingDrafts = await AsyncStorage.getItem("drafts");
      const drafts = existingDrafts ? JSON.parse(existingDrafts) : [];
      drafts.push(draft);

      await AsyncStorage.setItem("drafts", JSON.stringify(drafts));
      Alert.alert("Draft saved successfully!");
    } catch (error) {
      Alert.alert("Failed to save draft.");
    }
  };

  return (
    <View style={styles.container}>
      <BillDetails
        total={total}
        room={`USD ${NumberUnits * price}`}
        service={`USD ${NumberBedrooms * price}`}
        title="Bill Details"
      />
      <View style={styles.containerButtons}>
        <Button name="Save Draft" onPress={saveDraft} color="#fff" border={1} />
        <Button
          name="Book Now"
          onPress={openModal}
          color="#6759FF"
          border={0}
        />
      </View>
      <CustomModal
        visible={modalVisible}
        onClose={closeModal}
        setDate={setDateSelected}
        setTime={setTimeSelected}
        date={dateSelected}
        time={timeSelected}
        total={total}
        room={`USD ${NumberUnits * price}`}
        service={`USD ${NumberBedrooms * price}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    elevation: 10,
    zIndex: 1000,
    backgroundColor: "#FFF",
    justifyContent: "flex-start",
    paddingTop: 15,
    gap: 20,
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginBottom: 20,
  },
});

export default NextStep;
