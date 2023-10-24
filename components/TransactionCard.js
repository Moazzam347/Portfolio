import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { Color, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const TransactionCard = (props) => {
  const navigation = useNavigation();
  const {
    title = "Facebook",
    reason = "Salary",
    price = "+ $7000",
    time = "12: 45 PM",
    logo = require("../assets/facebook.png"),
    transactionNavigation = () => navigation.navigate("Transactions"),
    priceColor,
  } = props;
    
    const transactionColorStyle = {
      color: priceColor || Color.textGreen,
    };
  return (
    <Pressable style={styles.container} onPress={transactionNavigation}>
      <View style={styles.leftContainer}>
        <View>
          <Image source={logo} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}> {title} </Text>
          <Text style={styles.textReason}>{reason}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text style={[styles.textPrice, transactionColorStyle]}>{price}</Text>
        <Text style={styles.textTime}>{time}</Text>
      </View>
    </Pressable>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: Color.white,
    marginVertical: 5,
    // marginHorizontal: 10,
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
  textContainer: {
    gap: 5,
  },
  textTitle: {
    fontFamily: FontFamily.gilroyBold,
    fontSize: 18,
    color: Color.dark,
  },
  textReason: {
    fontFamily: FontFamily.gilroyRegular,
    fontSize: 16,
    color: Color.dark,
  },
  rightContainer: {
    justifyContent: "flex-end",
    gap: 5,
  },
  textPrice: {
    textAlign: "right",
    fontFamily: FontFamily.gilroyBold,
    fontSize: 20,
    color: Color.textGreen,
  },
  textTime: {
    textAlign: "right",
    fontFamily: FontFamily.gilroyRegular,
    fontSize: 16,
    color: Color.dark,
  },
});
