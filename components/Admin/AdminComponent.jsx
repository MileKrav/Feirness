import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
  Button,
} from "react-native";

const AdminComponent = ({ navigation }) => {
  const Judge = () => {
    navigation.navigate("Judge");
  };
  const ArtistModel = () => {
    navigation.navigate("ArtistModel");
  };
  const Refere = () => {
    navigation.navigate("Refere");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <TouchableOpacity style={styles.roundButton2}>
          <Text onPress={() => ArtistModel()}>Register model/artist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton2}>
          <Text onPress={() => Judge()}>Register Judje</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton2}>
          <Text onPress={() => Refere()}>Edit Model</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton2}>
          <Text onPress={() => navigate1()}>Edit Judje</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton2}>
          <Text onPress={() => navigate1()}>Status Page</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton2}>
          <Text onPress={() => navigate1()}>Results</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton2}>
          <Text onPress={() => navigate1()}>Super admin</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 3,
    top: 100,
    justifyContent: "space-between",
    alignItems: "center",
  },
  scrollview: {
    //backgroundColor: "pink",
    marginHorizontal: 20,
  },

  roundButton2: {
    marginTop: 20,
    width: 250,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#ccc",
  },
});

export default AdminComponent;
