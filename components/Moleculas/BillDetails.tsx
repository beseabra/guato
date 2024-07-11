import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface BillDetailsProps {
  total: number;
  room: string;
  service: string;
  setSelect?: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}

const BillDetails: React.FC<BillDetailsProps> = ({
  total,
  room,
  service,
  setSelect,
  title,
}) => {
  const [containerHeight, setContainerHeight] = useState(116);

  const toggleHeight = () => {
    setContainerHeight((prevHeight) => (prevHeight === 116 ? 232 : 116));
  };

  useEffect(() => {
    if (setSelect) {
      setSelect(containerHeight === 232);
    }
  }, [containerHeight, setSelect]);

  return (
    <View>
      <View style={styles.containerButtons}>
        <Text>Total: USD {total}</Text>
        <TouchableOpacity style={styles.button} onPress={toggleHeight}>
          <Text style={styles.buttonText}>
            {title} {containerHeight === 116 ? "^" : "v"}
          </Text>
        </TouchableOpacity>
      </View>
      {containerHeight === 232 && (
        <View style={styles.containerInfos}>
          <Text>Room: {room}</Text>
          <Text>Service: {service}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
    height: 120,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    marginTop: 10,
  },
});

export default BillDetails;
