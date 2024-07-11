import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Button from "../Atomos/Button";
import BillDetails from "../Moleculas/BillDetails";
import CustomModal from "../Organismo/CustomModal";

const NextStep: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [timeSelected, setTimeSelected] = useState<string | null>(null);
  const [dateSelected, setDateSelected] = useState<string | null>(null);

  console.log("TESTE", timeSelected, dateSelected);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <BillDetails
        total="USD 150.50"
        room="USD 100.00"
        service="USD 50.50"
        title="Bill Details"
      />
      <View style={styles.containerButtons}>
        <Button
          name="Save Draft"
          onPress={() => console.log("Next")}
          color="#fff"
          border={1}
        />
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
