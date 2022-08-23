import React from "react";
import { Button, TextInput } from "react-native";
import { Text, StatusBar, View, StyleSheet } from "react-native";

const models = [
  {
    model_id: 1,
    authorName: "Author 1",
    category: "category 1",
  },
  {
    model_id: 2,
    authorName: "Author 2",
    category: "category 2",
  },
  {
    model_id: 3,
    authorName: "Author 3",
    category: "category 3",
  },
  {
    model_id: 4,
    authorName: "Author 4",
    category: "category 4",
  },
  {
    model_id: 5,
    authorName: "Author 5",
    category: "category 5",
  },
];

const RefereeComponent = () => {
  const number = 0;

  return (
    <View style={styles.wrapper}>
      <View style={styles.refInfo}>
        <StatusBar style="auto" />
        <Text>Referee Name</Text>
      </View>

      <View>
        <Button title="Scan QR" onPress={() => console.log("scan qr")} />
      </View>

      <View>
        <TextInput style={styles.input}
          onChangeText={() => console.log("smth")}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <Button title="Send" onPress={() => console.log("click send")} />
      </View>

      <View>
        <Text>Unrated models</Text>
        {models.map((model) => (
          <View key={model.model_id}>
            <Text>Model # {model.model_id}</Text>
            <Text>Author {model.authorName}</Text>
            <Text>Category {model.category}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default RefereeComponent;

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    boxShadow: "-10px 0px 13px -7px #ff3f81, 10px 0px 13px -7px #ff3f81, 5px 5px 15px 5px rgba(0,0,0,0)",
    margin: "4rem",
    padding: "2rem",
  },
  refInfo: {
    border: "3px solid #ff3f81",
    padding: "1rem",
    borderRadius: "25%",
  },
});
