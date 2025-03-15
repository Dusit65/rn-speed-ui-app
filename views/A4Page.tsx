import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Icon } from "@rneui/themed";
import { NavigationProp } from '@react-navigation/native';

const A4Page = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleOTPChange = (index: number, value: string) => {
    if (value.length > 1) return; // Allow only single digit
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const verifyOTP = () => {
    const enteredOTP = otp.join('');
    console.log('Entered OTP:', enteredOTP);
    // Add OTP verification logic here
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("A3Page")}>
        <Icon name="chevron-left" type="feather" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.subtitle}>
        Enter the verification code we just sent on your email address.
      </Text>
      
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleOTPChange(index, value)}
          />
        ))}
      </View>

      
        {/* Verify Code Button */}
      <Button title="Verify" buttonStyle={styles.verifyButton} />
        
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal:15,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
  },
  backText: {
    fontSize: 24,
    color: '#000',
  },
  title: {
    marginTop: 110,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'left',
    marginBottom: 30,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "95%",
    // margin: 'auto',
    marginBottom: 50,
    marginLeft: 10,
    
   
  },
  otpInput: {
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    padding: 35,
    marginLeft: 10,
    // marginRight: 20,
  },
  
  verifyText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  verifyButton: {
    backgroundColor: "#1E1E1E",
    paddingVertical: 12,
    borderRadius: 10,
    width: "100%",
    height: 65,
  },
});

export default A4Page;
