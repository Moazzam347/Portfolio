import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { Color, FontFamily } from "../GlobalStyles";

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
    width: buttonWidth || width * 0.75,
    borderRadius: buttonRadius || 15,
    fontSize: buttonTextSize || 18,
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
    letterSpacing: 0.2,
    lineHeight: 26,
    fontFamily: FontFamily.gilroyBold,
    textAlign: "center",
  },
});
