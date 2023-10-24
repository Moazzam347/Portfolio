import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { FontFamily, Color } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const CardCategory = (props) => {
  const navigation = useNavigation();
  const {
    title = "title",
    cardBackgroundColor,
    cardImage = require("../assets/card.png"),
    cardNavigation = () => navigation.navigate("MyCard"),
  } = props;

  const cardContainerStyle = {
    backgroundColor: cardBackgroundColor || "#E4E7F7",
    shadow: cardBackgroundColor || "#E4E7F7",
  };
  return (
    <View>
      <Pressable
        style={[styles.cardContainer, cardContainerStyle]}
        onPress={cardNavigation}
      >
        <Image style={styles.imageStyle} source={cardImage} />
        <Text style={styles.textStyle}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default CardCategory;

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#E4E7F7",
    width: 100,
    height: 100,
    borderRadius: 8,
    // padding: 1,
    margin: 10,
    elevation: 4,
  },
  textStyle: {
    fontSize: 17,
    fontFamily: FontFamily.gilroyRegular,
    fontWeight: "600",
    color: Color.dark,
  },
  imageStyle: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
});
