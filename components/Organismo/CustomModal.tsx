import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import Button from "../Atomos/Button";
import Title from "../Atomos/title";
import BillDetails from "../Moleculas/BillDetails";
import Data from "../Moleculas/Data";
import Hour from "../Moleculas/Hour";

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  setTime: React.Dispatch<React.SetStateAction<string | null>>;
  setDate: React.Dispatch<React.SetStateAction<string | null>>;
  time: string | null;
  date: string | null;
}

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  date,
  setDate,
  setTime,
  time,
}) => {
  const [billSelected, setBillSelected] = useState(false);

  function Confirm() {
    if (time && date) {
      onClose();
    } else {
      alert("Please select a date and time");
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View
          style={[styles.modalContent, { height: billSelected ? 500 : 375 }]}
        >
          <Title title="Select your Date & Time?" />
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <AntDesign name="close" size={24} color="#000" />
          </TouchableOpacity>
          <View style={styles.containerButton}>
            <Data setDateTime={setDate} />
            <Hour setDateTime={setTime} />
          </View>
          <View style={styles.containerDetails}>
            <BillDetails
              total="USD 150.50"
              room="USD 100.00"
              service="USD 50.50"
              setSelect={setBillSelected}
              title="View Details "
            />
          </View>
          <View style={styles.continueButton}>
            <Button
              name="Continue"
              onPress={Confirm}
              color="#EFEFEF"
              border={1}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "100%",
    padding: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#EFEFEF",
    borderRadius: 100,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  containerButton: {
    marginTop: 20,
  },
  continueButton: {
    marginTop: 40,
    alignItems: "center",
  },
  containerDetails: {
    alignItems: "center",
    marginTop: 3,
  },
});

export default CustomModal;
