import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import TopNavigation from "../components/TopNavigation";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily } from "../GlobalStyles";
import InputFieldPhone from "../components/InputFieldPhone";
import { SelectList } from "react-native-dropdown-select-list";
import ButtonMain from "../components/ButtonMain";
import CardViewStyleCompnent from "../components/CardViewStyleComponent";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const AddBankAccountScreen = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("");

  const data = [
    { key: "1", value: "Allied Bank Limited" },
    { key: "2", value: "Askari Commercial Bank Limited" },
    { key: "3", value: "Bank Al Habib Limited" },
    { key: "4", value: "Bank AlFalah Limited" },
    { key: "5", value: "Bank Of Punjab" },
    { key: "6", value: "Citi Bank" },
    { key: "8", value: "Dubai Islamic Bank" },
    { key: "9", value: "Faysal Bank Limited" },
    { key: "10", value: "Habib Bank Limited" },
    { key: "11", value: "JS Bank" },
    { key: "12", value: "JazzCash" },
    { key: "13", value: "MCB Bank Limited" },
    { key: "14", value: "Meezan Bank" },
    { key: "15", value: "National Bank Of Pakistan" },
    { key: "16", value: "NayaPay" },
    { key: "17", value: "SadaPay" },
    { key: "18", value: "Silk Bank" },
    { key: "19", value: "Standard Chartered Bank" },
    { key: "20", value: "United Bank Limited" },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TopNavigation title="Add Bank Account" />

      {/* lower container */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.mainContainer}
      >
        {/* Bill Payment Form */}
        <CardViewStyleCompnent>
          <View>
            {/* Bank Name */}
            <View style={styles.fieldContainer}>
              <Text style={[styles.textReason]}>Bank Name</Text>
              <SelectList
                placeholder="Select Bank"
                fontFamily={FontFamily.gilroyRegular}
                boxStyles={styles.dropBoxStyle}
                setSelected={(val) => setSelected(val)}
                data={data}
                save="value"
              />
            </View>

            {/* Routing Number */}
            <View style={styles.fieldContainer}>
              <Text style={[styles.textReason]}>Routing Number</Text>
              <InputFieldPhone
                iconName="credit-card"
                placeholder="Digits"
                keyboardType={"numeric"}
              />
            </View>
            {/*  Account Name */}
            <View style={styles.fieldContainer}>
              <Text style={[styles.textReason]}>Account Name</Text>
              <InputFieldPhone iconName="person-outline" placeholder="Name" />
            </View>
            {/* Account Number */}
            <View style={styles.fieldContainer}>
              <Text style={[styles.textReason]}>Account Number</Text>
              <InputFieldPhone
                iconName="credit-card"
                placeholder="Digits"
                keyboardType={"numeric"}
              />
            </View>
            {/* Pay Now Button */}
            <View style={{ alignItems: "center" }}>
              {/* Button */}
              <ButtonMain
                title="Add Account"
                buttonNavigation={() => navigation.navigate("AddCard")}
              />
            </View>
          </View>
        </CardViewStyleCompnent>
      </ScrollView>
    </View>
  );
};

export default AddBankAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  mainContainer: {
    paddingBottom: 50,
    paddingHorizontal: 20,
  },
  fieldContainer: {
    gap: 15,
    marginVertical: 10,
    fontSize: wp("5%"),
  },
  textReason: {
    fontSize: wp("5%"),
    fontFamily: FontFamily.gilroyRegular,
  },

  //   dropdown style
  dropBoxStyle: {
    backgroundColor: Color.background,
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 8,
    shadowColor: Color.primary,
    elevation: 1,
    paddingVertical: 20,
    marginBottom: 10,
  },
  // inputStyles: {
  //   fontSize: wp("6%"),
  //   fontFamily: FontFamily.gilroyRegular,
  // },
});
