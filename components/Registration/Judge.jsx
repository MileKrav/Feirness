import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { 
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
  Button
} from "react-native";
//import { auth } from "../config";


 
const Judge = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSighUp = () =>{
  //   auth
  //   .createUserWithEmailAndPassword(email, password)
  //   .then(userCredentials =>{
  //     const user = userCredentials.user;
  //     console.log(user.email);
  //   })
  //   .catch(error => alert(error.massage))
  // }
    return (
      <SafeAreaView style={styles.container}>
        <View>
         {/* <TouchableOpacity style={styles.Btn}>
            <Text  onPress={() => navigate1()}>
            Upload Judge photo
            </Text>
          </TouchableOpacity> */}

          <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter juges name"
           
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Create judges username"
            onChangeText={ text => setEmail(text)}
           
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Create juges password"
            onChangeText={ text => setPassword(text)}
          />
        </View>
        
          <TouchableOpacity style={styles.Btn}>
            <Text  onPress={handleSighUp}>
            Submit
            </Text>
          </TouchableOpacity>
        
        </View>
      <StatusBar style='auto'/>
    </SafeAreaView>
    );
  };
  export default Judge;

const styles = StyleSheet.create({
  
  inputView: {
    backgroundColor: "#ffffff",
    borderRadius: 30,
    borderWidth: 1,
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

 
  Btn: {
    
    margin: 20,
    width: 250,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#ccc",
    
  },
  

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
