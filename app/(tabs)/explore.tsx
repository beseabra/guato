import Title from "@/components/Atomos/title";
import NoUpcomingOrder from "@/components/Moleculas/NoUpcomingOrder";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Explore = () => {
  const [drafts, setDrafts] = useState<any[]>([]);
  const [selectedButton, setSelectedButton] = useState<
    "Upcoming" | "History" | "Draft"
  >("Upcoming");

  useEffect(() => {
    const fetchDrafts = async () => {
      try {
        const savedDrafts = await AsyncStorage.getItem("drafts");
        if (savedDrafts) {
          setDrafts(JSON.parse(savedDrafts));
        }
      } catch (error) {
        console.error("Failed to load drafts", error);
      }
    };

    fetchDrafts();
  }, []);
  console.log(drafts);

  const parseDate = (dateString: string) => {
    const [month, day, year] = dateString.split("/").map(Number);
    return new Date(year, month - 1, day);
  };

  const filterDrafts = () => {
    const today = new Date();
    switch (selectedButton) {
      case "Upcoming":
        return drafts.filter((draft) => {
          const draftDate = parseDate(draft.dateSelected);
          return draftDate.toDateString() === today.toDateString();
        });
      case "History":
        return drafts;
      case "Draft":
        return drafts;
      default:
        return [];
    }
  };

  const filteredDrafts = filterDrafts();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Title title="Booking" />
        <View style={styles.containerButton}>
          {["Upcoming", "History", "Draft"].map((btn) => (
            <TouchableOpacity
              key={btn}
              style={[
                styles.button,
                selectedButton === btn && styles.buttonSelected,
              ]}
              onPress={() =>
                setSelectedButton(btn as "Upcoming" | "History" | "Draft")
              }
            >
              <Text
                style={[
                  styles.textButton,
                  selectedButton === btn && styles.textButtonSelected,
                ]}
              >
                {btn}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {filteredDrafts.length === 0 ? (
          <NoUpcomingOrder
            title={
              selectedButton === "Draft"
                ? "No Draft"
                : selectedButton === "History"
                ? "No Order"
                : "No Upcoming Order"
            }
          />
        ) : (
          filteredDrafts.map((draft) => (
            <View key={draft.id} style={styles.draftContainer}>
              <Text style={styles.draftTitle}>{draft.title}</Text>
              <Text>ID: {draft.id}</Text>
              <Text>Time: {draft.timeSelected}</Text>
              <Text>Date: {draft.dateSelected}</Text>
              <Text>Business: {draft.business}</Text>
              <Text>Status: {draft.status}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
    marginTop: 30,
  },
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
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    minWidth: 80,
  },
  textButton: {
    color: "#535763",
    fontWeight: "bold",
  },
  buttonSelected: {
    backgroundColor: "#6759FF1A",
  },
  textButtonSelected: {
    color: "#6759FF",
  },
  containerButton: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
    marginVertical: 15,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
  },
});

export default Explore;
