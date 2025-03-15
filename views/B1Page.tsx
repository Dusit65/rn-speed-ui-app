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
          <TouchableOpacity onPress={() => navigation.navigate("A1Page")}>
            <Image source={require("./../assets/homeHuman.png")} />
          </TouchableOpacity>
        </View>
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
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: 300,
    marginBottom: 10,
  },
  brandText: {
    fontSize: 24,
    color: "#000",
  },
  buttonContainer: {
    width: "80%",
    marginBottom: 20,
  },
});
