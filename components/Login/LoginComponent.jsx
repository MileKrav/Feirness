import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet, SafeAreaView, Image } from "react-native";

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
      return;
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
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginBtn} onPress={() => navigate1()}>
            Login
          </Text>
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

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    display: "flex",
    textAlign: "center",
    color: "#f3f3f3",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF1493",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
