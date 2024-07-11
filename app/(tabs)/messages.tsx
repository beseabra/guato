import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";

export default function Messages() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.text}>You have no new messages.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    marginTop: 200,
    fontSize: 30,
  },
});
