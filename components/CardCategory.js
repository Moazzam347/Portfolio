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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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
    width: wp("25%"),
    height: wp("25%"),
    borderRadius: 8,
    margin: wp("1.5%"),
    elevation: 4,
  },
  textStyle: {
    fontSize: wp("4%"),
    fontFamily: FontFamily.gilroyRegular,
    fontWeight: "600",
    color: Color.dark,
  },
  imageStyle: {
    width: wp("10%"),
    height: wp("10%"),
    resizeMode: "contain",
  },
});
