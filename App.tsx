import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeUI from "./views/HomeUI";
import A1Page from "./views/A1Page";
import A2Page from "./views/A2Page";
import A3Page from "./views/A3Page";
import A4Page from "./views/A4Page";
import B1Page from "./views/B1Page";
import B2Page from "./views/B2Page";




export default function App() {
  return (
    
      // <NavigationContainer>
      //   <StackNavigator />
      // </NavigationContainer>
      <>
      <B2Page />
      </>
    
  );
}

const styles = StyleSheet.create({});
