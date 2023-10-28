import { StyleSheet, View, TextInput } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Color, FontFamily } from "../GlobalStyles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const InputFieldPhone = (props) => {
  const {
    placeholder = "Phone Number",
    iconName = "phone-android",
    getPhoneNumber,
    keyboardType = "default",
    textInputWidth,
    maxLength = 50
  } = props;

  const textStyle = {
    width: textInputWidth || wp("60%"),
  };
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumber = (text) => {
    setPhoneNumber(text);
    if (getPhoneNumber) {
      getPhoneNumber(text);
    }
  };
  return (
    <View>
      {/* Phone Number */}
      <View style={styles.inputfieldContainer}>
        <MaterialIcons name={iconName} size={24} color={Color.textGrey} />
        <TextInput
          style={[styles.textInput, textStyle]}
          placeholder={placeholder}
          value={phoneNumber}
          onChangeText={handlePhoneNumber}
          keyboardType={keyboardType} // phone-pad | numeric | decimal-pad | email-address | name-phone-pad | number-pad | numbers-and-punctuation
          maxLength={maxLength}
        />
      </View>
    </View>
  );
};

export default InputFieldPhone;

const styles = StyleSheet.create({
  inputfieldContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Color.background,
    gap: 15,
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: Color.primary,
    elevation: 1,
  },
  textInput: {
    fontSize: hp("2.2%"),
    fontFamily: FontFamily.gilroyRegular,
  },
});
