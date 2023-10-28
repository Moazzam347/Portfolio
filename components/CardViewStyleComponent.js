import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Color, FontFamily } from "../GlobalStyles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const CardViewStyleComponent = (props) => {
  const containerSyle = [styles.topBoxContainer, props.style];
  return <View style={containerSyle}>{props.children}</View>;
};

export default CardViewStyleComponent;

const styles = StyleSheet.create({
  topBoxContainer: {
    padding: wp("5%"),
    backgroundColor: Color.white,
    borderRadius: 20,
    shadow: Color.primary,
    elevation: 3,
    marginTop: 20,
  },
});
