import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from "react-native";
import { Button } from "@rneui/themed";

export default function A1Page() {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={require("./../assets/fruzzLoginBG.png")}
        style={styles.background}
      >
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require("./../assets/homeFruzz.png")}
            style={styles.logo}
          />
          
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <Button title="Login" buttonStyle={styles.loginButton} />
          <Button title="Register" type="outline" buttonStyle={styles.registerButton}  titleStyle={{ color: "black" }} />
        </View>

        {/* Guest Login */}
        <TouchableOpacity>
          <Text style={styles.guestText}>Continue as a guest</Text>
        </TouchableOpacity>
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
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    
    marginTop: 400,
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
  loginButton: {
    backgroundColor: "#1E1E1E",
    paddingVertical: 12,
    borderRadius: 5,
    marginBottom: 10,
  },
  registerButton: {
    borderColor: "#1E1E1E",
    borderWidth: 2,
    paddingVertical: 12,
    borderRadius: 5,
  },
  guestText: {
    color: "#01f5df",
    textDecorationLine: "underline",
    marginTop: 10,
  },
});

