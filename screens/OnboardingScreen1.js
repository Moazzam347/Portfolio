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

const OnboardingScreen1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <StatusBar style="auto" />
      <View style={styles.upperContainer}>
        <View>
          <Image
            style={styles.imageStyle}
            source={require("../assets/onboarding1.png")}
          />
        </View>
        <View>
          <Text style={styles.buttonTextHeading}>Add & Manage Cards</Text>
          <Text style={styles.buttonText}>
            You can add & manage all bank accounts & credit or debit cards{" "}
          </Text>
        </View>
      </View>
      <View>
        <ButtonMain
          title="Continue"
          buttonNavigation={() => navigation.navigate("Onboarding2")}
        />
        <ButtonMain
          title="Skip Now"
          buttonNavigation={() => navigation.navigate("Home")}
          buttonColor={"#fff"}
          buttonTextColor={Color.textGrey}
        />
      </View>
    </View>
  );
};

export default OnboardingScreen1;

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
