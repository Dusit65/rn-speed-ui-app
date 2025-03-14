import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from "react-native";
import { Button } from "@rneui/themed";

export default function B1Page() {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={require("./../assets/B1PageBG.png")}
        style={styles.background}
      >
        
      </ImageBackground>
    </View>
  )
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
  });