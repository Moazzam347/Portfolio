import { StyleSheet, Text, View, Image, Pressable, Modal } from "react-native";
import React, { useState } from "react";
import TopNavigation from "../components/TopNavigation";
import { Color, FontFamily } from "../GlobalStyles";
import OTPInputView from "react-native-otp-ultimate";
import SuccessfullModel from "../components/SuccessfullModel";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const VerificationScreen = () => {
  const navigation = useNavigation();
  const [modelVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TopNavigation title={"Verification"} />

      {/* Image and Heading */}
      <View style={styles.upperContainer}>
        {/* Image */}
        <View>
          <Image
            style={styles.imageStyle}
            source={require("../assets/verification.png")}
          />
        </View>
        {/* Heading and Sub */}
        <View>
          <Text style={styles.headingText}>Verification</Text>
          <Text style={styles.subText}>
            Enter the 4-digit code sent to your phone number
          </Text>
        </View>
      </View>

      {/* OTP and Resend Text */}
      <View style={styles.upperContainer}>
        <OTPInputView
          tintColor={Color.primary}
          offTintColor="#C4C4C4"
          inputCellLength={1}
          inputCount={4}
          containerStyle={styles.otpContainerStyle}
          textInputStyle={styles.otpTextInputStyle}
        />
        <View style={styles.resendContainer}>
          <Text style={[styles.subText, { fontSize: 16 }]}>
            I didn’t receive the code{" "}
          </Text>
          <Pressable>
            <Text style={styles.resendText}>Resend code</Text>
          </Pressable>
        </View>
      </View>

      {/* Button */}
      <View style={styles.upperContainer}>
        <Pressable
          onPress={() => setModalVisible(true)}
          style={[styles.buttonContainer]}
        >
          <Text style={[styles.buttonText]}>Verify</Text>
        </Pressable>
      </View>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modelVisible}
        onRequestClose={() => {
          setModalVisible(!modelVisible);
        }}
      >
        <SuccessfullModel
          title="Done"
          detail="You have successfully completed your registration"
          transaction=""
          buttonTitle="Login"
          buttonNavigation={() => navigation.navigate("Login")}
        />
      </Modal>
    </View>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
  },

  //Upper Container
  upperContainer: {
    justifyContent: "center",
    alignItems: "center",
    // padding: 20,
    marginVertical: 30,
  },
  imageStyle: {},
  headingText: {
    fontFamily: FontFamily.gilroyBold,
    fontSize: 30,
    color: Color.dark,
    textAlign: "center",
    marginVertical: 10,
    marginTop: 50,
  },
  subText: {
    fontSize: 20,
    color: Color.textGrey,
    paddingHorizontal: 25,
    fontFamily: FontFamily.gilroyRegular,
    textAlign: "center",
    marginVertical: 5,
  },

  // middle Container
  middleContainer: {},
  otpContainerStyle: {},
  otpTextInputStyle: {},
  resendContainer: {
    marginTop: 20,
  },
  resendMessageText: {},
  resendText: {
    color: Color.primary,
    fontFamily: FontFamily.gilroyBold,
    fontSize: 16,
    textAlign: "center",
  },

  // lower Container
  lowerContainer: {},

  //   Button
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginVertical: 10,
    backgroundColor: Color.primary,
    borderRadius: 10,
    width: 300,
  },
  buttonText: {
    letterSpacing: 0.2,
    lineHeight: 26,
    fontFamily: FontFamily.gilroyBold,
    textAlign: "center",
    fontSize: 18,
    color: Color.white,
  },
});
