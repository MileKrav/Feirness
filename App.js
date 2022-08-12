import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginComponent from "./components/Login/LoginComponent";
import AdminComponent from "./components/Admin/AdminComponent";
import RefereeComponent from "./components/Referee/RefereeComponent";
import SuperAdminComponent from "./components/Admin/SuperAdmin";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginComponent} />
        <Stack.Screen name="Referee" component={RefereeComponent} />
        <Stack.Screen name="Admin" component={AdminComponent} />
        <Stack.Screen name="SuperAdmin" component={SuperAdminComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
