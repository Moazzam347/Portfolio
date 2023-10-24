import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Color, FontFamily } from "../GlobalStyles";

const TopNavigation = (props) => {
  const navigation = useNavigation();
  const { title, iconColor } = props;

  const iconStyle = {
    color: iconColor || Color.dark,
  };
  return (
    <View style={styles.mainContainer}>
      <Pressable onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={35} color={iconColor} />
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
  },
  navigationText: {
    fontSize: 24,
    fontWeight: "bold",
    // color: Color.dark,
    fontFamily: FontFamily.gilroyBold,
    marginLeft: 10,
  },
});
