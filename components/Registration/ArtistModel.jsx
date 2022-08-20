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
       
        <TouchableOpacity>
            <Text style={styles.Btn} onPress={() => navigate1()}>
            Take model photo 
            </Text>
          </TouchableOpacity>
        
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
  export default ArtistModel;

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
    paddingVertical: 15,
    
    
  },
  

  

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
