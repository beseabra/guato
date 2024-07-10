import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Button from "../Atomos/Button";
import CustomModal from "../Organismo/CustomModal";

const NextStep: React.FC = () => {
  const [containerHeight, setContainerHeight] = useState(116);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleHeight = () => {
    setContainerHeight((prevHeight) => (prevHeight === 116 ? 232 : 116));
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={[styles.container, { height: containerHeight }]}>
      <View style={styles.containerButtons}>
        <Text>Total: USD 150.50</Text>
        <TouchableOpacity style={styles.button} onPress={toggleHeight}>
          <Text style={styles.buttonText}>
            Bill Details {containerHeight === 116 ? "^" : "v"}
          </Text>
        </TouchableOpacity>
      </View>
      {containerHeight === 232 && (
        <View style={styles.containerInfos}>
          <Text>Room: USD 100.00</Text>
          <Text>Service: USD 50.50</Text>
        </View>
      )}
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
      <CustomModal visible={modalVisible} onClose={closeModal} />
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
  button: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    height: 20,
  },
  buttonText: {
    color: "#FC944D",
    fontSize: 18,
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },
  containerInfos: {
    height: 95,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
  },
});

export default NextStep;
