import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import TopNavigation from "../components/TopNavigation";
import { Color, FontFamily } from "../GlobalStyles";
import InputFieldPhone from "../components/InputFieldPhone";
import InputFieldPassword from "../components/InputFieldPassword";
import Checkbox from "expo-checkbox";
import ButtonMain from "../components/ButtonMain";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const handleName = (text) => {
    setName(text);
    console.log(name);
  };

  const handlePhoneNumber = (text) => {
    setPhoneNumber(text);
  };

  const handlePassword = (text) => {
    setPassword(text);
  };

  const formStyles = {
    width: wp("90%"),
    height: wp("170%"),
  };
  return (
    <View style={styles.mainContainer}>
      <StatusBar style="auto" />
      <TopNavigation title={"Register"} />
      {/* Login Form */}
      <ScrollView
        contentContainerStyle={[styles.formContainer]}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.formBox, formStyles]}>
          <View>
            {/* Image or logo */}
            <View style={styles.imageContainer}>
              <Image
                style={styles.logo}
                source={require("../assets/LogoWithName.png")}
              />
            </View>

            {/* Input Fields */}
            <View style={styles.inputContainer}>
              {/* Name */}
              <InputFieldPhone
                getPhoneNumber={handleName}
                iconName={"person-outline"}
                placeholder={"Your Name"}
              />
              {/* Phone Number */}
              <InputFieldPhone getPhoneNumber={handlePhoneNumber} />
              {/* Password */}
              <InputFieldPassword getPassword={handlePassword} />

              {/* Remember and Forgot Password */}
              <View style={styles.rememberForgotContainer}>
                <View style={styles.rememberContainer}>
                  <Checkbox
                    value={toggleCheckBox}
                    onValueChange={setToggleCheckBox}
                    color={toggleCheckBox ? Color.primary : undefined}
                  />
                  <Text style={[{ flex: 1, flexWrap: "wrap" }, styles.text]}>
                    I agree to the werolla’s Terms and Conditions and Privacy
                    Policy
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Button */}
          <View style={styles.buttonContainer}>
            <ButtonMain
              title="Register"
              buttonNavigation={() => navigation.navigate("Verification")}
            />
            <View
              style={[
                styles.rememberContainer,
                // { marginTop: 30, marginBottom: 20 },
              ]}
            >
              <Text style={styles.text}>Have an account?</Text>
              <Pressable onPress={() => navigation.navigate("Login")}>
                <Text style={styles.forgotText}>Login</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.white,
  },
  formContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: 50,
    backgroundColor: Color.white,
  },
  formBox: {
    backgroundColor: Color.white,
    borderRadius: 20,
    justifyContent: "space-between",
    shadowColor: Color.primary,
    elevation: 5,
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginTop: 20,
  },
  imageContainer: {
    alignItems: "center",
  },
  logo: {
    width: wp("60%"),
    height: wp("20%"),
    resizeMode: "contain",
  },
  inputContainer: {
    marginTop: 10,
  },
  rememberForgotContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: wp("5%"),
  },
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp("5%"),
  },
  forgotText: {
    color: Color.primary,
    fontSize: hp("1.7%"),
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 20,
    justifyContent: "center",
  },
  text: {
    fontSize: hp("1.7%"),
  },
});
