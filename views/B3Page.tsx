import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Button, CheckBox } from "@rneui/themed";

export default function B2Page() {
  return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
                <Image
                  source={require("./../assets/homeHuman.png")}
                  style={styles.logo}
                />
              </View>
      
      {/* Signin Text */}
      <Text style={styles.signinText}>Create your account</Text>
      <View style={{ height: 30 }} /> {/* sizeBox */}
      {/* Name Text */}
      <Text style={styles.inputText}>Name</Text>
      {/* Name Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput placeholder="ex: jon smith" style={styles.input} />
      </View>
      {/* Email Text */}
      <Text style={styles.inputText}>Email</Text>
      {/* Email Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput placeholder="ex: jon.smith@email.com" style={styles.input} />
      </View>
      {/* Password Text */}
      <Text style={styles.inputText}>Password</Text>
      {/* Password Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="**************"
          secureTextEntry
          style={styles.input}
        />
      </View>
      {/* Confirm Password Text */}
      <Text style={styles.inputText}>Confirm Password</Text>
      {/* Confirm Password Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="**************"
          secureTextEntry
          style={styles.input}
        />
      </View>
      {/* Terms & Policy  Link*/}
      <View style={styles.linedirection}>
        {/*CheckBox */}
        <CheckBox center checked={false}  />
        <Text style={styles.registerText}>
          I understand the{" "}
          <Text style={styles.registerLink}>terms & policy.</Text>
        </Text>
      </View>
      <View style={{ height: 10 }} /> {/* sizeBox */}
      {/* Login Button */}
      <Button title="SIGN UP" buttonStyle={styles.signinButton} />
      <View style={{ height: 10 }} /> {/* sizeBox */}
      {/* Social Login */}
      <Text style={styles.orText}>Or sign up with</Text>
      <View style={{ height: 10 }} /> {/* sizeBox */}
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
      <View style={{ height: 25 }} /> {/* sizeBox */}
      {/* SIGN UP  Link*/}
      <Text style={styles.registerText}>
        Don't have an account? <Text style={styles.registerLink}>SIGN UP</Text>
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
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  logoContainer: {
    alignItems: "flex-end",
    
  },
  logo: {
    borderWidth: 1,
    borderColor: "#00b140",
    borderRadius: 20,

    marginTop: 10,
    // marginBottom: 10,
  },
  
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    marginBottom: 10,
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
    marginBottom: 0,
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
  signinButton: {
    backgroundColor: "#00b140",
    paddingVertical: 10,
    borderRadius: 10,
    fontFamily: "tahoma",
  },
  signinText: {
    fontSize: 30,
    fontFamily: "tahoma",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
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
    gap: 50,
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
    // marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#D3D3D3", // Lighter gray color
    marginHorizontal: 10,
  },
});
