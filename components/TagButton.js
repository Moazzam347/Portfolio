import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { Color, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const TagButton = (props) => {
  const navigation = useNavigation();
  const [activeButton, setActiveButton] = useState("All");
  const { title = "All" } = props;

  const handleButtonPress = (buttonTitle) => {
      setActiveButton(buttonTitle);
  };

  const isButtonActive = (buttonTitle) => activeButton === buttonTitle;

  return (
    <View style={styles.container}>
      {/* All */}
      <Pressable
        style={[
          styles.buttonContainer,
          isButtonActive("All") ? { backgroundColor: Color.primary } : null,
        ]}
        onPress={() => handleButtonPress("All")}
      >
        <Text
          style={[
            styles.buttonText,
            isButtonActive("All") ? { color: Color.white } : null,
          ]}
        >
          {title}
        </Text>
      </Pressable>

      {/* Received */}
      <Pressable
        style={[
          styles.buttonContainer,
          isButtonActive("Received")
            ? { backgroundColor: Color.primary }
            : null,
        ]}
        onPress={() => handleButtonPress("Received")}
      >
        <View style={styles.arrowContainer}>
          <MaterialIcons name="arrow-downward" size={wp("5%")} color="white" />
        </View>
        <Text
          style={[
            styles.buttonText,
            isButtonActive("Received") ? { color: Color.white } : null,
          ]}
        >
          Received
        </Text>
      </Pressable>

      {/* Spend */}
      <Pressable
        style={[
          styles.buttonContainer,
          isButtonActive("Spend") ? { backgroundColor: Color.primary } : null,
        ]}
        onPress={() => handleButtonPress("Spend")}
      >
        <View style={[styles.arrowContainer, { backgroundColor: Color.error }]}>
          <MaterialIcons name="arrow-upward" size={wp("5%")} color="white" />
        </View>
        <Text
          style={[
            styles.buttonText,
            isButtonActive("Spend") ? { color: Color.white } : null,
          ]}
        >
          Spend
        </Text>
      </Pressable>
    </View>
  );
};

export default TagButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: wp("2%"),
    backgroundColor: Color.white,
    paddingVertical: 10,
    paddingHorizontal: 17,
    borderRadius: 50,
    shadow: Color.white,
    elevation: 5,
  },
  buttonText: {
    fontSize: wp("4%"),
    color: Color.textBlack,
    fontFamily: FontFamily.gilroyRegular,
    textAlign: "center",
    fontWeight: "700",
  },
  arrowContainer: {
    width: wp("6%"),
    height: wp("6%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: Color.success,
  },
});
