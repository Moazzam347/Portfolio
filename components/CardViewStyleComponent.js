import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Color, FontFamily } from "../GlobalStyles";

const CardViewStyleComponent = (props) => {
  const containerSyle = [styles.topBoxContainer, props.style];
  return <View style={containerSyle}>{props.children}</View>;
};

export default CardViewStyleComponent;

const styles = StyleSheet.create({
  topBoxContainer: {
    padding: 20,
    backgroundColor: Color.white,
    borderRadius: 25,
    shadow: Color.primary,
    elevation: 4,
    marginTop: 25,
  },
});
