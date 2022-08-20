import React from "react";
import { Text, StatusBar, View } from "react-native-web";
import Judges from "../../api/database/Judges.json";
import Models from "../../api/database/Models.json";

const RefereeComponent = () => {
  console.log("🚀 ~ file: RefereeComponent.jsx ~ line 4 ~ Models", Models);
  return (
    <View>
      <StatusBar style="auto" />
      <Text>Referee Component</Text>
      {JSON.stringify(Models, 2, null)}
      {JSON.stringify(Judges, 2, null)}
    </View>
  );
};

export default RefereeComponent;
