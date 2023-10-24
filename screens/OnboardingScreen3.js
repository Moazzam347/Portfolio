import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Color, FontFamily } from "../GlobalStyles";
import ButtonMain from "../components/ButtonMain";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const OnboardingScreen3 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <StatusBar style="auto" />
      <View style={styles.upperContainer}>
        <View>
          <Image source={require("../assets/onboarding3.png")} />
        </View>
        <View>
          <Text style={styles.buttonTextHeading}>Pay Bills & Payments</Text>
          <Text style={styles.buttonText}>
            Pay your all bills and make payments all over the world{" "}
          </Text>
        </View>
      </View>
      <View>
        <ButtonMain
          title="Continue"
          buttonNavigation={() => navigation.navigate("Onboarding4")}
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

export default OnboardingScreen3;

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
  buttonTextHeading: {
    fontFamily: FontFamily.gilroyBold,
    fontSize: 28,
    textAlign: "center",
    color: Color.dark,
    marginBottom: 20,
  },
  buttonText: {
    fontFamily: FontFamily.gilroyRegular,
    fontSize: 18,
    textAlign: "center",
    color: Color.textGrey,
  },
});