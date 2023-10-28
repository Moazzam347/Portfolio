import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Color, FontFamily } from "../GlobalStyles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const HomeTopNavigation = (props) => {
  const navigation = useNavigation();
  const { title = "My Wallet" } = props;
  return (
    <View style={styles.mainContainer}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
        <Pressable onPress={() => {}}>
          {/* <Ionicons name="chevron-back" size={35} color={Color.dark} /> */}
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageStyle}
              source={require("../assets/avatar.png")}
            />
          </View>
        </Pressable>
        <Text style={styles.navigationText}>{title}</Text>
      </View>
      <View style={{ flexDirection: "row", gap: 5 }}>
        <Pressable>
          <MaterialIcons name="search" size={30} color="black" />
        </Pressable>
        <MaterialCommunityIcons name="dots-vertical" size={30} color="black" />
      </View>
    </View>
  );
};

export default HomeTopNavigation;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  imageContainer: {
    width: wp("10%"),
    height: wp("10%"),
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.lightOrange,
  },
  imageStyle: {
    width: wp("7%"),
    height: wp("7%"),
    resizeMode: "contain",
  },
  navigationText: {
    fontSize: hp("3%"),
    fontWeight: "bold",
    color: Color.dark,
    fontFamily: FontFamily.gilroyBold,
    marginLeft: 10,
  },
});
