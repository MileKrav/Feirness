import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet, SafeAreaView } from "react-native";

const LoginComponent = ({ navigation }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  // I'm not sure that is nice implementation, but it works :)
  const navigate1 = () => {
    if (login === "admin") {
      navigation.navigate("Admin");
    } else if (login.length < 1) {
      navigation.navigate("Login");
    } else if (login === "Referee") {
      navigation.navigate("Referee");
    } else if (login === "superAdmin") {
      navigation.navigate("SuperAdmin");
    } else {
      console.log("kek");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput style={styles.TextInput} placeholder="login" onChangeText={(login) => setLogin(login)} />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="password"
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <TouchableOpacity style={styles.forgot_button}>
          <Text>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text onPress={() => navigate1()}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginComponent;

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    height: 45,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 0,
  },

  forgot_button: {
    height: 30,
    marginBottom: 0,
  },

  loginBtn: {
    display: "flex",
    // flex: 1,
    color: "#f3f3f3",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF1493",
    width: 250,
    height: 40,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
