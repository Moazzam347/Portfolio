import { StyleSheet, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Color, FontFamily } from "../GlobalStyles";

const SearchBarComponent = (props) => {
  const {
    placeholder = "Search a service",
    iconname = "search",
    getSearchQuery,
  } = props;
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View>
      {/* searchQuery */}
      <View style={styles.inputfieldContainer}>
        <View style={styles.leftContainer}>
          <MaterialIcons name={iconname} size={30} color={Color.textGrey} />
          <TextInput
            style={styles.textInput}
            placeholder={placeholder}
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        </View>
        <Pressable>
          <Feather name="sliders" size={24} color={Color.textGrey} />
        </Pressable>
      </View>
    </View>
  );
};

export default SearchBarComponent;

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
