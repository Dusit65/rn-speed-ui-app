import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Button, Icon } from "@rneui/themed";
import { NavigationProp } from "@react-navigation/native";

export default function B2Page({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require("./../assets/homeHuman.png")}
          style={styles.logo}
        />
      </View>
      <View style={{ height: 20 }} /> {/* sizeBox */}
      {/* Signin Text */}
      <Text style={styles.signinText}>Sign in your account</Text>
      <View style={{ height: 30 }} /> {/* sizeBox */}
      {/* Email Text */}
      <Text style={styles.inputText}>Email</Text>
      {/* Email Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter your email" style={styles.input} />
      </View>
      {/* Password Text */}
      <Text style={styles.inputText}>Password</Text>
      {/* Password Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your password"
          secureTextEntry
          style={styles.input}
        />
      </View>
      <View style={{ height: 30 }} /> {/* sizeBox */}
      {/* Signin Button */}
      <Button title="SIGN IN" buttonStyle={styles.loginButton} />
      <View style={{ height: 20 }} /> {/* sizeBox */}
      {/* Social Login */}
      <Text style={styles.orText}>Or Login with</Text>
      <View style={{ height: 20 }} /> {/* sizeBox */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require("./../assets/facebook.png")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require("./../assets/google.png")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require("./../assets/twitter.png")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={{ height: 50 }} /> {/* sizeBox */}
      {/* SIGN UP  Link*/}
      <View style={styles.sigupDirection}>
              <Text style={styles.registerText}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("B2Page")}>
                <Text style={styles.registerLink}>SIGN IN </Text>
              </TouchableOpacity>
            </View>
          </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 50,
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 1,
  },
  logo: {
    borderWidth: 1,
    borderColor: "#00b140",
    borderRadius: 20,

    marginTop: 10,
    // marginBottom: 10,
  },
  signinText: {
    fontSize: 30,
    fontFamily: "tahoma",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 50,
    fontFamily: "tahoma",
  },
  inputText: {
    // flex: 1,
    color: "grey",
    fontFamily: "tahoma",
    marginLeft: 10,
    marginBottom: 5,
  },
  eyeIcon: {
    marginLeft: 10,
  },
  forgotPassword: {
    textAlign: "right",
    color: "gray",
    marginBottom: 20,
    fontFamily: "tahoma",
  },
  loginButton: {
    backgroundColor: "#00b140",
    paddingVertical: 12,
    borderRadius: 10,
    fontFamily: "tahoma",
  },
  orText: {
    textAlign: "center",
    color: "grey",
    marginVertical: 15,
    fontFamily: "tahoma",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 60,
  },
  socialButton: {
    backgroundColor: "#F5F5F5",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  registerText: {
    textAlign: "center",
    // marginTop: 5,
    color: "gray",
  },
  registerLink: {
    color: "#00b140",
    fontWeight: "bold",
  },
  linedirection: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  line: {
    // flex: ,
    height: 1,
    backgroundColor: "#D3D3D3", // Lighter gray color
    marginHorizontal: 10,
    marginTop: 50,
  },
  sigupDirection: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 100,
  },
});
