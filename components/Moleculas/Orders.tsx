import { Draft } from "@/app/(tabs)/explore";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { addHours, format, parse } from "date-fns";
import React from "react";
import { Button, Linking, StyleSheet, Text, View } from "react-native";

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
      {filteredDrafts.map((draft) => {
        const timeSelected = draft.timeSelected;
        let formattedNewTime = "";
        if (timeSelected) {
          try {
            const parsedTime = parse(timeSelected, "HH:mm", new Date());
            const newTime = addHours(parsedTime, 1);
            formattedNewTime = format(newTime, "HH:mm");
          } catch (error) {
            console.error("Error parsing time:", error);
          }
        }

        const dateSelected = draft.dateSelected;
        let formattedDate = "";
        if (dateSelected) {
          try {
            const parsedDate = parse(dateSelected, "M/d/yyyy", new Date());
            formattedDate = format(parsedDate, "dd MMMM");
          } catch (error) {
            console.error("Error parsing date:", error);
          }
        }

        return (
          <View key={draft.id} style={styles.draftContainer}>
            <View style={styles.nameReference}>
              <View style={[styles.iconContainer, styles.iconColor]}>
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
            <View style={styles.rowContainer}>
              <View style={styles.iconContainer}>
                <Feather name="calendar" size={24} color="black" />
              </View>
              <View style={styles.timeSpace}>
                <Text style={styles.containerTime}>
                  {formattedNewTime}, {formattedDate}{" "}
                </Text>
                <Text style={styles.statusText}>Schedule</Text>
              </View>
            </View>
            <View style={[styles.rowContainer, styles.BContainer]}>
              <View style={styles.rowContainer}>
                <View style={styles.iconContainer}>
                  <MaterialCommunityIcons
                    name="crosshairs-gps"
                    size={24}
                    color="#00B1F7"
                  />
                </View>
                <View style={styles.timeSpace}>
                  <Text style={styles.containerTime}>{draft.business}</Text>
                  <Text style={styles.statusText}>Service provider</Text>
                </View>
              </View>
              <Button
                title="Call"
                onPress={() => {
                  const phoneNumber = "4399899855";
                  const phoneUrl = `tel:${phoneNumber}`;
                  Linking.openURL(phoneUrl);
                }}
              />
            </View>
          </View>
        );
      })}
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
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E5E5E5",
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
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  BContainer: {
    justifyContent: "space-between",
    marginTop: 10,
  },
  containerTime: {
    fontSize: 16,
    fontWeight: "bold",
  },
  timeSpace: {
    justifyContent: "flex-start",
    height: 50,
  },
  iconColor: {
    backgroundColor: "#FFBC99",
  },
});

export default Order;
