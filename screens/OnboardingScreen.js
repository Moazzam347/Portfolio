import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'
import { FontFamily,Color } from '../GlobalStyles'
import { StatusBar } from "expo-status-bar";

const OnboardingScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Onboarding
        titleStyles={styles.titleStyles}
        subTitleStyles={styles.subTitleStyles}
        bottomBarHighlight={false}
        bottomBarHeight={60}
        pages={[
          {
            backgroundColor: "#fff",
            image: <Image source={require("../assets/onboarding1.png")} />,
            title: "Add & Manage Cards",
            subtitle:
              "You can add & manage all bank accounts & credit or debit cards",
          },
          {
            backgroundColor: "#fff",
            image: <Image source={require("../assets/onboarding2.png")} />,
            title: "Transfer & Receive Money",
            subtitle:
              "Easily transfer your money and receive your earnings from others",
          },
          {
            backgroundColor: "#fff",
            image: <Image source={require("../assets/onboarding3.png")} />,
            title: "Pay Bills & Payments",
            subtitle: "Pay your all bills and make payments all over the world",
          },
          {
            backgroundColor: "#fff",
            image: <Image source={require("../assets/onboarding4.png")} />,
            title: "Manage Your Wallet",
            subtitle:
              "Manage your all earnings, expenses & every penny anyhere, anytime",
          },
        ]}
      />
    </View>
  );
}

export default OnboardingScreen

const styles = StyleSheet.create({
  titleStyles: {
    fontSize: 30,
    fontFamily: FontFamily.gilroyBold,
    color: Color.dark,
    textAlign: "center",
    fontWeight: "800"
  },
  subTitleStyles: {
    fontSize: 18,
    lineHeight: 27,
    fontFamily: FontFamily.gilroyRegular,
    color: Color.textGrey,
  },
});