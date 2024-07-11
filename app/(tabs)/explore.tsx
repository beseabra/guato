import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const Explore = () => {
  const [drafts, setDrafts] = useState<any[]>([]);

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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {drafts.map((draft) => (
          <View key={draft.id} style={styles.draftContainer}>
            <Text style={styles.draftTitle}>{draft.title}</Text>
            <Text>ID: {draft.id}</Text>
            <Text>Time: {draft.timeSelected}</Text>
            <Text>Date: {draft.dateSelected}</Text>
            <Text>Business: {draft.business}</Text>
            <Text>Status: {draft.status}</Text>
          </View>
        ))}
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
});

export default Explore;
