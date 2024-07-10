import { ApplianceRepair } from "@/assets/list/ApplianceRepair";
import ImageContainer from "@/components/Moleculas/ImageContainer";
import { useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";

type DetailsProps = {
  itemId: number;
};

const Details: React.FC = () => {
  const { itemId } = useRoute().params as DetailsProps;
  const filteredItems = ApplianceRepair.filter((item) => item.id === itemId);

  return (
    <View style={styles.container}>
      {filteredItems.map((item) => (
        <ImageContainer key={item.id} item={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
});

export default Details;
