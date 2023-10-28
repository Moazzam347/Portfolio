import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { Color, FontFamily } from "../GlobalStyles";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


const SuccessfullModel = (props) => {
  const {
    title = "Successful",
    detail = "You have successfully completed your bill pay",
    transaction = "Transaction ID: GB8564829403",
    buttonTitle = "Go Home",
    buttonNavigation = () => navigation.navigate("Home"),
  } = props;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        {/* Image */}
        <View style={{ marginVertical: 40 }}>
          <Image
            style={styles.imageStyle}
            source={require("../assets/successfullTick.png")}
          />
        </View>

        {/* Text */}
        <View style={styles.billDetailContainer}>
          <Text style={styles.textSuccess}>{title}</Text>
          <Text style={styles.textDetail}>{detail}</Text>
          <Text style={styles.textTransaction}>{transaction}</Text>
        </View>

        {/* Button */}
        <View>
          <Pressable
            onPress={buttonNavigation}
            style={[styles.buttonContainer]}
          >
            <Text style={[styles.buttonText]}>{buttonTitle} </Text>
          </Pressable>
        </View>
      </View>
      <ExpoStatusBar
        style="auto"
        backgroundColor={"hsla(227, 6%, 54%, 0.60)"}
      />
    </View>
  );
};

export default SuccessfullModel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginHorizontal: 10,
    backgroundColor: "hsla(227, 6%, 54%, 0.60)",
  },
  //   Model
  mainContainer: {
    backgroundColor: Color.white,
    borderRadius: 25,
    shadow: Color.primary,
    elevation: 4,
    padding: wp("6%"),
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: wp("5%"),
    paddingVertical: wp("5%"),
  },
  imageStyle: {
    width: wp("40%"),
    height: wp("40%"),
    resizeMode: "contain",
  },
  billDetailContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
    gap: 10,
  },
  textSuccess: {
    fontSize: hp("4%"),
    fontFamily: FontFamily.gilroyBold,
  },
  textDetail: {
    fontSize: hp("2.4%"),
    fontFamily: FontFamily.gilroyRegular,
    paddingHorizontal: 10,
    textAlign: "center",
  },
  textTransaction: {
    fontSize: hp("2.2%"),
    fontFamily: FontFamily.gilroyRegular,
    color: Color.primary,
  },

  //   Button
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginVertical: 10,
    backgroundColor: Color.primary,
    borderRadius: 10,
    width: wp("70%"),
  },
  buttonText: {
    letterSpacing: 1,
    fontFamily: FontFamily.gilroyBold,
    textAlign: "center",
    fontSize: hp("2.2%"),
    color: Color.white,
  },
});
