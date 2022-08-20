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


const AdminComponent = ({navigation}) => {
  const Judgee = () =>{
    navigation.navigate("Judge");
  }
  const ArtistModel = () =>{
    navigation.navigate("ArtistModel");
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View>
       <TouchableOpacity>
          <Text style={styles.Btn} onPress={() => ArtistModel()}>
          Register model/artist
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Btn} onPress={() => Judgee()}>
          Register Judje
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Btn} onPress={() => navigate1()}>
          Edit Model
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Btn} onPress={() => navigate1()}>
          Edit Judje
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Btn} onPress={() => navigate1()}>
          Status Page
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Btn} onPress={() => navigate1()}>
          Results
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Btn} onPress={() => navigate1()}>
          Super admin
          </Text>
        </TouchableOpacity>
      
      
      </View>
    <StatusBar style='auto'/>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display:"flex",
    gap: 3,
    top: 100,
    justifyContent: "space-between",
    alignItems: "center",
    
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
    
    
    
  }
})

export default AdminComponent;
