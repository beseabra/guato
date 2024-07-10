import { ApplianceRepair } from "@/assets/list/ApplianceRepair";
import DetailsContainer from "@/components/Organismo/DetailsContainer";
import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView } from "react-native";

type DetailsProps = {
  itemId: number;
};

const Details: React.FC = () => {
  const { itemId } = useRoute().params as DetailsProps;
  const filteredItems = ApplianceRepair.filter((item) => item.id === itemId);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const [countUnits, setCountUnits] = useState(0);
  const [countBedrooms, setCountBedrooms] = useState(0);

  console.log("countUnits", countUnits);
  console.log("countBedrooms", countBedrooms);

  const handleIconPress = (iconName: string) => {
    setSelectedIcon(iconName);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {filteredItems.map((item) => (
        <DetailsContainer
          key={item.id}
          item={item}
          selectedIcon={selectedIcon}
          onIconPress={handleIconPress}
          setUnit={setCountUnits}
          setBedrooms={setCountBedrooms}
          unit={countUnits}
          bedroom={countBedrooms}
        />
      ))}
    </ScrollView>
  );
};

export default Details;
