import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button } from "@rneui/themed";
import { NavigationProp } from "@react-navigation/native";

export default function B1Page({ navigation }: { navigation: NavigationProp<any> }) {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={require("./../assets/B1PageBG.png")}
        style={styles.background}
      >
        {/* Logo */}
        <View style={styles.logoContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("B2Page")}>
            <Image source={require("./../assets/homeHuman.png")} style={styles.logo} />
          </TouchableOpacity>
        </View>
        <Text style={styles.text1}>HOPE FOR </Text>
        <Text style={styles.text2}>HUMANITY </Text>
        <Text style={styles.text3}>Welcome to  </Text>
        <Text style={styles.text4}>hope for humanity  </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  logoContainer: {
    // alignItems: "",
    marginBottom: 4,
    marginTop: 300,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  brandText: {
    fontSize: 24,
    color: "#000",
  },
  buttonContainer: {
    width: "80%",
    marginBottom: 20,
  },
  text1: {
    fontSize: 37,
    color: "white",
    fontFamily: "tahoma",
   
  },
  text2: {
    fontSize: 37,
    color: "white",
    fontFamily: "tahoma",
    fontWeight: "bold",
    
  },
  text3: {
    marginTop: 170,
    fontSize: 30,
    color: "green",
    fontFamily: "tahoma",
    fontWeight: "bold",
   
  },
  text4: {
    
    fontSize: 30,
    color: "green",
    fontFamily: "tahoma",
    fontWeight: "bold",
   
  },
});
