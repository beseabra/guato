import { Image, StyleSheet, Text, View } from "react-native";
import Button from "../Atomos/Button";

interface NoUpcomingOrderProps {
  title: string;
}

const NoUpcomingOrder: React.FC<NoUpcomingOrderProps> = ({ title }) => {
  return (
    <View style={styles.containerInfos}>
      <Image
        source={require("../../assets/images/list.png")}
        style={{ width: 86, height: 86 }}
      />
      <Text style={styles.title}>No {title}</Text>
      <Text style={styles.subTitle}>
        Currently you don’t have any {title}. Place and track your orders from
        here.
      </Text>
      <Button
        border={0}
        name="View all services"
        color="#6759FF"
        onPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerInfos: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#535763",
    marginBottom: 20,
  },
});

export default NoUpcomingOrder;
