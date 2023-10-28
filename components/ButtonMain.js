import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { Color, FontFamily } from "../GlobalStyles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ButtonMain = (props) => {
  const { height, width } = useWindowDimensions();
  
  const {
    title="title",
    buttonNavigation,
    buttonColor,
    buttonWidth,
    buttonRadius,
    buttonTextSize,
    buttonTextColor,
  } = props;

  const buttonStyles = {
    backgroundColor: buttonColor || Color.primary,
    width: buttonWidth || wp("80%"),
    borderRadius: buttonRadius || 15,
    fontSize: buttonTextSize || hp("2.2%"),
    color: buttonTextColor || "#fff",
  };

  return (
    <View>
      <TouchableOpacity
        onPress={buttonNavigation}
        style={[styles.buttonContainer, buttonStyles]}
      >
        <Text style={[styles.buttonText, buttonStyles]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonMain;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginVertical: 10
  },
  buttonText: {
    letterSpacing: 1,
    fontFamily: FontFamily.gilroyBold,
    textAlign: "center",
  },
});
