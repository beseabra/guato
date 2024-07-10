import { Feather } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

const Hour: React.FC = () => {
  return (
    <View style={styles.container}>
      <Feather name="calendar" size={24} color="black" />
      <View>
        <Text style={styles.title}>TIME</Text>
        <Text style={styles.subtitle}>Select your Date</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#B5E4CA",
    borderRadius: 10,
    margin: 10,
    padding: 15,
    flexDirection: "row",
    gap: 10,
  },
  title: {
    fontSize: 12,
    color: "#6F767E",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Hour;
