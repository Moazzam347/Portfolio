import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { Color, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const VoucherCard = (props) => {
  const navigation = useNavigation();
  const {
    logo = require("../assets/amazonRound.png"),
    discount = "20% Cashback",
    company = "Amazon",
    date = "Aug 17-23",
  } = props;
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("VoucherDetail")}
    >
      {/* Image */}
      <View>
        <Image style={styles.imageStyle} source={logo} />
      </View>

      {/* Detail */}
      <View style={styles.detailContainer}>
        {/* Discount */}
        <View>
          <Text style={styles.discountText}>{discount}</Text>
        </View>

        {/* Name and Date */}
        <View style={styles.nameAndDateContainer}>
          <Text style={styles.nameText}>{company} </Text>
          <Text style={styles.dateText}>{date} </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default VoucherCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: Color.white,
    shadow: Color.primary,
    elevation: 3,
    paddingVertical: 20,
    borderRadius: 25,
    marginHorizontal: 5,
    marginVertical: 10,
    width: wp("43%"),
  },
  imageStyle: {
    width: wp("15%"),
    height: wp("15%"),
    resizeMode: "contain",
  },
  detailContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  discountText: {
    fontSize: wp("4.5%"),
    fontFamily: FontFamily.gilroyBold,
    fontWeight: "600",
    color: Color.dark,
  },
  nameAndDateContainer: {
    // flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
    paddingTop: 10,
    flexWrap: "wrap",
  },
  nameText: {
    fontSize: wp("4.5%"),
    fontFamily: FontFamily.gilroyRegular,
    fontWeight: "600",
    color: Color.primary,
  },
  dateText: {
    fontSize: wp("3.5%"),
    fontFamily: FontFamily.gilroyRegular,
    fontWeight: "600",
    color: Color.dark,
  },
});
