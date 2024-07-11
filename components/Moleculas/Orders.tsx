import { Draft } from "@/app/(tabs)/explore";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface OrderProps {
  filteredDrafts: Draft[];
}

const Order: React.FC<OrderProps> = ({ filteredDrafts }) => {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case "pendente":
        return {
          color: "#EB833C",
          backgroundColor: "#EB833C1A",
        };
      case "confirmado":
        return {
          color: "#7FC09C",
          backgroundColor: "#ECF8F1",
        };
      default:
        return {
          color: "#535763",
          backgroundColor: "#E5E5E5",
        };
    }
  };

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
          <View style={styles.statusContainer}>
            <Text style={styles.statusText}>Status</Text>
            <Text style={[styles.status, getStatusStyles(draft.status)]}>
              {draft.status}
            </Text>
          </View>
          <Text>Time: {draft.timeSelected}</Text>
          <Text>Date: {draft.dateSelected}</Text>
          <Text>Business: {draft.business}</Text>
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
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  statusText: {
    color: "#535763",
  },
  status: {
    padding: 5,
    borderRadius: 5,
  },
});

export default Order;
