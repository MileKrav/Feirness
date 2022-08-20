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

const Judge = () => {
    return (
      <SafeAreaView style={styles.container}>
        <View>
         <TouchableOpacity>
            <Text style={styles.Btn} onPress={() => navigate1()}>
            Upload Judge photo
            </Text>
          </TouchableOpacity>

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
           
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Create juges password"
            
          />
        </View>
        
          <TouchableOpacity>
            <Text style={styles.Btn} onPress={() => navigate1()}>
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

 
  Btn: {
    
    display: "flex",
    color: "#f3f3f3",
    borderRadius: 34,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF1493",
    height: 50,
    marginBottom: 30,
    width: 250,
    
  },
  

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
