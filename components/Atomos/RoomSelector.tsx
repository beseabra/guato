import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface RoomSelectorProps {
  label: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  maxCount?: number;
}

const RoomSelector: React.FC<RoomSelectorProps> = ({
  label,
  count,
  setCount,
  maxCount = 10,
}) => {
  return (
    <View style={styles.containerSelect}>
      <Text style={styles.textRooms}>{label}</Text>
      <View style={styles.sectionSelect}>
        <TouchableOpacity
          style={count === 0 ? styles.buttonDisabled : styles.button}
          onPress={() => setCount(count - 1)}
          disabled={count === 0}
        >
          <Text
            style={count === 0 ? styles.buttonTextDisabled : styles.buttonText}
          >
            -
          </Text>
        </TouchableOpacity>
        <Text style={styles.countText}>{count}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(count + 1)}
          disabled={count === maxCount}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#6759FF",
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDisabled: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
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
  buttonTextDisabled: {
    color: "#ccc",
    fontSize: 20,
  },
  countText: {
    marginHorizontal: 20,
    fontSize: 20,
  },
  textRooms: {
    fontSize: 16,
  },
  containerIcons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RoomSelector;
