import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { LoginComponent } from "./components/LoginComponent";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LoginComponent />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
