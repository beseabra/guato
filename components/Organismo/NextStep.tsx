import { StackTypesTabs } from "@/app/(tabs)/_layout";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "expo-router";
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
  iconSelected: string | null;
}

const NextStep: React.FC<NextStepProps> = ({
  NumberUnits,
  NumberBedrooms,
  price,
  title,
  iconSelected,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [timeSelected, setTimeSelected] = useState<string | null>(null);
  const [dateSelected, setDateSelected] = useState<string | null>(null);

  const navigation = useNavigation<StackTypesTabs>();

  const total = NumberUnits * price + NumberBedrooms * price;
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const saveDraft = async () => {
    if (!iconSelected) {
      Alert.alert("Select a property type.");
      return;
    }
    if (!timeSelected || !dateSelected) {
      Alert.alert("Select a date and time.");
      return;
    }

    try {
      const id = UUID.v4();
      const business = "Westinghouse";
      const currentDate = new Date();
      let selectedDate = null;

      if (dateSelected) {
        const [month, day, year] = dateSelected.split("/");
        selectedDate = new Date(Number(year), Number(month) - 1, Number(day));
      }

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
      navigation.navigate("index");
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
