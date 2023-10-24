import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Color, FontFamily } from "../GlobalStyles";

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
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.lightOrange,
  },
  imageStyle: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  navigationText: {
    fontSize: 24,
    fontWeight: "bold",
    color: Color.dark,
    fontFamily: FontFamily.gilroyBold,
    marginLeft: 10,
  },
});
