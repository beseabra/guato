import { useRoute } from "@react-navigation/native";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

type DetailsProps = {
  itemId: number;
};

export default function Details() {
  const { itemId } = useRoute().params as DetailsProps;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Detals: {itemId}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#F9F9F9",
  },
});
