import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { Color, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const PayBillComponent = (props) => {
  const navigation = useNavigation();
  const {
    title = "Electricity Bill",
    reason = "LESCO",
    logo = require("../assets/electricitybill.png"),
    logoBackgroundColor,
    onBillPress,
  } = props;

  const payBillStyles = {
    backgroundColor: logoBackgroundColor || "#C8FAF2",
  };

  const handleBillPress = () => {
    if (onBillPress) {
      onBillPress(title, logo, logoBackgroundColor, reason);
    }
  };

  return (
    <Pressable style={styles.container} onPress={handleBillPress}>
      <View style={styles.leftContainer}>
        <View style={[styles.logoContainer, payBillStyles]}>
          <Image style={styles.logo} source={logo} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}> {title} </Text>
          {/* <Text style={styles.textTitle}> {title} </Text> */}
          <Text style={styles.textReason}>{reason}</Text>
        </View>
      </View>
      <View>
        <Ionicons name="chevron-forward" size={wp("7%")} color={Color.dark} />
      </View>
    </Pressable>
  );
};

export default PayBillComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: Color.white,
    marginVertical: 5,
    borderRadius: 10,
    shadow: Color.primary,
    elevation: 1,
  },
  leftContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  logoContainer: {
    width: wp("15%"),
    height: wp("15%"),
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  logo: {
    width: wp("8%"),
    height: wp("8%"),
    resizeMode: "contain",
  },
  textContainer: {
    gap: 5,
  },
  textTitle: {
    fontFamily: FontFamily.gilroyBold,
    fontSize: wp("5%"),
    color: Color.dark,
  },
  textReason: {
    fontFamily: FontFamily.gilroyRegular,
    fontSize: wp("4%"),
    color: Color.dark,
    paddingLeft: 5,
  },
});
