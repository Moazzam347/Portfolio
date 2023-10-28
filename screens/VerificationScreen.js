import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Modal,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import TopNavigation from "../components/TopNavigation";
import { Color, FontFamily } from "../GlobalStyles";
import OTPInputView from "react-native-otp-ultimate";
import SuccessfullModel from "../components/SuccessfullModel";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const VerificationScreen = () => {
  const navigation = useNavigation();
  const [modelVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TopNavigation title={"Verification"} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollStyle}
      >
        <View>
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
              <Text style={[styles.subText, { fontSize: hp("2%") }]}>
                I didn’t receive the code
              </Text>
              <Pressable>
                <Text style={styles.resendText}>Resend code</Text>
              </Pressable>
            </View>
          </View>
        </View>

        {/* Button */}
        <View style={[styles.lowerContainer]}>
          <Pressable
            onPress={() => setModalVisible(true)}
            style={[styles.buttonContainer]}
          >
            <Text style={[styles.buttonText]}>Verify</Text>
          </Pressable>
        </View>
      </ScrollView>

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
    flex: 1,
    backgroundColor: Color.white,
  },
  scrollStyle: {
    flex: 1,
    justifyContent: "space-between",
  },

  //Upper Container
  upperContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  imageStyle: {
    width: wp("40%"),
    height: wp("40%"),
    resizeMode: "contain",
  },
  headingText: {
    fontFamily: FontFamily.gilroyBold,
    fontSize: hp("5%"),
    color: Color.dark,
    textAlign: "center",
    marginTop: 30,
  },
  subText: {
    fontSize: hp("2.6%"),
    color: Color.textGrey,
    paddingHorizontal: 25,
    fontFamily: FontFamily.gilroyRegular,
    textAlign: "center",
    marginVertical: 5,
  },

  // middle Container
  otpContainerStyle: { marginTop: wp("-10%") },
  resendContainer: {
    marginTop: 20,
  },
  resendMessageText: {},
  resendText: {
    color: Color.primary,
    fontFamily: FontFamily.gilroyBold,
    fontSize: hp("2%"),
    textAlign: "center",
  },

  // lower Container
  lowerContainer: {
    justifyContent: "center",
    alignItems: "center",
    // marginVertical: 30,
    marginBottom: 50,
  },

  //   Button
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: Color.primary,
    borderRadius: 10,
    width: wp("80%"),
  },
  buttonText: {
    letterSpacing: 1,
    fontFamily: FontFamily.gilroyBold,
    textAlign: "center",
    fontSize: hp("2.2%"),
    color: Color.white,
  },
});
