import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HelloWorld from "./components/helloWorld";

const Stack = createStackNavigator();

const App = ({ navigation }) => {
  const goToHelloWorld = () => {
    navigation.navigate("HelloWorld");
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HelloWorld"
          component={HelloWorld}
          options={{
            headerTitle: "Mondi was here",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar backgroundColor="#46A29F" />
      <View style={styles.content}>
        <Image
          style={styles.logo}
          source={require("./assets/logo_green.png")}
        />
        <Text style={styles.header1}>Tip Tapp</Text>
        <Text style={[styles.paragraph, styles.gray]}>This is a Test App!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("HelloWorld")}
        >
          <Text style={styles.buttonText}>Get started</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text>Quantum Pulse Consulting © 2024</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    alignItems: "center",
    padding: 10,
  },
  logo: {
    height: 50,
    width: 50,
    alignSelf: "center",
  },
  header1: {
    color: "#46A29F",
    fontWeight: "bold",
    fontSize: 30,
  },
  paragraph: {
    fontSize: 20,
  },
  gray: {
    color: "#555",
  },
  button: {
    backgroundColor: "#46A29F",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default App;
