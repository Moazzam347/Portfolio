import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import React from "react";
import { Color, FontFamily } from "../GlobalStyles";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const width = Dimensions.get("screen").width;
const DebitCard = (props) => {
  const navigation = useNavigation();
  const {
    cardColor = ["#7DD0FF", "#3D87FF"],
    cardLogo = require("../assets/mastercard.png"),
    cardNavigation = () => navigation.navigate("CardDetail"),
    cardholderName = "YOUR NAME",
    expiryDate = "MM/YY",
    cardNumber = "**** **** **** 3960",
    cvv = "***",
  } = props;
  return (
    <Pressable onPress={cardNavigation}>
      <LinearGradient colors={cardColor} style={styles.cardContainer}>
        {/* Card Top */}
        <View style={styles.upperContainer}>
          <View>
            <Text style={styles.upperTextName}>Shopping Card</Text>
          </View>
          <View>
            <Image style={styles.cardLogo} source={cardLogo} />
          </View>
        </View>

        {/* Card Middle */}
        <View style={styles.middleContainer}>
          <Text style={styles.cardNumber}>{cardNumber} </Text>
        </View>

        {/* Card End */}
        <View style={styles.LowerContainer}>
          <View style={styles.cardDetail}>
            <Text style={styles.lowerTextHeading}>CARD HOLDER</Text>
            <Text style={styles.lowerText}>{cardholderName} </Text>
          </View>
          <View style={styles.cardDetail}>
            <Text style={styles.lowerTextHeading}>EXPIRES</Text>
            <Text style={styles.lowerText}>{expiryDate} </Text>
          </View>
          <View style={styles.cardDetail}>
            <Text style={styles.lowerTextHeading}>CVV</Text>
            <Text style={styles.lowerText}>{cvv} </Text>
          </View>
        </View>
      </LinearGradient>

      {/* <View style={styles.cardContainer}></View> */}
    </Pressable>
  );
};

export default DebitCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Color.primary,
    borderRadius: 10,
    paddingHorizontal: 20,
    margin: 10,
    width: wp("90%"),
    height: wp("55%"),
    justifyContent: "center",
    shadow: Color.primary,
    elevation: 1,
  },
  upperContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
  },
  upperTextName: {
    fontSize: wp("5%"),
    color: Color.white,
    letterSpacing: 1,
    fontFamily: FontFamily.gilroyRegular,
  },
  cardLogo: {
    width: wp("15%"),
    height: wp("15%"),
    resizeMode: "contain",
  },
  middleContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  cardNumber: {
    fontSize: wp("5.5%"),
    fontWeight: "bold",
    color: Color.white,
    letterSpacing: 2.5,
  },
  LowerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 30,
  },
  cardDetail: {
    gap: wp("1.5%"),
    paddingBottom: 5,
  },
  lowerTextHeading: {
    fontSize: wp("4%"),
    color: Color.white,
    letterSpacing: 1,
    fontFamily: FontFamily.gilroyRegular,
  },
  lowerText: {
    fontSize: wp("4%"),
    color: Color.white,
    letterSpacing: 1,
    fontFamily: FontFamily.gilroyBold,
    textTransform: "uppercase",
  },
});
