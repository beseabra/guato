import { Draft } from "@/app/(tabs)/explore";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface OrderProps {
  filteredDrafts: Draft[];
}

const Order: React.FC<OrderProps> = ({ filteredDrafts }) => {
  return (
    <>
      {filteredDrafts.map((draft) => (
        <View key={draft.id} style={styles.draftContainer}>
          <View style={styles.nameReference}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="hair-dryer"
                size={24}
                color="black"
              />
            </View>
            <View>
              <Text style={styles.draftTitle}>{draft.title}</Text>
              <Text>Reference Code: #D-{draft.id.slice(0, 5)}</Text>
            </View>
          </View>

          <Text>Time: {draft.timeSelected}</Text>
          <Text>Date: {draft.dateSelected}</Text>
          <Text>Business: {draft.business}</Text>
          <Text>Status: {draft.status}</Text>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  draftContainer: {
    padding: 15,
    marginBottom: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  draftTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  iconContainer: {
    backgroundColor: "#FFBC99",
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  nameReference: {
    flexDirection: "row",
    gap: 10,
    borderBottomColor: "#E5E5E5",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
});

export default Order;
