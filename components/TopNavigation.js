import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Color, FontFamily } from "../GlobalStyles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const TopNavigation = (props) => {
  const navigation = useNavigation();
  const { title, iconColor, backgroundColor } = props;

  const iconStyle = {
    color: iconColor || Color.dark,
    backgroundColor: backgroundColor || Color.white,
  };
  return (
    <View style={[styles.mainContainer, iconStyle]}>
      <Pressable onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={hp("4%")} color={iconColor} />
      </Pressable>
      <Text style={[styles.navigationText, iconStyle]}>{title}</Text>
    </View>
  );
};

export default TopNavigation;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: Color.white,
  },
  navigationText: {
    fontSize: hp("3%"),
    fontWeight: "bold",
    color: Color.dark,
    fontFamily: FontFamily.gilroyBold,
    marginLeft: 10,
  },
});
