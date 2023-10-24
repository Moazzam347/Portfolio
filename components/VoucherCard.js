import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { Color, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

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
    elevation: 5,
    paddingVertical: 20,
    minWidth: 160,
    borderRadius: 25,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  imageStyle: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  detailContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  discountText: {
    fontSize: 18,
    fontFamily: FontFamily.gilroyBold,
    fontWeight: "600",
    color: Color.dark,
  },
  nameAndDateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
    paddingTop: 10,
  },
  nameText: {
    fontSize: 15,
    fontFamily: FontFamily.gilroyRegular,
    fontWeight: "600",
    color: Color.primary,
  },
  dateText: {
    fontSize: 14,
    fontFamily: FontFamily.gilroyRegular,
    fontWeight: "600",
    color: Color.dark,
  },
});
