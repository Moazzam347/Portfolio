import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Color, FontFamily } from "../GlobalStyles";
import ButtonMain from "../components/ButtonMain";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const OnboardingScreen4 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <StatusBar style="auto" />
      <View style={styles.upperContainer}>
        <View>
          <Image
            style={styles.imageStyle}
            source={require("../assets/onboarding4.png")}
          />
        </View>
        <View>
          <Text style={styles.buttonTextHeading}>Manage Your Wallet</Text>
          <Text style={styles.buttonText}>
            Manage your all earnings, expenses & every penny anyhere, anytime{" "}
          </Text>
        </View>
      </View>
      <View style={{marginBottom: 40}}>
        {/* <ButtonMain
          title="Continue"
          buttonNavigation={() => navigation.navigate("Home")}
        /> */}
        <ButtonMain
          title="Done"
          buttonNavigation={() => navigation.navigate("Register")}
          //   buttonColor={"#fff"}
          //   buttonTextColor={Color.textGrey}
        />
      </View>
    </View>
  );
};

export default OnboardingScreen4;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  upperContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  imageStyle: {
    width: wp("50%"),
    height: hp("50%"),
    resizeMode: "contain",
  },
  buttonTextHeading: {
    fontFamily: FontFamily.gilroyBold,
    fontSize: hp("4%"),
    textAlign: "center",
    color: Color.dark,
    marginBottom: 20,
  },
  buttonText: {
    fontFamily: FontFamily.gilroyRegular,
    fontSize: hp("2.2%"),
    textAlign: "center",
    color: Color.textGrey,
  },
});
