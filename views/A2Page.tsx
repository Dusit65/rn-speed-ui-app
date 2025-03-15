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

export default function A2Page({ navigation }: { navigation: NavigationProp<any> }) {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("A1Page")}>
        <Icon name="chevron-left" type="feather" size={24} color="black" />
      </TouchableOpacity>
      <View style={{ height: 40 }} /> {/* sizeBox */}
      {/* Welcome Text */}
      <Text style={styles.welcomeText}>
        Welcome back! Glad to see you, Again!
      </Text>
      <View style={{ height: 50 }} /> {/* sizeBox */}
      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter your email" style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your password"
          secureTextEntry
          style={styles.input}
        />
        <Icon
          name="eye"
          type="feather"
          size={18}
          color="gray"
          style={styles.eyeIcon}
        />
      </View>
      {/* Forgot Password */}
      <TouchableOpacity onPress={() => navigation.navigate("A3Page")}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={{ height: 10 }} /> {/* sizeBox */}
      {/* Login Button */}
      <Button title="Login" buttonStyle={styles.loginButton} />
      <View style={{ height: 20 }} /> {/* sizeBox */}
      {/* Social Login */}
      <View style={styles.linedirection}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or Login with</Text>
        <View style={styles.line} />
      </View>
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
            source={require("./../assets/apple.png")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={{ height: 170 }} /> {/* sizeBox */}
      {/* Register Now */}
      <Text style={styles.registerText}>
        Don't have an account?{" "}
        <Text style={styles.registerLink}>Register Now</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
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
  },
  eyeIcon: {
    marginLeft: 10,
  },
  forgotPassword: {
    textAlign: "right",
    color: "gray",
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#1E1E1E",
    paddingVertical: 12,
    borderRadius: 10,
  },
  orText: {
    textAlign: "center",
    color: "#000",
    marginVertical: 15,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 25,
  },
  socialButton: {
    backgroundColor: "#F5F5F5",
    padding: 25,
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
    color: "#01f5df",
    fontWeight: "bold",
  },
  linedirection: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#D3D3D3", // Lighter gray color
    marginHorizontal: 10,
  },
});
