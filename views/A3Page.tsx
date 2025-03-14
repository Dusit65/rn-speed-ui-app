import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { Button, Icon } from "@rneui/themed";

export default function A3Page() {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton}>
        <Icon name="chevron-left" type="feather" size={24} color="black" />
      </TouchableOpacity>
      <View style={{ height: 40 }} /> {/* sizeBox */}
      {/* Title & Subtitle */}
      <Text style={styles.title}>Forgot Password?</Text>
      <View style={{ height: 10 }} /> {/* sizeBox */}
      <Text style={styles.subtitle}>
        Don't worry! It occurs. Please enter the email address linked with your account.
      </Text>
      <View style={{ height: 40 }} /> {/* sizeBox */}
      {/* Email Input */}
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter your email" style={styles.input} />
      </View>
      <View style={{ height: 30 }} /> {/* sizeBox */}
      {/* Send Code Button */}
      <Button title="Send Code" buttonStyle={styles.sendCodeButton} />
      <View style={{ height: 400 }} /> {/* sizeBox */}
      {/* Login Link */}
      <Text style={styles.loginText}>
        Remember Password?{" "}
        <Text style={styles.loginLink}>Login</Text>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    paddingHorizontal: 15,
    justifyContent: "center",
    height: 50,
    marginBottom: 20,
  },
  input: {
    height: "100%",
  },
  sendCodeButton: {
    backgroundColor: "#1E1E1E",
    paddingVertical: 12,
    borderRadius: 10,
    width: "100%",
    height: 65,
  },
  loginText: {
    textAlign: "center",
    marginTop: 20,
    color: "gray",
  },
  loginLink: {
    color: "#01f5df",
    fontWeight: "bold",
  },
});
