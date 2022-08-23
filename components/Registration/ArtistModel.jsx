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

const ArtistModel = () => {
    return (
      <SafeAreaView style={styles.container}>
        <View>

          <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter Artist name"
           
          />
        </View>
        <View>

            {/* Competition category drop down */}

        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter model name"
           
          />
        </View>
       
        <TouchableOpacity style={styles.Btn}>
            <Text  onPress={() => navigate1()}>
            Take model photo 
            </Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.Btn}>
            <Text  onPress={() => navigate1()}>
            Submit
            </Text>
          </TouchableOpacity>
        
        </View>
      <StatusBar style='auto'/>
    </SafeAreaView>
    );
  };
  export default ArtistModel;

const styles = StyleSheet.create({
  
  inputView: {
    
    backgroundColor: "#ffff",
    borderRadius: 30,
    borderWidth: 1,
    height: 45,
    marginBottom: 15,
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
    
    marginTop: 20,
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
