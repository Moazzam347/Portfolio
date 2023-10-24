import { StyleSheet, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Color, FontFamily } from "../GlobalStyles";

const InputFieldPassword = (props) => {
  const {
    placeholder = "Password",
    iconname = "lock-outline",
    getPassword,
  } = props;
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePassword = (text) => {
    setPassword(text);
    if (getPassword) {
      getPassword(text);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <View>
      {/* Password */}
      <View style={styles.inputfieldContainer}>
        <View style={styles.leftContainer}>
          <MaterialIcons name={iconname} size={24} color={Color.textGrey} />
          <TextInput
            style={styles.textInput}
            placeholder={placeholder}
            value={password}
            onChangeText={handlePassword}
            secureTextEntry={!isPasswordVisible}
          />
        </View>
        <Pressable onPress={togglePasswordVisibility}>
          {isPasswordVisible ? (
            <Ionicons name="eye-outline" size={24} color={Color.textGrey} />
          ) : (
            <Ionicons name="eye-off-outline" size={24} color={Color.textGrey} />
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default InputFieldPassword;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 20,
  },
  inputfieldContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: Color.background,
    gap: 15,
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: Color.primary,
    elevation: 1,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  textInput: {
    fontSize: 16,
    fontFamily: FontFamily.gilroyRegular,
    width: 200,
  },
});
