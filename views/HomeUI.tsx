//rnfs (use in this file)
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "@rneui/themed";
import { NavigationProp } from "@react-navigation/native";



export default function HomeUI({ navigation }: { navigation: NavigationProp<any> }) {
  //Use Navigation
  //+++++++++++++++++++++++++++ UI +++++++++++++++++++++++++++++

  return (
    
    <View style={styles.container}>
      <View style={styles.show}>
        {/* Image */}
        <Image
          style={styles.Banner}
          source={require("./../assets/homeBanner.png")}
        />
        <View style={{ height: 50 }} /> {/* sizeBox */}
        {/* Go to Fruzzdigital */}
        <Button
          color="#fff"
          buttonStyle={styles.humanityBtn}
          onPress={() => navigation.navigate("A1Page")}
        >
          <Image
            source={require("./../assets/homeFruzz.png")}
          />
        </Button>
        <View style={{ height: 50 }} /> {/* sizeBox */}
        {/* Go to Humanity */}
        <Button color="#00d8b6" buttonStyle={styles.humanityBtn}
        onPress={() => navigation.navigate("B1Page")}>
          <Image source={require("./../assets/homeHuman.png")} />
        </Button>
      </View>
    </View>
  );
}
//++++++++++++++++ STYLE +++++++++++++++++
const styles = StyleSheet.create({
  container: {
    flex: 1, // ขยายให้เต็มจอ
    backgroundColor: "#390050", // เปลี่ยนสีพื้นหลังทั้งหน้า (เหลือง)
    alignItems: "center",
    // justifyContent: 'center',
  },

  show: {
    display: "flex",
    // justifyContent: "flex-start",
    // alignItems: "flex-start", //center content
    marginTop: 50,
  },
  Banner: {
    width: 250,
    height: 250,
  },

  humanityBtn: {
    height: 120,
    borderRadius: 10,
  },
});
