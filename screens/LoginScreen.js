import {
  StyleSheet,
  View,
  useWindowDimensions,
  Image,
  Text,
  Pressable,
  ScrollView
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

const LoginScreen = () => {
  const navigation = useNavigation();
  const { height, width } = useWindowDimensions();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const handlePhoneNumber = (text) => {
    setPhoneNumber(text);
  };

  const handlePassword = (text) => {
    setPassword(text);
  };

  const formStyles = {
    width: wp("90%"),
    height: wp("150%"),
  };
  return (
    <View style={styles.mainContainer}>
      <StatusBar style="auto" />
      <TopNavigation title={"Log in"} />
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
                  <Text>Remember</Text>
                </View>
                <View>
                  <Pressable onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.forgotText}>Forgot password?</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>

          {/* Button */}
          <View style={styles.buttonContainer}>
            <ButtonMain
              title="Login"
              buttonNavigation={() => navigation.navigate("Home")}
            />
            <View style={[styles.rememberContainer, { marginTop: 30, paddingBottom: 10 }]}>
              <Text>Don't have an account?</Text>
              <Pressable onPress={() => navigation.navigate("Register")}>
                <Text style={styles.forgotText}>Register</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.white,
  },
  formContainer: {
    // flex: 1,
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
    marginTop: 30,
  },
  rememberForgotContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    marginTop: 10,
  },
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  forgotText: {
    color: Color.primary,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 20,
    justifyContent: "center",
  },
});
